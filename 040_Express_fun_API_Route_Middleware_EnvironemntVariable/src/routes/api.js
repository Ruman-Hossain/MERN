const express = require('express');
const HelloController = require('../controllers/HelloController');
const router = express.Router();

router.get('/hello-get',HelloController.HelloGet);
router.post('/hello-post',HelloController.HelloPost);

module.exports = router;