const app = require('express')();

const express = require('./config/express');
const server = require('./config/http-server');
const apollo = require('./config/apollo-graphql');
const winstonLogger = require('./config/winston-express-logger');
const winstonErrorLogger = require('./config/winston-express-error-logger');

express(app);
winstonLogger(app);
apollo(app);
winstonErrorLogger(app);
server(app);
