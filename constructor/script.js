"use strict";
// Two functions – one object

// let obj = {};

// function A() {
//   return obj;
// }
// function B() {
//   return obj;
// }

// alert(new A() == new B());

// Create new Calculator
// function Calculator() {
//   this.read = function() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   };
//   this.sum = function() {
//     return this.a + this.b;
//   };
//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert(calculator.sum());

// Create new Accumulator
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt("What to add?", 0);
  };
}

let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);
