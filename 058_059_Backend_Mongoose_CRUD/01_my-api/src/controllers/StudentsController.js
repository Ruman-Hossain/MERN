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
            console.log(`Data Inserted Successfully \n ${data}`);   //usefull data can be printed normally
            //console.log(`Data Inserted Successfully \n ${JSON.stringify(data)}`); //usefull data can be printed inside template literal as well
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
exports.UpdateStudent=(req,res)=>{
    const id=req.params.id;
    const query={_id:id}
    const reqBody= req.body;
    StudentModel.updateOne(query,reqBody,(error,data)=>{
        if(error){
            res.status(400).json({status:"Data Update Failed",data:error})
            console.log(`Data Update Failed \n ${error}`);
        }
        else {
            res.status(200).json({status:"Data Update Successful",data:data});
            //console.log(`Data Updated Successfully \n ${data}`); //update response is not usefull Hence You can't console Like this 
            console.log(`Data Updated Successfully \n ${JSON.stringify(data)}`); // unusefull data print requires to be stringified
        }
    });
};

//Delete Data From Student Collection
exports.DeleteStudent=(req,res)=>{
    let id=req.params.id;
    let query={_id:id}
    StudentModel.remove(query,(error,data)=>{
        if(error){
            res.status(400).json({status:"Data Delete Failed",data:error});
            console.log(`Data Delete Failed \n ${error}`);
        }
        else {
            res.status(200).json({status:"Data Delete Successful",data:data});
            console.log(`Data Deleted Successfully \n ${JSON.stringify(data)}`); // unusefull data print requires to be stringified to print inside template literals
        }
    });
};