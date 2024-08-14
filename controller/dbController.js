const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://Abhishek91:oOx1ynu70EykXZjt@atlascluster.0jb1kvd.mongodb.net/Shopping_Website?retryWrites=true&w=majority&appName=AtlasCluster";

// const url = "mongodb+srv://Abhishek91:223335555509Aa@@atlascluster.0jb1kvd.mongodb.net/Shopping_Website?retryWrites=true&w=majority"
// const url = "mongodb+srv://Abhishek707:M3NVdv6oIbFh1ZwN@atlascluster.0jb1kvd.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(url);

async function dbConnect() {
    await client.connect();
}

async function getData(colName, query) {
    let output = [];
    try {
        const cursor = db.collection(colName).find(query);
        for await (const data of cursor) {
            output.push(data);
        }
        await cursor.close(); // Corrected line to close the cursor
    } catch (err) {
        output.push({ "Error": "Error in getting data" });
    }
    return output;
}

async function postData(colName, data) {
    let output;
    try {
        db.collection(colName).insertOne(data);
        output = { "response": "Data added successfully" };
    } catch (err) {
        output = { "response": "Error in sending data" };
        return output;
    }
}

const db = client.db("Shopping_Website");


module.exports = {
    dbConnect,
    db,
    getData,
    postData
};