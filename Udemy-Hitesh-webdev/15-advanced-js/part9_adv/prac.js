// function outer(){
//     let name = "deep";
//     function inner(){
//         console.log(name)
//     }
//     return inner;

// }

// const fn = outer();
// fn();
// fn();
// fn();
// fn();

// in clouser inside function can access outer function valriable .

// function outer(){
//     let count = 0;

//     function inner(){
//         count++;
//         console.log(count)
//     }

//     return inner;

// }

// const fn1 = outer();

// fn1();
// fn1();
// fn1();
// fn1();
// fn1();

// Value increasing? - by 1 becouse of count++
// Why not resetting? - its remember previous value