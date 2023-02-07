const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const { sequelize, sessionStore } = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret', //a random string, should not be exposed, usally long and randomly generated
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
}));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

//"express-session" is a session management middleware, while "connect-session-sequelize" is a specific implementation of a session store that uses the Sequelize ORM to store session data in a database. "express-session" provides the general mechanism for managing user sessions, while "connect-session-sequelize" provides a way to store the session data in a persistent manner.