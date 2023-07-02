const express = require('express');
const mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 9120;

let { dbConnect } = require('./controller/dbController');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hii, I'm from express server");
});
app.listen((port) => {
    dbConnect()
    // try {
    console.log(`server running on port ${port}`);
    // } catch (err) {
    //     console.error("Error in running server", err);
    // }
})