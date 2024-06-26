const mongoose = require('mongoose');
const express = require('express');
const Product = require('./models/product.model.js');
const productRouter = require('./routes/product.route.js');
const app = express();

// mongodb connection string
const uri = 'mongodb+srv://admin:u4HXoXMCcDZrSGxM@backenddb.fewccmb.mongodb.net/Node-API-test?retryWrites=true&w=majority&appName=BackendDB'

//middleware
app.use(express.json());



// routes
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send("hello from node API.");
});


// DB connection
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Sererver is running on port 3000.");
        });
    })
    .catch(() => {
        console.log("Connection to database failed!");
    }
    );
