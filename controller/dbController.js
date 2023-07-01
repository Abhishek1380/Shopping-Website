const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

const connectToMongoDB = async () => {
    try {
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected successfully to MongoDB');
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = dbController;
