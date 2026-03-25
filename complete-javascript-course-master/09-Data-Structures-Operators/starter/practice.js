// // const arr =  [2,3,4];
// // const [x,y,z] = arr;

// // console.log(x,y,z)

// // const categories = ["Italian","Pizzeria","Vegetarian","Organic"];

// // // const [main, , secondary] = categories;

// // // console.log(main , secondary)

// // let main = "Italian";
// // let secondary = "Vegetarian";

// // [main, secondary] = [secondary , main]

// // console.log(main, secondary)

// // const nested = [2,4,[5,6]];

// // const [i, , [j, k]] = nested;

// // console.log(i, j,k ) ;

// // const arr2 = [8,9];

// // const [p = 1 , q = 1, r = 1] = arr2

// // console.log(p,q,r)

// // function order(startIndex, MainIndex ){

// //     const starterMenu = ["Focaccia","Bruschetta","Garlic Bread"];
// //   const mainMenu = ["Pizza","Pasta","Risotto"];

// //   return [this.starterMenu[startIndex], this.mainMenu[MainIndex]];

// // }

// // const [starter , mainCourse] = order(2,0);

// // console.log(starter, mainCourse);

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Computer Systems: A Programmer\'s Perspective',
//     author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65
//       }
//     }
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090
//       }
//     }
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0
//       }
//     }
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808
//       }
//     },
//     highlighted: true
//   }
// ];

// // const [firstBook, secondBook] = books;

// const [firstBook, secondary] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const [[ , rating], [, ratingsCount]] = ratting

// const arr = [[1,2], [3,4]]

// const [[ , two], [ ,four]] = arr

// // Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

// const ratingStars = [63405, 1808];

// const [ fiveStarRatings , oneStarRatings ,threeStarRatings = 0 ] = ratingStars;

// // task 1

// const arr = [10, 20, 30, 40, 50];

// const [first, second, ...rest] = arr;

// console.log(first, second );

// console.log(rest)

// // task 2
// // remove password using rest

// const user = {
//   name: "Vishv",
//   age: 20,
//   password: "12345"
// };

// // const {name , age, ...rest2} = user

// // console.log(name , age);
// // console.log(rest2);

// const { password, ...safeUser} = user;
// console.log(safeUser);

// // task 3
// // Return multiplication of all numbers
// function multiply(...nums) {
//   let result = 1;

//   for (let i = 0; i < nums.length; i++) {
//     result *= nums[i];
//   }

//   console.log(result);
// }

// const nums = [1,2,3,4,5,6];

// multiply(...nums);

// task 1

// const data = [100, 200, 300, 400, 500, 600];

// const [a, , b, ...other] = data;

// console.log(a);
// console.log(b);
// console.log(other);

// const user = {
//   id: 1,
//   name: 'Vishv',
//   email: 'test@gmail.com',
//   password: '1234',
//   role: 'admin',
// };

// // task 2

// const { id, name, password, ...safeData } = user;

// console.log(id);
// console.log(name);
// console.log(safeData);

// // task 3

// function sumEven(...numbers) {
//   // let result = 0;

//     if (numbers % 2 === 0) {
//       numbers += numbers;
//     }

//   console.log(result);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// sumEven(...numbers);

// // task 4

// function createOrder(mainItem, ...otherItems){
//   console.log(mainItem, ...others)


// }


// createOrder("Pizza", "Coke", "Fries")
// const {main , ...others} = createOrder;

// // task 5 

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// [1,...arr1, ...arr2] = mergeArr;


// // task 6

// const product = {
//   id: 101,
//   title: "Laptop",
//   price: 50000,
//   discount: 5000,
//   category: "Electronics"
// };

// const {discount, ...finalProduct} = product;

// function calculatePrice({ price, ...rest }){

// }

// const users = [
//   { name: "A", password: "111" },
//   { name: "B", password: "222" }
// ];


// const result = [];

// for(const user of users) {
//   const {password, ...safeUser} = user;
// result.push(safeUser);

// }
// console.log(...result)

const users = [
  { name: "A", password: "111", role: "dev"},
  { name: "B", password: "222", role: "tech" },
  
];

const result = [];

for(const user of users){
  const {password, ...safeUser} = user;
  result.push(safeUser);
}

console.log(result);

