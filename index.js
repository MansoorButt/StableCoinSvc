require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { connectToDatabase } = require('./database')
const { setupProvider, setupContract, trackDepositEvents, trackPriceFeeds, checkHealthFactors, getContractConstants, setupEventListeners } = require('./blockchain')
const { setupApi } = require('./api')

// Initialize Express app
const app = express()
app.use(cors())
app.use(express.json())

// Main execution function
const main = async () => {
  // Connect to MongoDB first
  const dbConnected = await connectToDatabase()
  if (!dbConnected) {
    console.error("Failed to connect to database, exiting...")
    process.exit(1)
  }
  
  // Setup blockchain connection
  const provider = setupProvider()
  const contract = setupContract(provider)
  
  // Get contract constants
  await getContractConstants(contract)
  
  // Initial data fetch
  await trackDepositEvents(provider, contract)
  await trackPriceFeeds(contract)
  await checkHealthFactors(contract)
  
  // Setup API endpoints
  setupApi(app, provider, contract)
  
  // Setup real-time event listeners
  setupEventListeners(contract)
  
  // Set up periodic health factor checks (every 5 minutes)
  setInterval(async () => {
    console.log("Running scheduled health factor check...")
    await trackDepositEvents(provider, contract)
    await checkHealthFactors(contract)
  }, 5 * 60 * 1000)
  
  // Set up periodic price feed checks (every 2 minutes)
  setInterval(async () => {
    console.log("Updating price feeds...")
    await trackPriceFeeds(contract)
    // After price update, check health factors
    await checkHealthFactors(contract)
  }, 2 * 60 * 1000)
  
  // Set up database cleanup job (once per day)
  setInterval(async () => {
    console.log("Running database maintenance...")
    const { metricsCollection, liquidationsCollection, depositsCollection } = require('./database')
    
    // Keep only last 30 days of metrics
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    
    await metricsCollection.deleteMany({
      timestamp: { $lt: thirtyDaysAgo },
      type: { $ne: 'constants' } // Don't delete constant values
    })
    
    // Keep only liquidation records for accounts with recent activity
    const accountsWithRecentActivity = await depositsCollection
      .distinct('user', { timestamp: { $gte: thirtyDaysAgo } })
    
    // Delete liquidation records for accounts with no recent activity
    // that are not currently liquidatable
    if (accountsWithRecentActivity.length > 0) {
      await liquidationsCollection.deleteMany({
        address: { $nin: accountsWithRecentActivity },
        liquidatable: false
      })
    }
    
    console.log("Database maintenance completed")
  }, 24 * 60 * 60 * 1000)
  
  // Start server
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Liquidation monitoring server running on port ${PORT}`)
  })
}

// Execute main function
main()
  .then(() => console.log("Liquidation monitoring service started"))
  .catch((error) => {
    console.error("Fatal error:", error)
    process.exit(1)
  })