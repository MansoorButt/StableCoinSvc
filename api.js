const { 
    depositsCollection, 
    accountsCollection, 
    liquidationsCollection, 
    getAccounts, 
    getPriceFeedUpdates,
    saveProtocolMetrics,
    getAccountsCollection
  } = require('./database')
  
  // Set up API endpoints
  const setupApi = (app, provider, contract) => {
    const { getLiquidationsCollection } = require('./database');
    const { getDepositCollection } = require('./database');
    const { 
      getAccounts, 
      saveProtocolMetrics, 
      getAccountsCollection
    } = require('./database');

    // Get all deposit events
    app.get('/api/events', async (req, res) => {
      try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const skip = (page - 1) * limit;
    
        const depositsCollection = getDepositCollection();
        if (!depositsCollection) {
          throw new Error("Deposits collection not initialized");
        }
        
        const events = await depositsCollection
          .find({})
          .sort({ blockNumber: -1 })
          .skip(skip)
          .limit(limit)
          .toArray();
          
        const total = await depositsCollection.countDocuments();
        
        res.json({
          events,
          pagination: {
            total,
            page,
            pages: Math.ceil(total / limit)
          }
        });
      } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Failed to fetch events" });
      }
    });
    
    // Get all accounts we're tracking
    app.get('/api/accounts', async (req, res) => {
      try {
        const accounts = await getAccounts()
        res.json(accounts)
      } catch (error) {
        console.error("Error fetching accounts:", error)
        res.status(500).json({ error: "Failed to fetch accounts" })
      }
    })
    
    // Get account details by address
    app.get('/api/accounts/:address', async (req, res) => {
      try {
        const address = req.params.address
        
        // Get account health data
        const healthData = await liquidationsCollection.findOne({ address })
        
        // Get account deposits
        const deposits = await depositsCollection
          .find({ user: address })
          .sort({ blockNumber: -1 })
          .toArray()
        
        res.json({
          address,
          healthData: healthData || { healthFactorFormatted: "N/A", liquidatable: false },
          deposits
        })
      } catch (error) {
        console.error("Error fetching account details:", error)
        res.status(500).json({ error: "Failed to fetch account details" })
      }
    })
    
    // Get liquidation opportunities
    app.get('/api/liquidations', async (req, res) => {
      try {
        const liquidationsCollection = getLiquidationsCollection();
        if (!liquidationsCollection) {
          throw new Error("Liquidations collection not initialized");
        }
        const opportunities = await liquidationsCollection
          .find({ liquidatable: true })
          .sort({ healthFactorFormatted: 1 })
          .toArray();
    
        res.json(opportunities);
      } catch (error) {
        console.error("Error fetching liquidation opportunities:", error);
        res.status(500).json({ error: "Failed to fetch liquidation opportunities" });
      }
    });
    
    // Get price feed updates
    app.get('/api/prices', async (req, res) => {
      try {
        const prices = await getPriceFeedUpdates()
        res.json(prices)
      } catch (error) {
        console.error("Error fetching prices:", error)
        res.status(500).json({ error: "Failed to fetch prices" })
      }
    })
    
    // Get protocol metrics
    app.get('/api/metrics', async (req, res) => {
      try {
        const [totalDscMinted, totalCollateralValueInUsd, collateralizationRatio] = await contract.getProtocolMetrics();
        
        // Use getters to access the collections
        const accountsColl = getAccountsCollection();
        const liquidationsColl = getLiquidationsCollection();
        
        if (!accountsColl || !liquidationsColl) {
          throw new Error("Database collections are not initialized");
        }
        
        const metrics = {
          totalDscMinted: totalDscMinted.toString(),
          totalCollateralValueInUsd: totalCollateralValueInUsd.toString(),
          collateralizationRatio: collateralizationRatio.toString(),
          accounts: await accountsColl.countDocuments(),
          liquidationOpportunities: await liquidationsColl.countDocuments({ liquidatable: true }),
          timestamp: new Date()
        };
        
        // Save metrics to database
        await saveProtocolMetrics(metrics);
        
        res.json(metrics);
      } catch (error) {
        console.error("Error getting protocol metrics:", error);
        res.status(500).json({ error: "Failed to fetch protocol metrics" });
      }
    });
    
    // Add historical metrics endpoint
    app.get('/api/metrics/history', async (req, res) => {
      try {
        const period = req.query.period || 'day' // 'day', 'week', 'month'
        const { metricsCollection } = require('./database')
        
        let timeFilter = new Date()
        if (period === 'day') {
          timeFilter.setDate(timeFilter.getDate() - 1)
        } else if (period === 'week') {
          timeFilter.setDate(timeFilter.getDate() - 7)
        } else if (period === 'month') {
          timeFilter.setMonth(timeFilter.getMonth() - 1)
        }
        
        const metrics = await metricsCollection
          .find({ 
            timestamp: { $gte: timeFilter },
            type: { $ne: 'constants' } // Exclude constants records
          })
          .sort({ timestamp: 1 })
          .toArray()
        
        res.json(metrics)
      } catch (error) {
        console.error("Error fetching metrics history:", error)
        res.status(500).json({ error: "Failed to fetch metrics history" })
      }
    })
    
    // Add analytical endpoints
    app.get('/api/analytics/deposits', async (req, res) => {
      try {
        const pipeline = [
          {
            $group: {
              _id: "$user",
              totalDeposits: { $sum: 1 },
              totalAmount: { $sum: { $toDouble: "$amount" } },
              firstDeposit: { $min: "$timestamp" },
              lastDeposit: { $max: "$timestamp" }
            }
          },
          { $sort: { totalAmount: -1 } }
        ]
        
        const depositStats = await depositsCollection.aggregate(pipeline).toArray()
        res.json(depositStats)
      } catch (error) {
        console.error("Error getting deposit analytics:", error)
        res.status(500).json({ error: "Failed to fetch deposit analytics" })
      }
    })
    
    // Add historical liquidation risk endpoint
    app.get('/api/analytics/risk-history/:address', async (req, res) => {
      try {
        const address = req.params.address
        
        // Get historical health factors for this address
        const healthHistory = await liquidationsCollection
          .find({ address }, { projection: { address: 1, healthFactorFormatted: 1, timestamp: 1 } })
          .sort({ timestamp: 1 })
          .toArray()
        
        res.json(healthHistory)
      } catch (error) {
        console.error("Error getting risk history:", error)
        res.status(500).json({ error: "Failed to fetch risk history" })
      }
    })
    
    // Execute liquidation (this would be a client-side operation in production)
    app.post('/api/liquidate', async (req, res) => {
      const { userAddress, tokenAddress, debtToCover } = req.body
      
      if (!userAddress || !tokenAddress || !debtToCover) {
        return res.status(400).json({ error: "Missing required parameters" })
      }
      
      try {
        res.json({
          success: true,
          message: "Liquidation transaction prepared",
          data: {
            to: process.env.SC_ENGINE_ADDRESS,
            method: "liquidate",
            params: [tokenAddress, userAddress, debtToCover]
          }
        })
      } catch (error) {
        console.error("Error preparing liquidation:", error)
        res.status(500).json({ error: "Failed to prepare liquidation" })
      }
    })
  }
  
  module.exports = { setupApi }