const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());

// routes
app.use("/api/products", productRoute);


app.get('/', function (req, res) {
    res.send('Hello from Node API Server')
})


mongoose.connect("mongodb+srv://fadaimammadov:lUUiLNw9tGYsOX8m@cluster0.kgkk6nb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    
    })
})
.catch(() => {
    console.log("Failed!");
});