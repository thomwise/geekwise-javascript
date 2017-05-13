(function(){
  var myForm = document.getElementById('emailForm');
  var submitButton = document.getElementById('submitButton');

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

messageInput.addEventListener('keydown', function(e) {
  console.log(messageInput);
  maxCharacters.textContent = "Characters remaining: " + (150 - messageInput.value.length);

});

nameInput.addEventListener('blur', function(event) {
  var myName = nameInput.value;
  var validName = /^[0-9a-zA-Z\s]+$/.test(myName);
  console.log(validName);
  if (!validName) {
    nameInput.classList.add('danger');
    submitButton.disabled = true;
  } else {
    nameInput.classList.remove('danger');
    submitButton.disabled = false;
  }
});

emailInput.addEventListener('blur', function(event) {
  var myEmail = emailInput.value;
  var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(myEmail);
  console.log(validEmail);
  if (!validEmail) {
    emailInput.classList.add('danger');
  } else {
    emailInput.classList.remove('danger');
  }
});

  myForm.addEventListener('submit', function(event) {
    document.getElementById('message').value.trim();
    myForm.setAttribute('action', 'https://formspree.io/thomas.ja.wise@gmail.com');
  });
}());
