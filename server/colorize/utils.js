const FastAverageColor = require('fast-average-color');
const fac = new FastAverageColor();

const parseAlbumColorToCss = async (imageUrl) => {
  let averageColor = await fac.getColorAsync(
    imageUrl,
  ); /* Sample average color of smallest image */
  let hue = await getHue(...averageColor.value); /* Convert color to pure hue */
  let transparentHue = `hsla(${hue}, 100%, 50%, 0.34)`; /* Format for CSS */
  let opaqueHue = `hsl(${hue}, 100%, 50%)`; /* Format for CSS */

  return await [hue, makeHSLAShadow(transparentHue), opaqueHue];
};

const getHue = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var c = max - min;
  var hue;
  if (c === 0) {
    hue = 0;
  } else {
    switch (max) {
      case r:
        var segment = (g - b) / c;
        var shift = 0 / 60; // R° / (360° / hex sides)
        if (segment < 0) {
          // hue > 180, full rotation
          shift = 360 / 60; // R° / (360° / hex sides)
        }
        hue = segment + shift;
        break;
      case g:
        var segment = (b - r) / c;
        var shift = 120 / 60; // G° / (360° / hex sides)
        hue = segment + shift;
        break;
      case b:
        var segment = (r - g) / c;
        var shift = 240 / 60; // B° / (360° / hex sides)
        hue = segment + shift;
        break;
    }
  }
  return parseInt(hue * 60); // hue is in [0,6], scale it up
};

const makeHSLAShadow = (color) => {
  return ({
    boxShadow:
      `-10px 10px 9.9px ${color}, ` +
      `-20px 20px 28.5px ${color}, ` +
      `-6px 60px 52.6px ${color} `,
  });
};

module.exports = {
  parseAlbumColorToCss,
  getHue,
  makeHSLAShadow
};
