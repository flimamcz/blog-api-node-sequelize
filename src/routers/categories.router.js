const express = require('express');
const categories = require('../controllers/categories.controller');
const validateJWT = require('../utils/validateJWT');
const validateCategory = require('../middlewares/validateNameCategory');

const router = express.Router();

router.post('/', validateJWT, validateCategory, categories.createCategories);

module.exports = router;
