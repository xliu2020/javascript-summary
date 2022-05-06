$( document ).ready(function() {
    $( "#input" ).focus();
    });
    
    
    var submit = document.getElementById("proc");
    
    var res = document.getElementById("res");
           
        
    submit.onclick = function() {
      //define variables	
    
      var choice, numlines, startTag, endTag, physType;
      var errMsg1="<span style='font-weight: bold; color: red; font-size: 1.5em;'>Invalid input, please modify your numbers</span>";
      var valInput = true; 
    
      //get input from user 
    
      choice = document.getElementById("input").value;
      numlines = document.getElementById("lines").value;
    
    
    if ( choice > 3 || choice < 1 || numlines < 1 || numlines > 10 ||
    isNaN(choice) || isNaN(numlines) || choice === "" || numlines === "" )
    
     document.getElementById("errOut").innerHTML = errMsg1;
    
    else {
    
      switch ( choice ) {
        case "1":
                 startTag = "<strong>";
                 endTag   = "</strong>";
                 physType = "<h2>Strong</h2>";
                 break; 
                 
        case "2":
                 startTag = "<em>";
                 endTag   = "</em>";
                 physType = "<h2>Emphasize</h2>";
                 break;
        case "3":
                 startTag = "<u>";
                 endTag   = "</u>";
                 physType = "<h2>Underline</h2>";
                 break; 
    
        default:
        valInput = false;
    
         }
    
    htmlOutput = "";
    
    if (valInput === true ){
    
        htmlOutput += ( physType + startTag );
    
    /* Build output into a variable named htmloutput */
    
        for (var i = 1 ; i <=numlines; ++i)
        {
            htmlOutput += (startTag + "<p>" + "Line # " + i + endTag + "</p>");
        }
     
    }
    
    /* Write output onto the same page by moving htmloutput data into the div whose id
    is listout */
    
        document.getElementById("listOut").innerHTML = htmlOutput;
    
    }
    
    }
    
    res.onclick = function() 
    {
    document.getElementById("errOut").innerHTML = "";
    document.getElementById("listOut").innerHTML = "";
    }