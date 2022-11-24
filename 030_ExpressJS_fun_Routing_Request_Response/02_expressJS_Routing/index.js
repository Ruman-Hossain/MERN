const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>'); //Output in Browser
    console.log(`Method : ${req.method}`); //Output in console
});

app.post('/contact',(req,res)=>{
    res.send(`<h1>Contact Page</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});

app.put('/about',(req,res)=>{
    res.send(`<h1>About Page</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});
app.patch('/portfolio',(req,res)=>{
    res.send(`<h1>Portfolio Page</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});
app.delete('/terms',(req,res)=>{
    res.send(`<h1>Terms and Condition Page</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});

app.listen(5050,()=>{
    console.log("Express JS Server Run Successfull");
});