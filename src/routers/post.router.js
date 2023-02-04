const express = require('express');
const { getAllPosts, createPost } = require('../controllers/post.controller');
const validateJWT = require('../utils/validateJWT');

const router = express.Router();

router.get('/', validateJWT, getAllPosts);
router.post('/', validateJWT, createPost);

module.exports = router;
