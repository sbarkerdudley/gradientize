const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const auth = require('./auth');
const User = require('./user');
const colorize = require('./colorize');
const spotify = require('./spotify');

const DIST = path.resolve(__dirname, '../', 'client', 'dist');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);
app.use('/spotify', spotify);
app.use('/colorize', colorize);

app.use('/', express.static(DIST));

app.get('/login', (req, res) => {
  res.redirect('/auth/spotify')
});

module.exports = app;
