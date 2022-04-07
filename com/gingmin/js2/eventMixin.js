let eventMixin = {
    // menu.on('select', function(item) { ... }
    on(eventName, handler) {
        if (!this._eventHandlers) {
            this._eventHandlers = {};
        }
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },
    // menu.off('select', handler)
    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if (!handlers) return;

        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handlers) {
                handlers.splice(i--, 1);
            }
        }
    },
    // this.trigger('select', data1, data2)
    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return;
        }
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};

class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on("select", value => alert(`선택된 값: ${value}`));
menu.choose("123");