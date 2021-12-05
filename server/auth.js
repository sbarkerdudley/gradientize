const passport = require('./passport.js');
const auth = require('express').Router();

auth.get('/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true,
    failureRedirect: '/main'
    // failureRedirect: '/auth/error'
  }, (req, res) => {
    res.redirect('/main')
  })
);

auth.get('/spotify/callback',
  // passport.authenticate('spotify', {failureRedirect: '/main'}),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/main');
  }
);

auth.get('/error', (req, res) => {
  res.redirect('/main')
  // res.send('Error in Authentication')
});

module.exports = auth;
