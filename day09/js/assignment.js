var userArr = [];

// LISTEN FOR A NEW USER CLICK

var newUser = document.querySelector('nav button'),
    newUserForm = document.querySelector('nav form');

newUser.addEventListener('click', function() {
  newUserForm.classList.toggle('hidden');
  // newUserForm.reset();
});

// LISTEN FOR A CREATE USER click

var NewUserBtn = document.querySelector('nav form input[type="submit"]');

NewUserBtn.addEventListener('click', function(e) {
  e.preventDefault();
// var user1 = new NewUserObj('matt', 'higley', 'sample');
  createUser(newUserForm.children);
  newUserForm.classList.toggle('hidden');
  newUserForm.reset();
});

function NewUserObj(firstname, lastname, username, avatar) {
  this.first = firstname;
  this.last = lastname;
  this.user = username;
  this.avatar = avatar;
};

function createUser(obj) {
  userArr.push(new NewUserObj(obj[0].value, obj[1].value, obj[2].value, makeAvatar()));
  outputUsers();
};

function makeAvatar() {
  var avatarBox = document.createElement('ul');
  for (var i = 0; i < 16; i++) {
    var avatarBlock = document.createElement('li');
    avatarBlock.style.backgroundColor = 'white';
    if(Math.floor(Math.random() * 2)) {
      avatarBlock.style.backgroundColor = randcolor();
    }
    avatarBox.append(avatarBlock);
  }
  return avatarBox.outerHTML;
};

function randcolor() {
  letter = '0123456789ABCDEF';
  symbol = '#';
  for (var i = 0; i < 6; i++) {
    symbol += letter[Math.floor(Math.random() * 16)];
  }
  return symbol;
}

function outputUsers() {
  var userProfiles = document.getElementById('userProfiles');
  userProfiles.innerHTML = '';
  for (let i = 0; i < userArr.length; i++) {
    var userLi = document.createElement("li"),
        userH1 = document.createElement("h1"),
        userDiv = document.createElement("div");

    userH1.textContent = userArr[i].user;
    userDiv.innerHTML = userArr[i].avatar;
    userLi.append(userDiv, userH1);
    userProfiles.append(userLi);
  }
};
