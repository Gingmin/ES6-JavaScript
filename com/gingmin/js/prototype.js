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

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter 함수가 실행됩니다!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, setter에 의해 추가된 admin의 프로퍼티(name, surname)에서 값을 가져옴
console.log(user.fullName); // John Smith, 본래 user에 있었던 프로퍼티 값