require('dotenv').config();
const spotify = require('express').Router();

spotify.get('/', (req, res) => {
  res.send('hello world')


})



module.exports = spotify;
