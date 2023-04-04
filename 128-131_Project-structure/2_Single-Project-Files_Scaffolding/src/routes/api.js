const express=require('express');
const router = express.Router();
const HelloController = require('../controllers/HelloController')
// API Routing End Point
router.get('/hello',HelloController.hello)
module.exports = router;