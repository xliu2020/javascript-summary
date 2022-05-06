function process2(){
        var integer1, integer2, integer3, int1, int2, int3;
        integer1 = document.getElementById("num1").value;
        integer2 = document.getElementById("num2").value;
        integer3 = document.getElementById("num3").value;

        if (isNaN(integer1)==true || isNaN(integer2)==true || isNaN(integer3)==true) {

            alert("Error: The data you enter is not a number.");
            
        } else {


        int1 = Math.round(parseInt(integer1));
        int2 = Math.round(parseInt(integer2));
        int3 = Math.round(parseInt(integer3));

        document.getElementById("num1").value = int1.toString();
        document.getElementById("num2").value = int2.toString();
        document.getElementById("num3").value = int3.toString();
        
    
        var htmlOutput = "";
        
        htmlOutput += "<table>";
        htmlOutput +="<tr><td>Sum is:</td><td><input type='text' id='sumResult' value='' readonly></td></tr>";
        htmlOutput +="<tr><td>Average is:</td><td><input type='text' id='averageResult' value='' readonly></td></tr>";
        htmlOutput +="<tr><td>Product is:</td><td><input type='text' id='productResult' value='' readonly></td></tr>";
        htmlOutput +="<tr><td>Smallest number is:</td><td><input type='text'id='smallResult' value='' readonly></td></tr>";
        htmlOutput +="<tr><td>Largest number is:</td><td><input type='text' id='largeResult' value='' readonly></td></tr>";
        htmlOutput +="</table>";

        document.getElementById("theTable").innerHTML= htmlOutput;
        
      

        var sum, average, product;
        sum = int1 + int2 + int3;
        average = sum / 3;
        product = int1 * int2 * int3;

        document.getElementById("sumResult").value = sum;
        document.getElementById("averageResult").value = average;
        document.getElementById("productResult").value = product;

        var largestInt, smallestInt;
        largestInt=Math.max(int1, int2, int3);
        smallestInt=Math.min(int1, int2, int3);

        document.getElementById("largeResult").value = largestInt;
        document.getElementById("smallResult").value = smallestInt;

        
        
        
        
        
        
  
    };
};
