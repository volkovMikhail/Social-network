const { check } = require('express-validator');

exports.signUpValidator = () => {
  return [
    check('email')
      .notEmpty()
      .withMessage('email is required')
      .isEmail()
      .withMessage('incorrect email'),
    check('nickname')
      .notEmpty()
      .withMessage('nickname is required')
      .custom((nickname) => {
        const format = /[!@#$%^&*()_+\=\[\]{};':"\\|,<>\/?]+/;

        return !format.test(nickname);
      })
      .withMessage('nickname has special characters'),
    check('password')
      .notEmpty()
      .withMessage('password is required')
      .isStrongPassword({
        minLength: 8,
        minLowercase: 3,
        minNumbers: 1,
        minSymbols: 0,
        minUppercase: 0,
      })
      .withMessage(
        'password must be 8 characters and at least 1 number and 3 lowercase letters'
      ),
  ];
};
