// class User {
//
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(this.name);
//     }
// }
// let user = new User("John");
// user.sayHi();
//

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}은/는 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name}이/가 멈췄습니다.`);
    }
}
let animal = new Animal("동물");

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    hide() {
        console.log(`${this.name}이/가 숨었습니다!`);
    }
    stop() {
        super.stop();
        this.hide();
    }
}
let rabbit = new Rabbit("흰 토끼", 10);
console.log(rabbit.name);
console.log(rabbit.earLength);