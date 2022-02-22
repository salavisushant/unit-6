const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    roles:{type: String}
}, { 
    timestamps: true,
    versionKey:false,
});

module.exports = mongoose.model('userData',userSchema)