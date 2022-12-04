const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//We will send name and City using postman Body Section | JSON FORMAT and will catch to display it as response
app.use(bodyParser.json());

app.post('/json',(req, res)=>{
    let jsonData = req.body;
    //let jsonString = JSON.stringify(jsonData);
    let name = jsonData['name'];
    let city = jsonData['city'];
    res.send(name+" "+city); //Returns Ruman Hossain Rangpur
    //res.send(jsonString);  //Returns JSON FORMAT Output: {"name":"Ruman Hossain", "city":"Rangpur"}
});

//Multipart-Form Data | MULTER 
//Input in Postman Body Section|| Form-data : name: Ruman Hossain, city: Rangpur, Country:Bangladesh
var multer = require('multer');
var multer = multer();

app.use(multer.array());
app.use(express.static('public'));

app.post('/multipart',(req,res)=>{
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString); // Output: {"name":"Ruman Hossain","city":"Rangpur","country":"Bangladesh"}
});

app.listen(5050,()=>{
    console.log("Express Server Connected");
});