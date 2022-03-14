var myVar = 100;


myVar = 200;

myVar = 100;

var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

var months = [
    "january", 
    "february",
    "march"
];

console.log(weekdays[0]);

// if put in a number that is not exist, then "undefine" shows up
var mixedArray = [100, "Hello there", true]




console.log(mixedArray);

mixedArray[3] = 1005;

console.log(mixedArray);

mixedArray[1] = null;

console.log(mixedArray);

var emptyArray = [];

// Array Methods

// Array Push,add value to the end of the list
emptyArray.push("this is the first item!");
console.log(emptyArray);

emptyArray.push(10000);
console.log(emptyArray);

//Array Pop, deletethe value at the end of the array
emptyArray.pop();
console.log(emptyArray);


//Array Unshift, adds new value to the beginning of the array.

weekdays.unshift("superday");
console.log(weekdays);

//Array Shift, removes the first value of the array.

weekdays.shift();
console.log(weekdays);

//Array ForeEach

weekdays.forEach(function(weekdays) {
    console.log(weekdays);
});

var setOfNumbers=[1, 10, 100, 1000, 100000];

console.log(setOfNumbers[0] * 6);

for(var i = 0; i < setOfNumbers.length; i = i + 1) {
    var product =setOfNumbers[i]*6;
    console.log(product);
}

var masterArray = [
    [10,29],
    [14, 20],
    [50, 12],
    [{},{}]
];

masterArray;// the entire array.
master[1].length;
masterArray[2][0];// This will grab the number 50 from the third array inside of this array.


