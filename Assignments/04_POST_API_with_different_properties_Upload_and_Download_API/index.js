/*________________________________________________________________
a)  Make a POST API with 
    i)   URL Query ,
    ii)  Header Properties & 
    iii) Body Properties. 
b. Make a file upload API support PNG,JPG file only 
    i)  Upload One Image
    ii) Upload Multiple Images
c. Make a file Download API, that can download file from application directory
________________________________________________________________
*/
const express = require('express');
const app = express();

//required Packages
const multer = require('multer');
const { hostname } = require('os');
const path = require('path');
//________________________________________________________________
// CODE: a.i)  POST API with URL Query
//________________________________________________________________
//URL : http://localhost:5050/urlquery?name=Ruman Hossain&designation=Software Engineer&city=Rangpur
app.post('/urlquery', (req,res)=>{
    const name = req.query.name;
    const designation = req.query.designation;
    const city = req.query.city;
    res.send(`URL Query: ${name} is a ${designation}, Lives in ${city}.`)
});
/*OUTPUT: 
URL Query: Ruman Hossain is a Software Engineer, Lives in Rangpur.
*/

//________________________________________________________________
// CODE: a.ii) POST API with Header Properties
//________________________________________________________________
/*
URL: http://localhost:5050/header-property 
POSTMAN HEADER Key->Value Pairs
name         ->  Ruman Hossain
designation  ->  Student
city         ->  Rangpur
*/
app.post('/header-property', (req,res)=>{
    const name = req.header('name');
    const designation = req.header('designation');
    const city = req.header('city');
    res.send(`Header Property: ${name} is a ${designation}, Lives in ${city}.`)
});
/*
OUTPUT:
Header Property: Ruman Hossain is a Student, Lives in Rangpur.
*/

//________________________________________________________________
// CODE: a.i) POST API with Body Properties
//________________________________________________________________
/*
URL: http://localhost:5050/body-property
POSTMAN -> BODY -> RAW -> JSON
{
    "name":"Anwar Jahid Ruman",
    "designation":"Software Developer",
    "city":"Rangpur"
}
*/
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.post('/body-property', (req,res)=>{
    const name = req.body.name;
    const designation = req.body.designation;
    const city = req.body.city;
    res.send(`Body Property: ${name} is a ${designation}, Lives in ${city}.`)
});
/*
OUTPUT:
Body Property: Anwar Jahid Ruman is a Software Developer, Lives in Rangpur.
*/

//________________________________________________________________
// CODE: b)   File Upload API That supports PNG, JPG File Only 
//________________________________________________________________

// File Name and Destination Directory Processing
//________________________________________________________________
const imageStorage = multer.diskStorage({
    // Destination Folder Name to store images
    destination: 'uploads', 
      filename: (req, file, callback) => {
          const fileExtension = path.extname(file.originalname);
          const fileName = file.originalname
                               .replace(fileExtension,"")
                               .toLowerCase()
                               .split(" ")
                               .join("-")+Date.now()+fileExtension;
          callback(null, fileName)
    }
});
// Upload Properties Configuration Using Multer
//________________________________________________________________
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 10000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, callback) {
      //Check the Images format (JPG and PNG only Acceptable)
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         return callback(new Error('Please upload only JPG or PNG Images'))
       }
     callback(null, true)
  }
});

//________________________________________________________________
// CODE: b)i) UPLOAD ONE IMAGE AT A TIME 
//________________________________________________________________
app.post('/upload-one', imageUpload.single('imageKey'), (req, res) => {
    res.send(req.file)
    }, (error, req, res, next) => {
        res.status(400).send({ error: error.message })
});

//________________________________________________________________
// CODE: b)i) UPLOAD Multiple IMAGES AT A TIME 
//________________________________________________________________
app.post('/upload-multiple', imageUpload.array('imageKey',5), (req, res) => {
    res.send(req.files)
    }, (error, req, res, next) => {
        res.status(400).send({ error: error.message })
});

//________________________________________________________________
// CODE: c)   File Download API, That can download file from Application directory
//________________________________________________________________
app.get('/download',(req,res)=>{
    console.log(`${req.hostname} Requested to Download a file`);
    res.download('./uploads/afrin1670581526787.jpg');
    console.log("One File Downloaded Successfully");
});

//SERVER CONNECTION TO PORT 5050
const port = '5050';
app.listen(port,()=>{
    console.log(`Server is Running at localhost:${port}`)
})