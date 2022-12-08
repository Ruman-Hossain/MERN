const express = require('express');
const app = express();

//Application Level Middleware || Executed automatically for Every Request-Response  
/* Execution Sequence
    REQUEST 
      ⬇️
      ⬇️
    MIDDLEWARE
      ⬇️
      ⬇️
    RESPONSE 
*/
app.use((req,res,middle)=>{
    console.log("I'm Application Level Middleware!");
    middle();
});

app.get('/',(req,res)=>{
    res.send("This is Home Page");
});

app.get('/about',(req,res)=>{
    res.send("This is About Page");
});

app.get('/contact',(req,res)=>{
    res.send("This is Contact Page");
});

app.listen(5050,()=>{
    console.log(`Express Server Connected`);
});