exports.HelloGet=(req,res)=>{
    res.status(203).json({status:'Success',data:"Hello GET"});
};
exports.HelloPost=(req,res)=>{
    res.status(201).json({status:"Success",data:"Hello POST"});
};