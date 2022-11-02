const removeFromArray = function (arr, ...arg) {
  let argArray = Array.from(arg);
  console.log(argArray);
  for (let i = 0; i < argArray.length; i++) {
    const index = arr.indexOf(argArray[i]);
    if (index !== null && index !== -1) {
      arr.splice(index, 1);
    }
  }

  console.log(arr);
  return arr;
};

// removeFromArray([1, 2, 3, 4], 3, 2, "pedro", 5, "4");

// Do not edit below this line
module.exports = removeFromArray;
