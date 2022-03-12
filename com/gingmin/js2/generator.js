function* generateSequence() {
    yield 1;
    yield 2;
    // return 3;
    yield 3;
}

// let generator = generateSequence();
// let one = generator.next();
// alert(JSON.stringify(one));
// let two = generator.next();
// alert(JSON.stringify(two));
// let three = generator.next();
// alert(JSON.stringify(three));

// let sequence = [0, ...generateSequence()];
// // alert(sequence);
//
// let range = {
//     from: 1,
//     to: 5,
//
//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,
//             next() {
//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++ };
//                 } else {
//                     return { done: true};
//                 }
//             }
//         };
//     }
// };

// let range = {
//     from: 1,
//     to: 5,
//     *[Symbol.iterator]() {
//         for (let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// }
// alert([...range]);

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }
// function* generatePasswordCodes() {
//     yield* generateSequence(48, 57);
//     yield* generateSequence(65, 90);
//     yield* generateSequence(97, 122);
// }
// let str = "";
// for (let code of generatePasswordCodes()) {
//     str += String.fromCharCode(code);
// }
// alert(str);

// function* gen() {
//     let result = yield "2 + 2 = ?";
//     alert(result);
// }
// let generator = gen();
// let question = generator.next().value;
// alert(question);
// generator.next(4);

// function* gen() {
//     try {
//         let result = yield "2 + 2 = ?"; // (1)
//         alert("위에서 에러가 던져졌기 때문에 실행 흐름은 여기까지 다다르지 못합니다.");
//     } catch(e) {
//         alert(e); // 에러 출력
//     }
// }
// let generator = gen();
// let question = generator.next().value;
// generator.throw(new Error("데이터베이스에서 답을 찾지 못했습니다.")); // (2)
// ㅜㅜ
//












