$(document).ready(function(){

    $("#plus").click(function() {
        var firstNumberString = $("#num1").val();
        var secondNumberString = $("#num2").val();
        var firstNumberConverted = parseInt(firstNumberString);
        var secondNumberConverted = parseInt(secondNumberString);

      
        /*
            "hello" -> NaN
            "100Hello" -> 100;
            "100" -> 100
            "Hello100" -> NaN
            "90k3i8df9k03" -> 90
            true -> NaN // in some other languages you get 1.
        */

        // isNaN() checks if the argument is an NaN, if it is, returns true, if it is not, returns false.
       
        // if (firstNumberConverted === NaN) {

    // || means either 1 of 2 conditions is true or false
    
    if (isNaN(firstNumberConverted) || isNaN(secondNumberConverted)){
        $("#results").html("Error:this is not a number");
        $("#results").css("color","red");
    } else {
        var sum = firstNumberConverted + secondNumberConverted;
        $("#results").html(sum);
        $("#results").css("color","black");
        
        }
           
    });
   
});