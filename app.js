// Importing Packages
const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

let app = express();
const port = process.env.PORT || 6001;

let { getData, dbConnect, postData } = require('./controller/dbController');



// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/', (req, res) => {
    res.send("Hii I'm from express server");
    console.log('Message sent');
})

app.get('/location', async (req, res) => {
    let query = {};
    let collection = "location";
    let output = await getData(collection, query);
    res.send(output);
})
// app.get('/mealType', async (req, res) => {
//     let query = {};
//     let collection = "mealType";
//     let output = await getData(collection, query);
//     res.send(output);
// })
// app.get('/resturant', async (req, res) => {
//     let query = {};
//     if (req.query.stateid) {
//         query = { id: Number(req.query.stateid) }
//     }
//     // else if(req.query.mealId){
//     //     query = {"mealTypes.mealType_id":Number(req.query.mealId)}
//     // } 
//     else {
//         query = {};
//     }
//     let collection = "resturant";
//     let output = await getData(collection, query);
//     res.send(output);
// })

// app.post('/placeOrder', async (req, res) => {
//     let data = req.body;
//     let collection = "orders";
//     console.log(">>>", data);
//     let response = await postData(collection, data);
//     res.send(response);
// })

app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
})