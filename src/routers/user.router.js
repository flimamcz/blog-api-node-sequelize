const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  // const { displayName, email, password, image } = req.body;
  res.status(201).send('create sucess');
});

module.exports = router;
