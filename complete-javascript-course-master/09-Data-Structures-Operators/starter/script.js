


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


// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     }, 
//     fri: {
//       open: 11,
//       close: 23,

//     },
//     sat: {
//       open: 0, // open 24 hour
//       close: 24
//     }
//   },

//   order: function ( starterIndex , mainIndex){
//     return [this.starterMenu [starterIndex]], this.mainMenu[mainIndex]

//   }
// };

// const {name, openingHours, categories} = restaurant

// console.log(name, openingHours, categories);



// const {
//   name: restaurantName,
//   openingHoursz: hours,
//   categories: tags
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // default values 
// const {menu = [] , starterMenu : starters = []} = restaurant;

// console.log(menu, starters); 

// // mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// console.log(a,b);


// // {a ,b} = obj ; // got an error

 
// ({a, b} = obj) ; 

// console.log(a, b);

// // Nested objects

// const { 
//   fri: { open: o,  close: c },
// } = openingHours;

// console.log(o,c)


// const reqBody = {
//   name: "Vishv",
//   email: "vishv@gmail.com",
//   password: "123456",
//   age: 22,
//   address: {
//     city: "Delhi",
//     country: "India"
//   }
// };

// const { name, email, password } = reqBody 
// const { name : userName , email , password} = reqBody;
// const { name : userName , email , password , role = "user"} = reqBody;

// const { 
//   name: userName, 
//   email , 
//   password , 
//   role = "user" , 
//   address: {city , country}
// } = reqBody; 

// console.log(userName , email , password, role , city , country ) ;

// console.log(` ${role} ${userName} from ${city}, ${country} registered with email ${email}`)

// console.log(`User ${userName} from ${city}, ${country} registered with email ${email}`)


// const user = {
//   name: "Vishv",
//   skills: ["HTML", "CSS", "JavaScript"]
// };

// const { name , skills: [primarySkill , secondarySkill]} = user

// console.log(name , primarySkill, secondarySkill);

// const product = {
//   title: "Laptop",
//   price: 50000,
//   specs: {
//     ram: "16GB",
//     storage: "512GB"
//   },
//   tags: ["electronics", "computer", "tech"]
// };

// const {title, specs:{ram}, tags:[category] } = product



// console.log(title, ram, category)


// const users = [
//   { username: "vishv", age: 22 },
//   { username: "rahul", age: 25 }
// ];

// const [{username, age }] = users;
// console.log(username, age)

// const response = {
//   status: 200,
//   data: {
//     users: [
//       { name: "Vishv", city: "Delhi" },
//       { name: "Aman", city: "Mumbai" }
//     ]
//   }
// };

// const {status, 
//   data:{
//     users:[
//       {name : name1, city : city1}, 
//       {name : name2 , city : city2}
//     ]
//   }
// } = response;

// console.log(name1, city1, name2, city2)

// Task 5 — Complex Mixed Destructuring (Interview Level)


// const restaurant = {
//   name: "Italiano",
//   menu: ["Pizza", "Pasta", "Risotto"],
//   location: {
//     city: "Rome",
//     country: "Italy"
//   }
// };

// // const { name: restaurantName, menu: [mainDish], location: { city } } = restaurant;

// // console.log(restaurantName, mainDish, city);

// const { name:restaurantName, menu:[, ,lastDish], location:{country}} = restaurant;

// console.log(restaurantName, lastDish, country);


// // Task 6 — Real Backend Pattern

// const req = {
//   body: {
//     username: "vishv",
//     password: "123",
//     roles: ["user", "admin"]
//   }
// };


// const { body:{username, password, roles:[,secondaryRole]}} = req;

// console.log(username,password,secondaryRole)

// ---------------------------------------------------------
// ---------------------------------------------------------


// Task 1 — Function + Object Destructuring

// Create a function that receives a user object and destructures inside the function.

// const user = {
//   name: "Vishv",
//   age: 22,
//   city: "Delhi"
// };

// Function should print:

// Vishv is 22 years old from Delhi

// Requirement:

// function printUser({ name, age, city })

// ---------------------------------------------------------
// const user = {
//   name: "Vishv",
//   age: 22,
//   city: "Delhi"
// };

// const printUser = ({name , age , city}) => {

// return `${name} is ${age} years old from ${city}`


// };

// console.log(printUser(user));
// ---------------------------------------------------------
// ---------------------------------------------------------

// Task 2 — Function + Array Destructuring

// Create a function that receives an array.

// const numbers = [10, 20, 30];

// Inside the function destructure:

// first
// second

// Print:

// First: 10
// Second: 20

// Function signature:

// function showNumbers([first, second])
// ---------------------------------------------------------

// const numbers = [10, 20, 30];

