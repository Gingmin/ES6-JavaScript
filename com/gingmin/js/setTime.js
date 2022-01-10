"use strict";

function sayHi(who, phrase) {
    console.log('Hi' + who + ", " + phrase);
}
//setTimeout(sayHi, 1000, "홍길동", "안녕하세요");

/** setInterval을 이용하지 않고 아래와 같이 중첩 setTimeout을 사용함
 let timerId = setInterval(() => alert('째깍'), 2000);
 */

// let timerId = setTimeout(function tick() {
//     alert('째깍');
//     timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// function printNumbers(from, to) {
//     let current = from;
//
//     let timerId = setInterval(function() {
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(5, 10);