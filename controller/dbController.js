const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017/4000";
// Live cloud link
// mongodb+srv://Abhishek91:T4gXJw0Gy2YKNkDL@atlascluster.0jb1kvd.mongodb.net/?retryWrites=true&w=majority

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
        cursor.closed
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