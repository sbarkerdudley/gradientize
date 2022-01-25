const auth = require('express').Router();
const axios = require('axios');
const querystring = require('querystring');
const fs = require('fs');
const { Buffer } = require('buffer');

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

const CREDENTIALS = Buffer.from(`${client_id}:${client_secret}`).toString(
  'base64',
);

const authorizationURL = 'https://accounts.spotify.com/authorize?';
const tokenURL = 'https://accounts.spotify.com/api/token';
const baseURL = 'https://api.spotify.com';
const userURL = `${baseURL}/v1/me`;



const scopes = [
  'user-read-email',
  'user-read-private',
  'user-top-read',
  'user-read-recently-played',
  // 'user-library-read',
  // 'user-library-modify',
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
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  let params = querystring.stringify({
    // show_dialog: true,
    client_id,
    response_type: 'code',
    redirect_uri,
    state,
    scope,
  });

  res.redirect(authorizationURL + params);
});

auth.get('/spotify/callback', (req, res) => {
  let { code } = req.query;
  console.log(code);

  try {
    if (!code) throw new Error();

    return axios({
      method: 'post',
      url: tokenURL,
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
      headers: {
        Authorization: `Basic ${CREDENTIALS}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          let { data } = response;
          let { access_token, token_type, expires_in, refresh_token } = data;
          // return res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
          /*
            {
              "access_token": "...",
              "token_type": "Bearer",
              "expires_in": 3600,
              "refresh_token": "...",
              "scope": "user-read-email user-read-recently-played user-read-private user-top-read"
            }
         */
          return axios.get(userURL, {
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          });
        }
        res.send("This shouldn't happen");
      })
      .then(test => {
        res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);

      })
      .then((response) => {
        if (!response.data) return new Error();
        let { access_token, token_type, expires_in, refresh_token, scope } =
          response.data;
        res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
        // This works
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        res.send(err);
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
        refresh_token: refresh_token,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: CREDENTIALS,
      },
    })

    .catch((error) => {
      res.send(error);
    });
});

auth.get('/error', (req, res) => {
  res.redirect('/login');
});

module.exports = auth;
