// import Rabbit from "./importExportTest2";
//
// class RabbitChild {
//     init() {
//         const params = { key: "key", value: "value" }
//         const t = new Rabbit(params);
//         console.log("t", t);
//     }
// }
// new RabbitChild();

import Mammal from './importExportTest2';

const dog = new Mammal("Dog", 'Black');
dog.nurse();