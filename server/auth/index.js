require('dotenv').config();
const auth = require('express').Router();
// const auth = express.Router();
const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport')

const credentials = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URI,
}

passport.use(
  new SpotifyStrategy(credentials, (accessToken, refreshToken, expires_in, profile, done) => {
      // User.findOrCreate({spotifyId: profile.id}, function (err, user) {
      //   return done(err, user);
      // });
      console.log({spotifyId: profile.id});
      return done();
    }
  )
);

auth.get('/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true,
  })
);

auth.get(
  '/spotify/callback',
  passport.authenticate('spotify', {failureRedirect: '/login'}),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

// auth.get('/spotify/callback', (req, res) => {
//   let { code } = req.query;
//   console.log(code);
//   res.redirect();
// });

module.exports = auth;
