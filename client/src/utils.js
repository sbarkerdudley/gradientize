export const makeHSLAGradients = ([...colors]) => {
  //0 <= color <= 360
  let gradients = [];
  let qty = colors.length;
  let angle = 360 / qty;
  for (let i = 0; i < qty; i++) {
    gradients.push(
      `linear-gradient(${angle * i}deg, hsla(${colors[i]}, 100%, 50%, 0.9) 0%, hsla(${
        colors[i]
      }, 100%, 50%, 0%) 67%) `
    );
  }
  return gradients.join();
};

export const makeOffsetHSLAGradients = (colors, offset) => {
  return makeHSLAGradients(colors.map((x) => x + offset));
};

export const randomSliderValues = Array(2)
  .fill()
  .map((x) => Math.floor(Math.random() * 20) * 5)
  .sort();
export const randomSliderValue = Math.floor(Math.random() * 100);
export const steps = Array(9)
  .fill()
  .map((x, i) => ({ value: (i + 1) * 10 }));

export const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
