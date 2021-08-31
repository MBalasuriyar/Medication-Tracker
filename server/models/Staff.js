const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { Staff } = require('.');

const staffSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
  },
  id: {
      type: String,
      required: true,
      unique: true,
      trim: true,

    },
  
});


const Staff = model('Staff', StaffSchema);

module.exports = Staff