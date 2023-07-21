// Importing Packages
const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

let app = express();
const port = process.env.PORT || 9001;

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
app.get('/ProductList', async (req, res) => {
    let query = {};
    let collection = "ProductList";
    let output = await getData(collection, query);
    res.send(output);
})
app.get('/ProductList2', async (req, res) => {
    let query = {};
    let collection = "ProductList2";
    let output = await getData(collection, query);
    res.send(output);
})
app.get('/ProductList1', async (req, res) => {
    let query = {};
    let collection = "ProductList1";
    let output = await getData(collection, query);
    res.send(output);
})
app.get('/ProductList3', async (req, res) => {
    let query = {};
    let collection = "ProductList3";
    let output = await getData(collection, query);
    res.send(output);
})

app.get('/ProductList/:p_id', async (req, res) => {

    const P_Id = Number(req.params.p_id);

    const query = { p_id: P_Id };
    const collection = "ProductList";

    const output = await getData(collection, query);
    res.send(output);

})

app.get('/ProductDesc/:p_id', async (req, res) => {
    let P_id = Number(req.params.p_id);
    let query = { p_id: P_id };
    let collection = "ProductDesc";
    let output = await getData(collection, query);
    res.send(output)
})
app.get('/details/:productSpec_id', async (req, res) => {
    let P_id = Number(req.params.productSpec_id);
    let query = { productSpec_id: P_id };
    let collection = "ProductDesc";
    let output = await getData(collection, query);
    res.send(output)
})

app.get('/product_desc', async (req, res) => {
    let query = {};
    let collection = "product_desc";
    let output = await getData(collection, query);
    res.send(output);
})



app.get('/productList11', async (req, res) => {
    let query = {};
    let collection = "ProductList11";
    let output = await getData(collection, query);
    res.send(output);
})

app.get('/productList11/:p_id', async (req, res) => {
    let P_id = Number(req.params.p_id);
    let query = { p_id: P_id };
    let collection = "ProductList11";
    let output = await getData(collection, query);
    res.send(output);
})









app.get('/orders', async (req, res) => {
    let query = {};
    // if (req.query.email) {
    //     query = { email: req.query.email }
    // } else {
    //     query = {}
    // }

    let collection = "Order";
    let output = await getData(collection, query);
    res.send(output)
})






app.post('/placeOrders', async (req, res) => {
    let data = req.body;
    let collection = "Order";
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