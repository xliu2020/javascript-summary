var Timer = setInterval(function() {
    console.log("1 SECOND HAS PASSED");
},1000);

//Synchronous
console.log(1);
console.log(2);
console.log(3);

//Asynchronous

setTimeout(function() {
    console.log(5);

    clearInterval(Timer); //two of these inside function run in the same time
},5000);


console.log(6);


//Closures

var myGlobalVariable = 100;

function someFunction() {
    var myLocalVariable = 10;

    console.log(myLocalVariable);
}

someFunction();

console.log(myGlobalVariable);

// console.log(myLocalVariable); Cannot access myLocalVariable because it is in a child scope.

//If statements do not have scopes.
if(true) {
    //Code to run
}

if (false) {
    //Code to run
}

// Example
if (true) {
    var createdVaruable = 300;
}

console.log(createdVaruable);


