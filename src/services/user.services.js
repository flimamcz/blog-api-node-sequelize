const { User } = require('../models');
const generateToken = require('../utils/generateToken');
const { validationCreateUser } = require('./validations/validation');

const createUser = async (data) => {
  const error = await validationCreateUser(data);
  if (error.type) return error;
  await User.create(data);
  const token = generateToken(data.email);
  return { type: null, message: token };
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) return { type: 'NOT_FOUND', message: 'User não encontrado' };

  return { type: null, message: user };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!users) return { type: 'NOT_FOUND', message: 'Nenhum User não encontrado' };
  return { type: null, message: users };
};

module.exports = { createUser, getUserByEmail, getAllUsers };
