//
// export default {
//     create(params) {
//         return new Animal(params);
//     }
// };
//
// class Animal {
//     constructor(params) {
//         this.setParams(params);
//         this.init();
//     }
//     setParams(params) {
//         console.log("setParams", params);
//     }
//     init() {
//         console.log("init");
//         this.create("create");
//     }
//     create() {
//         console.log("create");
//     }
// }
//
// export { Animal };

// export default class Animal {
//     constructor(name) {this.name = name}
//     echoName() {console.log('I am a', this.name)}
// }

// import { sayHi } from "./importExportTest2";
// const sayHi = require("./importExportTest2");
// sayHi();

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     echoName() {
//         console.log('I am a', this.name)
//     }
// }
//
// class Mammal extends Animal {
//     constructor(name, hairColor) {
//         super(name);
//         this.hairColor = hairColor;
//     }
//     nurse() {
//         console.log(this.hairColor + ' ' + this.name + ' is nursing.')
//     }
// }
//
// const dog = new Mammal("Dog", 'Black');
// dog.nurse();
// dog.echoName();

import { sayHi } from "./importExportTest2";
sayHi("John");