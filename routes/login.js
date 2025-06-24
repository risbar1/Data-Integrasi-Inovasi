const express = require('express');
const controller = require('../controllers/LoginController.js');

const router = express.Router();

router.post('/', controller.Login);
module.exports = router;