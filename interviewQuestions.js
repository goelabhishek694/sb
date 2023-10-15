// let randomValue = { name: "Lydia" };
// randomValue = 23;
// // console.log(typeof typeof randomValue);
// if (!typeof randomValue === "string") {
//   console.log("It's not a string!");
// }
//  else {
//   console.log("Yay it's a string!");
// }

// A: It's not a string!
// B: Yay it's a string!
// C: TypeError
// D: undefined

// const user = {
// 	email: "my@email.com",
// 	updateEmail: function (email){
// 		this.email = email
// 	}
// }

// user.updateEmail("new@email.com")
// console.log(user.email)

// A: my@email.com
// B: new@email.com
// C: undefined
// D: ReferenceError


// const fruit = ['🍌', '🍊', '🍎']

// fruit.slice(0, 1)
// fruit.splice(0, 1)
// fruit.unshift('🍇')

// console.log(fruit)

// A: ['🍌', '🍊', '🍎']
// B: ['🍊', '🍎']
// C: ['🍇', '🍊', '🍎']
// D: ['🍇', '🍌', '🍊', '🍎']


// forin -> properties / index /key
// forof->values
// let count = 0;
// const nums = [0, 1, 2, 3]; 
// for(var i in nums){
//     console.log(typeof i);
// 	if (i) count += 1
// }

// console.log(count)

// A: 1
// B: 2
// C: 3 -> ans
// D: 4

// Which of the options result(s) in an error?
// let emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂'];
// /* 4 */ emojis.length = 0;

// console.log(emojis)


// const add = function (x) {
//     return x + x;
// }

// function myFunc(num = 2, value = add(num)) {
//   console.log(num, value);
// }

// myFunc();
// myFunc(3);

// A: 2 4 and 3 6
// B: 2 NaN and 3 NaN
// C: 2 Error and 3 6
// D: 2 4 and 3 Error


// Which of the following will modify the person object?
// const person = {
//   name: 'Lydia Hallie',
//   address: {
//     street: '100 Main St',
//   },
// };

// Object.freeze(person);

// A: person.name = "Suresh" //u
// B: delete person.address.street //d
// C: person.address.street = "101 Main St"  //u but in 2nd level 
// D: person.pet = { name: "Mara" } //c

// console.log(person);


// PE-> R , U , D 
// seal->  R, U
// freeze -> R
// Which of the following will modify the person object?
// const person = { name: 'Lydia Hallie' ,addres:{st:"hrhr"}};

// Object.seal(person);

//  A: person.name = "Evan Bacon" -> ans 
//  B: person.age = 21
//  C: delete person.name
//  D: Object.assign(person, { age: 21 })
//  person.addres.st="yolo"
// console.log(person); 


// What is the output ?
// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

// console.log(emojis.flat(Infinity));
// // A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
// // B: ['🥑', '✨', '✨', ['🍕', '🍕']]
// // C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// // D: ['🥑', '✨', '✨', '🍕', '🍕']

// // What is the output ?
// var randomValue = 21; //rv->21
// function getInfo() {
//   console.log(typeof randomValue);
//   var randomValue = 'Lydia Hallie'; //rv->LH
//   console.log(randomValue);
// }

// getInfo();
// A: "number"
// B: "string"
// C: undefined
// D: ReferenceError


// const add = function (x) {
//     function inner (y) {
//         function innermost (z) {
//             console.log(x, y, z);
//             return x + y + z;
//         }
//         innermost(6);
//     }
//     inner(5);
// }

// add(4);

// A: 4 5 6
// B: 6 5 4
// C: 4 function function
// D: undefined undefined 6

// What is the output ?
// const groceries = ['banana', 'apple', 'peanuts'];

// if (groceries.indexOf('banana')) {
// console.log('We have to buy bananas!');
// } else {
// console.log(`We don't have to buy bananas!`);
// }

// A: We have to buy bananas!
// B: We don't have to buy bananas -> ans 
// C: undefined
// D: 1

// What is the output ?
// const person = {
//   firstName: 'Lydia',
//   lastName: 'Hallie',
//   pet: {
//     name: 'Mara',
//     breed: 'Dutch Tulip Hound',
//   },
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.pet?.name);
// console.log(person.pet?.family?.name);
// console.log(person.getFullName?.());
// console.log(member.getLastName?.());

// A: undefined undefined undefined undefined
// B: Mara undefined Lydia Hallie ReferenceError -> ans
// C: Mara null Lydia Hallie null
// D: null ReferenceError null ReferenceError

// const list = ['🥳', '🤠', '🥰', '🤪'];
// let num=1;
// console.log(list[(num += 1)]);
// A: 🤠
// B: 🥰 -> ans 
// C: SyntaxError
// D: ReferenceError

// Which function call is correct ?

