const { login: isLogin } = require('../services/login.service.js');
// const errorMap = require('../utils/errorMap');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }

    const { type, message } = await isLogin({ email, password });
    if (type) return res.status(400).json({ message });

    res.status(200).json({ token: message });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = login;
