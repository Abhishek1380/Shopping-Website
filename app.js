// Importing Packages
const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

let app = express();
const port = process.env.PORT || 6005;

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
// app.get('/details', async (req, res) => {
//     let query = {};
//     let collection = "details";
//     let output = await getData(collection, query);
//     res.send(output);
// })
app.get('/products_list_1', async (req, res) => {
    let query = {};
    let collection = "products_list_1";
    let output = await getData(collection, query);
    res.send(output);
})

app.get('/products_list_1/:category_id', async (req, res) => {

    const categoryId = Number(req.params.category_id); // Parse the category_id as a number

    const query = { category_id: categoryId }; // Build the MongoDB query
    const collection = "products_list";

    const output = await getData(collection, query); // Fetch data based on the query
    res.send(output);

})

app.get('/product_desc/:productSpec_id', async (req, res) => {
    let P_id = Number(req.params.productSpec_id);
    let query = { productSpec_id: P_id };
    let collection = "product_desc_new";
    let output = await getData(collection, query);
    res.send(output)
})
app.get('/product_desc', async (req, res) => {
    let query = {};
    let collection = "product_desc";
    let output = await getData(collection, query);
    res.send(output);
})
app.post('/placeOrder', async (req, res) => {
    let data = req.body;
    let collection = "Final_order";
    console.log(">>>", data)
    let response = await postData(collection, data)
    res.send(response)
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