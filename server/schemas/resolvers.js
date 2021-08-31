const { AuthenticationError } = require('apollo-server-express');
const { staff } = require('../models');
const { signToken } = require('../utils_server/auth');
