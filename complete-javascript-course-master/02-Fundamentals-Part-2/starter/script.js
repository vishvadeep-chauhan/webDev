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

