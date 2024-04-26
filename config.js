require('dotenv').config();

const config = {
  httpPort: process.env.HTTP_PORT ?? 3000,
  mongooseConnection: process.env.MONGODB_CONNECTION,
  saltRounds: Number(process.env.BCRYPT_SALT_ROUNDS ?? 10)
};

function checkConfig(config) {
  const errors = [];
  Object.keys(config).forEach(key => {
    if (config[key] === undefined) {
      errors.push(`- ${key} is undefined`);
    }
  });

  if (errors.length > 0) {
    errors.push('!!! Check Environment variables !!!');

    throw new Error(errors.join('\n'));
  }
}

checkConfig(config);

module.exports = config;