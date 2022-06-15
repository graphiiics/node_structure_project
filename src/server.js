const express = require('express');
const logger = require('morgan');
const { logError, errorHandler } = require('../utils/middlewares/errorHandler');
const homeRoutes = require('./routes');


const app = express();

//External middlewares
app.use(logger('dev'));
app.use(express.json());

//Define routes
app.use(homeRoutes);


//Error handler middleware
app.use(logError);
app.use(errorHandler);


module.exports = app;