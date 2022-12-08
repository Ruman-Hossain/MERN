const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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