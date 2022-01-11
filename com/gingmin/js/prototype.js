"use strict";

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal;
//
// console.log(rabbit.eats);
// console.log(animal.eats);

// let user = {
//     name: "John",
//     surname: "Smith",
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };
//
// let admin = {
//     __proto__: user,
//     isAdmin: true
// };

// console.log(admin.fullName); // John Smith (*)
//
// // setter 함수가 실행됩니다!
// admin.fullName = "Alice Cooper"; // (**)
//
// console.log(admin.fullName); // Alice Cooper, setter에 의해 추가된 admin의 프로퍼티(name, surname)에서 값을 가져옴
// console.log(user.fullName); // John Smith, 본래 user에 있었던 프로퍼티 값

// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3,
//     __proto__: head
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
//
// let pockets = {
//     money: 2000,
//     __proto__: bed
// };
//
// console.log(pockets.pen);
// console.log(head.glasses);

// let hamster = {
//     stomach: [],
//
//     eat(food) {
//         //this.stomach.push(food);
//         this.stomach = [food];
//     }
// };
//
// let speedy = {
//     __proto__: hamster
// };
//
// let lazy = {
//     __proto__: hamster
// };

// 햄스터 speedy가 음식을 먹습니다.
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple
//
// // 햄스터 lazy는 음식을 먹지 않았는데 배에 apple이 있다고 나오네요. 왜 그럴까요? lazy는 배가 비어있도록 고쳐주세요.
// console.log( lazy.stomach ); // apple
// console.log( hamster.stomach ); // apple
//
// let animal = {
//     eats: true
// };
//
// function Rabbit(name) {
//     this.name = name;
// }
//
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("흰 토끼");
// console.log(rabbit.eats);
// console.log(rabbit.name);
// console.log(name);
// console.log(this.name);

// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// Rabbit.prototype.eats = false;
//
// console.log( rabbit.eats ); // ?
// console.log(rabbit);

// function User(name) {
//     this.name = name;
// }
// User.prototype = {};
// let user = new User("John");
// let user2 = new user.constructor("Pete");
// console.log(user2.name);