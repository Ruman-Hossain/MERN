# PROJECT STRUCTURE

## 1.Back-End Front-End <span style='color:blue'>In Seperate Project Files</span>

| 1 	| Minimize Project Complexity                                  	|
|---	|--------------------------------------------------------------	|
| 2 	| Easy Maintenance                                             	|
| 3 	| Easy Bug Fixing                                              	|
| 4 	| Multiple Backend Scope                                       	|
| 5 	| Multiple Front End Scope                                     	|
| 6 	| Suitable for all types of Application (Large, Small, Medium) 	|
| 7 	| Less developer dependencies                                  	|
| 8 	| Loosely coupled Application                                  	|

## 2. Back-End Front-End In Same Project Files

| 1 	| Suitable for small Scale Application    	|
|---	|-----------------------------------------	|
| 2 	| Minimize Times for one hand development 	|
| 3 	| Minimize deployment complexity          	|
| 4 	| Minimize project file folder            	|

### Modifications in Client and Backend Files that is required to do
#### 1. Client > Package.json
You need to add the Backed Server Running Port as Proxy in Client Side JSON File
```json
    "proxy":"http://localhost:5000" 
```

#### 2. Backend ( Project Root ) > src > app.js
You need to Add the client folder name [ Here it's *client-side*] in App.js File 
```javascript
// Managing Front End Routing FOR PROJECT SCAFFOLDING TO RUN FRONTEND AND BACKEND USING SINGLE COMMAND AT THE SAME TIME
// app.use(express.static('client-side/build'))
// app.get("*",function (req,res){
//     req.sendFile(path.resolve(__dirname,'client-side','build','index.html'))
// })
app.get("*",function (req,res){
    res.sendFile(path.join(__dirname,'client-side','build','index.html'))
})


// Managing BackEnd API Routing
app.use("/api/v1",router)
```

### Scaffolding Project Running Steps

1. You have to build the Client side Using the given below
```shell
    cd client-side
    npm run build
```
2. Now to run Frontend and Backend You have to Run command from project Root
```
    cd ../
    npm start
```