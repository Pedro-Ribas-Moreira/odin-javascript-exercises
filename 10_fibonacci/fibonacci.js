const fibonacci = function (numInteractions) {
  let num1 = 1;
  let num2 = 1;
  result = numInteractions;
  for (let i = 2; i < numInteractions; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  return result;
};

console.log(fibonacci(600));

// Do not edit below this line
module.exports = fibonacci;
/**
 const fibonacci = n => {
  if (n <= 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2)

};
*/
