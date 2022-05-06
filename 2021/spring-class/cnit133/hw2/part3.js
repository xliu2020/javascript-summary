function process3 () {

    var num1=document.getElementById("number1").value;
    var num2=document.getElementById("number2").value;
    var num3=document.getElementById("number3").value;
    var num4=document.getElementById("number4").value;
    var num5=document.getElementById("number5").value;
    
    if(isNaN(num1) == true || isNaN(num2) == true || isNaN(num3) == true || isNaN(num4) == true || isNaN(num5) == true) {
        alert("The data you enter is not a number.")
        console.log(typeof(num1));
    } else {

        num1=parseInt(document.getElementById("number1").value);
        num2=parseInt(document.getElementById("number2").value);
        num3=parseInt(document.getElementById("number3").value);
        num4=parseInt(document.getElementById("number4").value);
        num5=parseInt(document.getElementById("number5").value);


        var arr=[num1, num2, num3, num4, num5];
        var positiveCount = 0;
        var negativeCount = 0;
        var zeroCount = 0;
        
        for(var i = 0; i<arr.length; i++) {
        if (arr[i] > 0 ) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
        }

        document.getElementById("posiNum").value=positiveCount;
        document.getElementById("negaNum").value=negativeCount;
        document.getElementById("zeroNum").value=zeroCount;
    }

};