var string="This is a sentence.";

// This converts the string in the string variable into an array with the individual characters as elements.

var stringArray = string.split("");

console.log(stringArray);

// Remove the last element.
stringArray.pop();

console.log(stringArray);

// Combine all the elements to form a string. The delimiter adds the character between the elements but we don't want any extra characters so we use an empty string.
var updatedString = stringArray.join("");

console.log(updatedString);


// Following code searches for the letter e in stringArray.

var firstMatch = -1;//represent not found

for (var i = 0; i < stringArray.length; i = i + 1) {

    var currentLetter = stringArray[i];

    if (currentLetter === "e") {
        console.log("found an e!");

        firstMatch = i; // This will save the index number of the match, so it can be used later, after the loop is done.

        stringArray[i] = "E";

        // break; This will stop the loop once we find the first match.

        // continue; // This will ignore the following code and move on with the rest of the loop.

    } else {
        console.log("no e here!");
    }

  //console.log("no e here!");

}

if (firstMatch===-1) {
    console.log("we did not find any Es!");
} else {

}

console.log(stringArray.join(""));
