const express = require('express');
const HelloController = require('../controllers/HelloController');
const StudentsController = require('../controllers/StudentsController');
const router = express.Router();

//This is my first get routing
router.get('/hello-get',HelloController.HelloGet);
router.get('/hello-post',HelloController.HelloPost);

// Student Routing 
router.post('/insert-student',StudentsController.InsertStudent);       // POST: {{baseUrl}}/insert-student 
router.get('/read-student',StudentsController.ReadStudent);            // GET: {{baseUrl}}/read-student
router.patch('/update-student/:id',StudentsController.UpdateStudent);  // {{baseUrl}}/update-student/63b541355e19eaa059621391
router.delete('/delete-student/:id',StudentsController.DeleteStudent);  // 
module.exports = router;