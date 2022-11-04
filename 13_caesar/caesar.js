const caesar = function (message, n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newalpha = "";
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    if (offset < 0) {
      offset = offset + alphabet.length;
    }
    newalpha += alphabet[offset];
  }
  console.log(newalpha);

  let result = "";
  for (let i = 0; i < message.length; i++) {
    let index = alphabet.indexOf(message[i].toLowerCase());
    if (index != -1) {
      if (message[i] == message[i].toUpperCase()) {
        result += newalpha[index].toUpperCase();
      } else {
        result += newalpha[index];
      }
    } else {
      result += message[i];
    }
  }
  return result;
};

console.log(caesar("Ab c!", 3));
console.log(caesar("Ab c!", -3));
// Do not edit below this line
module.exports = caesar;
