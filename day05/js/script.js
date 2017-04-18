// // ternary statements
// var age = prompt('How old are you?');
//
// // syntax is ====== expression ? ifTrue : ifFalse;
// var movieRestriction = age >= 18 ?
//   console.log('Old enough') :
//   console.log('Too young');
//
// // same as
// if (age >= 18) {
//   console.log('Old enough');
// } else {
//   console.log('Too young');
// }

// another exercise
// var age = prompt('How old are you?');
//
// var url = age >= 18 ?
//   (
//     alert ('Okay, you may proceed'),
//     'proceed.html'
//   ) :
//   (
//     alert ('Sorry, you\'re not old enough for rated R movies...'),
//     'stop.html'
//   );
//
//   window.location.assign(url);
//   window.blur.assign(url);

// switch statements
var today = new Date().getDay();
var affirmative = prompt ("monday or tuesday?").toLowerCase();

switch (affirmative) {
  case 0:
    console.log("Happy Sunday!");
    break;
  case "monday":
    console.log("Sounds like a case of the Mondays");
    break;
  case "tuesday":
    console.log("Tuesday Morning!");
    break;
  case 3:
    console.log("Wednesday Afternoon!");
    break;
  case 4:
    console.log("Thursdays Beersdays!");
    break;
  case 5:
    console.log("Kickin' it in the front seat, kickin' it in the backseat. Which seat should I taaaake?");
    break;
  case 6:
    console.log("Saturday nights are nights on fire. Saturday nights all right!");
    break;
  default:
    console.log("You don't even know what day it is...");
}

// Cluttering the global namespace. BAD!
// var coffee = 'Dutch Bros';
//
// function myCoffee() {
//   var coffee = 'Starsucks';
//   console.log(coffee);
//
//   coffee = 'Peets';
//   console.log(coffee);
//
//   var otherCoffee = 'Dunkin';
// }
//
// myCoffee();
//
// console.log(coffee);
// console.log(otherCoffee);

// for loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
//
// console.log(i);

// Let is block scoped
// let coffee = 'Starsucks';
//
// function myCoffee() {
//   let coffee = 'Dutch Bros';
//   console.log(coffee);
// }
//
// myCoffee();
// console.log(coffee);
//
// // Const
// const newCoffee = 'Lanna';
// const newCoffee = 'McDs';
//
// console.log(newCoffee);
console.log(x);
console.log(y);
console.log(z);
var x = 1;
let y = 2;
const z = 3;
