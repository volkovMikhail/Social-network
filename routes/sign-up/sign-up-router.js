const { validate } = require('../../middlewares/validator');
const { signUpValidator } = require('./validators/sign-up-validator');
const express = require('express');
const router = express.Router();

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

router.post('/sign-up', validate(signUpValidator()), (req, res) => {
  console.log(req.body);

  res.redirect('/sign-up');
});

module.exports = router;
