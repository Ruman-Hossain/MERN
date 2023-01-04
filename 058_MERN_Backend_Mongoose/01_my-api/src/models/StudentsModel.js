const mongoose = require("mongoose");


const StudentSchema = mongoose.Schema({
    name:String,
    roll:String,
    class:String,
    remarks:String
},{versionKey:false});
const StudentModel = mongoose.model('students',StudentSchema);
module.exports = StudentModel;