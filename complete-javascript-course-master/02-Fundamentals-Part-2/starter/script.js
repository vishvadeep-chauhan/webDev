function logger() {
  console.log("my name is vishv");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const aplleJuice = fruitProcessor(5, 0);

console.log(aplleJuice);

const apple0rangeJuice = fruitProcessor(2, 4);
console.log(apple0rangeJuice);

function greet() {
  return "Hello";
}

const speak = function () {
  return "yoo";
};

const add = function calc(a, b) {
  return a + b;
};

const message1 = greet();
const message2 = speak();

console.log(message1);
console.log(message2);
console.log(add(10, 20));

function calcAge(year) {
  return 2037 - year;
}

const calcAge2 = function (year) {
  return 2037 - year;
};

const getScore = function (points) {
  return points * 10;
};

function getScore2(points) {
  return points * 10;
}

console.log(sum(5, 3));
function sum(a, b) {
  return a + b;
}

const mult = function (a, b) {
  return a * b;
};

console.log(mult(5, 3));

const calcAge4 = function (birthYear) {
  return 2025 - birthYear;
};

console.log(calcAge4(1999));

let language;

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
}


const bill = 275;
const bill1 = 40;
const bill2 = 430;


/* Write your code below. Good luck! 🙂 */

let tip = bill >=50 && bill <= 300 ? bill * 0.15 : bill*0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

let tip1 = bill >=50 && bill <= 300 ? bill1*0.15 : bill1*0.2;

console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`)

let tip2 = bill >=50 && bill <= 300 ? bill2*0.15 : bill2*0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`)