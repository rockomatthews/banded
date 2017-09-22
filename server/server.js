const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();
const port = '8000';

// we bring in our mongoose connection
require('./config/mongoose');

// enable cors
app.use(cors());

// Log requests to the console.
app.use(logger('dev'));

// Categorize CRUD request corectly
app.use(methodOverride('_method'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// We are going define our routes
require('./config/routes')(app);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

