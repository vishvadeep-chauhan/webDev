// // const friend1 = 'Michael';
// // const friend2 = 'Steven';

// // const friend = ['Michael', 'Steven', 'Peter'];
// // console.log(friend);

// // const year = new Array(1991, 1998, 1997, 1996);

// // console.log(year)
// // console.log(friend1[0])
// // console.log(friend2[0])

// // console.log(friend.length)

// // console.log(friend[friend.length-1])

// // const jonas = ['jonas', 'sandman', 4303 - 2323 , 'teacher' , friend]

// // console.log(jonas)

// // console.log(jonas.length)

// // const calcAge = function (birthYear){
// //   return 2030 - birthYear
// // }

// // const years = [1990, 1999, 1998 , 19997 ,  1996]

// // const age1 = calcAge(year[0]);
// // const age2 = calcAge(year[1]);
// // const age3 = calcAge(year[year.length - 1]);
// // console.log(age1, age2, age3);

// // const friends = ['michel', 'steven',  'peter'];
// // const newLength =  friends.push('jay')
// // console.log(friends)
// // console.log(newLength);

// // friends.unshift('john')
// // console.log(friends)

// // friends.pop();
// // const popped = friends.pop()
// // console.log(popped)
// // console.log(friends)


// // friends.shift()
// // console.log(friends)


// // console.log(friends.indexOf('bob'))






// // let calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20 ;

// // console.log(calcTip(100))

// // const bills = [125, 555, 44]

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// // const totals = [bills[0] + tips[0] , bills[1] + tips[1], bills[2]+ tips[2]]


// // console.log(bills, tips , totals)


// const jonas = {
//   firstName: 'jonas',
//   lastName: 'schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['micheal', 'peter', 'Steven']
// };

// console.log(jonas)
// console.log(jonas.lastName)
// console.log(jonas['lastName'])

// const nameKey = 'Name';
// // console.log(jonas['fist' + nameKey])
// // console.log(jonas['last'] + nameKey)

// const ppt = prompt('what ?');
// console.log(jonas[ppt])






// // const person = {
// //   firstName: "Vishv",
// //   lastName: "Deep", 
// //   birthYear: 1998,
// //   job: "student",
// //   friends: ["Aman", "Rahul", "Neeraj"]

// // }

// // console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is ${person.friends[0]}` )





const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


console.log(jonas.age);
console.log(jonas['firstName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends'
// );

// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn])
// } else{
//   console.log("wrong request")
// }

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is name ${jonas.friends[0]}`)

