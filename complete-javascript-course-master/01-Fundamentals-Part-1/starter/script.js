// let js = "amazing";
// console.log("hello")
// console.log(js);
// console.log(23)
// console.log(40+8+23-10);

// let firstName = "vishv";
// console.log(firstName);


// // Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// // Log their values to the console.


// let country = "India"
// let continent = "asia"
// let population = "2"

// console.log(`${country} is my country and continent is: ${continent} with population ${population}`);


// console.log(population / 2);

// population++;

// console.log(population);
// console.log(population > 6);
// console.log(population < 33);





// const description1 =
//   country +
//   ' is in ' +
//   continent +
//   ', and its ' +
//   population +
//   ' million people speak ' +
//   language;

// console.log(description1);






// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;





// ex-2 

/* Write your code below. Good luck! 🙂 */
 
 
/* Write your code below. Good luck! 🙂 */
 
 
const calcAverage = (a,b,c) => (a + b + c ) / 3

let scoreDolphins = calcAverage(44 , 23, 71)
let scoreKoalas  =  calcAverage(85, 54, 41)

const checkWinner = function (avgDolphins, avgKoalas ){
    if (avgDolphins >=  2 * avgKoalas ){
        console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKoalas} )`) 
    }
    else if (avgKoalas >= 2* avgDolphins ){
        console.log(`koalas win ( ${avgKoalas} vs. ${avgDolphins})`)
    }else {
        console.log('no team wins...');
    }
};



checkWinner(scoreDolphins, scoreKoalas);


scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);