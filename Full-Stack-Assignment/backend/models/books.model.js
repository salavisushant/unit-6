const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    title: { type: String },
    isbn: { type: String },
    pageCount: { type: Number },
    publishedDate:{ type: Number },
    thumbnailUrl: { type: String },
    shortDescription: { type: String },
    longDescription: { type: String },
    authors: [{ type: String }],
    categories:{type: String}

}, { 
    timestamps: true,
    versionKey:false,
});

module.exports = mongoose.model('bookData',booksSchema)