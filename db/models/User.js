const mongoose = require('mongoose');
const Album = require('./Album');
const Artist = require('./Artist');
const Playlist = require('./Playlist');

const user = new mongoose.Schema({
  id: {
    type: primary_id,
    index: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  top: {
    artists: [Artist],
    albums: [Album],
  },
  playlists: [Playlist]
});

const User = mongoose.model('User', user);

module.exports = User;
