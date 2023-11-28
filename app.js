require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const signUpRouter = require('./routes/sign-up/sign-up-router');

const app = express();

const httpPort = process.env.HTTP_PORT;

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

app.listen(httpPort);
