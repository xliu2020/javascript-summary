$(document).ready(function(){
   
    $("#bgchanger").click(function(){
        var redColor = Math.random() *256;
        var redColor = Math.floor(redColor);

        var greenColor = Math.random() *256;
        var greenColor = Math.floor(greenColor);

        var blueColor = Math.random() *256;
        var blueColor = Math.floor(blueColor);

        var rgbValue = `rgb(${redColor},${greenColor},${blueColor})`;

        var rgbText = `<p>${rgbValue}<p>`

        $("body").css("background-color", rgbValue);
        $("body").append(rgbText);

    });

});

