const jwt = require('jsonwebtoken');
const Todolist = require('../models/Todolist');

exports.create = (req,res)=>{
    const userName=req.headers['userName'];
    const reqBody=req.body;
    const subject=reqBody['subject'];
    const description=reqBody['description'];
    const status="New";
    const createDate=Date.now();
    const updateDate=Date.now();

    const postBody={
        userName:userName,
        subject:subject,
        description:description,
        status:status,
        createDate:createDate,
        updateDate:updateDate
    }
    Todolist.create(postBody,(error,data)=>{
       if(error){
          res.status(400).json({status:"Todo Create Failed",data:error});
       }
       else{
          res.status(400).json({status:`New Todo Created for the User ${userName}`,data:data});
       }
    });
};

exports.select = (req,res)=>{
    let userName=req.headers['userName'];
 
    Todolist.find({userName:userName},(error,data)=>{
       if(error){
          res.status(400).json({status:"User Todo Selection Failed",data:error});
       }else{
          res.status(200).json({status:`${userName}'s Todo List Selected Successfully`,data:data});
       }
    });
};

exports.update = (req,res)=>{
    const reqBody=req.body;
    const subject=reqBody['subject'];
    const description=reqBody['description'];
    const _id=reqBody['_id']
    const updateDate=Date.now();

    const postBody={  
        subject:subject,
        description:description, 
        updateDate:updateDate
    }
    const userName = req.headers.userName;
    Todolist.updateOne({_id:_id},{$set:postBody},{upsert:true},(error,data)=>{
       if(error){
          res.status(400).json({status:`Todo Update Failed`,data:error});
       }else{
          res.status(200).json({status:`${userName}'s Todo Updated Successfully`,data:data});
       }
    })
};

exports.updateStatus = (req,res)=>{
   const reqBody=req.body;
   const _id=reqBody['_id']
   const status=reqBody['status']
   const updateDate=Date.now();

   const postBody={  
      
      status:status, 
      updateDate:updateDate
   }
   
     Todolist.updateOne({_id:_id},{$set:postBody},{upsert:true},(error,data)=>{
        if(error){
           res.status(400).json({status:`Todo Status Update Failed`,data:error})
        }else{
           res.status(200).json({status:`${req.headers.userName}'s Todo Status Updated to ${postBody.status} : id-${_id}`,data:data})
        }
     })
};

exports.delete = (req,res)=>{
    const reqBody=req.body;
    const _id=reqBody['_id'];
   
      Todolist.deleteOne({_id:_id},(error,data)=>{
         if(error){
            res.status(400).json({status:`Todo Delete Failed`,data:error});
         }else{
            res.status(200).json({status:`${req.headers.userName}'s Todo Deleted Successfully :id-${_id}`,data:data});
         }
      });
};

exports.selectByStatus = (req,res)=>{
    const userName=req.headers['userName'];
    const reqBody=req.body;
    
    const status=reqBody['status'];
    
       Todolist.find({userName:userName,status:status},(error,data)=>{
          if(error){
             res.status(400).json({status:"Failed",data:error});
          }else{
             res.status(200).json({status:"Success",data:data});
          }
       });
};

exports.selectByDate = (req,res)=>{
    const userName=req.headers['userName'];
    const reqBody=req.body;
    
    const fromDate=reqBody['fromDate'];
    const today=reqBody['today'];
    
       Todolist.find({userName:userName,createDate:{$gte:new Date(fromDate),$lte:new Date(today)}},(error,data)=>{
          if(error){
             res.status(400).json({status:"Failed",data:error});
          }else{
             res.status(200).json({status:"Success",data:data});
          }
       });
};