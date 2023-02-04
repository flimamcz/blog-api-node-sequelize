const { create, getAll } = require('../services/categories.services');
const errorMap = require('../utils/errorMap');

const createCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const { type, message } = await create({ name });
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const { message } = await getAll();
    res.status(200).json(message);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = { createCategories, getAllCategories };
