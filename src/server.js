const express = require('express');
const path = require('path');
const swaggerDocs = require('./routes/swaggerConfig');
const createError = require('http-errors');
const logger = require('morgan');
const { logError, errorHandler } = require('../utils/middlewares/errorHandler');
const homeRoutes = require('./routes');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/api/v1/users');


const app = express();

//External middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Define routes
app.use(homeRoutes);
app.use('/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/', swaggerDocs);

//catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

//Error handler middleware
app.use(logError);
app.use(errorHandler);


module.exports = app;