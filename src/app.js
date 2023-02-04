const express = require('express');
const { routerLogin, routerUser, routerCategories } = require('./routers');

// ...

const app = express();

app.use(express.json());

app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/user', routerUser);
app.use('/categories', routerCategories);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
