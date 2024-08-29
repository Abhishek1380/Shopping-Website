const { MongoClient } = require('mongodb');
const url = "mongodb+srv://Abhishek91:oOx1ynu70EykXZjt@atlascluster.0jb1kvd.mongodb.net/Shopping_Website?retryWrites=true&w=majority&appName=AtlasCluster";

const client = new MongoClient(url);
const dbName = "Shopping_Website";
let db;

async function dbConnect() {
    try {
        await client.connect();
        db = client.db(dbName);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

async function getData(colName, query) {
    let output = [];
    try {
        const collection = db.collection(colName);
        const cursor = collection.find(query);
        for await (const data of cursor) {
            output.push(data);
        }
    } catch (err) {
        output.push({ "Error": "Error in getting data" });
    }
    return output;
}

async function postData(colName, data) {
    let output;
    try {
        const collection = db.collection(colName);
        await collection.insertOne(data);
        output = { "response": "Data added successfully" };
    } catch (err) {
        output = { "response": "Error in sending data" };
    }
    return output;
}

module.exports = {
    dbConnect,
    getData,
    postData
};
