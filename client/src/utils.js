const FastAverageColor = require('fast-average-color');
const fac = new FastAverageColor();


fac.getColorAsync(imageString)
  .then(color => {

    console.log('Average color', color)
  })



  