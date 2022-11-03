const leapYears = function (year) {
  let isLeap = true;

  if (year % 4 !== 0) {
    isLeap = false;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    isLeap = false;
  }

  return isLeap;
};

leapYears(1900);
// Do not edit below this line
module.exports = leapYears;
