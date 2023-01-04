# Mongoose
## What is Mongoose?
Mongoose an elegant MongoDB object modeling for Node.js

## Why Should Use Mongoose?
- Provides schema-based data modeling solution 
- Type casting
- Validation
- Query building
- Business logic.
  
## How to Start
- Install mongoose 
- Create Database connection 
- Create your first mongoose model
- Work with mongoose model  

## Create Database Connection
```javascript
	let uri = 'mongodb://127.0.0.1:27017/schools';
	let options = {user:'',pass:''};

	mongoose.connect(uri,options,(error)=>{
		if(error)
			console.log(error);
		else
			console.log('MongoDB Connected Successfully!');
	});
```
## Routing

## Controller | Student Controller

### Insert

### Update

### Delete

## Model | StudentModel


## Object Printing Inside Template Literals : Key Notes
* If you are printing an object After **Insert** or **Read** Operation Then you can print the Object **Inside** Template Literals as Well as Like Normal Variable Printing

* You are not Allowed to print object data if the data is not **useful** like **update** and **delete** Response. You can print data object after **stringfy**
  ```javascript
	console.log(`Data Deleted Successfully \n ${JSON.stringify(data)}`);
  ```
 > output: 
  ```json
	Data Deleted Successfully 
	{
        "acknowledged": true,
        "deletedCount": 0
    }
  ```
* > if you try to print **unuseful** data inside template literals inside template literals like this
  ```javascript
  console.log(`Data Updated Successfully \n ${data}`); 
  ```
  it will display output like this 
  > output 
  ```json
	Data Updated Successfully
   [object, object]
   ```
* > **Useful Data**  | **Insert** | **Read**

```json
{
    "status": "Success",
    "data": {
        "name": "Ruman Hossain",
        "roll": "1306033",
        "class": "XI",
        "remarks": "New DAta ",
        "_id": "63b55ece3ff7614398ddb20f"
    }
}
```
* > **Not Usefull Data** This one is just a Sign that the Query is working  
	> **Update** Response | Not Useful
	```json
		{
		"status": "Data Update Successful",
		"data": {
			"acknowledged": true,
			"modifiedCount": 0,
			"upsertedId": null,
			"upsertedCount": 0,
			"matchedCount": 0
		}
	}
	```
	> **Delete** Response | Not Useful
	```json
	{
		"status": "Data Delete Successful",
		"data": {
			"acknowledged": true,
			"deletedCount": 1
		}
	}
	```
```javascript Object.prototype.toString()``` returns ``` [object Object]``` by default. Note that this is a **string value which is not particularly useful.**