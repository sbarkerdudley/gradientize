import FastAverageColor from 'fast-average-color';
const fac = new FastAverageColor();

export const makeHSLAGradients = ([...colors]) => {
  //0 <= color <= 360
  let gradients = [];
  let qty = colors.length;
  let angle = 360 / qty;
  for (let i = 0; i < qty; i++) {
    gradients.push(
      `linear-gradient(${angle * i}deg, `
      + `hsla(${colors[i]}, 100%, 50%, 80%) 0%, `
      + `hsla(${colors[i]}, 100%, 50%, 0) 73%) `
    );
  }
  return gradients.join();
};

export const makeOffsetHSLAGradients = (colors, offset) => {
  return makeHSLAGradients(colors.map((x) => x + offset));
};

export const randomSliderValues = Array(2)
  .fill(randomSliderValue)
  .sort((a, b) => a - b);

export const randomSliderValue = Math.floor(Math.random() * 100);

export const steps = Array(9)
  .fill()
  .map((x, i) => ({ value: (i + 1) * 10 }));

  export const shuffleArray = (array) => {
    var shuffled = array.slice()
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled
  };

export const getHue = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var c   = max - min;
  var hue;
  if (c == 0) {
    hue = 0;
  } else {
    switch(max) {
      case r:
        var segment = (g - b) / c;
        var shift   = 0 / 60;       // R° / (360° / hex sides)
        if (segment < 0) {          // hue > 180, full rotation
          shift = 360 / 60;         // R° / (360° / hex sides)
        }
        hue = segment + shift;
        break;
      case g:
        var segment = (b - r) / c;
        var shift   = 120 / 60;     // G° / (360° / hex sides)
        hue = segment + shift;
        break;
      case b:
        var segment = (r - g) / c;
        var shift   = 240 / 60;     // B° / (360° / hex sides)
        hue = segment + shift;
        break;
    }
  }
  return hue * 60; // hue is in [0,6], scale it up
}

export const makeHSLAShadow = (color) => {

  return ({ boxShadow:
  `0px 10px 9.9px ${color}, `
  + `0px 20px 28.5px ${color}, `
  + `0px 80px 72.6px ${color}, `
  + `0px 120px 276px ${color}`
  })

}