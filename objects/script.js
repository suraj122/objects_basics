'use strict';

// let user = new Object(); //"object constructor" syntax
// let user = {}; //"object literal" syntax

// let user = {        // an object
// 	name: "John",     // key "name" with value "John" 
// 	age: "30",         // key "age" with value "30"
// };

// alert(user.name);
// alert(user.age);

// user.isAdmin = true;

// delete user.age;
// user["likes bird"] = true;
// alert(user["likes bird"]);

// let currentUser = {
// 	name: "Joseph",
// 	age: 40,
// }
// let key = prompt("what do you want to know about user?", "name");

// alert(currentUser[key]);

// Computed properties

let fruit = prompt("which fruit you want to buy?", "apple");

let bag = {
	[fruit + 'Computers']: 5,
}

alert(bag.orangeComputers);