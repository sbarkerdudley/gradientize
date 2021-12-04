import FastAverageColor from 'fast-average-color';
const fac = new FastAverageColor();

import


fac.getColorAsync(imageString).then((color) => {
  console.log('Average color', color);
});

function makeGradient(deg, ...colors) {
  let stops = "";
  for (let i = 1; i < colors.length - 1; i += 1) {
    stops += `${colors[i]} ${i / (colors.length - 1) * 100}%, `;
  }
  return `linear-gradient(${deg}deg, ${colors[0]} 0%, ${stops}${colors[colors.length - 1]} 100%)`;
}