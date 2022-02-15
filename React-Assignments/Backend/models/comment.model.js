const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: { type:String},
    comments: { type: String },
    time:{type: String },
    replies: [{ type:String}],
}, {
    timestamps:true,
    versionKey: false,
})

module.exports = mongoose.model("comment",commentSchema)