const fakeData = require('./data')

const colorize = require('express').Router();
const {
  parseAlbumColorToCss,
  getHue,
  makeHSLAShadow
} = require('./utils');


colorize.get('/', async (req, res) => {
  let body = fakeData.albums.items
  console.log(body, 'colorize');
  try {
    if (!body) throw 'Error sampling average color'

    let colorized = await Promise.all(body.map(async (album) => {

      let [hue, shadow, opaque] = await parseAlbumColorToCss(album.images[2].url)
      album.hue = hue
      album.shadow = shadow
      album.opaque = opaque
      return album;
    }))

    res.send(colorized);
  } catch (error) {
    res.send(`<pre style='color="pink";'>${error}</pre>`)
  }

})

module.exports = colorize;
