const { PostCategory, User, Category, BlogPost } = require('../models');

const create = async (newBlog) => {
  const createdPostCategoryId = await PostCategory.create(newBlog);
  const findCreatedPost = await PostCategory.findByPk(createdPostCategoryId);
  return { type: null, message: findCreatedPost };
};

const getAll = async () => {
  const result = await BlogPost.findAll({
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { type: null, message: result };
};

module.exports = {
  getAll,
  create,
};
