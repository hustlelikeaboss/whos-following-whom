// EXTERNAL DEPENDECIES
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

// LOCAL DEPENDENCIES
const errorHandler = require('./utils/errorHandler.middleware')
const indexEndpoint = require('./endpoints/index.endpoint');
const healthEndpoint = require('./endpoints/health.endpoint');
const followersEndpoint = require('./endpoints/followers.endpoint');

// SERVER CONFIG
const server = express();

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({
    extended: false
}));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

// apply error handler middleware
server.use(errorHandler);

// routes
server.use('/', indexEndpoint);
server.use('/ping', healthEndpoint);
server.use('/api/followers', followersEndpoint);

const port = process.env.PORT || 4000;
server.listen(port);
console.log(`server started on port ${port}.`);

module.exports = server;