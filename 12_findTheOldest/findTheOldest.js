const findTheOldest = function (people) {
  let oldest;
  people.forEach((person) => {
    let age = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : parseInt(new Date().getFullYear()) - person.yearOfBirth;

    console.log(age);
    person["age"] = age;
    console.log(person);
    if (oldest == null) {
      oldest = person;
    } else if (oldest.age < person.age) {
      oldest = person;
    }
  });

  return oldest;
};

// console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
