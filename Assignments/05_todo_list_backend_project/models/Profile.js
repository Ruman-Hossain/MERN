const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    firstName : {type: String},
    lastName  : {type: String},
    email     : {type: String},
    phone     : {type: String},
    city      : {type: String},
    userName  : {type: String},
    password  : {type: String},
    gender    : {type: String}
},{versionKey:false});

const Profile = mongoose.model('profiles',profileSchema);

module.exports=Profile;