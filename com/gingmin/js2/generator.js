function* generateSequence() {
    yield 1;
    yield 2;
    // return 3;
    yield 3;
}

// let generator = generateSequence();
// let one = generator.next();
// alert(JSON.stringify(one));
// let two = generator.next();
// alert(JSON.stringify(two));
// let three = generator.next();
// alert(JSON.stringify(three));

let sequence = [0, ...generateSequence()];
// alert(sequence);

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true};
                }
            }
        };
    }
};

alert([...range]);