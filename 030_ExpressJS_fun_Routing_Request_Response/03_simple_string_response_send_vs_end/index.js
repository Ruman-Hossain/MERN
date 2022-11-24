const express = require('express');
const app = express();

app.get('/send',(req,res)=>{
    res.send('<h1>Simple String Response Using res.send()</h1>'); //Output in Browser
    console.log(`Method : ${req.method}`); //Output in console
});

app.post('/end',(req,res)=>{
    res.end(`<h1>Simple String Response Using res.end()</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});

app.listen(5050,()=>{
    console.log("Express JS Server Run Successful");
});