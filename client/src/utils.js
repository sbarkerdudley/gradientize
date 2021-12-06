

export const makeHSLAGradients = ([...colors]) => { //0 <= color <= 360
  let gradients = [];
  let qty = colors.length;
  let angle = 360 / qty;
  for (let i = 0; i < qty; i++) {
    gradients.push(`linear-gradient(${angle * i}deg, hsl(${colors[i]}, 100%, 50%) 0%, hsla(${colors[i]}, 100%, 50%, 0%) 67%) `)
  }
  return gradients.join();
};


export const makeOffsetHSLAGradients = (colors, offset) => {
  return makeHSLAGradients(colors.map(x => x + offset))
}

export const randomSliderValues = Array(2).fill().map(x => Math.floor(Math.random() * 20) * 5).sort();
export const randomSliderValue = Math.floor(Math.random() * 100);
export const steps = Array(9).fill().map((x, i) => ({ value: (i + 1) * 10 }));

export const shuffleArray = (array) => {
  let shuffled = []
  while (array.length) {
    let len = array.length - 1
    let i = Math.floor(Math.random() * len)
    shuffled.push(array.splice(i, i+1)[0])
  }
  return shuffled;
}