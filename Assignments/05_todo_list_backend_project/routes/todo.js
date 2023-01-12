const express = require('express');
const profile = require('../controllers/profile');
const todoList = require('../controllers/todoList');
const auth = require('../middlewares/auth');
const router = express.Router();


// PROFILE 
// create
router.post('/user/create',profile.create);
// login
router.post("/user/login", profile.login);
// select
router.get("/user/select",auth,profile.select)
// update
router.patch("/user/update",auth,profile.update)

// TODO
// create
router.post('/todo/create',auth,todoList.create);
// select
router.get('/todo/select',auth,todoList.select);
// udpate
router.patch('/todo/update',auth,todoList.update);
// udpate status
router.patch('/todo/update-by-status',auth,todoList.updateStatus);
// delete
router.delete('/todo/delete',auth,todoList.delete)

// QUERY
// select todo by status
router.get('/todo/select-by-status',auth,todoList.selectByStatus);
// select todo by date
router.get('/todo/select-by-date',auth,todoList.selectByDate);

// router.post('*',(req,res)=>{
//     res.status(404).json({status:'Route Not Found'});
// });


module.exports = router;