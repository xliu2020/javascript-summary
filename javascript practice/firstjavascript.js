
// takes the text within the quotes and sends it to the javascript Console
console.log("hello world!");
console.log("how are you doing?");

//this is a sigle line comment

/*

multi-line 
comment

*/

//Javascript  DATATYPES
// String is a normal text
"this is a really long sentence. !@#$%^&*()_+";
"100";
"To use single quotes ' and ' in the string, use double qoutes on the outside.";
'To use double quotes " and " in the string, use single quotes on the outside.';

// 'There's a nice day!' INCORRECT
// "There's a nice day!" CORRECT

// The computer will break on the "second" string.
// " Hello this is a double quote " "its used for text"; INCORRECT
// ' Hello this is a double quote " "its used for text'; CORRECT

"'''''''''''''''''''''''''";

'"""""""""""""""""""""""""';


"100";

console.log(1000);

console.log(true);

console.log("Hey there");


// Number you can do math on
100;
10.9;
.70009;

// Boolean you can switch in statement
true;
false;

// Variable
var myBox;

//naming schemes
//camel case:capitialize every word after the first word
//Example:originalLocation
// snake case:every space is replaced by an underscore, no capital letters.
//example: original_location

myBox ="kitchen utensils";

var secondVariable = "bathroom supplies";

myBox = "books";

console.log(myBox);

// mathematical operators
// +,-,*,%,/

var sum =2+4;
var difference= 2-4;
var quotient= 2/4;
var product= 2*4;
var remainder= 2 % 4;

console.log("The Quotient of 2 and 4 is" , quotient);
console.log(remainder);

// Logical Operator (compare 2 pieces of data)
// ==, >,<, !=, <=,>=

var isItRaining = ture;

isItRaining == true; //true

var someNumber =100;

someNumber ==50; //false

someNumber >= 50; //true

someNumber < 50; //false


"hello" == "hello"; //true
"goodbye" == "hello"; //false
"Hello" == "hello"; //false
"hello " == "hello"; //false

true == true; //true
true == false; //false
false == false; //true

sum > product; //false


// If Statement, is to run code based on existing data.
//If    this is true      then run this
//if        ()                 {}


var personAge = 21

if (personAge >= 21) {
    console.log("congrat you can drink")
} else {
    console.log("Sorry, you are too young to drink!");
}

console.log("we march on!");

//Function
//keyword     name of function             code block
//function    mYfunction()                   {}

function myFirstFunction() {

    console.log("Have a nice day!");
    console.log("Today will be sunny");
    console.log("Today will be dry");

    if(raining) {
        console.log("Bring an unbrella");
    }

    var raining = true;

}


myFirstFunction();

nonExistingVariable;





