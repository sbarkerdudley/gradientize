require('dotenv').config();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

const CREDENTIALS = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.REDIRECT_URI,
}

passport.use(
  new SpotifyStrategy(CREDENTIALS,
    (accessToken, refreshToken, expires_in, profile, done) => {
      console.log('profile.id: ', profile.id, 'access token: ', accessToken, 'refresh token: ', refreshToken, 'expires in: ', expires_in, 'pr0file: ', profile);
      return done(null, profile);
    }

  )
);

module.exports = passport