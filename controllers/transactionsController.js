const express = require("express");
const transactionRoutes = express.Router();
const transactionsArr = require("../models/transaction.js");

// transactions
transactionRoutes.get("/", (req, res) => {
    res.json(transactionsArr);
});

// transactions/1
transactionRoutes.get("/:index", (req, res) => {
    const { index } = req.params;
    if(transactionsArr[index]){
        res.json(transactionsArr[index]);
    } else {
        res.status(404).json({Error: "Not Found"});
    }
});

// transactions


module.exports = transactionRoutes;