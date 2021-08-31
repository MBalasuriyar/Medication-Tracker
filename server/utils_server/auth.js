const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const expiration = '0.5h';

module.exports = {
  signToken: function ({ email, name, id, _id }) {
    const payload = { email, name, id, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
