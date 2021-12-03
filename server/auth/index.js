require('dotenv').config();

const axios = require('axios');
const express = require('express');
const auth = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CALLBACK_URI = process.env.CALLBACK_URI;

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
  function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

auth.get('/login', (req, res) => {
  res.redirect(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${CALLBACK_URI}`
  );
});

auth.get('/callback', (req, res) => {
  let { code } = req.query;
  console.log(code);
  res.redirect();
});

module.exports = auth;
