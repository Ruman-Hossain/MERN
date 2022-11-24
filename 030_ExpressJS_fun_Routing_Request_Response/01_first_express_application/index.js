const express = require('express');
const app = express();

app.all('*',(req,res)=>{
    if(req.url=='/'){
        res.send('<h1>Hello From Express JS Home Route</h1>'); //Output in Browser
        console.log("Hello From Home Route"); //Output in console
    }else{
        res.send(`Hello from any Route`); //output in Browser
        console.log(`Hello Fromy Any Route`); //Output in Console
    }
});

app.listen(5050,()=>{
    console.log("Express JS Server Run Successfull");
});