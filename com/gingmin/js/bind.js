"use strict";
// let user = {
//     firstName: "John"
// };
//
// function func(phrase) {
//     alert(phrase + ', ' + this.firstName);
// }
//
// let funcUser = func.bind(user);
// funcUser("Hello"); // John

// let user = {
//     firstName: "John",
//     sayHi() {
//         alert(`Hello, ${this.firstName}!`);
//     }
// };
//
// let sayHi = user.sayHi.bind(user);
//
// sayHi();
//
// setTimeout(sayHi, 1000);
// user = {
//     sayHi() {alert("또 다른 사용자!");}
// };

function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

let user = {
    firstName: "John",
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

user.sayNow = partial(user.say, new Date().getHours() + ":" + new Date().getMinutes());
user.sayNow("Hello1");
user.sayNow("Hello2");
user.sayNow("Hello3");

//askPassword(user.login.bind(user, true), user.login.bind(user, false));