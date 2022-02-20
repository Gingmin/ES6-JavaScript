let promise = Promise.resolve();

promise.then(() => alert("프라미스 성공!"));

alert("코드 종료"); // 이 얼럿 창이 가장 먼저 나타납니다.