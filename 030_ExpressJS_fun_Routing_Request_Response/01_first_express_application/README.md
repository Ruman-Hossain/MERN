# EXPRESS JS FIRST APPLICATION INSTALLATION
## Introduction:
Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js
## Installation
## STEP-01:
Install the required package for express.js
```shell
npm install express --save
```
## STEP-02:
You are ready to use express.js now. 
```javascript
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
```

## STEP-03:
Now you can run the project and see OUTPUT
```shell
node index.js
```
# Additional:
>ALL method (GET, POST, PUT, PATCH, DELETE)
```javascript
app.all(path,requestHandler);
```
>GET method
```javascript
app.get(path,requestHandler);
```
>POST method
```javascript
app.post(path,requestHandler);
```
>PUT method
```javascript
app.put(path,requestHandler);
```

>PATCH method
```javascript
app.patch(path,requestHandler);
```

>DELETE method
```javascript
app.delete(path,requestHandler);
```

>Sending Response to Browser
```javascript
res.send(Content)
```