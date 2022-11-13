var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://<username>:<passoword>@cluster0.tnpja.mongodb.net/?retryWrites=true&w=majority";
var config = {useUnifiedTopology:true};
MongoClient.connect(URL,config,function(error){
    if(error){
        console.log("Connection Failed");
    }else{
        console.log("Connection Successful");
    }
});
