export const makeHSLAGradients = ([...colors]) => {
  //0 <= color <= 360
  let gradients = [];
  let qty = colors.length;
  let angle = 360 / qty;
  for (let i = 0; i < qty; i++) {
    gradients.push(
      `linear-gradient(${angle * i}deg, `
      + `hsla(${colors[i]}, 100%, 50%, 0.9) 0%, `
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
