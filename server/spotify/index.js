const spotify = require('express').Router();
const axios = require('axios');

spotify.get('/top/:type', (req, res) => {
  let {type} = req.params;
  res.send(JSON.stringify({type}));
});

spotify.post('/test', async (req, res) => {
  let {body} = req

  try {
    let colorized = await axios.post('http://localhost:3000/colorize/', {
      data: body
    })
    res.json(colorized)

  } catch (err) {
    res.send(err)
  }
});

spotify.get('/me', (req, res) => {

  axios.get()
})

module.exports = spotify;
