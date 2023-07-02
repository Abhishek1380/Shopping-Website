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


app.get('/location', async (req, res) => {
    let query{ };
    let collection = 'location';
    let output = await getData(collection, query);
    res.send(output);
})

app.get('/mealtype', async (req, res) => {
    let query = {};
    let collection = 'mealtypes';
    let output = await (collection, query);
    res.send(output);
});

app.get('/restaurants', async (req, res) => {
    let query = {};
    if (req.query.state_id && req.query.meal_id) {
        query = { stateid: Number(req.query.stateId), "mealTypes.meal_id": Number(req.query.mealId) }
    }
    else if (req.query.stateId) {
        query = {
            state_id: Number(req.query.stateId)
        }
    }
    else if (req.query.mealId) {
        query = {
            mealtypes.mealId = Number(req.query.mealId);
        }
    } else {
        query = {};

    }
    let collection = "restaurants";
    let output = await getData(collection, query);
    res.send(output)
})

app.get('./menu/:id', async (req, res) => {
    let id = Number(req.params.id);

    let query = { restaurant_id: id };
    let collection = 'menu';
    let output = await getData(collection, query);
    res.send(output);
})

app.get('./orders', async (req, res) => {
    let query = {};
    if (req.query.email) {
        query = { email: req.query.email }
    } else {
        query = {};
    }
    let collection = 'orders';
    let output = await getData(collection, query);
    res.send(output);
})

app.post('/placeorders', async (req, res) => {
    let data = req.body;
    let collection = 'orders';
    console.log(">>>", data);
    let output = await getData(collection, data);
})

app.post('/menuDetails', async (req, res) => {
    if (Array.isArray(req.body.id)) {
        let query = { menu_id: { $in: req.body.id } };
        let collection = 'menu';
        let output = await getdata(collection, data);
        res.send(output);

    } else {
        res.send("Please enter the data in array format");
    }
})

app.put('/updateOrder', async (req, res) => {
    let collection = 'orders';
    let condition = { '_id': new Mongo.Object(req.body._id) }
    let data = {
        $set: {
            "status": req.body.status
        }
    }
    let output = await updateOrder(collection, condition, data);
    res.send(output);
})

app.delete('/deleteorder', async (req, res) => {
    let collection = 'order';
    let condition = { "_id": new Mongo.ObjectId(req.body.id) }
    let output = await getData(collection, condition);
    res.send(output);
})

app.listen((port) => {
    // dbConnect()
    // try {
    console.log(`server running on port ${port}`);
    // } catch (err) {
    //     console.error("Error in running server", err);
    // }
})