// function sumValues(x, y, z) {
//   return x + y + z;
// }
// A: sumValues([...1, 2, 3]) 
// B: sumValues([...[1, 2, 3]])//-> [...[1,2,3]] -> [1,2,3]
// C: sumValues(...[1, 2, 3]) //-> (1,2,3)-> ans
// D: sumValues([1, 2, 3])

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   const changeAge = function (x= { ...person }) {
//     x.age += 1;
//   }
//   const changeAgeAndName = function (x = { ...person }) {
//     x.age += 1;
//     x.name = 'Sarah';
//   };
  
//   changeAge(person);
//   changeAgeAndName();
  
//   console.log(person);
//   A: {name: "Sarah", age: 22}
//   B: {name: "Sarah", age: 23}
//   C: {name: "Lydia", age: 22} -> ans 
//   D: { name: "Lydia", age: 23 }

// What is the output ?
// const food = ['🍕', '🍫', '🥑', '🍔'];
// const info = { favoriteFood: food[0] };

// info.favoriteFood = '🍝';

// console.log(food);
// A: ['🍕', '🍫', '🥑', '🍔'] -> ans 
// B: ['🍝', '🍫', '🥑', '🍔']
// C: ['🍝', '🍕', '🍫', '🥑', '🍔']
// D: ReferenceError

// What is the output ?
// let i=2;
// const colorConfig = {
//   red: true,
//   blue: false,
//   green: true,
//   black: true,
//   yellow: false,
// //   colors:{
// //     2:"bla bla"
// //   }
// "undefined":{
//     2:"cha cha"
// }
// };

// const colors = ['pink', 'red', 'blue'];

// console.log(colorConfig[colors[i]]); // when u want the expression to be resolved 
// console.log(colorConfig.colors[i]); // when u want the expression to be resolved 
// A: true
// B: false
// C: undefined
// D: TypeError


// What is the output ?

// function nums(a, b) {
//   if (a > b) console.log('a is bigger');
//   else console.log('b is bigger');
//   return 
//   a + b;
// }

// console.log(nums(4, 2));
// console.log(nums(1, 2));

// // A: a is bigger, 6 and b is bigger, 3
// // B: a is bigger, undefined and b is bigger, undefined
// // C: undefined and undefined
// // D: SyntaxError

// What is the output ?
// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const [x, y] of Object.entries(person)) {
//   console.log(x, y);
// }
// A: name Lydia and age 21 -> ans 
// B: ["name", "Lydia"] and ["age", 21]
// C: ["name", "age"] and undefined
// D: Error


// const [x,y]=["name","Lydia"] // destructuring of arr
// const obj={
//     name:"Lydia",
//     age:21
// }
// const {age,abc:firstName}={abc:"Lydia",age:21} // destructuring of object

// swap two numbers w/0 creating a new variable 

// let x=10;
// let y=20;
// //  x-> 20 y->10

// [x,y]=[y,x]


// What is the output ?
// let newList = [1, 2, 3].push(14);
// console.log(newList.push(5));

// A: [1, 2, 3, 4, 5]
// B: [1, 2, 3, 5]
// C: [1, 2, 3, 4]
// D: Error -> ans 


// What is the output ?
// console.log('I want pizza'[0]);
// console.log('I want pizza'[1]);
// A: ""
// B: "I" -> ans 
// C: SyntaxError
// D: undefined


// What is the output ?
// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//   } else {
//     const message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(21));
// A: "Sorry, you're too young."
// B: "Yay! You're old enough!"
// C: ReferenceError
// D: undefined


// What is the output ?
// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// let city = person.city; //ud
// person.city = 'Amsterdam';
// person.city=person.city;

// console.log(person);
// A: { name: "Lydia", age: 21 } -> ans
// B: { name: "Lydia", age: 21, city: "Amsterdam" }
// C: { name: "Lydia", age: 21, city: undefined }
// D: "Amsterdam"

// What is the output ?
// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);
// A: { admin: true, user: { name: "Lydia", age: 21 } }
// B: { admin: true, name: "Lydia", age: 21 }
// C: { admin: true, user: ["Lydia", 21] }
// D: { admin: true }


// What is the output ?
// console.log(3 + 4 + '5');
// A: "345"
// B: "75"
// C: 12
// D: "12"

// What is the output ?
//forin -> properties / index /key
// forof->values, does not work for objects 

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }

// A: { name: "Lydia" }, { age: 21 }
// B: "name", "age"
// C: "Lydia", 21
// D: ["name", "Lydia"], ["age", 21]

// What is the output ?
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

// A: [1, 2, 3, 7 x null, 11]
// B: [1, 2, 3, 11]
// C: [1, 2, 3, 7 x empty, 11]
// D: SyntaxError


// What is the output ?
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
// A: undefined is 21 Lydia is 21
// B: function function
// C: Lydia is 21 Lydia is 21
// D: Lydia is 21 function -> ans 

// What is the output ?
var num = 8;
var num = 10;

console.log(num);
// A: 8
// B: 10 -> ans 
// C: SyntaxError 
// D: ReferenceError


hof ,async  