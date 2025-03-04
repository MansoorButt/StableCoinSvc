const mongoose = require('mongoose');

// Store database collections as module-level variables
let db;
let collections = {
  accountsCollection: null,
  depositsCollection: null,
  liquidationsCollection: null,
  pricesCollection: null,
  metricsCollection: null
};

// Flag to track if connection is complete
let isConnected = false;

const uri = process.env.MONGO_URI;

// Connect to MongoDB
async function connectToDatabase() {
  try {
    if (isConnected) {
      return true; // Already connected
    }
    
    const conn = await mongoose.connect(uri, { dbName: 'defimoniter' });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
    db = conn.connection.db;
    
    // Initialize collections
    collections.accountsCollection = db.collection('accounts');
    collections.depositsCollection = db.collection('deposits');
    collections.liquidationsCollection = db.collection('liquidations');
    collections.pricesCollection = db.collection('prices');
    collections.metricsCollection = db.collection('metrics');
    
    // Create indexes for performance
    await collections.accountsCollection.createIndex({ address: 1 }, { unique: true });
    await collections.depositsCollection.createIndex({ transactionHash: 1 }, { unique: true });
    await collections.depositsCollection.createIndex({ user: 1 });
    await collections.liquidationsCollection.createIndex({ address: 1 });
    await collections.liquidationsCollection.createIndex({ liquidatable: 1 });
    await collections.pricesCollection.createIndex({ token: 1 });
    
    isConnected = true;
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}

// Function to ensure collection is available
function getCollection(name) {
  if (!isConnected) {
    throw new Error('Database not connected. Call connectToDatabase() first');
  }
  return collections[name];
}

// Database operations
async function saveDepositEvent(depositEvent) {
  try {
    const depositsCollection = getCollection('depositsCollection');
    const result = await depositsCollection.updateOne(
      { transactionHash: depositEvent.transactionHash },
      { $set: depositEvent },
      { upsert: true }
    );
    
    if (result.upsertedCount > 0) {
      console.log(`New deposit event recorded: ${depositEvent.transactionHash}`);
    } else {
      console.log(`Deposit event already processed: ${depositEvent.transactionHash}`);
    }
    
    return true;
  } catch (error) {
    console.error('Error saving deposit event:', error);
    return false;
  }
}

async function saveAccount(address) {
  try {
    const accountsCollection = getCollection('accountsCollection');
    await accountsCollection.updateOne(
      { address },
      { $set: { address, lastUpdated: new Date() } },
      { upsert: true }
    );
    return true;
  } catch (error) {
    console.error('Error saving account:', error);
    return false;
  }
}

async function saveLiquidationOpportunities(opportunities) {
  try {
    if (opportunities.length === 0) return true;
    
    const liquidationsCollection = getCollection('liquidationsCollection');
    // Use bulk operations for efficiency
    const bulkOps = opportunities.map(opportunity => ({
      updateOne: {
        filter: { address: opportunity.address },
        update: { $set: {...opportunity, lastUpdated: new Date() } },
        upsert: true
      }
    }));
    
    await liquidationsCollection.bulkWrite(bulkOps);
    return true;
  } catch (error) {
    console.error('Error saving liquidation opportunities:', error);
    return false;
  }
}

async function savePriceFeedUpdates(priceFeeds) {
  try {
    if (priceFeeds.length === 0) return true;
    
    const pricesCollection = getCollection('pricesCollection');
    const bulkOps = priceFeeds.map(feed => ({
      updateOne: {
        filter: { token: feed.token },
        update: { $set: {...feed, lastUpdated: new Date() } },
        upsert: true
      }
    }));
    
    await pricesCollection.bulkWrite(bulkOps);
    return true;
  } catch (error) {
    console.error('Error saving price feeds:', error);
    return false;
  }
}

async function saveProtocolMetrics(metrics) {
  try {
    const metricsCollection = getCollection('metricsCollection');
    await metricsCollection.insertOne({
      ...metrics,
      timestamp: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error saving protocol metrics:', error);
    return false;
  }
}

async function getAccounts() {
  try {
    const accountsCollection = getCollection('accountsCollection');
    const accounts = await accountsCollection.find({}).toArray();
    return accounts.map(doc => doc.address);
  } catch (error) {
    console.error('Error fetching accounts:', error);
    return [];
  }
}

async function getDepositEvents() {
  try {
    const depositsCollection = getCollection('depositsCollection');
    return await depositsCollection.find({}).sort({ blockNumber: -1 }).toArray();
  } catch (error) {
    console.error('Error fetching deposit events:', error);
    return [];
  }
}

async function getLiquidationOpportunities() {
  try {
    const liquidationsCollection = getCollection('liquidationsCollection');
    return await liquidationsCollection.find({ liquidatable: true }).toArray();
  } catch (error) {
    console.error('Error fetching liquidation opportunities:', error);
    return [];
  }
}

async function getPriceFeedUpdates() {
  try {
    const pricesCollection = getCollection('pricesCollection');
    return await pricesCollection.find({}).toArray();
  } catch (error) {
    console.error('Error fetching price feeds:', error);
    return [];
  }
}

async function getLatestProtocolMetrics() {
  try {
    const metricsCollection = getCollection('metricsCollection');
    return await metricsCollection.findOne({}, { sort: { timestamp: -1 } });
  } catch (error) {
    console.error('Error fetching protocol metrics:', error);
    return [];
  }
}

// Helper function to directly access collections for blockchain.js
function getDepositCollection() {
  return getCollection('depositsCollection');
}

function getMetricsCollection() {
  return getCollection('metricsCollection');
}

function getLiquidationsCollection() {
  return getCollection('liquidationsCollection');
}

function getAccountsCollection() {
  return getCollection('accountsCollection'); // or simply return accountsCollection if already defined
};

module.exports = {
  connectToDatabase,
  saveDepositEvent,
  saveAccount,
  saveLiquidationOpportunities,
  savePriceFeedUpdates,
  saveProtocolMetrics,
  getAccounts,
  getDepositEvents,
  getLiquidationOpportunities,
  getPriceFeedUpdates,
  getLatestProtocolMetrics,
  // Function to access collections directly
  getDepositCollection,
  getMetricsCollection,
  getLiquidationsCollection,
  getAccountsCollection
};