// const showNumbers = ([first , second]) =>{

//   return `${first}, ${second}`

// }

// console.log(showNumbers(numbers));



// ---------------------------------------------------------
// ---------------------------------------------------------

// Task 3 — Function + Object + Array
// const product = {
//   title: "Laptop",
//   price: 50000,
//   tags: ["electronics", "computer"]
// };

// Create function:

// function printProduct(...)

// Destructure:

// title
// price
// first tag → category

// Expected output:

// Laptop costs 50000 and belongs to electronics category

// ---------------------------------------------------------


// const product = {
//   title: "Laptop",
//   price: 50000,
//   tags: ["electronics", "computer"]
// };

// const printProduct = ({title , price, tags:[firstTag , secondTag]}) =>{

//   return `${title} costs ${price} and belongs to ${firstTag} category`
// }

// console.log(printProduct(product))

// ---------------------------------------------------------



// const arr = [7,8,9];

// const badNewArr = [1,2,arr[0], arr[1], arr[2]]
// console.log(badNewArr)

// const newArr = [1,2, ...arr];

// console.log(newArr)

// console.log(...newArr)

// const newManu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newManu);

// // copyArray


// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [ ...restaurant.starterMenu, ...restaurant.mainMenu ]

// console.log(menu)

// const str = 'jonas'

// const letter = [...str, ' ' , 's.']

// console.log(letter)
// console.log(...str);

// // console.log(`${...str} `)

// const ingredients =  [prompt("let's make pasta! ingredients 1?") , 
//   prompt(" ingredients 2?"),
//   prompt(" ingredients 3?")

// ]
// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Giuseppe'
// };

// --------------------------------------------------

// Given:

// const user = {
//  name: "Vishv",
//  age: 20
// }

// // Create a new object that adds:
// // role: "developer"
// const newUser = {
//   ...user,
//   role: "developer"

// }
// const newUserCopy = {...newUser};
// newUserCopy.age = 25;
// console.log(newUserCopy)

// console.log(newUser);

// Expected result:

// {name:"Vishv", age:20, role:"developer"}

// Use the spread operator.

// --------------------------------------------------
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// --------------------------------------------------
// Task -1

// const dbUser = {
//   id: 101,
//   name: "Vishv",
//   email: "vishv@gmail.com",
//   role: "user",
//   isActive: true
// };

// const updatePayload = {
//   role: "admin",
//   isActive: false
// };



// const updatedUser = { 
//   ...dbUser
// };

// updatedUser.role = "admin"
// updatedUser.isActive = "false"


// console.log(updatedUser);

// // --------------------------------------------------

// // task 2
// const menu = ["Pizza", "Pasta", "Risotto"];

// const newManu = ["Gnocci" , ...menu , "Tiramisu"]

// console.log(newManu)

// // --------------------------------------------------
// // task 3

// const apiProducts = ["Laptop","Phone","Tablet"];
// const dbProducts = ["Keyboard","Mouse"];

// const allProducts = [...apiProducts, ...dbProducts];

// console.log(allProducts)

// --------------------------------------------------
// task 4 


// const product = {
//   title: "Laptop",
//   price: 50000,
//   specs: {
//     ram: "16GB",
//     storage: "512GB"
//   }
// };


// const copyProduct = {
//   ...product
// }

// copyProduct.price = 55000;

// console.log(copyProduct)

// // --------------------------------------------------
// // task 5

// function createUser(name, age, role){

//   console.log(name,age,role)

// }

// const userData = ["Vishv",22,"developer"];

// createUser(...userData);

// --------------------------------------------------

// ---------------------------------------------------------


'use strict';


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu:{
      open: 12,
      close: 22,
    },
    fri: {
       open: 11,
        close: 23, 
    },
    sat: {
      open: 0,
      close: 24,
    },
  },


  // ES6 enhanced object literals

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function(ing1 , ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient)
    console.log(otherIngredients)

  },

};


// ---------------------

// const arr = [1,2, ...[3,4,5]];

// const [a,b, ...others] = [1,2,3,4,5,6,7];
// console.log(a,b,others)


const [Pizza, ,Risotto, ...otherFood ]= [...restaurant.mainMenu, ...restaurant.starterMenu, ]

console.log(Pizza, Risotto, otherFood)

const  {sat, ...weekdays} = restaurant.openingHours ;

console.log(weekdays);


const add = function(...numbers){
 let sum = 0;
 for(let i = 0; i<numbers.length; i++) sum += numbers[i];
 console.log(sum)

}

add(2,3)
add(5,3,7,2)
add(8,5,3,6,4,36,7,4,3,5,3)

const x = [23,5,7];
add(...x);



restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); 



