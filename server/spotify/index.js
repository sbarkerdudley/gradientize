const axios = require('axios');
const spotify = require('express').Router();

spotify.get('/top/:type', (req, res) => {
  res.send('hello world');
});

spotify.get('/test', async (req, res) => {
  let {body, data} = req
  console.log({body, data});
  try {
    let colorized = await axios.get('http://localhost:3000/colorize/', {
      data: body
    })
    res.send(colorized)

  } catch (err) {
    res.send(err)
  }
});

spotify.get('/me', (req, res) => {

  axios.get()
})

module.exports = spotify;
