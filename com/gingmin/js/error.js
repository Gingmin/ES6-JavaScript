// function readData() {
//     let json = '{ "age": 30 }';
//
//     try {
//         // ...
//         blabla(); // 에러!
//     } catch (e) {
//         // ...
//         if (!(e instanceof SyntaxError)) {
//             throw e; // 알 수 없는 에러 다시 던지기
//
//     }
// }
//
// try {
//     readData();
// } catch (e) {
//     alert( "External catch got: " + e ); // 에러를 잡음
// }

function func() {

    try {
        return 1;

    } catch (e) {
        /* ... */
    } finally {
        alert( 'finally' );
    }
}

alert( func() ); // finally 안의 alert가 실행되고 난 후, 실행됨