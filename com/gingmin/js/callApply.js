"use strict";

// function slow(x) {
//     console.log(`slow(${x})을/를 호출함`);
//     return x;
// }

// function cachingDecorator(func) {
//     let cache = new Map();
//
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//
//         let result = func(x);
//
//         cache.set(x, result);
//         return result;
//     };
// }
//
// slow = cachingDecorator(slow);

// console.log(slow(1));
// console.log("다시 호출 : " + slow(1));
// console.log(slow(2));
// console.log("다시 호출 : " + slow(2));

// slow(1)을/를 호출함
// 1
// 다시 호출 : 1
// slow(2)을/를 호출함
// 2
// 다시 호출 : 2

//================
// function custom(x) {
//     console.log(`${x}를 출력함`);
//     return x;
// }
//
// function deco(func) {
//     let cache = new Map();
//    
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func(x);
//         cache.set(x, result);
//         return result;
//     }
// }
// custom = deco(custom);
// console.log(custom((1)));
// console.log("again : " + custom(1));
// console.log(custom((2)));
// console.log("again : " + custom(2));

let worker = {
    // someMethod() {
    //     return 1;
    // },
    // slow(x) {
    //     alert(`slow(${x})을/를 호출함`);
    //     return x * this.someMethod();
    // }
    slow(min, max) {
        console.log(`slow(${min}, ${max})을/를 호출함`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();

    return function() {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);
//console.log(worker.slow(3, 5));
//console.log("다시 호출 : " + worker.slow(3, 5));

//=========================================================
// function work(a, b) {
//     console.log(a + b);
// }
// function spy(func) {
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }
//     wrapper.calls = [];
//     return wrapper;
// }
// work = spy(work);
// work(1,2);
// work(4, 5);
// for(let args of work.calls) {
//     console.log('call: ' + args.join());
// }

//====================