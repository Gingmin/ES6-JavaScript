// let promise = new Promise(function(resolve, reject) {
//     // setTimeout(() => resolve("done"), 1000);
//     // resolve("123");
//     setTimeout(() => reject(new Error("에러 발생!")), 1000);
// });

// promise.then(
//     result => alert(result),
//     error => alert(error)
// );

// promise.catch(alert);

// new Promise((resolve, reject) => {
//
// }).finally(() => alert("@")).then(result => alert("r"), error => alert("e"));

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("결과"), 2000)
// })
//     .finally(() => alert("프라미스가 준비되었습니다."))
//     .then(result => alert(result)); // <-- .then에서 result를 다룰 수 있음

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;
//
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));
//
//         document.head.append(script);
//     });
// }
//
// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// promise.then(
//   script => alert(`${script.src}을 불러왔습니다!`),
//   error => alert(`Error : ${error.message}`)
// );
//
// promise.then(script => alert("또다른 핸들러..."));

//------- promise chaining -------

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// });

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// });
//
// promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
// });
//
// promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
// });
//
// promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
// });

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//     alert(result);
//     return new Promise((resolve, reject) => {
//        setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then(function(result) {
//     alert(result);
//     return new Promise((resolve, reject) => {
//        setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then(function(result) {
//     alert(result);
// });

// user.json에 요청을 보냅니다.
fetch('/article/promise-chaining/user.json')
    // 응답받은 내용을 json으로 불러옵니다.
    .then(response => response.json())
    // GitHub에 요청을 보냅니다.
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // 응답받은 내용을 json 형태로 불러옵니다.
    .then(response => response.json())
    // 3초간 아바타 이미지(githubUser.avatar_url)를 보여줍니다.
    .then(githubUser => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });