var MongoClient=require('mongodb').MongoClient;
var URL="mongodb+srv://ruman:ruman@cluster0.tnpja.mongodb.net/?retryWrites=true&w=majority";
var config= { useUnifiedTopology: true };
MongoClient.connect(URL,config,function (error,myMongoClient) {
    if(error){
        console.log("Connection Fail")
    }else{
        console.log("Connection Success");
        // InsertData(myMongoClient);
        // DeleteOneItem(myMongoClient);
        DeleleAllItem(myMongoClient);
        // FindOneWithoutCondition(myMongoClient);
        // FindOneWithCondition(myMongoClient);
        // FindAllData(myMongoClient);
        // FindAllDataByProjection(myMongoClient);
        // FindAllDataByQuery(myMongoClient);
        // FindAllDataByLimit(myMongoClient);
        // FindAllDataBySort(myMongoClient);
        // UpdateMyData(myMongoClient);
        // CreateMyCollection(myMongoClient);
        // DeleteMyCollection(myMongoClient);
    }
});

//INSERT DATA WORKS FINE
function InsertData(myMongoClient){
   var MyDataBase= myMongoClient.db("school");
   var MyCollection= MyDataBase.collection('students');
   var MyData={name:"Hossain",Roll:"03",Class:"Ten",City:"Rangpur"};
   MyCollection.insertOne(MyData,function (error) {
       if(error){
           console.log("Data Insert Fail");
       }
       else{
           console.log("Data Insert Success");
       }
   });
}

//DELETE ONE DATA WORKS FINE
function DeleteOneItem(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    var DeleteItem={Roll:"05"}
    MyCollection.deleteOne(DeleteItem,function (error) {
        if(error){
            console.log("Data Delete Fail");
        }
        else{
            console.log("Data Delete Success");
        }
    });;
}
//DELETE ALL ITEM WORKS FINE
function DeleleAllItem(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    MyCollection.deleteMany(function (error,ResultObj){
        if(error){
            console.log("Delete Failed");
        }
        else {
            console.log(ResultObj);
        }
    });
}
//FIND ONE WITHOUT CONDITION WORKS FINE
function FindOneWithoutCondition(myMongoClient) {
    var database = myMongoClient.db('school');
    var myCollection = database.collection('students');
    var queryObj = {};
    myCollection.find(queryObj).toArray(function(error,result){
    // myCollection.find(queryObj).limit(20).toArray(function(error,result){
        console.log(result);
    });
}

//FIND ONE WITH CONDITION WORKS FINE
function FindOneWithCondition(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    var FindObj={Roll: "02"}
    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result);
    });
}

//FIND ALL DATA WORKS FINE
function FindAllData(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    MyCollection.find().toArray(function (error,result) {
        console.log(result)
    });
}

//FIND ALL DATA BY PROJECTION WORKS FINE
function FindAllDataByProjection(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    var ItemObj={}
    // var ItemProjection={projection:{Class:"",Roll:""}}  Wrong In Video
    var ItemProjection={projection:{Class:1,Roll:1}} // This is correct || Will Display Class and Roll Column

    MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result) {
        console.log(result)
    });
}

//FIND ALL DATA USING QUERY WORKS FINE
function FindAllDataByQuery(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    var Query={name: "Zahid",City: "Rangpur"}
    // var Query = {name:{$in:['Ruman','Zahid','Anwar Zahid']}}; //If want to search Multiple Value

    MyCollection.find(Query).toArray(function (error,result) {
        console.log(result)
    });
}
//FIND ALL DATA BY LIMIT WORKS FINE
function FindAllDataByLimit(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    var Query = {name:{$in:['Ruman','Zahid','Anwar Zahid']}};
    MyCollection.find(Query).limit(2).toArray(function (error,result) {
        console.log(result);
    });
}
//FIND ALL DATA AFTER SORTING WORKS FINE
function FindAllDataBySort(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    // ASC : 1  DESC: -1
    var SortPattern={Roll : -1}

    MyCollection.find().sort(SortPattern).toArray(function (error,result) {
        console.log(result);
    });
}
//UPDATE MY DATA ON DATABASE WORKS FINE
function UpdateMyData(myMongoClient){
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    var MyQuery={Roll:"10"};
    var MyNewValues={$set:{name:"Anwar Jahid Ruman Hossain",City:"Rangpur"}}

    MyCollection.updateOne(MyQuery,MyNewValues,function (error,result) {
        console.log(result);
    });
}

//CREATE COLLECTION WORKS FINE
function CreateMyCollection(myMongoClient){
    var MyDataBase= myMongoClient.db("school");
    MyDataBase.createCollection("teachers",function (error,result) {
        if(error){
            console.log("Collection Already Exists or There's a Problem!");
        }else{
            console.log(result);
        }
    });
}
//DELETE COLLECTION WORKS FINE
function DeleteMyCollection(myMongoClient){
    var MyDataBase= myMongoClient.db("school");

    MyDataBase.dropCollection("teachers",function (error,result) {
        if(error)
            console.log("Collection Doesn't Exists to Delete");
        else
            console.log(result);
    });

}