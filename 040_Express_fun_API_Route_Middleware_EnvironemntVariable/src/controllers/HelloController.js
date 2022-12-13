exports.HelloGet=(req,res)=>{
    res.status(200).json({
        "status":"success",
        "data":"Hello GET API"
    });
};

exports.HelloPost=(req,res)=>{
    res.status(200).json({
        "status":"success",
        "data":"Hello POST API"
    });
};