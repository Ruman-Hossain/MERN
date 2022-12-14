## What is MongoDB: 
MongoDB is a cross-platform, document oriented database.

- Provides high performance 
- High availability 
- Easy scalability 
- It is no SQL  
- written in C++

## MongoDB can manage:
- Structured data 
- Semi structured data 
- Un structured data 

## NoSQL Databases:  
NoSQL Database is used to refer a non-SQL or non-relational database.

- No table 
- No row 
- No complex join 

## NoSQL Behind History:

- In the early 1970, Flat File Systems are used, that time there was no standard, no format difficult to manage and share. 
- In 1970 Computer scientist Edgar F. Codd proposed a database model to resolve this problem, known as relational database model 
- But later relational database also get a problem that it could not handle big data, due to this problem there was a need of database which can handle every types of problems. 
- The initial development of NoSQL database MongoDB began in 2007 by 10gen, the the company name changed with new name MongoDB Inc. 
- Later in 2009, it is introduced in the market as an open source database server
- The first ready production of MongoDB has been considered from version 1.4 which was released in March 2010.


## Basic Terminology
|     RDBMS          	|     MongoDB                                                       	|
|--------------------	|-------------------------------------------------------------------	|
|     Database       	|     Database                                                      	|
|     Table          	|     Collection                                                    	|
|     Tuple/Row      	|     Document                                                      	|
|     column         	|     Field                                                         	|
|     Table Join     	|     Embedded Documents                                            	|
|     Primary Key    	|     Primary Key (Default key _id provided   by MongoDB itself)    	|

## Sample Code 
```javascript
{
	_id: Objectld(7df78ad8902c) 
	title: 'value', 
	tags: ['value','value','value'],
	likes: 100, 
	comments: [
		{
			user: 'value' , 
			message: 'value', 
			dateCreated: new Date(2011,1,20,2,15), 
			like:0
		},
		{
			user: 'value' , 
			message: 'value' , 
			datecreated: new Date(2011,1,25,7,45),
			like:5
		}
	]
}
```
**Default key _id Definition:** _id is a 12 bytes hexadecimal number

| <font style="color:red">7df7</font> 	| <font style="color:green">8ad</font>  	| <font style="color:blue">89</font> 	| <font style="color:white">02c</font> 	|
|------	|------	|----	|-----	|
- First 4 bytes = current timestamp
- Next 3 bytes = machine id
- Next 2 bytes = process id
- Last 3 bytes = incremental VALUE

## Advantages
- Schema less
- single object
- No complex joins
- Deep query-ability
- Tuning
- Ease of scale-out
- Uses internal memory for storing

## Where to use MongoDB?
- Big Data
- Content Management and Delivery
- Mobile and Social Infrastructure
- User Data Management
- Data Hub

## MongoDB Edition
- MongoDB Community Server
- MongoDB Enterprise Server
- MongoDB Atlas

## Install MongoDB
- Download MongoDB Community Server
- Install MongoDB Community Server on the local machine
- Download MongoDB Compass
- Install MongoDB Compass
- Connect MongoDB With Compass Application

## MongoDB - Data Modeling:
MongoDB provides two types of data models
- Embedded Data Model
- Normalized Data Model

## Embeded Data Model
In this model, you can have (embed) all the related data in a single document, it is also known as de-normalized data model.

```javascript
{
	_id: ,
	Emp_ID: "10025AE556" 
	Personal_details : { 
		First_Name: "Radhika" , 
		Last_Name: "Sharma" , 
		Date_Of_Birth:"1995-09-26" 
	},
	Contact: { 
		e-mail: "radhika_sharma.123@gmail.com",
		phone : "9848622358",
	},
	Address:{
	city : "Hyderabad" , 
	Area : "Madapur" , 
	State: "Telangana" 
	}
}
```
## Normalized Data Model:
In this model, you can refer the sub documents in the original document. 
<img src="images/normalized-data-model.png" alt="Normalized Data Model">

## Data Types
|    <br>Data   Types      	|    <br>Description                                                                                                                                                                                                 	|
|--------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
|    <br>String            	|    <br>String   is the most commonly used datatype. It is used to store data. A string must   be UTF 8 valid in mongodb.                                                                                           	|
|    <br>Integer           	|    <br>Integer   is used to store the numeric value. It can be 32 bit or 64 bit depending on   the server you are using.                                                                                           	|
|    <br>Boolean           	|    <br>This   datatype is used to store boolean values. It just shows YES/NO values.                                                                                                                               	|
|    <br>Double            	|    <br>Double   datatype stores floating point values.                                                                                                                                                             	|
|    <br>Min/Max   Keys    	|    <br>This   datatype compare a value against the lowest and highest bson elements.                                                                                                                               	|
|    <br>Arrays            	|    <br>This   datatype is used to store a list or multiple values into a single key.                                                                                                                               	|
|    <br>Object            	|    <br>Object   datatype is used for embedded documents.                                                                                                                                                           	|
|    <br>Null              	|    <br>It   is used to store null values.                                                                                                                                                                          	|
|    <br>Symbol            	|    <br>It   is generally used for languages that use a specific type.                                                                                                                                              	|
|    <br>Date              	|    <br>This   datatype stores the current date or time in unix   time format. It makes you possible to specify your own date time by creating   object of date and pass the value of date, month, year into it.    	|


