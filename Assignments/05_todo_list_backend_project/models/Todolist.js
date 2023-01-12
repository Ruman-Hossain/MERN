const mongoose=require('mongoose');

const TodolistSchema=mongoose.Schema({
   userName     :   {type  : String},
   subject      :   {type  : String},
   description  :   {type  : String},
   status       :   {type  : String,default:"New"},
   createDate   :   {type  : Date},
   udpateDate   :   {type  : Date}
   
},{versionKey:false});

const Todolist=mongoose.model("todoLists",TodolistSchema)

module.exports=Todolist;