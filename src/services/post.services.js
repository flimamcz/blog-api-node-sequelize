const { PostCategory, User, Category, BlogPost } = require('../models');

const create = async (_newBlog) => {
  // const { title, content, categoryIds } = newBlog;
  // const post = await BlogPost.create({
  //   title,
  //   content,
  //   usercategoryIds
  // });
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

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };

  return { type: null, message: post };
};

module.exports = {
  getAll,
  create,
  getById,
};
