"use strict";

// {
//     let message = "HELLO!";
//     console.log(message);
// }
//
// console.log("외 : " + message);
// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++;
//     };
// }
//
// let counter = makeCounter();
//
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter() ); // 2

//========================================
function sum(a) {

    return function(b) {
        
        return a + b;
    };
}
console.log(sum(1)(2));
console.log(sum(5)(-1));
//================================================
let x = 1;

function func() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    //let x = 2;
}

func();
//================================================
/* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    }
}
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
//================================================
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    // return function(a, b) {
    //     if(str == 'name') {
    //         return a.name > b.name ? 1 : -1;
    //     } else if(str == 'age') {
    //         return a.age > b.age ? 1 : -1;
    //     }
    // }
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

//==================================
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function() { // shooter 함수
            console.log( i ); // 몇 번째 shooter인지 출력해줘야 함
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // 0번째 shooter가 10을 출력함
army[5](); // 5번째 shooter 역시 10을 출력함
// 모든 shooter가 자신의 번호 대신 10을 출력하고 있음