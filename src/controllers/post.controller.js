const { getAll, create } = require('../services/post.services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    const { message } = await create({ title, content, categoryIds });
    res.status(200).json(message);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const { message } = await getAll();
    res.status(200).json(message);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = { getAllPosts, createPost };
