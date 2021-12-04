const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  shirt: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert']
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
