# OPERATIONS
## TEST URL | POSTMAN
> GET: //http://localhost:5050/api/v1/test

> JSON OUTPUT:
```javascript
{
    "status": "Success",
    "message": "Hello world"
}
```
## Tasks | Get All Task List
> GET: http://localhost:5050/api/v1/tasks
> OUTPUT:
```javascript
[
    {
        "_id": "639c3d35a9cec77eb4d02b07",
        "name": "Cooking",
        "completed": true
    },
    {
        "_id": "639c3f22bcf353a00e0fca74",
        "name": "Reading",
        "completed": true,
        "createdAt": "2022-12-16T09:49:22.174Z",
        "updatedAt": "2022-12-16T09:49:22.174Z"
    },
    {
        "_id": "639c4118bcf353a00e0fca77",
        "name": "Writing",
        "completed": true,
        "createdAt": "2022-12-16T09:57:44.982Z",
        "updatedAt": "2022-12-16T09:57:44.982Z"
    },
    {
        "_id": "639c4118bcf353a00e0fca7a",
        "name": "Cooking",
        "completed": true,
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    },
    {
        "_id": "639c4118bcf353a00e0fca7b",
        "name": "Eating",
        "completed": false,
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    },
    {
        "_id": "639c4118bcf353a00e0fca7c",
        "name": "Sleeping",
        "completed": false,
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    },
    {
        "_id": "639c4118bcf353a00e0fca78",
        "name": "Reading",
        "completed": false,
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    },
    {
        "_id": "639c4118bcf353a00e0fca79",
        "name": "Marketing",
        "completed": true,
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    }
]
```

## Create
> POSTMAN URL: http://localhost:5050/api/v1/create
>POSTMAN BODY > RAW > JSON
- Single Data Insert
```javascript
{
    "name":"Reading",
    "completed":true
}
```
- Multiple Data Insert 
> POSTMAN BODY > RAW > JSON DATA
```javascript
[
    {"name":"Writing", "completed":true},
    {"name":"Reading", "completed":false},
    {"name":"Marketing", "completed":true},
    {"name":"Cooking", "completed":true},
    {"name":"Eating", "completed":false},
    {"name":"Sleeping", "completed":false}
]
```
> JSON RESPONSE 
```javascript
[
    {
        "name": "Writing",
        "completed": true,
        "_id": "639c4118bcf353a00e0fca77",
        "createdAt": "2022-12-16T09:57:44.982Z",
        "updatedAt": "2022-12-16T09:57:44.982Z"
    },
    {
        "name": "Reading",
        "completed": false,
        "_id": "639c4118bcf353a00e0fca78",
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    },
    {
        "name": "Marketing",
        "completed": true,
        "_id": "639c4118bcf353a00e0fca79",
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    },
    {
        "name": "Cooking",
        "completed": true,
        "_id": "639c4118bcf353a00e0fca7a",
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    },
    {
        "name": "Eating",
        "completed": false,
        "_id": "639c4118bcf353a00e0fca7b",
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    },
    {
        "name": "Sleeping",
        "completed": false,
        "_id": "639c4118bcf353a00e0fca7c",
        "createdAt": "2022-12-16T09:57:44.983Z",
        "updatedAt": "2022-12-16T09:57:44.983Z"
    }
]
```
## FIND BY id
> GET: http://localhost:5050/api/v1/get/:id
> PATH VARIABLE: id -> 639c4118bcf353a00e0fca79
> OUTPUT 
```javascript
{
    "_id": "639c4118bcf353a00e0fca79",
    "name": "Marketing",
    "completed": true,
    "createdAt": "2022-12-16T09:57:44.983Z",
    "updatedAt": "2022-12-16T09:57:44.983Z"
}
```
## DELETE BY id
## UPDATE BY id