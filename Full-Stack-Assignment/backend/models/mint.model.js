const mongoose = require('mongoose');

const mintSchema = new mongoose.Schema({
    image: { type: String },
    name: { type: String },
    star: { type: Number },
    mainImage: { type: String },
    bid: { type: String },
    time: { type: String },
}, {
    timeseries: true,
    versionKey: false,
});

module.exports = mongoose.model('mintData',mintSchema);