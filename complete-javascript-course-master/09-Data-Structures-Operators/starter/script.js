
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals

//   order:  function(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]

//   }
  


// }


// // Array Destructuring

// const arr = [1,2,3]
// console.log(arr)

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// console.log(a)
// console.log(b)
// console.log(c)


// const [x,y,z] = arr;

// // [] on the left side → means destructuring

// console.log(x)
// console.log(y)
// console.log(z)


// const [l , m] = [10,20,30,]

// const categories = ["Italian","Pizzeria","Vegetarian","Organic"]

// const [main, , secondary, ,] = categories

// console.log(categories)
// console.log(main)
// console.log(secondary)

// let main1 = "Italian";
// let secondary1 = "Vegetarian";

// // const temp = main1;
// // main1 = secondary1;
// // secondary1 = temp;

// [main1 , secondary1 ] = [secondary1, main1]

// console.log(main1 , secondary1)

// const [starter, mainCourse] = restaurant.order(2,0)
// console.log(starter, mainCourse);


//  const nested = [2, 4, [5,6]]
// //  const [i, ,j] = nested

// //  console.log(i, j)
// const [i, ,[j,k]] = nested;

// console.log(i,j,k);


