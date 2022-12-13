const express = require('express');
const router = require('./src/routes/api');
const app = new express();

//Security Middleware Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

//Security Middleware Implement
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15*60*1000, //15 minutes
    max: 100 //Limit each IP to 100 requrest per windowMs
});
app.use(limiter);

//Route
app.use('/api/v1',router);


//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({
        "status":"fail",
        "data":"Not Found"
    })
});


module.exports=app;