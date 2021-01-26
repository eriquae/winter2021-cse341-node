// //var name = 'Eriqua';
// //var age = 25;
// //var hasHobbies = true;

// //let is a variable that never changes?
// //let name = 'Eriqua';
// //let age = 25;
// //let hasHobbies = true;

// //It is good to be clear as to what the intention is of the code, if changing one, make it clear you never plan to change the others.
// //use const as often as possible to be as clear as possible.
// const name = 'Eriqua';
// let age = 25;
// const hasHobbies = true;

// age = 26;

// //console.log(name);

// const summarizeUser = (userName, userAge, userHasHobbies) => {
//     return (
//                'Name is ' +
//                 userName +
//                 ', age is ' +
//                 userAge +
//                 ' and the user has hobbies: ' +
//                 userHasHobbies
//             );
// }

// //function summarizeUser(userName, userAge, userHasHobbies) {
// //    return (
// //        'Name is ' +
// //        userName +
// //        ', age is ' +
// //        userAge +
// //        ' and the user has hobbies: ' +
// //        userHasHobbies
// //    );
// //}

// console.log(summarizeUser(name, age, hasHobbies));

// const person = {
//     name: 'Eriqua',
//     age: 25,
//     greet() {
//         console.log('hi, my name is ' + this.name)
//     }
// };

// person.greet();
//console.log(person);

//reference points store the address of something, not what it contains.
const hobbies = ['writing', 'reading'];

//map creates a new array without changing the original array.
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//console.log(hobbies);

//hobbies.push('Baking');
//console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);

