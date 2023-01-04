const express = require('express');
const HelloController = require('../controllers/HelloController');
const router = express.Router();

//This is my first get routing
router.get('/hello-get',HelloController.HelloGet);
router.get('/hello-post',HelloController.HelloPost);

module.exports = router;