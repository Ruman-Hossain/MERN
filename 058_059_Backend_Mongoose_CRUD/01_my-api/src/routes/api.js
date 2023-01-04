const express = require('express');
const HelloController = require('../controllers/HelloController');
const StudentsController = require('../controllers/StudentsController');
const router = express.Router();

//This is my first get routing
router.get('/hello-get',HelloController.HelloGet);
router.get('/hello-post',HelloController.HelloPost);

// Student Routing 
router.post('/insert-student',StudentsController.InsertStudent);
router.get('/read-student',StudentsController.ReadStudent);
module.exports = router;