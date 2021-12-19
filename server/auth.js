const passport = require('./passport.js');
const auth = require('express').Router();

auth.get('/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true,
    // failureRedirect: '/main'
    failureRedirect: '/auth/error'
  }, (req, res) => {
    res.redirect('/')
  })
);

auth.get('/spotify/callback',(req, res) => {
  console.log(req.query)
  // res.set('http://api.spotify.com/api/token')
  res.redirect('/');
  }
);

auth.get('/error', (req, res) => {
  // res.redirect('/')
  res.send('Error in Authentication')
});

module.exports = auth;
