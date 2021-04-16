const toRgb = require('hex-rgb');
const tinygradient = require('tinygradient');
const Color = require('color');

function getGradient(start, end, segments) {
  const bounds = {
    start: toRgb(start),
    end: toRgb(end)
  };
  
  return tinygradient(
    { r: bounds.start.red, g: bounds.start.green, b: bounds.start.blue },
    { r: bounds.end.red, g: bounds.end.green, b: bounds.end.blue }
  )
  .rgb(segments)
  .map(segment => Color({ r: segment._r, g: segment._g, b: segment._b }).hex().toLowerCase().replace('#', ''));
}

console.log(
  getGradient(process.argv[2], process.argv[3], process.argv[4]).join('\n')
);