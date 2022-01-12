// class CoffeMachine {
//     _waterAmount = 0;
//
//     set waterAmount(value) {
//         if(value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
//         this,this._waterAmount = value;
//     }
//
//     get waterAmount() {
//         return this._waterAmount;
//     }
//
//     constructor(power) {
//         this.power = power;
//         //console.log(`전력량이 ${power}인 커피머신을 만듭니다.`);
//     }
// }
//
// let coffeeMachine = new CoffeMachine(100);
// coffeeMachine.waterAmount = -10;
// class CoffeeMachine {
//     #waterLimit = 200;
//
//     #checkWater(value) {
//         if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
//         if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
//     }
//
// }
//
// let coffeeMachine = new CoffeeMachine();
//
// // 클래스 외부에서 private에 접근할 수 없음
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error
//
// let objectToString = Object.prototype.toString;
// let arr = [];
// console.log(objectToString.call(arr));
// console.log(objectToString.call(123));
// console.log(objectToString.call(null));
// console.log(objectToString.call(alert));

let eventMixin = {
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },
    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if (!handlers) return;
        for(let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },
    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return;
        }
        console.log(this._eventHandlers);
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};
class Menu {
    choose(value) {
        this.trigger("select", value);
    }    
    choose2(value) {
        this.trigger("up", value);
    }
}
Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();
menu.on("select", value => console.log(`선택된 값 : ${value}`));
menu.on("up", value => console.log(`${value}`));
menu.choose("123");
menu.choose2("123");

menu.off("up", value => console.log(`${value}`));
menu.choose("123");
menu.choose2("123");
//console.log(eventMixin._eventHandlers);