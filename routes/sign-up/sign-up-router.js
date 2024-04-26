const express = require('express');
const router = express.Router();

const { validate } = require('../../middlewares/validator');
const { signUpValidator } = require('./validators/sign-up-validator');
const { UserError } = require('../../domain/user/errors/user-error');
const { UserService } = require('../../domain/user/user-service');

const userService = new UserService();

router.get('/sign-up', (req, res) => {
  res.render('sign-up/form');
});

router.post('/sign-up', validate(signUpValidator()), async (req, res) => {
  try {
    await userService.registerUser(req.body);

    res.render('sign-up/success-sign-up');
  } catch (error) {
    if (error instanceof UserError) {
      res.render('sign-up/form', {
        message: error.message,
      });
    }
  }
});

module.exports = router;
