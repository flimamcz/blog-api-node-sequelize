const { Category } = require('../models');

const create = async (newCategory) => {
  const created = await Category.create(newCategory);
  return { type: null, message: created };
};

module.exports = { create };
