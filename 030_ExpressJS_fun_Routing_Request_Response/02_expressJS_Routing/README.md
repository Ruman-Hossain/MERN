# EXPRESS ROUTING || DIFFERENT TYPES OF METHODS
## GET METHOD | BROWSER AND POSTMAN CAN ACCESS THIS 
You will be able to see response in Browser
```javascript
app.get('/',(req,res)=>{
    res.send('<h1>Home Route</h1>'); //Output in Browser
    console.log(`Method : ${req.method}`); //Output in console
});
```
## POST METHOD | BROWSER CAN'T BUT POSTMAN TO SEE RESPONSE
You will be able to see response in POSTMAN not in Browser
```javascript
app.post('/contact',(req,res)=>{
    res.send(`<h1>Contact Page</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});
```
## PUT METHOD | BROWSER CAN'T BUT POSTMAN TO SEE RESPONSE
You will be able to see response in POSTMAN not in Browser
```javascript
app.put('/about',(req,res)=>{
    res.send(`<h1>About Page</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});
```
## PATCH METHOD | BROWSER CAN'T BUT POSTMAN TO SEE RESPONSE
You will be able to see response in POSTMAN not in Browser
```javascript
app.patch('/portfolio',(req,res)=>{
    res.send(`<h1>Portfolio Page</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});
```
## DELETE METHOD | BROWSER CAN'T BUT POSTMAN TO SEE RESPONSE
You will be able to see response in POSTMAN not in Browser
```javascript
app.delete('/terms',(req,res)=>{
    res.send(`<h1>Terms and Condition Page</h1>`); //output in Browser
    console.log(`Method : ${req.method}`); //Output in Console
});
```

# HOW TO CHECK
Open POSTMAN and test these URLS with their perspective method.
You will be able to see Output in Browser for Get method only. and for others you have to see output in POSTMAN
