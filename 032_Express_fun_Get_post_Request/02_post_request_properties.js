const express = require('express');
const app = express();
// BROWSER BODY DOESN'T DISPLAY POST REQUEST TO SEE OUTPUT YOU MUST USE POSTMAN
//Simple POST Request Response
app.post('/',(req,res)=>{
    res.end('<h1>Simple Post Request Response</h1>');
});

//POST Request With URL Query
// URL = http://localhost:5050/url?firstName=Md%20Ruman&lastName=Hossain
app.post('/url',(req,res)=>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(`<h1> ${firstName} ${lastName} </h1>`); //See output in Postman || Params Section
});
//Working with POST Request Header
//URL = http://localhost:5050/header-post-request?firstName=Md%20Ruman&lastName=Hossain
app.post('/header-post-request',(req,res)=>{
    //Set key->value in the Header Section | Postman
    //USE POSTMAN
    let firstName = req.header('firstName'); //set key->value in the Header Section | Postman
    let lastName = req.header('lastName');  //set key->value in the Header Section | Postman
    res.send(`<h1> ${firstName} ${lastName}</h1>`);
});

app.listen(5050,()=>{
    console.log(`Express Server Connected`);
})