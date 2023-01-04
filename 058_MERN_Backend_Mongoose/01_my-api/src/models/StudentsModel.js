const { default: mongoose } = require("mongoose");


const StudentSchema = mongoose.Schema({
    name:String,
    roll:String,
    class:String,
    remarks:String
});
const studentModel = mongoose.model('students',StudentSchema);
module.exports = studentModel;