// let json = `{ "name": "John", "age": 30 }`;
//
// class ValidationError extends Error {
//     constructor(message) {
//         super(message); // (1)
//         this.name = "ValidationError"; // (2)
//     }
// }

// function test() {
//     throw new ValidationError("에러 발생!");
// }
//
// try {
//     test();
// } catch(err) {
//     alert(err.message); // 에러 발생!
//     alert(err.name); // ValidationError
//     alert(err.stack); // 각 행 번호가 있는 중첩된 호출들의 목록
// }

// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super("No property : " + property);
//         this.name = "PropertyRequiredError";
//         this.property = property;
//     }
// }
//
// function readUser(json) {
//     let user = JSON.parse(json);
//     if (!user.age) {
//         throw new PropertyRequiredError("age");
//     }
//     if (!user.name) {
//         throw new PropertyRequiredError("name");
//     }
//     return user;
// }
//
// try {
//     let user = readUser('{"age": 25}');
// } catch (err) {
//     if (err instanceof ValidationError) {
//         alert("Invalid data : " + err.message);
//         alert(err.name);
//         alert(err.property);
//     } else if (err instanceof SyntaxError) {
//         alert("JSON Syntax Error : " + err.message);
//     } else {
//         throw err;
//     }
// }

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("formatting error");
alert(err.message);
alert(err.name);
alert(err.stack);
alert(err instanceof SyntaxError);