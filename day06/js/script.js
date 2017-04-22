/*
// named function declaration

function myName() {
  // all my cool code
  console.log('not cool');
}

// Anonymous function
function() {
  //stuff and things
}
// Function Expression
var myName = function () {
  console.log('Hello from the other side');
}();

// Immediately invoked function Expression (IIFE)

(function() {
  var test = 'This is a test';
  alert('This will run Immediately!!!')
}());


var yourName = prompt("What is your name?")

// Parameters
function myName( x ) {
  console.log(x);
}

// Arguments
myName('Your name is ' + yourName + '.');

// write a function that accepts a number
// log that number *5

function number (x) {
  console.log(x * 5);
}

number(7876865, 2);

var myName = function() {
  console.log(arguments[0] + ' ' + arguments[4]);

  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }

  for(argument in arguments) {
    console.log(arguments[argument]);
  }
}

myName('Thom', 'Diego', 'Anna', ['cheese', 'danish', 'swiss'], 'Wise', 'Forrest', 'Steven Segal', 4, true, 'Charleton Heston');


// Return statements
var myName = getName(prompt('What is your last name?'));

console.log(myName);

function getName(lastName) {
  return 'Thomas' + ' ' + lastName;
}

var userCity = prompt('In what city were you born?');
var userState = prompt('In what state is that city?');


function birthPlace(city, state) {
  return city + ', ' + state;
}

console.log(
  birthPlace(userCity, userState)
);


var userName = modUserName( prompt('What is your first name?'));
var lastName = modUserName( prompt('What is your last name?'));
// var cappedUserName = userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();

// console.log(cappedUserName);

function modUserName(name) {
  return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
}

console.log(userName + ' ' + lastName);
*/

//DOM Manipulation
// .getElementById()

var btn = document.getElementById('myBtn');

console.log(btn);

// .getElementsByTagName()

var links = document.getElementsByTagName('a');

console.log(links);

// .getElementsByClassName()

var dropdownLinks = document.getElementsByClassName('dropdown');

console.log(dropdownLinks);

// .querySelector()

var turkey = document.querySelector('#turkey');

console.log(turkey);

var dropdown = document.querySelector('.dropdown');

console.log(dropdown);

var oneLink = document.querySelector('ul li:last-child a');

console.log(oneLink);

// .querySelectorAll()

var dropdowns = document.querySelectorAll('.dropdown');

console.log(dropdowns);

var allSubLinks = document.querySelectorAll('ul li li a');

console.log(allSubLinks);

// Event Listeners .addEventListener()
console.log(btn);

// Click
// btn.addEventListener('click', function() {
//   btn.style.backgroundColor = 'red';
// });

// Mousedown
btn.addEventListener('mousedown', function() {
  btn.style.backgroundColor = 'green';
});

// mouseup
btn.addEventListener('mouseup', function() {
  btn.style.backgroundColor = 'blue';
});

/*
// mousemove
window.addEventListener('mousemove', function(e) {
  console.log(e);
  console.clear();
  console.log(e.screenX + ':' + e.screenY);
});

// mouseenter
var btn = document.querySelector('#myBtn');

btn.addEventListener('mouseenter', function() {
  btn.style.backgroundColor = 'black';
  btn.style.fontSize = '2em';
  btn.style.color = 'white';
});

// mouseleave
btn.addEventListener('mouseleave', function() {
  btn.style.fontSize = '1em';
  btn.style.color = 'black';
  btn.style.backgroundColor = "grey";
});

// scroll
window.addEventListener('scroll', function(e) {
  console.log(e);
})
*/

// keypress
window.addEventListener('keypress', function(e) {
  console.log(e);
});

// keydown
window.addEventListener('keydown', function(e) {
  console.log(e);
});

// keyup
window.addEventListener('keyup', function(e) {
  console.log(e);
});

















//d
