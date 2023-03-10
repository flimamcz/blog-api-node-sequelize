const { getAll, getById } = require('../services/post.services');
const errorMap = require('../utils/errorMap');

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

    if (type) return res.status(errorMap.mapError(type)).json({ message });
    res.status(200).json(message);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = { getAllPosts, getPostById };
