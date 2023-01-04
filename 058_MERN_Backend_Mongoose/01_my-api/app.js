const express = require('express');
const router = require('./src/routes/api');
const app = new express();

// SECURITY MIDDLEWARE IMPORT 
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const { default: mongoose } = require('mongoose');



//SECURITY MIDDLEWARE IMPLEMENT
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(mongoSanitize());
app.use(hpp());


//Request Rate Limiting
const limiter = rateLimit({
    windowMs:15*60*1000, //15 second
    max:100 //Limit each IP to 100 request per Windows
});


//MongoDB Database Connection
const URI = "mongodb://localhost:27017/schools"
const OPTIONS = {user:'',pass:''}
mongoose.connect(URI,OPTIONS,(error)=>{
    if(error)
        console.log(error);
    else
        console.log("Database Connection Successful!");
});

app.use("/api/v1",router);

//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"});
});

module.exports = app;