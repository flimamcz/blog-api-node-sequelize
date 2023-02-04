const { validateLogin } = require('./schema');
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

module.exports = {
  validationLogin,
  validateExistUser,
};
