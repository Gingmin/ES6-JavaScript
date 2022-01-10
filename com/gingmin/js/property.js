"use strict";
// let user = {
//   name: "John"
// };
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(JSON.stringify(descriptor, null, 2));

// let user = {};
//
// Object.defineProperty(user, "name", {
//     value: "John"
// });
//
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
//
// console.log(JSON.stringify(descriptor, null, 2));

let user = {
   name: "John"
};

Object.defineProperty(user, "name", {
   writable: false 
});

user.name = "Pete";