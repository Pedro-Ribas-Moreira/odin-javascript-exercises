const ftoc = function (fahrenheit) {
  let fTemp = fahrenheit;
  let fToCel = ((fTemp - 32) * 5) / 9;

  let result = Math.round(fToCel * 10) / 10;
  return result;
};

const ctof = function (celsius) {
  var cTemp = celsius;
  var cToFahr = (cTemp * 9) / 5 + 32;
  let result = Math.round(cToFahr * 10) / 10;

  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
