const express = require('express');

const router = express.Router();

const Comment = require('../models/comment.model')

router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        return res.status(201).send(comment)
    } catch (err) {
        return res.status(500).json({ status:"Failed",message: err.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const comment = await Comment.find().lean().exec();
        return res.status(201).send(comment)
    } catch (e) {
        return res.status(500).json({ status:"Failed",message: e.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        return res.status(201).send(comment)
    } catch (e) {
        return res.status(500).json({ status:"Failed",message: e.message})
    }
})


module.exports = router;