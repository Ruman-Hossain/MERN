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
