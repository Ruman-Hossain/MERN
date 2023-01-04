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

//Read Data From Student Collection
exports.ReadStudent=(req,res)=>{
    const query={};
    const projection="name roll class remarks";
    StudentModel.find(query,projection,(error,data)=>{
        if(error){
            res.status(404).json({status:"Data Read Failed",data:error});
            console.log(`Data Read Failed \n ${error}`)
        }else{
            res.status(200).json({status:"Data Read Success",data:data})
            console.log(`Data Read Successful \n ${data}`);
        }
    });
};

//Update Data Of Student Collection


//Delete Data From Student Collection