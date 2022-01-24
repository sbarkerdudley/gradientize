const auth = require('express').Router();
const axios = require('axios');
const querystring = require('querystring');
const { Buffer } = require('buffer');

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

const authorizationURL = 'https://accounts.spotify.com/authorize?';
const tokenURL = 'https://accounts.spotify.com/api/token';

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
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  while (length--) {
    let random = Math.floor(Math.random() * possible.length);
    text += possible[random]
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

    const bufferString = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    axios({
      method: 'post',
      url: tokenURL,
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
      headers: {
        Authorization: `Basic ${bufferString}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
          /*
            {
              "access_token": "BQ...ayog",
              "token_type": "Bearer",
              "expires_in": 3600,
              "refresh_token": "AQAV...Ngc",
              "scope": "user-read-email user-read-recently-played user-read-private user-top-read"
            }
         */
      }
      res.send('This shouldn\'t happen');
    })
    .catch((err) => {
      res.send(err);
    });
  } catch (error) {
    res.status(404).send('u oh ');
  }
});

auth.get('/error', (req, res) => {
  res.redirect('/login');
});

module.exports = auth;
