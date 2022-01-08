const passport = require('./passport')
const auth = require('express').Router();

auth.get('/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true,
    // failureRedirect: '/main'
    failureRedirect: '/auth/error'
  }, (req, res) => {
    res.redirect('/butts')
  })
);

auth.get('/spotify/callback',(req, res) => {
  try {
    console.log(req.query)
    let {code} = req?.query
    if (code) {
      res.redirect('/#' + code);
    } else {
      throw new Error()
    }
  } catch (error) {
    res.redirect('/error')
  }
  }
);

auth.get('/error', (req, res) => {
  // res.redirect('/')
  res.send('Error in Authentication')
});

module.exports = auth;
