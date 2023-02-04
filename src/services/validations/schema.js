const Joi = require('joi');

const validateLogin = Joi.object({
  email: Joi.string().min(5).required(),
  password: Joi.string().min(6).required(),
});

const validateUser = Joi.object({
  email: Joi.string().email().min(5).required(),
  displayName: Joi.string().min(8).required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  validateLogin,
  validateUser,
};
