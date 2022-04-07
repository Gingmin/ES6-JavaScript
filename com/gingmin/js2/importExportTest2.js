// import Animal from "../js2/importExportTest";
//
// class Rabbit extends Animal{
//     constructor(params) {
//         super(params);
//     }
// }
// new Rabbit({ key: "key", value: "value" });
// export default Rabbit;

// import Animal from './importExportTest';
//
// export default class Mammal extends Animal {
//     constructor(name, hairColor) {
//         super(name); this.hairColor = hairColor;
//     }
//     nurse() {
//         console.log(this.hairColor + ' ' + this.name + ' is nursing.')
//     }
// }
'use strict';
export function sayHi(user) {
    alert(`hello, ${user}`);
}