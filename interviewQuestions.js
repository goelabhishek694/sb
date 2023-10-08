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


// forin -> properties / index
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
const person = { name: 'Lydia Hallie' ,addres:{st:"hrhr"}};

Object.seal(person);

//  A: person.name = "Evan Bacon" -> ans 
//  B: person.age = 21
//  C: delete person.name
//  D: Object.assign(person, { age: 21 })
//  person.addres.st="yolo"
// console.log(person); 


// What is the output ?
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(Infinity));
// A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
// B: ['🥑', '✨', '✨', ['🍕', '🍕']]
// C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// D: ['🥑', '✨', '✨', '🍕', '🍕']

// What is the output ?
var randomValue = 21; //rv->21
function getInfo() {
  console.log(typeof randomValue);
  var randomValue = 'Lydia Hallie'; //rv->LH
  console.log(randomValue);
}

getInfo();
A: "number"
B: "string"
C: undefined
D: ReferenceError


const add = function (x) {
    function inner (y) {
        function innermost (z) {
            console.log(x, y, z);
            return x + y + z;
        }
        innermost(6);
    }
    inner(5);
}

add(4);

// A: 4 5 6
// B: 6 5 4
// C: 4 function function
// D: undefined undefined 6
