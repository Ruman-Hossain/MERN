var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://ruman:ruman@cluster0.tnpja.mongodb.net/?retryWrites=true&w=majority";
var config = {useUnifiedTopology:true};
MongoClient.connect(URL,config,function(error,myMongoClient){
    if(error){
        console.log("Connection Failed");
    }else{
        console.log("Connection Successful");
        deleteAllData(myMongoClient);
    }
});

function deleteAllData(myMongoClient){
    var myDatabase = myMongoClient.db('school');
    var myCollection = myDatabase.collection('students');

    myCollection.deleteMany(function(error,resultObj){
        if(error){
            console.log("Data Delete Failed");
        }else{
            console.log("All Data Delete Successfull");
            console.log(resultObj);
        }
    });
    
}