const express = require('express');
const logger = require('morgan');
const homeRoutes = require('./routes');


const app = express();

//External middlewares
app.use(logger('dev'));
app.use(express.json());

//Define routes
app.use(homeRoutes);


module.exports = app;