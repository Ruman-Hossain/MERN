var MongoClient=require('mongodb').MongoClient;

var URL="mongodb+srv://ruman:ruman@cluster0.tnpja.mongodb.net/?retryWrites=true&w=majority";

var config= { useUnifiedTopology: true };

MongoClient.connect(URL,config,function (error,myMongoClient) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");
        InsertData(myMongoClient);
        // DeleteOneItem(myMongoClient);
        // DeleleAllItem(myMongoClient);
        // FindOneWithoutCondition(MongoClient);
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


function InsertData(myMongoClient){
   var MyDataBase= myMongoClient.db("school");
   var MyCollection= MyDataBase.collection('students');
   var MyData={name:"Ruman",Roll:"02",Class:"Ten",City:"Rangpur"};
   MyCollection.insertOne(MyData,function (error) {
       if(error){
           console.log("Data Insert Fail");
       }
       else{
           console.log("Data Insert Success");
       }
   });
}


function DeleteOneItem(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    var DeleteItem={Roll:"02"}
    MyCollection.deleteOne(DeleteItem,function (error) {
        if(error){
            console.log("Data Delete Fail");
        }
        else{
            console.log("Data Delete Success");
        }
    });;
}

function DeleleAllItem(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    MyCollection.deleteMany(function (error,ResultObj){
        if(error){
            console.log("Delete Fail");
        }
        else {
            console.log(ResultObj.result.n +" Item Deleted");
        }
    });
}

function FindOneWithoutCondition(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    var FindObj={}
    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result);
    });
}

function FindOneWithCondition(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    var FindObj={Roll: "05"}
    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result);
    });
}

function FindAllData(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');
    MyCollection.find().toArray(function (error,result) {
        console.log(result)
    });
}

function FindAllDataByProjection(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    var ItemObj={}
    // var ItemProjection={projection:{Class:"",Roll:""}}  Wrong In Video
    var ItemProjection={projection:{Class:1,Roll:1}} // This is correct

    MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result) {
        console.log(result)
    });
}

function FindAllDataByQuery(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    var Query={Roll :"01",City: "Rangpur"}

    MyCollection.find(Query).toArray(function (error,result) {
        console.log(result)
    });
}

function FindAllDataByLimit(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    MyCollection.find().limit(20).toArray(function (error,result) {
        console.log(result)
    });
}

function FindAllDataBySort(myMongoClient) {
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    var SortPattern={Class :-1}

    MyCollection.find().sort(SortPattern).toArray(function (error,result) {
        console.log(result)
    });
}

function UpdateMyData(myMongoClient){
    var MyDataBase= myMongoClient.db("school");
    var MyCollection= MyDataBase.collection('students');

    var MyQuery={Roll:"4"};
    var MyNewValues={$set:{name:"Anwar Jahid Ruman",City:"Rangpur"}}

    MyCollection.updateOne(MyQuery,MyNewValues,function (error,result) {
        console.log(result);
    });
}

function CreateMyCollection(myMongoClient){
    var MyDataBase= myMongoClient.db("school");
    MyDataBase.createCollection("teachers",function (error,result) {
        console.log(result);
    });
}

function DeleteMyCollection(myMongoClient){
    var MyDataBase= myMongoClient.db("school");

    MyDataBase.dropCollection("teachers",function (error,result) {
        console.log(result);
    });

}