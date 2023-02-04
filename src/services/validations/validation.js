const { validateLogin, validateUser } = require('./schema');
const { User } = require('../../models');

const validationLogin = (dataLogin) => {
  const { error } = validateLogin.validate(dataLogin);

  if (error) {
    return {
      type: 'INVALID_VALUE',
      message: 'Some required fields are missing',
    };
  }

  return { type: null, message: '' };
};

const validateExistUser = async (dataLogin) => {
  const existUser = User.findOne({
    where: { email: dataLogin.email },
  });

  if (!existUser) return { type: 'NOT_FOUND', message: 'Invalid fields' };

  return { type: null, message: '' };
};

const validationCreateUser = async ({ email, password, displayName }) => {
  const { error } = validateUser.validate({ email, password, displayName });
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  const findUserByEmail = await User.findOne({
    where: { email },
  });

  if (findUserByEmail) return { type: 'DUPLICATE', message: 'User already registered' };
  return { type: null, message: '' };
};

module.exports = {
  validationLogin,
  validateExistUser,
  validationCreateUser,
};
