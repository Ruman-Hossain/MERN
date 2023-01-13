const jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    const token = req.headers['token'];
    //console.log(typeof(token));

    jwt.verify(token,process.env.SECRET_KEY, (error,decoded)=>{
        if(error)
            res.status(401).json({status:'Unathorized Access',data:error});
        else{
            const userName = decoded['data']['userName'];
            req.headers.userName = userName;
            next();
        }
    });
};