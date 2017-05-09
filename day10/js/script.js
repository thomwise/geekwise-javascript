/*
var meObj = {
  firstname: 'matthew',
  lastname: 'higley',
  hair: 'brown',
  eyes: 'brown',
  height: 6,
  talk: function(msg) {
    alert('Sup bro, this is ' + this.firstname);
  }
};

// Change item in the object list
meObj.firstname = 'david';
console.log(meObj);

var youObj = {
  firstname: 'stephen',
  lastname: 'barry',
  hair: 'brown',
  eyes: 'green',
  height: 6
};

// Object Constructor
function Person(first, last, age, eyes) {
  // var firstname = first;
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyes = eyes;
  this.talk = function(salutation) {
    alert(salutation + ', from ' + this.firstname);
  }
};

var matt = new Person('Thomas', 'Wise', 23, 'blue');
var steve = new Person('Stephen', 'Barry', 19, 'green');
*/

// localStorage.setItem('user', 'Thomas Wise');

var userArr = [];

if (localStorage.getItem('users')) {
  userArr = JSON.parse(localStorage.getItem('users'));
};

var newUser = document.querySelector('nav button'),
    newUserForm = document.querySelector('nav form');

newUserForm.classList.add('hidden');
// add click event to newUserForm
// newUser.addEventListener('click', function(){
//   newUserForm.classList.toggle('hidden');
// });

var hoverIntent;
newUser.addEventListener('mouseenter', function() {
  hoverIntent = setTimeout( function() {
    newUserForm.classList.remove('hidden');
  }, 500);

});
newUser.addEventListener('click', function() {
  clearTimeout(hoverIntent);
  newUserForm.classList.add('hidden');
});

var createUser = document.querySelector('nav form input[type="submit"]');
createUser.addEventListener('click', function(e) {
  e.preventDefault();
  genUser(newUserForm.elements);
  newUserForm.reset();
  newUserForm.classList.toggle('hidden');
});

function UserObj(firstname, lastname, username, avatar) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.username = username;
  this.avatar = avatar;
}

function genUser(f) {
  userArr.push(new UserObj(f[0].value, f[1].value, f[2].value, genAvatar()));
  outputUsers();
  localStorage.setItem('users', JSON.stringify(userArr));
  // JSON.stringify();
};

function genAvatar() {
  var avatarBox = document.createElement('ul');
  for (let i = 0; i < 16; i++) {
    var avatarBlock = document.createElement('li');
    avatarBlock.style.backgroundColor = 'white';
    if (Math.floor(Math.random() * 2)) {
      avatarBlock.style.backgroundColor = 'blue';
    }
    avatarBox.append(avatarBlock);
  }
  return avatarBox.outerHTML;
}

// Output userArr
function outputUsers() {
  var userProfiles = document.getElementById('userProfiles');
  userProfiles.innerHTML = '';

  for (let i = 0; i < userArr.length; i++) {
    var userLi = document.createElement('li'),
        userDiv = document.createElement('div'),
        userH1 = document.createElement('h1');

    userDiv.innerHTML = userArr[i].avatar;
    userH1.textContent = userArr[i].username;
    userLi.append(userDiv, userH1);
    userProfiles.append(userLi);
  };
};
