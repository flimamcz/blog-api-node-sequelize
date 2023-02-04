const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const login = async (dataLogin) => {
  const { email, password } = dataLogin;

  const findLoginAuthorized = await User.findOne({
    where: { email, password },
  });

  if (!findLoginAuthorized) {
    return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  }

  const token = generateToken(email);

  return { type: null, message: token };
};

module.exports = {
  login,

};
