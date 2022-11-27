const express = require('express');
const app = express();
//BROWSER BODY ONLY DISPLAYS GET REQUEST ONLY
//Simple Get Request Response
app.get('/',(req,res)=>{
    res.end('<h1>Simple Get Request Response</h1>');
});

//Get Request With URL Query
// URL = http://localhost:5050/url?firstName=Md%20Ruman&lastName=Hossain
app.get('/url',(req,res)=>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(`<h1> ${firstName} ${lastName} </h1>`);
});
//Working with Get Request Header
app.get('/header-get-request',(req,res)=>{
    //You need to set these value in header section key->value then we will get that here
    //USE POSTMAN
    let firstName = req.header('firstName'); //Custom key->value set in Header Section Postman
    let lastName = req.header('lastName');  //Custom key->value set in Header section Postman
    let UserAgent = req.header('User-Agent'); //By Default Existing key->value in Header section check Postman
    res.send(`<h1> ${firstName} ${lastName} User-Agent:${UserAgent} </h1>`);
    //If User-Agent Not Displayed in Postman Check HIDE AUTO GENERATED Header IS DISABLED or Not.
});

app.listen(5050,()=>{
    console.log(`Express Server Connected`);
})