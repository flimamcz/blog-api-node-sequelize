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

module.exports = { createUser };
