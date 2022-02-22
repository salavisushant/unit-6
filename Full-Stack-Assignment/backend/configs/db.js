const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://Sush88:Sush88@cluster0.6oadt.mongodb.net/fullStackAssignments")
}