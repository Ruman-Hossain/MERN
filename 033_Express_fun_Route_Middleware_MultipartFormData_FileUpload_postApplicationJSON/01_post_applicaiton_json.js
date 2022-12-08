const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//We will send name and City using postman Body Section | JSON FORMAT and will catch to display it as response
/* INPUT -> POSTMAN -> BODY -> RAW (JSON)
{
    "name":"Ruman Hossain",
    "city":"Rangpur"
}
*/
app.use(bodyParser.json());

app.post('/json',(req, res)=>{
    let jsonData = req.body;
    //let jsonString = JSON.stringify(jsonData);
    let name = jsonData['name'];
    let city = jsonData['city'];
    res.send(name+" "+city); //Returns Ruman Hossain Rangpur
    //res.send(jsonString);  //Returns JSON FORMAT Output: {"name":"Ruman Hossain", "city":"Rangpur"}
});

app.listen(5050,()=>{
    console.log("Express Server Connected");
});