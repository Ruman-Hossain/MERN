const express = require('express');
const app = express();
const path = require('path');
const {readdirSync} = require('fs');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const errorHandler = require('./middlewares/errorMiddleware');


//  middleware
app.use(helmet());
app.use('/uploads', express.static(path.join(__dirname+'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());

// routes middleware
readdirSync('./routes').map(r => app.use('api/v1', require(`./routes/${r}`)));

// server port 
const port = process.env.PORT || 5050;

// error middleware
app.use(errorHandler);

// connect to db and start server
mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server Running on Port : ${port}`);
        });
    })
    .catch((error)=>{
        console.log(error)
    });