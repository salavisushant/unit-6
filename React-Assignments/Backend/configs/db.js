const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb://Sush88:Sush88@cluster0-shard-00-00.jalrx.mongodb.net:27017,cluster0-shard-00-01.jalrx.mongodb.net:27017,cluster0-shard-00-02.jalrx.mongodb.net:27017/test?replicaSet=atlas-utc8ie-shard-0&ssl=true&authSource=admin")
}