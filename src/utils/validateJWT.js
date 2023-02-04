const jwt = require('jsonwebtoken');
const userService = require('../services/user.services');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getUserByEmail(decoded.data.value);
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;
