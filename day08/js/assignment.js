// Calculator

var val1 = document.getElementsByTagName('input')[0],
    val2 = document.getElementsByTagName('input')[1];
    // addBtn = document.getElementsByTagName('input')[2],
    // subtractBtn = document.getElementsByTagName('input')[3],
    // multiplyBtn = document.getElementsByTagName('input')[4],
    // divideBtn = document.getElementsByTagName('input')[5];

for (let i = 0; i < calcVals.children.length; i++) {
  console.log(i);
  calcVals.children[i].addEventListener('click', doCalc);
};

function doCalc(e) {
  e.preventDefault();
  switch(this.name) {
    case '+':
      alert( parseInt(val1.value) + parseInt(val2.value) );
      break;
    case '-':
      alert( parseInt(val1.value) - parseInt(val2.value) );
      break;
    case '*':
      alert( parseInt(val1.value) * parseInt(val2.value) );
      break;
    case '/':
      alert( parseInt(val1.value) / parseInt(val2.value) );
      break;

  }
  console.log(e);
  console.log(this);
}

// addBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   alert(Number(numOne.value) + Number(numTwo.value));
// });
//
// subtractBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   alert(Number(numOne.value) - Number(numTwo.value));
// });
//
// multiplyBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   alert(Number(numOne.value) * Number(numTwo.value));
// });
//
// divideBtn.addEventListener('click', function(e) {
//   e.preventDefault();
//   alert(Number(numOne.value) / Number(numTwo.value));
// });

// Christmas

inputXmas = document.getElementById('xmas');

setInterval( function() {
  var now = new Date(),
      xmas = new Date(now.getFullYear(), 11, 25),
      counter = xmas - now,
      days = Math.ceil(counter / (1000 * 60 * 60 * 24));

if (now.getMonth() == 11 && now.getDate() > 25){
  xmas.setFullYear(xmas.getFullYear() + 1);
}

  inputXmas.children[0].value = days;
}, 1000);

// Convert Temperature

var convert = document.getElementsByTagName('input')[7],
    converted = document.getElementsByTagName('input')[10],
    radioC = document.getElementsByTagName('input')[8],
    radioF = document.getElementsByTagName('input')[9],
    doItBtn = document.getElementsByTagName('input')[11];

function processTemp() {
  var temperature = Number(convert.value),
      tempType,
      result;


    if (radioC.checked) {
      result = (temperature - 32) * 5/9;
      converted.value = Math.round(result);
    } else {
      result = temperature * 9/5 + 32;
      converted.value = Math.round(result);
    }

};

doItBtn.addEventListener('click', function(e) {
  e.preventDefault();
  processTemp();
});




























//d
