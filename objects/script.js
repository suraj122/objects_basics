"use strict";

// Hello Object
let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";
delete user.name;

alert(user.name);

// Check for emptiness

function isEmpty(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  if (count == 0) {
    return true;
  } else return false;
}

let schdule = {};
console.log(isEmpty(schdule));

// Sum object properties

function objSum(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

console.log(objSum(salaries));

// Multiply Numeric Obj properties by 2

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));
