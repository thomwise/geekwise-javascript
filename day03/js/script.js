console.log('Hello World')

// Array
var firstArray = ['smelly poop', 'fecal matter', 'brown and spongy', 'forrest seale', 'diahrea']

// Access each element by indexing
console.log(firstArray[3]);

// .length() Method
console.log(firstArray.length);

var lastPoop = firstArray[firstArray.length - 1];
console.log(lastPoop);

// .forEach() Method
firstArray.forEach(function(item, index) {
  console.log(index + ' : ' + item);
});

// .isArray() Method
var trueOrFalse = Array.isArray(firstArray);
// console.log(trueOrFalse);

var oneItemArray = ['one'];
// console.log(Array.isArray(oneItemArray));

// .push() Method
oneItemArray.push('two');
// console.log(oneItemArray);

oneItemArray.push(3);
// console.log(oneItemArray);

// .pop() Method
oneItemArray.pop(oneItemArray);
// console.log(oneItemArray);

// .pop() Returns the last item
var returnedItem = oneItemArray.pop();
// console.log(returnedItem);

// .unshift() Method
firstArray.unshift('greenish');
console.log(firstArray);

// .shift() Method
firstArray.shift();
console.log(firstArray);

// .shift() returns the first item from the array
var shiftedColor = firstArray.shift();
console.log(shiftedColor);
console.log(firstArray);

// .indexOf() Method
var poopPosition = firstArray.indexOf('brown and spongy');
console.log(poopPosition);

// .lastIndexOf() Method
firstArray.push('mellow yellow', 'blood', 'dung', 'stool')
console.log(firstArray);

var lastPoop = firstArray.lastIndexOf('dung');
console.log(lastPoop);

// .splice()                 indexOf   how many?
var removeItem = firstArray.splice(2, 1);
console.log(firstArray);
console.log(removeItem);

var removeItems = firstArray.splice(3, 2);
console.log(removeItems);

// add items to an array using .splice()
var addItems = firstArray.splice(1, 0, 'excrement', 'guano', 'cheese its');
console.log(firstArray);

var removeAndAdd = firstArray.splice(4, 1, 'milky');
console.log(firstArray);

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// assume you don't know green is at index 3
// using a combo of what we know remove green and blue and replace with indigo

console.log(colors);
var green = colors.indexOf('green');
var spliceGreenIndigo = colors.splice(green, 2, 'indigo')
console.log(colors);

// .slice()
console.log(colors);
var newColors = colors.slice();
console.log(newColors);

var colorSlice = colors.slice(1, 3);
console.log(colorSlice);

// .reverse()
var reversed = colors.reverse();
console.log(reversed);

// .sort()
var numbers = [1, 20, 10, 2, 01, 22, 3, 2.5];
console.log(numbers.sort());

var words = ['word', 'Word', '1 Word', 'apple', '2 Words', 'wordy', 200]
console.log(words.sort());

// comparison sorting
var numbers = [2, 4, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

document.write('hello world ' + 5 + 4);
