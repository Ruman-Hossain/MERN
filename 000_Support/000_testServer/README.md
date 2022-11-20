# MongoDb Connection Setup
## File Structure
```bash
- 📂 __C:\\Users\\ruman\\Desktop\\Code\\MERN\\000\_Support\\000\_testServer__
   - 📄 [README.md](README.md)
   - 📄 [dbConfig.js](dbConfig.js)
   - 📄 [index.js](index.js)
   - 📄 [node\_modules](node_modules)
   - 📄 [package\-lock.json](package-lock.json)
   - 📄 [package.json](package.json)
```
# 👉DBCONFIG.JS FILE SETTINGS
## 1. Package.json File Installation
```shell
    npm init --y
```
## 2. Install MongoDB and Dot Environment Package
```shell
    npm install mongodb dotenv
```
## 3. Open the **.env** file and define required variables
See More details on **.env** pacakge here [dotenv](https://www.npmjs.com/package/dotenv)
>.env
```js
DATABASE_LOCAL = "mongodb://localhost:27017"
DATABASE_URL = "mongodb+srv://ruman:ruman@cluster0.tnpja.mongodb.net/test"
```
## 4. Now Import **dotenv** configuration to use
```javascript
    require('dotenv').config()
    console.log(process.env) // remove this after you've confirmed it is working
```
## 5. Now you are ready to Create **MongoClient**
>dbConfig.js
```javascript
const client = new MongoClient(process.env.DATABASE_LOCAL);
```
It will look Like this. to see whether it is connected or not we can simply *console.og("Database Connected")* 
>dbConfig.js
```javascript
const {MongoClient} = require('mongodb');
require('dotenv').config();
console.log(process.env.DATABASE_LOCAL) 

const client = new MongoClient(process.env.DATABASE_LOCAL);
console.log("Database connected");
```
and Finally export the client so that we can use this connection anywhere when needed.
```javascript
module.exports = {client};
```
Now the **dbConfig.js** File will look like this
> dbConfig.js
```javascript
const {MongoClient} = require('mongodb');
require('dotenv').config();
console.log(process.env.DATABASE_LOCAL) 

const client = new MongoClient(process.env.DATABASE_LOCAL);
console.log("Database connected");

module.exports = {client};

```

# 😍 Import | Use Configuration From DBCONFIG where needed
Suppose We are going to insert One Document From **index.js** file 
## 1. Require the **dbConfig.js** file to create a **client**
```javascript
const {client} = require('./dbConfig');
```
## 2. using this connection we can access the **local** or **Mongodb atlas server** DATABASE and COLLECTION (table)
## 3. Access a Database named **school** using the created **client** connection and Access the collection named **students**
```javascript
const Database = client.db('school');
```
```javascript
const students = Database.collection('students');
```
## Below is an example of Inserting One Document
>index.js
```javascript
const {client} = require('./dbConfig');

const insertOneDoc = async()=>{
    try {
        const Database = client.db('school');
        const students = Database.collection('students');
        const doc ={
            FirstName:'Afrin Akter',
            LastName:'Annee',
            Group:'Science',
            Designation:'Dentist',
            City:'Rangpur'
        };
        const result = await students.insertOne(doc);
        console.log(`A Document was inserted with _id: ${result.insertedId}`);
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}
insertOneDoc();
```
## NB: Key points
You don't need to remember anything. Just Follow the Official Documentation and Write code accordingly

## Click to Visiti and Learn [MongoDB | Node.js Database Operations and Their Usage](https://www.mongodb.com/docs/drivers/node/current/usage-examples/)

# Thank you
# Happy Coding