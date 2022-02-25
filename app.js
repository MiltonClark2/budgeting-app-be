const express = require("express");
const app = express();
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Budget App!");
});

app.use("/transactions", transactionsController);


module.exports = app;