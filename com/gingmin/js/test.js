"use strict";
// function makeCounter() {
//     let count = 0;
//
//     function counter() {
//         return count++;
//     }
//
//     counter.set = value => count = value;
//
//     counter.decrease = () => count--;
//     console.log(count);
//     return counter;
// }
// console.log(makeCounter().decrease());

function sum(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function() {
        return currentSum;
    };
    return f;
}

//console.log(sum(1)(2));
//console.log(sum(5)(-1)(2));
//alert( sum(6)(-1)(-2)(-3) ); // 0
//alert( sum(0)(1)(2)(3)(4)(5) ); // 15

function gob(a) {
    let currentGob = a;
    function gf(b) {
        currentGob *= b;
        return gf;
    }
    gf.toString = function() {
        return currentGob;
    };
    return gf;
}
alert(gob(2)(3)(5)); // 30