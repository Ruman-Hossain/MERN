const express = require('express');
const app = express();
/* Execution Sequence
    REQUEST 
      ⬇️
    MIDDLEWARE
      ⬇️
    RESPONSE 
*/
//APPLICATION LEVEL MIDDLEWARE || Executed automatically for Every Request-Response  
app.use((req,res,next)=>{
    console.log("I'm Application Level Middleware!");
    next();
});

//ROUTE MIDDLEWARE || ROUTE SPECIFIC
app.use('/about',(req,res,next)=>{
    console.log("About Middleware Executed");
    next();
});
app.use('/contact',(req,res,next)=>{
    console.log("Contact Middleware Executed");
    next();
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

/*
👉Route: http://localhost:5050
✅Output:
I'm Application Level Middleware!

👉Route: http://localhost:5050/about
✅Output:
I'm Application Level Middleware!
About Middleware Executed

👉Route: http://localhost:5050/contact
✅Output:
I'm Application Level Middleware!
Contact Middleware Executed
*/