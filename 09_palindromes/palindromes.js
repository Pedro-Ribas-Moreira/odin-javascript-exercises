const palindromes = function (str) {
  let str1 = str
    .replace(/[^\w " "]/g, "")
    .split(" ")
    .join("")
    .toLowerCase();
  let counter = str1.length;
  let compareStr = [];
  for (let i = counter; i >= 0; i--) {
    compareStr.push(str1[i]);
  }

  return str1 === compareStr.join("") ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
