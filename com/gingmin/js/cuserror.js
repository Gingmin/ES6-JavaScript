let json = `{ "name": "John", "age": 30 }`;

class ValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
    }
}

function test() {
    throw new ValidationError("에러 발생!");
}

try {
    test();
} catch(err) {
    alert(err.message); // 에러 발생!
    alert(err.name); // ValidationError
    alert(err.stack); // 각 행 번호가 있는 중첩된 호출들의 목록
}