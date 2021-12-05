

export const makeHSLGradient = ([...colors]) => { //0 <= color <= 360
  let stops = "";
  let gradients = [];
  let qty = colors.length;
  let angle = 360 / qty;
  for (let i = 1; i < qty - 1; i++) {
    stops += `hsl(${colors[i]}, 100%, 50%) ${i / (qty - 1) * 100}%, `;
  }
  return `linear-gradient(${angle * i}deg, hsl(${colors[0]}, 100%, 50%) 0%,${stops}hsl(${colors[qty - 1]}, 100%, 50%) 100%)`;
};


export const makeSeveralGradients = ([...colors]) => { //0 <= color <= 360
  let gradients = [];
  let qty = colors.length;
  let angle = 360 / qty;
  for (let i = 0; i < qty; i++) {
    gradients.push(`linear-gradient(${angle * i}deg, hsl(${colors[i]}, 100%, 50%) 0%, hsl(${colors[i] + 60}, 100%, 50%) 63%) `)
  }
  return gradients.join();
};

export const makeHSLAGradients = ([...colors]) => { //0 <= color <= 360
  let gradients = [];
  let qty = colors.length;
  let angle = 360 / qty;
  for (let i = 0; i < qty; i++) {
    gradients.push(`linear-gradient(${angle * i}deg, hsl(${colors[i]}, 100%, 50%) 0%, hsla(${colors[i]}, 100%, 50%, 0%) 73%) `)
  }
  return gradients.join();
};


export const makeOffsetHSLAGradients = (colors) => {
  return makeHSLAGradients(colors.map(x => x + 180))
}