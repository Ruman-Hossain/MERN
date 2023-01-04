const StudentModel = require('../models/StudentsModel')

exports.InsertStudent=(req,res)=>{
    let reqBody = req.body;
    //Debug Body Parser Working or Not
    console.log(reqBody?reqBody:"Data Get Failed");

    //Insert Data to Student Collection
    StudentModel.create(reqBody,(error,data)=>{
        if(error){
            res.status(400).json({status:'fail',data:error});
            console.log("Data Insertion Failed");
        }else{
            res.status(200).json({status:"Success",data:data});
            console.log("Data Inserted Successfully");
        }
    });
};

exports.ReadStudent=(req,res)=>{
    
}