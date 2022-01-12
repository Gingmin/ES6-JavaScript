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
// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name}은/는 속도 ${this.speed}로 달립니다.`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name}이/가 멈췄습니다.`);
//     }
// }
// let animal = new Animal("동물");
//
// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }
//     hide() {
//         console.log(`${this.name}이/가 숨었습니다!`);
//     }
//     stop() {
//         super.stop();
//         this.hide();
//     }
// }
// let rabbit = new Rabbit("흰 토끼", 10);
// console.log(rabbit.name);
// console.log(rabbit.earLength);
// let animal = {
//     name: "동물",
//     eat() {
//         console.log(`${this.name} 이/가 먹이를 먹습니다.`);
//     }
// };
//
// let rabbit = {
//     __proto__: animal,
//     name: "토끼",
//     eat() {
//         this.__proto__.eat.call(this);
//     }
// };
//
// rabbit.eat();
//
// class Animal {
//
//     constructor(name) {
//         this.name = name;
//     }
//
// }
//
// class Rabbit extends Animal {
//   
//     constructor(name) {
//         super()
//         this.name = name;
//         this.created = Date.now();
//     }
// }
//
// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// console.log(rabbit.name);

class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};

