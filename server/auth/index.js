const auth = require('express').Router();
const axios = require('axios');
const querystring = require('querystring');
const fs = require('fs');
const { Buffer } = require('buffer');

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const client_base_url = process.env.CLIENT_URL;

const CREDENTIALS = Buffer.from(`${client_id}:${client_secret}`).toString(
  'base64',
);

const authorizationURL = 'https://accounts.spotify.com/authorize?';
const tokenURL = 'https://accounts.spotify.com/api/token';
const baseURL = 'https://api.spotify.com';
const userURL = `${baseURL}/v1/me`;

const scopes = [
  // 'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-collaborative',
  'playlist-read-private',
  'streaming',
  'user-library-modify',
  'user-library-read',
  'user-read-private',
  'user-top-read',
  'user-follow-read',
];

const xscopes = [
  'user-read-email',
  'user-read-private',
  'user-top-read',
  'user-read-recently-played',
  'user-library-read',
  'user-library-modify',
  // 'playlist-modify-private',
  // 'playlist-read-public',
  // 'playlist-read-private',
  // 'playlist-modify-public',
];

const scope = scopes.join(' ');

const stateKey = 'spotify_auth_state';

const generateRandomString = (length) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  while (length--) {
    let random = Math.floor(Math.random() * possible.length);
    text += possible[random];
  }
  return text;
};

auth.get('/spotify', (req, res) => {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  let params = querystring.stringify({
    client_id,
    response_type: 'code',
    scope,
    redirect_uri,
    state,
  });

  res.redirect(authorizationURL + params);
});

auth.get('/spotify/callback', (req, res) => {
  try {
    let { code } = req.query;
    if (!code) throw 'Maybe change this to null';

    axios({
      method: 'post',
      url: tokenURL,
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
        show_dialog: true,
      }),
      headers: {
        Authorization: `Basic ${CREDENTIALS}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          let { data } = response;
          let { access_token, token_type, expires_in, refresh_token } = data;

          let queryParams = querystring.stringify({
            access_token,
            refresh_token,
            expires_in,
          });

          res.redirect(`${client_base_url}/?${queryParams}`);
        } else {
          throw 'Unauthorized user';
        }
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  } catch (error) {
    res.status(404).send('u oh ');
  }
});

auth.get('/refresh_token', (req, res) => {
  const { refresh_token } = req.query;

  axios
    .post(tokenURL, {
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: CREDENTIALS,
      },
    })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.redirect('/auth/error');
    });
});

auth.get('/error', (req, res) => {
  res.redirect('/login');
});

module.exports = auth;
