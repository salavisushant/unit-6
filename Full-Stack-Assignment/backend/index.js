const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors())

const booksController = require('./controller/books.controller');
const userController = require('./controller/user.controller');

const mintController = require('./controller/mint.controller');

app.use("/books", booksController);
app.use("/user", userController);
app.use("/mint", mintController);

module.exports = app;