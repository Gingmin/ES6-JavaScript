function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();
let one = generator.next();
alert(JSON.stringify(one));
let two = generator.next();
alert(JSON.stringify(two));
let three = generator.next();
alert(JSON.stringify(three));
