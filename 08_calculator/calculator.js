const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  const sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sum;
};

const multiply = function (arr) {
  const result = arr.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
