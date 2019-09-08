"use strict";
// Syntax check
let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
};

user.go();

// Explain the value of "this"
let obj, method;
obj = {
  go: function() {
    alert(this);
  }
};
obj.go();

(method = obj.go)();
(obj.go || obj.stop)();

// Using "this" in object literal

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user1 = makeUser();

alert(user1.ref().name);

// Create a calculator
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("chose one value", 0);
    this.b = +prompt("chose another value", 0);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
