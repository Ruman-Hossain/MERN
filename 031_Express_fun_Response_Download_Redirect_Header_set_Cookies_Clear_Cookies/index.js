const express = require('express');
const app = express();

//FILE DOWNLOAD USING EXPRESS JS
app.get('/download',(req,res)=>{
    res.download('./uploads/express_js.png'); 
    //res.download('./uploads/express_js.png','Ruman.png'); 
});
//REDIRECT USING EXPRESS JS
app.get('/redirect',(req,res)=>{
    // console.log("Redirecting to Download Page");
    // res.redirect(`/download`); //This will redirect to Download URL and File Save Pop Up will be appeared
    console.log(`Redirecting to Express JS Website`);
    res.redirect('https://expressjs.com/');
});
//SET COOKIES USING EXPRESS JS
app.get('/set-cookies',(req,res)=>{
    res.cookie('name','Ruman Hossain');
    res.cookie('city','Rangpur');
    res.cookie('profession','Software Engineer');
    res.cookie('username', 'Ruman_Hossain');
    res.cookie('email','ruman.cse.brur@gmail.com');
    res.status(201).end('Cookie Set Successful');
    console.log("Cookie Set Successful!");
});

//CLEAR COOKIES USING EXPRES JS
app.get('/clear-cookies',(req,res)=>{
    res.clearCookie('username');
    res.clearCookie('email');
    res.status(200).end(`Username and Email Cleared from Cookies`);
    console.log(`Username and Email is cleared from cookies`);
});
app.listen(5050,()=>{
    console.log("Express JS Server Connected");
});