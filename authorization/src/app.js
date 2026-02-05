const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/auth', require('./routes/auth.routes'));
app.use('/todos', require('./routes/todo.routes'));

module.exports = app;
