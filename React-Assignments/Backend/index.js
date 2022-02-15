const express = require("express");

const app = express();

app.use(express.json());

const commentController = require("./controllers/commnet.controller");

app.use("/comment", commentController);



module.exports = app;