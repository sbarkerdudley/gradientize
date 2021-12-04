require('dotenv').config();
const auth = require('express').Router();
const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');

const credentials = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/spotify/callback',
  scope: []
}

passport.use(
  new SpotifyStrategy(credentials, (accessToken, refreshToken, expires_in, profile, done) => {
      // User.findOrCreate({spotifyId: profile.id}, function (err, user) {
      //   return done(err, user);
      // });
      console.log({spotifyId: profile.id}, accessToken, refreshToken, expires_in, profile);
      return done();
    }
  )
);

auth.get('/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true,
    failureRedirect: '/auth/error'
  }, (req, res) => {
    res.redirect('/main')
  })
);

auth.get(
  '/spotify/callback',
  passport.authenticate('spotify', {failureRedirect: '/auth/error'}),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/main');
  }
);

auth.get('/error', (req, res) => {
  res.send('Error in Authentication')
});

module.exports = {auth, passport};
