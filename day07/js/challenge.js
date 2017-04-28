var answer = document.querySelector('input');

var runBtn = document.querySelector('button');

runBtn.addEventListener('click', function() {
  // alphWords(answer.value);
  revAlphWord(answer.value)
});
// Accept user value, arrange words alphabetically

function alphWords(userStr) {
  console.log(userStr.split(' '));
}

function revAlphWord(userStr) {
  //log reversed alphabetized userStr
  var userStrArr = userStr.split(' ');
  var userStrRev = [];
  userStrArr.forEach(function(word) {
    userStrRev.push(word.split('').sort().reverse().join(''));
  });
  // console.log(userStr.split('').sort().reverse());
  console.log(userStrRev.sort().join(' '));
}
// .split()
// .sort()
// .reverse()
// .join()


// reverse alphabetize each character in each word
// order complete string alphabetized


// background-color: hsl(0, 50%, 50%);

window.addEventListener('mousemove', function(e){
  // console.clear();
  // console.log(this);
  // console.log(e.x, e.y);
  var winW = this.innerWidth;
  var winH = this.innerHeight;
  var mouseX = e.x;
  var mouseY = e.y;

  var hue = Math.round(mouseX / winW * 360);
  var perc = Math.round(mouseY / winH * 100);
  console.log(perc);
  document.body.style.backgroundColor = 'hsl('+hue+', '+perc+'%, '+perc+'%)';
});







//d
