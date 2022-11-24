# Simple String Response | res.send() vs res.end()
## 🤔 res.send()
Indicates the resposne body
```javascript
app.get('/',(req,res)=>{
    res.send('<h1>Simple String Response Using res.send()</h1>'); //Output in Browser
    console.log(`Method : ${req.method}`); //Output in console
});
```

## 🤔 res.end()
Indicates the Response ending Point
```javascript
app.post('/send',(req,res)=>{
    res.end('<h1>Simple String Response Using res.send()</h1>'); //Output in Browser
    console.log(`Method : ${req.method}`); //Output in console
});
```