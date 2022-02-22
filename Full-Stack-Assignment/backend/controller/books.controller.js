const express = require('express');

const router = express.Router();

const Books = require('../models/books.model');

router.get('/', async (req, res) => {
    try {
        const page = +req.query.page;
        const size = +req.query.size;
        const skip = (page - 1) * size;
        const books = await Books.find().skip(skip).limit(size).lean().exec();
        const totalPages = Math.ceil((await Books.find().countDocuments()) / size);
        return res.status(201).send({books});
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
});


// router.get('/:query', async (req, res) => {
//     try {
//         const booksOne = await Books.find({"categories":["Java"]});
//         return res.status.send({ booksOne })
    
//     } catch (e) {
//         return res.status(500).json({ status: 'Failed', message: e.message });
//     }
// });



router.get('/:id', async (req, res) => {
    try {
        const bookById = await Books.findById(req.params.id).lean().exec();
        return res.status(200).send(bookById)
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
})


module.exports = router