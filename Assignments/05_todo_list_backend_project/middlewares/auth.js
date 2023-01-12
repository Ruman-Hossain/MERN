const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports=(req,res,next)=>{
    const token = req.headers['token-key'];

    jwt.verify(token,process.env.SECRET_KEY, (error,decoded)=>{
        if(error)
            res.status(401).json({status:'Unathorized Access'});
        else{
            const userName = decoded['data']['userName'];
            req.headers.userName = userName;
            next();
        }
    });
};