require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

const httpPort = process.env.HTTP_PORT;

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(httpPort);
