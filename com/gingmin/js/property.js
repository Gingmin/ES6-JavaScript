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

// let user = {
//    name: "John"
// };
//
// Object.defineProperty(user, "name", {
//    writable: false
// });
//
// user.name = "Pete";

// let user = {
// //    name: "John",
// //    toString() {
// //       return this.name;
// //    }
// // };
// // Object.defineProperty(user, "toString", {
// //    enumerable : false
// // });
// //
// // for(let key in user) console.log(key);

// let user = {
//    name: "John",
//    surname: "Smith",
//
//    get fullName() {
//       return `${this.name} ${this.surname}`;
//    },
//
//    set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//    }
// };
// user.fullName = "Alice Cooper";
// console.log(user.name);
// console.log(user.surname);

let user = {
   get name() {
      return this._name;
   },

   set name(value) {
      if(value.length < 4) {
         console.log("short!");
         return;
      }
      this._name = value;
   }
};
user.name = "Pete";
console.log(user.name);
user.name = "";