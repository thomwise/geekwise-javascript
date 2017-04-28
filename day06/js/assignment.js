var firstBtn = document.getElementById('first');
var middleBtn = document.getElementsByTagName('button')[1];
var lastBtn =  document.querySelector('ul li:last-child button');
var printBtn = document.getElementById('print');


var firstName,
    middleName,
    lastName;

firstBtn.addEventListener('click', function() {
  firstName = modName(prompt('What is your first name?'));
});

middleBtn.addEventListener('click', function() {
  middleName = modName(prompt('What is your middle name?'));
});

lastBtn.addEventListener('click', function() {
  lastName = modName(prompt('What is your last name?'));
});

printBtn.addEventListener('click', function() {
  document.write('<h1>' + firstName + ' ' + middleName + ' ' + lastName + '</h1>');
});

function modName(name) {
  return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
}
