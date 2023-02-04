const express = require('express');
const {
  routerLogin,
  routerUser,
  routerCategories,
  routerPost,
} = require('./routers');

const app = express();

app.use(express.json());

app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategories);
app.use('/post', routerPost);

module.exports = app;
