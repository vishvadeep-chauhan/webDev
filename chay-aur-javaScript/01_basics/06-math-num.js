const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(4));

const otherNumber = 123.8756

console.log(otherNumber.toPrecision(5));


const hundreds = 10000000

console.log(hundreds.toLocaleString('en-IN'));


// --------------------maths -------------------

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(3.5));
console.log(Math.ceil(4.2))
console.log(Math.min(4,3,6,8));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log((Math.random()*10) +1);

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)))
