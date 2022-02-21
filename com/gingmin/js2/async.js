// async function f() {
//     return 1;
// }
// f().then(alert);

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("완료!"), 1000)
//     });
//      let result = await promise;
//      alert(result);
// }
// f();

// async function showAvatar() {
//
//     // JSON 읽기
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();
//
//     // github 사용자 정보 읽기
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();
//
//     // 아바타 보여주기
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
//
//     // 3초 대기
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
//
//     img.remove();
//
//     return githubUser;
// }
//
// showAvatar();

// async function loadJson(url) {
//     // return await fetch(url)
//     //     .then(response => {
//     //         return response.json();
//     //     } else {
//     //         throw new Error(response.status);
//     //     }
//     // });
//     let response = await fetch(url);
//     if (response.status == 200) {
//         let json = await response.json();
//         return json;
//     }
//     throw new Error(response.status);
// }
// loadJson('no-such-user.json')
//     .catch(alert);

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }
// async function loadJson(url) {
//     let response = await fetch(url)
//
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new HttpError(response);
//             }
// }
// // 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
// async function demoGithubUser() {
//
//     let user;
//     while(true) {
//         let name = prompt("GitHub username을 입력하세요.", "iliakan");
//
//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break; // 에러가 없으므로 반복문을 빠져나옵니다.
//         } catch(err) {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 // 얼럿 창이 뜬 이후에 반복문은 계속 돕니다.
//                 alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
//             } else {
//                 // 알 수 없는 에러는 다시 던져집니다.
//                 throw err;
//             }
//         }
//     }
//     alert(`이름: ${user.name}.`);
//     return user;
// }
//
// demoGithubUser();

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}
function f() {
    wait().then(result => alert(result));
}
f();