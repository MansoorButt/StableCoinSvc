const ethers = require("ethers")
const abi = require("./abi.json")
const { 
  saveDepositEvent, 
  saveAccount, 
  saveLiquidationOpportunities, 
  savePriceFeedUpdates, 
  getAccounts, 
  saveProtocolMetrics,
  connectToDatabase,
  accountsCollection,
  depositsCollection,
  liquidationsCollection,
  pricesCollection,
  metricsCollection
} = require('./database')

// Initialize blockchain connection
const setupProvider = () => {
  return new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
}

// Create contract instance
const setupContract = (provider) => {
  const SC_ENGINE_ADDRESS = process.env.SC_ENGINE_ADDRESS || '0x28083fa0d374a254d107da7db026cd8c3bd97b28'
  return new ethers.Contract(SC_ENGINE_ADDRESS, abi, provider)
}

// Get event signature helper
const getEventSignature = (eventName, abi) => {
  const eventAbi = abi.find((entry) => entry.name === eventName);
  const type = eventAbi.inputs.map((input) => input.type);
  return `${eventName}(${type.join(",")})`;
}

// Track all deposit events
const trackDepositEvents = async (provider, contract) => {
  const eventSignature = getEventSignature('CollateralDeposited', abi);
  
  // Use the helper function to get the collection
  const depositsCollection = require('./database').getDepositCollection();
  
  // Get the latest block we've processed
  const latestProcessedEvent = await depositsCollection.findOne({}, { sort: { blockNumber: -1 } })
  const fromBlock = latestProcessedEvent ? latestProcessedEvent.blockNumber + 1 : 7754587
  
  const filter = {
    address: contract.address,
    topics: [ethers.utils.id(eventSignature)],
    fromBlock: fromBlock,
    toBlock: 'latest'
  }

  const logs = await provider.getLogs(filter);
  const contractInterface = new ethers.utils.Interface(abi);
  
  for (const log of logs) {
    const decodedLog = contractInterface.decodeEventLog('CollateralDeposited', log.data, log.topics);
    
    const event = {
      blockNumber: log.blockNumber,
      transactionHash: log.transactionHash,
      user: decodedLog.user,
      amount: decodedLog.amount.toString(),
      token: decodedLog.token,
      timestamp: new Date().toISOString() // In production, get actual block timestamp
    }
    
    // Save to database
    await saveDepositEvent(event)
    
    // Add unique accounts to our tracking list
    await saveAccount(decodedLog.user)
  }
  
  console.log(`Tracked and saved ${logs.length} new deposit events`)
}

// Get contract constants
const getContractConstants = async (contract) => {
  try {
    // Get liquidation threshold and min health factor for calculations
    const liquidationThreshold = (await contract.getLiquidationThreshold()).toString()
    const minHealthFactor = (await contract.getMinHealthFactor()).toString()
    
    // Use the helper function to get the collection
    const metricsCollection = require('./database').getMetricsCollection();
    
    // Save these to metrics collection for reference
    await metricsCollection.updateOne(
      { type: 'constants' },
      { 
        $set: { 
          liquidationThreshold,
          minHealthFactor,
          lastUpdated: new Date()
        }
      },
      { upsert: true }
    )
    
    console.log(`Contract constants: Liquidation Threshold: ${liquidationThreshold}, Min Health Factor: ${ethers.utils.formatEther(minHealthFactor)}`)
  } catch (error) {
    console.error("Error getting contract constants:", error)
  }
}

// Get token price in USD
const getTokenPrice = async (contract, tokenAddress) => {
  try {
    // We'll get the price of 1 token unit in USD
    const oneTokenUnit = ethers.utils.parseEther("1")
    const valueInUsd = await contract.getUsdValue(tokenAddress, oneTokenUnit)
    
    return {
      token: tokenAddress,
      priceInUsd: valueInUsd.toString(),
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error(`Error getting token price for ${tokenAddress}:`, error)
    return null
  }
}

// Track price feed updates for all collateral tokens
const trackPriceFeeds = async (contract) => {
  try {
    const collateralTokens = await contract.getCollateralTokens()
    const priceFeedUpdates = []
    
    for (const token of collateralTokens) {
      const priceData = await getTokenPrice(contract, token)
      if (priceData) {
        priceFeedUpdates.push(priceData)
      }
    }
    
    // Save to database
    await savePriceFeedUpdates(priceFeedUpdates)
    
    console.log(`Tracked prices for ${priceFeedUpdates.length} tokens`)
    
    return priceFeedUpdates
  } catch (error) {
    console.error("Error tracking price feeds:", error)
    return []
  }
}

// Calculate liquidation profit potential
const calculateLiquidationProfit = async (contract, account, collateralToken) => {
  try {
    // Get user's current debt and collateral USD value
    const [dscMinted, collateralValueInUsd] = await contract._getAccountInformation(account);
    
    // If no debt minted, nothing to liquidate
    if (dscMinted.isZero()) {
      return { profitEstimate: "0", profitableToLiquidate: false };
    }
    
    // Get user's collateral balance for this token
    const collateralBalance = await contract.getCollateralBalanceofUser(account, collateralToken);
    if (collateralBalance.isZero()) {
      return { profitEstimate: "0", profitableToLiquidate: false };
    }
    
    // Get liquidation bonus percentage (e.g., 10 means 10%)
    const bonus = await contract.getLiquidationBonus();
    
    // Get the minimum health factor (e.g., 1.2)
    const minHealthFactor = await contract.getMinHealthFactor();
    
    // Calculate target debt needed to achieve minHealthFactor:
    // newDebt = collateralValueInUsd / minHealthFactor
    const newDebt = collateralValueInUsd.div(minHealthFactor); // careful: use proper BigNumber arithmetic
    
    // Calculate debt to cover:
    let calculatedDebtToCover = dscMinted.sub(newDebt);
    
    // Optionally, cap the liquidation to a fraction (e.g., 50%) of the debt:
    const maxLiquidatable = dscMinted.div(2); // 50%
    if (calculatedDebtToCover.gt(maxLiquidatable)) {
      calculatedDebtToCover = maxLiquidatable;
    }
    
    // If calculated debt to cover is not positive, liquidation is not profitable
    if (calculatedDebtToCover.lte(0)) {
      return { profitEstimate: "0", profitableToLiquidate: false };
    }
    
    // Calculate collateral corresponding to the debt covered (before bonus)
    const tokenAmountFromDebtCovered = await contract.getTokenAmountFromUsd(collateralToken, calculatedDebtToCover);
    
    // Calculate bonus collateral amount
    const bonusAmount = tokenAmountFromDebtCovered.mul(bonus).div(100);
    const totalCollateralToReceive = tokenAmountFromDebtCovered.add(bonusAmount);
    
    // Calculate profit in USD (this is based on the bonus collateral)
    const profitInUsd = await contract.getUsdValue(collateralToken, bonusAmount);
    
    return {
      debtToCover: calculatedDebtToCover.toString(),
      collateralToReceive: totalCollateralToReceive.toString(),
      profitEstimate: profitInUsd.toString(),
      profitableToLiquidate: profitInUsd.gt(0)
    };
  } catch (error) {
    console.error(`Error calculating liquidation profit for ${account}:`, error);
    return { profitEstimate: "0", profitableToLiquidate: false };
  }
};


// Check health factors for all users we're tracking
const checkHealthFactors = async (contract) => {
  const liquidationOpportunities = []
  const collateralTokens = await contract.getCollateralTokens()
  const HEALTH_FACTOR_THRESHOLD = await contract.getMinHealthFactor()
  
  // Get the liquidations collection
  const liquidationsCollection = require('./database').getLiquidationsCollection();
  // Get all accounts from database
  const accounts = await getAccounts()
  
  for (const account of accounts) {
    try {
      // Get user's health factor from the contract
      const healthFactor = await contract.getHealthFactor(account)
      
      // Get collateral value and DSC minted
      const [dscMinted, collateralValueInUsd] = await contract._getAccountInformation(account)
      
      const healthFactorFormatted = ethers.utils.formatEther(healthFactor)
      const minHealthFactorFormatted = ethers.utils.formatEther(HEALTH_FACTOR_THRESHOLD)
      
      // Base account data
      const accountData = {
        address: account,
        healthFactor: healthFactor.toString(),
        healthFactorFormatted: healthFactorFormatted,
        collateralValueInUsd: collateralValueInUsd.toString(),
        dscMinted: dscMinted.toString(),
        liquidatable: healthFactor.lt(HEALTH_FACTOR_THRESHOLD) && dscMinted.gt(0),
        lastUpdated: new Date().toISOString(),
        liquidationDetails: []
      }
      
      // If user can be liquidated, calculate profit potential for each token
      if (accountData.liquidatable) {
        for (const token of collateralTokens) {
          const profitDetails = await calculateLiquidationProfit(contract, account, token)
          
          if (profitDetails.profitableToLiquidate) {
            accountData.liquidationDetails.push({
              token: token,
              ...profitDetails
            })
          }
        }
        
        liquidationOpportunities.push(accountData)
      }
      
      // Save this health check to database regardless of liquidation status
      await liquidationsCollection.updateOne(
        { address: account },
        { $set: accountData },
        { upsert: true }
      )
      
      console.log(`Account ${account.substring(0, 8)}... Health Factor: ${healthFactorFormatted} (Min: ${minHealthFactorFormatted})`)
    } catch (error) {
      console.error(`Error checking health factor for ${account}:`, error)
    }
  }
  
  // Save all liquidatable opportunities for easy querying
  await saveLiquidationOpportunities(liquidationOpportunities)
  console.log(`Found ${liquidationOpportunities.length} liquidation opportunities`)
  
  return liquidationOpportunities
}

// Listen for real-time events
const setupEventListeners = (contract) => {
  // Listen for new CollateralDeposited events
  contract.on('CollateralDeposited', async (user, token, amount, event) => {
    console.log(`New deposit from ${user}`)
    
    // Add to tracked accounts if new
    await saveAccount(user)
    
    // Add to deposit events
    const depositEvent = {
      blockNumber: event.blockNumber,
      transactionHash: event.transactionHash,
      user: user,
      amount: amount.toString(),
      token: token,
      timestamp: new Date().toISOString()
    }
    
    await saveDepositEvent(depositEvent)
    
    // Check health factor right away
    await checkHealthFactors(contract)
  })
}

module.exports = {
  setupProvider,
  setupContract,
  trackDepositEvents,
  getContractConstants,
  trackPriceFeeds,
  calculateLiquidationProfit,
  checkHealthFactors,
  setupEventListeners
}