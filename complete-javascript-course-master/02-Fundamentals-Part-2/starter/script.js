function logger(){
    console.log('my name is vishv');

}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges)

    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;



}

const aplleJuice =  fruitProcessor(5, 0);

console.log(aplleJuice);

const apple0rangeJuice = fruitProcessor(2, 4);
console.log(apple0rangeJuice);



function greet() {
    return "Hello";
}

const speak = function(){
    return "yoo";

}

const add = function calc(a, b){
    return a + b ;

}


const message1 = greet();
const message2 = speak();

console.log(message1);
console.log(message2);
console.log(add(10, 20));


function calcAge(year) {
  return 2037 - year;
}

const calcAge2 = function (year){
    return 2037 - year;

}

const getScore = function(points) {
  return points * 10;
};


function getScore2(points){
    return points * 10;
}


console.log(sum(5, 3));
function sum(a, b) {
  return a + b;
}



const mult = function(a, b) {
  return a * b;
};

console.log(mult(5, 3));

const calcAge4 = function(birthYear) {
  return 2025 - birthYear;
};

console.log(calcAge4(1999));