const { createUser } = require('../services/user.services');
const errorMap = require('../utils/errorMap');

const user = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  if (!displayName || !email || !password) {
    return res.status(400).send({
      message: 'Invalid values.',
    });
  }

  const { type, message } = await createUser({
    displayName,
    email,
    password,
    image,
  });

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(201).send({ token: message });
};

module.exports = user;
