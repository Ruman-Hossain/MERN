var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://<username>:<password>@cluster0.tnpja.mongodb.net/?retryWrites=true&w=majority";
var config = {useUnifiedTopology:true};
MongoClient.connect(URL,config,function(error,myMongoClient){
    if(error){
        console.log("Connection Failed");
    }else{
        console.log("Connection Successful");
        deleteData(myMongoClient);
    }
});

function deleteData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('students');
    var deleteItem = {roll:'04'};
    myCollection.deleteOne(deleteItem,function(error){
        if(error){
            console.log("Data Delete Failed");
        }else{
            console.log("Data Delete Successfull");
        }
    });
    
}