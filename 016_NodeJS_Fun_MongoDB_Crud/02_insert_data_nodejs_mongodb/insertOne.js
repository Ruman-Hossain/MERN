var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://ruman:ruman@cluster0.tnpja.mongodb.net/?retryWrites=true&w=majority";
var config = {useUnifiedTopology:true};
MongoClient.connect(URL,config,function(error,myMongoClient){
    if(error){
        console.log("Connection Failed");
    }else{
        console.log("Connection Successful");
        insertData(myMongoClient);
    }
});

function insertData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('students');
    var myData = {name:'Hossain',roll:'04',class:'Seven',city:'Rangpur'};
    myCollection.insertOne(myData,function(error){
        if(error){
            console.log("Data Insert Failed");
        }else{
            console.log("Data Insert Sucessfull");
        }
    });
}