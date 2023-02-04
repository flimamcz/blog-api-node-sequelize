const express = require('express');
const { user, getAllUser, getUserId } = require('../controllers/user.controller.js');
const validateJWT = require('../utils/validateJWT');

const router = express.Router();

router.get('/', validateJWT, getAllUser);
router.get('/:id', validateJWT, getUserId);
router.post('/', user);

module.exports = router;
