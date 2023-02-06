const { getAll, create, getById } = require('../services/post.services');

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

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const { type, message } = await getById(id);

    if (type) return res.status(404).json({ message });
    res.status(200).json(message);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = { getAllPosts, createPost, getPostById };
