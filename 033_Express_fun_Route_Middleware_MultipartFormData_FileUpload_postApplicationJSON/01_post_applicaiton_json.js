const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();

app.use(bodyParser.json());

//We will send name and City using postman Body Section | JSON FORMAT and will catch to display it as response
app.post('/',(req, res)=>{
    let jsonData = req.body;
    //let jsonString = JSON.stringify(jsonData);
    let name = jsonData['name'];
    let city = jsonData['city'];
    res.send(name+" "+city); //Returns Ruman Hossain Rangpur
    //res.send(jsonString);  //Returns JSON FORMAT Output: {"name":"Ruman Hossain", "city":"Rangpur"}
});

app.listen(5050,()=>{
    console.log("Express Server Connected");
});