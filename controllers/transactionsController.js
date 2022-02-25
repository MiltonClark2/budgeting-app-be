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
transactionRoutes.post("/", (req, res) => {
    transactionsArr.push(req.body);
    res.json(transactionsArr[transactionsArr.length-1]);
});

// transactions/1
transactionRoutes.delete("/:index", (req, res) => {
    const { index } = req.params;
    if(transactionsArr[index]){
        let removed = transactionsArr.splice(index, 1);
        res.json(removed[0]);
    } else {
        res.status(404).json({Error: "Not Found"});
    }
});

// /transactions/1
transactionRoutes.put("/:index", (req, res) => {
    let{ index } = req.params;

    if(!transactionsArr[index]){
        res.status(404).json({Error: "Not Found"
    })
        return;
    };

    let { item_name, amount, date, from, category } = req.body;
    if(item_name && amount && date !==undefined && from && category){
        transactionsArr[index] = {
            item_name, amount, date, from, category
        };
        res.json(transactionsArr[index]);
    } else {
        res.status(422).json({
            Error: "Please provide all fields"
        });
    };

});



module.exports = transactionRoutes;