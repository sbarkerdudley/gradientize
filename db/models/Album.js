const mongoose = require('mongoose');

const album = new mongoose.Schema({
  id: {
    type: String,
    index: true,
    unique: true,
  },
  type: 'album',
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

const Album = mongoose.model('Album', album);

module.exports = Album;
