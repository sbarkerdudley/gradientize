const mongoose = require('mongoose');

const artist = new mongoose.Schema({
  id: {
    type: String,
    index: true,
    unique: true,
  },
  genres: [String],
  type: 'artist',
  images: [
    {
      url: {
        type: String,
        unique: true,
      },
      height: String,
      width: String,
    },
  ],
  href: String,
  uri: String,
  url: String,
});

const Artist = mongoose.model('Artist', artist);

module.exports = Artist;
