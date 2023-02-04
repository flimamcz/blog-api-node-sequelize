const { Category } = require('../models');

const create = async (newCategory) => {
  const created = await Category.create(newCategory);
  return { type: null, message: created };
};

const getAll = async () => {
  const categories = await Category.findAll();
  if (!categories) {
    return { type: 'NOT_FOUND', message: 'Categories does not exist' };
  }

  return { type: null, message: categories };
};

module.exports = { create, getAll };
