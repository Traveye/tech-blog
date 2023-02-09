const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const { sequelize, sessionStore } = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'toseeaworldinagrainofsand',
  cookie: {
    maxAge: 3600,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
}));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`));
});

//"express-session" is a session management middleware, while "connect-session-sequelize" is a specific implementation of a session store that uses the Sequelize ORM to store session data in a database. "express-session" provides the general mechanism for managing user sessions, while "connect-session-sequelize" provides a way to store the session data in a persistent manner.