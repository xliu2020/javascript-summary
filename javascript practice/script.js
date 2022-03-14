$(document).ready(function() {
    
   setTimeout(function() {
        var myBox = $("#box"); 
        // jQuery();
        myBox.css("background-color", "red");
    
   },3000);

   setTimeout(function() {
    var myBox = $("#box"); 
    // jQuery();
    myBox.css("background-color", "green");

    },6000);

   var orangeButton = $("#orange-button");// the purpose of define it is to use it for many times

   orangeButton.click(function() {
       
        $("#box").css("background-color","orange");
    });

    var purpleButton = $("#purple-button");

    purpleButton.click(function (){
        $("#box").css("background-color", "purple");

         // If purple button gets clicked, we change box AND button css properties.
        $(purpleButton).css("background-color","purple");
        $("#purple-button").css("color", "white");     
    })
    $("#pink-button").click(function(){
        $("#box").css("background-color","pink");
    });

      // if you click on the body, the body will have a background color of yellow.
    $("body").click(function(){
        $("body").css("background-color", "yellow");
    });




});
