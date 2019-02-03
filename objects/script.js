'use strict';

let user = new Object(); //"object constructor" syntax
let user = {}; //"object literal" syntax

let user = {        // an object
	name: "John",     // key "name" with value "John" 
	age: "30",         // key "age" with value "30"
};

alert(user.name);
alert(user.age);

user.isAdmin = true;

delete user.age;
user["likes bird"] = true;
alert(user["likes bird"]);

let currentUser = {
	name: "Joseph",
	age: 40,
}
let key = prompt("what do you want to know about user?", "name");

alert(currentUser[key]);

// Computed properties

let fruit = prompt("which fruit you want to buy?", "apple");

let bag = {
	[fruit + 'Computers']: 5,
}

alert(bag.orangeComputers);

let obj = {};
obj._proto_ = 5;
alert(obj.__proto__);

// property value shorthand
function makeUser(name, age) {
	return {
		// name: name,
		// age: age,
		name,
		age,
	};
}

let user = makeUser("John", 40);
let user = {
	name,
	age: 30,
}
alert(user.age);

// Existence check
// let person = {};


let person = {name: "John", age: "30"};

alert("age" in person);
alert("blabla" in person);
alert(person.noSuchProperty === undefined );

let key = "age";
alert(key in person);

let obj = {
	test: undefined
};

alert(obj.test);

alert( "test" in obj);








