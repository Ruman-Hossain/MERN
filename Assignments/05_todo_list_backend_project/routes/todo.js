const express = require('express');
const profile = require('../controllers/profile');
const todoList = require('../controllers/todoList');
const auth = require('../middlewares/auth');
const router = express.Router();


// PROFILE 
// create
router.post('/create-profile',profile.create);
// login
router.post("/user-login", profile.login);
// select
router.get("/select-profile",auth,profile.select)
// update
router.put("/update-profile",auth,profile.update)

// TODO
// create
router.post('/create-todo',auth,todoList.create);
// select
router.get('/select-todo',auth,todoList.select);
// udpate
router.patch('/update-todo',auth,todoList.update);
// udpate status
router.param('/update-todo-status',auth,todoList.updateStatus);
// delete
router.delete('/delete-todo',auth,todoList.delete)

// QUERY
// select todo by status
router.get('/select-by-status',auth,todoList.selectByStatus);
// select todo by date
router.get('/select-by-date',auth,todoList.selectByDate);


module.exports = router;