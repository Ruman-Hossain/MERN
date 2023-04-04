exports.hello=(req,res)=>{
    res.status(200).json({status:'Success',data:"Hello From Backend Scaffolding"});
}