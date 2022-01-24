require('dotenv').config();
const axios = require('axios');

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

const config = {
  client_id,
  client_secret,
  redirect_uri,
  baseURL: 'https://api.spotify.com',
  headers: {
    'Content-Type': 'application/json'
  },
}

module.exports = axios.create(config);