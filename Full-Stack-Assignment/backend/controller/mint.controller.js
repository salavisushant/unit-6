const express = require('express');

const router = express.Router();

const Mint = require("../models/mint.model");


router.post('/', async (req, res) => {
    try {
        const mint = await Mint.create(req.body);
        res.status(200).send(mint)
    } catch (e) {
        return res.status(500).send({ status: "Failed", message: e.message })
    }
});

router.get('/', async (req, res) => {
    try {
        const mint = await Mint.find().lean().exec();
        return res.status(201).send(mint)
    } catch (e) {
        return res.status(500).send({ status: "Failed", message: e.message })
    }
})

module.exports = router