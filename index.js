require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { connectToDatabase } = require('./database')
const { 
  setupProvider, 
  setupContract, 
  trackDepositEvents, 
  trackPriceFeeds, 
  checkHealthFactors, 
  getContractConstants, 
  setupEventListeners 
} = require('./blockchain')
const { setupApi } = require('./api')

const app = express()
app.use(cors())
app.use(express.json())

const main = async () => {
  const dbConnected = await connectToDatabase()
  if (!dbConnected) {
    console.error("Failed to connect to database, exiting...")
    process.exit(1)
  }

  const provider = setupProvider()
  const contract = setupContract(provider)

  await getContractConstants(contract)

  // Initial fetch — starts from last saved block in DB
  await trackDepositEvents(provider, contract)
  await trackPriceFeeds(contract)
  await checkHealthFactors(contract)

  setupApi(app, provider, contract)
  setupEventListeners(contract)

  // 🔄 Every 5 mins: fetch new deposits since last run, then health check
  setInterval(async () => {
    console.log("Running scheduled deposit + health factor check...")
    await trackDepositEvents(provider, contract) // picks up where it left off
    await checkHealthFactors(contract)
  }, 5 * 60 * 1000)

  // 🔄 Every 2 mins: update prices, then health check
  setInterval(async () => {
    console.log("Updating price feeds...")
    await trackPriceFeeds(contract)
    await checkHealthFactors(contract)
  }, 2 * 60 * 1000)

  // 🧹 Once per day: DB cleanup
  setInterval(async () => {
    console.log("Running database maintenance...")
    const { metricsCollection, liquidationsCollection, depositsCollection } = require('./database')

    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    await metricsCollection.deleteMany({
      timestamp: { $lt: thirtyDaysAgo },
      type: { $ne: 'constants' }
    })

    const accountsWithRecentActivity = await depositsCollection
      .distinct('user', { timestamp: { $gte: thirtyDaysAgo } })

    if (accountsWithRecentActivity.length > 0) {
      await liquidationsCollection.deleteMany({
        address: { $nin: accountsWithRecentActivity },
        liquidatable: false
      })
    }

    console.log("Database maintenance completed")
  }, 24 * 60 * 60 * 1000)

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Liquidation monitoring server running on port ${PORT}`)
  })
}

main()
  .then(() => console.log("Liquidation monitoring service started"))
  .catch((error) => {
    console.error("Fatal error:", error)
    process.exit(1)
  })
