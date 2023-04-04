const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');
const path = require('path');

// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body parser
app.use(bodyParser.json());

// Rate Limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });

// Database

// Managing Front End Routing
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Managing BackEnd API Routing
app.use('/api/v1', router);

module.exports = app;
