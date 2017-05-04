// Objects

var meObj = {
  firstname: 'thom',
  lastname: 'wise',
  hair: 'blonde',
  eyes: 'blue',
  height: 6,
  talk: function() {
    console.log('Hello, my name is ' + this.firstname + ', and my eyes are ' + this.eyes);
  }
};

meObj.eyes = 'brown';


// Object Constructor

function Person(first, last, age, eye) {
  this.firstname = first;
  this.lastname = last;
  this.userage = age;
  this.eyes = eye;
};

var myFather = new Person('Dan', 'Wise', 65, 'Green');

console.log(myFather);

myFather.userage = 66;

console.log(myFather);

var myMother = new Person('Sue', 'Wise', 60, 'Hazel');

console.log(myMother);

Person('Thom', 'Wise', 29, 'Blue');
