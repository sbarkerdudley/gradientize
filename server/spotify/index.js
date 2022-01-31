const spotify = require('express').Router();
const axios = require('axios');

spotify.get('/top/:type', (req, res) => {
  let {type} = req.params;
  res.send(JSON.stringify({type}));
});

spotify.get('/test', (req, res) => {
  let {body} = req

  try {
    axios.post('http://localhost:3000/colorize/', {
      body
    })
    .then(response => response.body)
    .then(thing => res.send(thing))

  } catch (err) {
    res.send(err)
  }
});

spotify.get('/me', (req, res) => {

  axios.get()
})

module.exports = spotify;
