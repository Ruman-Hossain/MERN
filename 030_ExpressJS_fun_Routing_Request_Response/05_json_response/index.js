const { json } = require('express');
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    let jsonObj = [
        {
            name:'Ruman',
            city:'Rangpur',
            Designation:'Software Engineer'
        },
        {
            name : 'Annee',
            city : 'Rangpur',
            Designation : 'Dentist'
        },
        {
            name : 'Anwar Jahid',
            city : 'Dhaka',
            Designation : 'Developer'
        }
    ];
    res.json(jsonObj);
});

app.listen(5050,()=>{
    console.log("Express.js Server Run Successfull.");
});