# MongoDB Shell:
1. The mongo shell is similar to the mysql in MySQL, psql in PostgreSQL, and SQL*Plus in Oracle Database.
2. The mongo shell is an interactive JavaScript interface to MongoDB.
3. The mongo shell is included in the MongoDB installation by default.
```shell
	> Math.max(10,20,55,15)
	50
	> function Sum(num1,num2){
	...return num1+num2
	...}
	> sum(10,15)
	25
```
To see the list of command you need to use the help() function
- ## MongoDB Help

```shell
	db.help()
```
To get stats about MongoDB server, type the command db.stats() in MongoDB client. This will show the database name, number of collection and documents in the database.
- ## MongoDB Statistics
```shell
	db.stats()
```
- ## Show Database Names
```shell
	show dbs
```
Suppose we wantto create a database that doesn't exists at all. Then you have to to use database by a name and have to insert atleast one data belongs to that db's collection
- ## Create Database
```javascript
	use schools
	db.students.insert({name:"Ruman",city:"Rangpur"})
```
In Order to delete a database switch to that database then you can dropDatabase()
- ## Drop Database 
```shell
	use schools
	db.dropDatabase()
```
If we want to create new collection belongs to an existing Database then you have to use createCollection() method
- ## Collection Create
```javascript
	db.createCollection("teachers")
```
If requires to delete an existing collection use drop() method
- ## Drop Collection
```javascript
	db.teachers.drop()
```
- ## Single Document Insert to a Collection
```javascript
	db.students.insertOne({name:"Ruman",city:"Rangpur"})
```
- ## Multiple Documents Insert to a Collection
```javascript
	db.students.insertMany([{name:"Ruman",city:"Rangpur"},{name:"Afrin",city:"Dhaka"},{name:"Anwar",city:"Rangpur"}])
```
- ## Find Single Document
```javascript
	db.students.findOne({name:"Ruman"})
```
- ## Find All Documents
```javascript
	db.studetns.find()
```
projection means selecting only the necessary data rather than selecting whole of the data of a document.
- ## MongoDB Projection (skip -> 0, select-> 1)
```javascript
	db.students.find({},{_id:0,name:1})
```
- ## Query Operators
1. <font style="color:green">$eq</font> : Equal To Operator
2. <font style="color:green">$lt</font> : Less Than Operator
3. <font style="color:green">$lte</font> : Less Than or Equal To Operator
4. <font style="color:green">$gt</font> : Greater Than Operator
5. <font style="color:green">$gte</font> : Greater Than or Equal To Operator
6. <font style="color:green">$ne</font> : Not Equal To Operator
7. <font style="color:green">$in</font> : In Operator
8. <font style="color:green">$nin</font> : Not In Operator
- ## Query Operators Usage
```javascript
db.Products.find({price:{$eq:"1000"}})  
db.Products.find({price:{$lt:"1000"}})  
db.Products.find({price:{$lte:"1000"}})  
db.Products.find({price:{$gt:"1000"}})  
db.Products.find({price:{$gte:"1000"}})  
db.Products.find({price:{$ne:"1000"}}) 
db.Products.find({price:{$in:["100","200","3000"]}},{price:1})
db.Products.find({price:{$nin:["100","200","3000"]}},{price:1})
```

- ## Logical Operators
1. <font style="color:green">$and </font>: Logical AND Opeartor
2. <font style="color:green">$or </font>: Logical OR Operator
```javascript
	db.products.find({$and:[{price:{$eq:"100"}},{special_price:{$eq:"NA"}}]},{price:1,special_price:1,category:1})

	db.products.find({$or:[{price:{$eq:"100"}},{special_price:{$eq:"NA"}}]},{price:1,special_price:1,category:1})
```

To Select Specific number of records use limit method
- ## Limit Records
```javascript
	db.students.find().limit(5)
```
- ## Sort Records (Ascending: 1, Descending: -1)
```javascript
	db.students.find().sort({name:1,city:-1})
	db.products.find({},{name:1}).sort({name:-1})
```
- ## Update One Document
```javascript
	db.students.updateOne({id:100,{$set:{name:"Anwar",city:"Dhaka"}}})

```
- ## Update Documents
> db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA)
```javascript
	db.students.update({id:100},{$set:{name:"Jahid",city:"Dhaka"}})
```
- ## Delete Document
```javascript
	db.students.remove({name:"Jahid",city:"Dhaka"})
```
- ## Beautify JSON Output in shell query:  pretty()
```javascript
	db.students.find().pretty()
```