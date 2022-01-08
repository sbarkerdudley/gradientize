require('dotenv').config();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

const credentials = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/spotify/callback'
}

passport.use(
  new SpotifyStrategy(credentials, (accessToken, refreshToken, expires_in, profile, done) => {
      console.log({spotifyId: profile.id}, accessToken, refreshToken, expires_in, profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


module.exports = passport