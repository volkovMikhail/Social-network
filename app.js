const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const signUpRouter = require('./routes/sign-up/sign-up-router');

const app = express();

const config = require('./config');

const httpPort = config.httpPort;
const mongooseConnection = config.mongooseConnection;

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home');
});

app.use(signUpRouter);

app.get('*', (req, res) => res.sendStatus(404));

mongoose.connect(mongooseConnection);

app.listen(httpPort, () => {
  console.log(`Server listen: http://localhost:${httpPort}`);
});
