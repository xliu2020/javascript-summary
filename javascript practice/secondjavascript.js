var someVariable = 100;
var isItRaining = false;

if (someVariable > 10) {
    console.log("This number is higher than 10.");

    if (someVariable < 1000) {
        console.log("This number is lower than 1000.");
    }
} else {
    console.log("This number is lower than 10.");
}

if (isItRaining == true) {
    console.log("Bring an umbrella!");
}

// Functions
function coolFunction() {
    console.log(100);
    console.log(10);
    console.log(1);
}

coolFunction();
coolFunction();
coolFunction();


// Arguments & Parameters
// Arguments get stored inside of Parameters
// Arguments are the values given to the function, and parameters are the function variables that will hold these values.
function addExclamation(message) {
    console.log(message, "!!!",100);
}

addExclamation("Hello how are you");
addExclamation("It is raining");
addExclamation("Goodbye"); 

//


var userName = "Cat";

//Concatenation
var completeSentence = "My name is " + userName;
console.log(completeSentence);

//Type Coercion
console.log("Hello" + 100);
console.log("100"+ 100);
console.log(100 + "100");

var longString = "Hello there!" * 10;
console.log(longString);


