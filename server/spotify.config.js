require('dotenv').config();
const axios = require('axios');

const config = {
  client_id = process.env.CLIENT_ID,
  client_secret = process.env.CLIENT_SECRET,
  redirect_uri = process.env.REDIRECT_URI,
  baseURL: 'https://api.spotify.com',
  headers: {
    'Content-Type': 'application/json'
  },
}

module.exports = axios.create(config);
