const jwt = require('jsonwebtoken');

// USER CREATE CONTROLLER
const Profile = require('../models/Profile');
exports.create=(req,res)=>{
    const reqBody = req.body;
    Profile.create(reqBody,(error,data)=>{
        if(error){
            res.status(400).json({status:'User Create Failed',data:error});
        }else{
            res.status(200).json({status:'User Created Successfully',data:data});
        }
    });
};
// USER LOGIN CONTROLLER
exports.login = (req,res)=>{
    let userName=req.body['userName'];
    let password=req.body['password'];

    Profile.find({userName:userName,password:password},(error,data)=>{
       if(error){
          res.status(400).json({status:"Login Failed",data:error})
       }else{
          if(data.length>0){
             const payload={
                exp: Math.floor(Date.now() / 1000) + (720 * 60 * 60),data:data[0]
             }
             const token =jwt.sign(payload,'ABC123');
             res.status(200).json({status:"success",token:token,data:data});
          }
          else{
             res.status(401).json({status:"Wrong Username or Password"});
          }
       }
    });
};

// USER PROFILE SELECT CONTROLLER
exports.select = (req,res)=>{
    const userName=req.headers['userName'];
    Profile.find({userName:userName},(error,data)=>{
       if(error){
          res.status(400).json({status:"User Profile Select Failed",data:error});
       }else{
          res.status(200).json({status:"User Profile Selected Successfully",data:data});
       }
    });
};


// USER PROFILE UPDATE CONTROLLER
exports.update = (req,res)=>{
   res.status(200).json({status:"Success",data:"Update Controller Not Implemented"});
};