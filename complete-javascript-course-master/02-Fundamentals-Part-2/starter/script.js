const friend1 = 'Michael';
const friend2 = 'Steven';

const friend = ['Michael', 'Steven', 'Peter'];
console.log(friend);

const year = new Array(1991, 1998, 1997, 1996);

console.log(year)
console.log(friend1[0])
console.log(friend2[0])

console.log(friend.length)

console.log(friend[friend.length-1])

const jonas = ['jonas', 'sandman', 4303 - 2323 , 'teacher' , friend]

console.log(jonas)

console.log(jonas.length)

const calcAge = function (birthYear){
  return 2030 - birthYear
}

const years = [1990, 1999, 1998 , 19997 ,  1996]

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

