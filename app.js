const express = require('express');
const connectToMongoDB = require('./controller/dbController');

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
dbController()
    .then((db) => {
        // GET request - Retrieve all documents from a collection
        app.get('/users', (req, res) => {
            const collection = db.collection('users');

            collection.find().toArray((err, docs) => {
                if (err) {
                    console.error('Error retrieving users:', err);
                    res.status(500).send('Error retrieving users');
                    return;
                }

                res.send(docs);
            });
        });

        // POST request - Insert a new document into a collection
        app.post('/users', (req, res) => {
            const collection = db.collection('users');
            const user = req.body;

            collection.insertOne(user, (err, result) => {
                if (err) {
                    console.error('Error inserting user:', err);
                    res.status(500).send('Error inserting user');
                    return;
                }

                res.send('User inserted successfully');
            });
        });

        // Start the server
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
