const express = require('express');
const user = require('../controllers/user.controller.js');

const router = express.Router();

router.post('/', user);

module.exports = router;
