const express = require("express");
const transactionRoutes = express.Router();
const transactionsArr = require("../models/transaction.js");

// transactions
transactionRoutes.get("/", (req, res) => {
    res.json(transactionsArr);
});

module.exports = transactionRoutes;