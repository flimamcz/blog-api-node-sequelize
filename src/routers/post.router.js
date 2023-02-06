const express = require('express');
const {
  getAllPosts,
  createPost,
  getPostById,
} = require('../controllers/post.controller');
const validateJWT = require('../utils/validateJWT');

const router = express.Router();

router.get('/', validateJWT, getAllPosts);
router.post('/', validateJWT, createPost);
router.get('/:id', validateJWT, getPostById);

module.exports = router;
