const bcrypt = require('bcrypt');

const { User } = require('../../db/schemas/user-scheme');
const { UserError } = require('./errors/user-error');

const config = require('../../config');

class UserService {
  async registerUser({ nickname, email, password }) {
    const existingUser = await User.findOne({ $or: [{ nickname }, { email }] });

    if (existingUser) {
      throw new UserError('User with this nickname or email already exist');
    }

    const salt = await bcrypt.genSalt(config.saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ password: hashedPassword, email, nickname });
    return user.save();
  }
}

module.exports = { UserService };
