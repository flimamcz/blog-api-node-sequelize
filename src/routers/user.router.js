const express = require('express');
const { user, getAllUser } = require('../controllers/user.controller.js');
const validateJWT = require('../utils/validateJWT');

const router = express.Router();

router.get('/', validateJWT, getAllUser);
router.post('/', user);

module.exports = router;
