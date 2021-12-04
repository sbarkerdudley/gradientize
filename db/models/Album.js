const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
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

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;