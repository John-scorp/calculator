let calDisplay;
let firstNumber = 0;
let secondNumber = 0;
let nextNumber = 0;
let clicked = 0;
let firstDenom = 0;
let seconfDenom = 0;
let equal = false;
let result = 0;
console.log(result);
let plusSign =false;
let minusSign = false;
let mulSign = false;
let divSign = false;
let percentSign = false;
calDisplay = document.getElementById("display-cal");
let hisDisplay = document.getElementById("history");

    function num1() {
                    
        firstNumber = 1;
      
        if(clicked == 0)
        {
            calDisplay.innerText = firstNumber;
            if(equal == true)
            {
            
                hisDisplay.innerText += " " + result + " ; ";
                equal = false;
            }
        
        }
        clicked +=1;
        
        if (clicked > 1)
        {
            calDisplay.innerText += firstNumber;
        }
        
    }
    function num2() {
        
       firstNumber = 2;
        
       if(clicked == 0)
       {
           calDisplay.innerText = firstNumber;
           if(equal == true)
           {
           
               hisDisplay.innerText += " " + result + " ; ";
               equal = false;
           }
       
       }
        clicked +=1;
        
        if (clicked > 1)
        {
            calDisplay.innerText += firstNumber;
        }
    }
    function num3() {
        
        firstNumber = 3;
        
        if(clicked == 0)
        {
            calDisplay.innerText = firstNumber;
            if(equal == true)
            {
            
                hisDisplay.innerText += " " + result + " ; ";
                equal = false;
            }
        
        }
        clicked +=1;
        
        if (clicked > 1)
        {
            calDisplay.innerText += firstNumber;
        }
    }
    function num4() {
        
        firstNumber = 4;
        
        if(clicked == 0)
        {
            calDisplay.innerText = firstNumber;
            if(equal == true)
            {
            
                hisDisplay.innerText += " " + result + " ; ";
                equal = false;
            }
        
        }
        clicked +=1;
        
        if (clicked > 1)
        {
                
            calDisplay.innerText += firstNumber;
        }
    }
    function num5() {
        
        firstNumber = 5;
        
        if(clicked == 0)
        {
            calDisplay.innerText = firstNumber;
            if(equal == true)
            {
            
                hisDisplay.innerText += " " + result + " ; ";
                equal = false;
            }
        
        }
        clicked +=1;
        
        if (clicked > 1)
        {
            calDisplay.innerText += firstNumber;
        }
    }
    function num6() {
    
        firstNumber = 6;
        
        if(clicked == 0)
        {
            calDisplay.innerText = firstNumber;
            if(equal == true)
            {
            
                hisDisplay.innerText += " " + result + " ; ";
                equal = false;
            }
        
        }
        clicked +=1;
        
        if (clicked > 1)
        {
            calDisplay.innerText += firstNumber;
        }
    }
    function num7() {
        
        firstNumber = 7;
        
        if(clicked == 0)
        {
            calDisplay.innerText = firstNumber;
            if(equal == true)
            {
            
                hisDisplay.innerText += " " + result + " ; ";
                equal = false;
            }
        
        }
        clicked +=1;
        
        if (clicked > 1)
        {
            calDisplay.innerText += firstNumber;
        }
    }
    function num8() {
        
        firstNumber = 8;
        
        if(clicked == 0)
        {
            calDisplay.innerText = firstNumber;
            if(equal == true)
            {
            
                hisDisplay.innerText += " " + result + " ; ";
                equal = false;
            }
        
        }
        clicked +=1;
        
        if (clicked > 1)
        {
            calDisplay.innerText += firstNumber;
        }
    }
    function num9() {
        
        firstNumber = 9;
        
        if(clicked == 0)
        {
            calDisplay.innerText = firstNumber;
            if(equal == true)
            {
            
                hisDisplay.innerText += " " + result + " ; ";
                equal = false;
            }
        
        }
        clicked +=1;
        
        if (clicked > 1)
        {
            calDisplay.innerText += firstNumber;
        }
    }
    function num0() {
        
        firstNumber = 0;
       
                
        if (clicked > 0)
        {
            calDisplay.innerText += firstNumber;
        }
    }


         
        
function btnPlus() {
    if (clicked == 0)
    {

        btnClear();
    }
    else{
        firstDenom = Number(calDisplay.innerText);
        plusSign = true;
        hisDisplay.innerText += firstDenom + " + ";
        calDisplay.innerText = "+";
        clicked = 0;
    }

}
function btnMinus() {
    if (clicked == 0)
    {
        btnClear();
    }
    else {
        firstDenom = Number(calDisplay.innerText);
        minusSign = true;
        hisDisplay.innerText += firstDenom + " - ";
        calDisplay.innerText = "-";
        clicked = 0;
    }

}

function btnMul() {
    if (clicked == 0)
    {
        btnClear();
    }
    else{
        firstDenom = Number(calDisplay.innerText);
        mulSign = true;
        hisDisplay.innerText += firstDenom + " x ";
        calDisplay.innerText = "x";
        clicked = 0;
    }

    
}
function btnDiv() {
    if (clicked == 0)
    {
        btnClear();
    }
    else{
        firstDenom = Number(calDisplay.innerText);
        divSign = true;
        hisDisplay.innerText += firstDenom + " ÷ ";
        calDisplay.innerText = "÷";
        clicked = 0;
    }
    
}
function btnClear() {
    calDisplay.innerText = 0;
    clicked = 0;
    equal = false;
    hisDisplay.innerText = null;
     plusSign =false;
     minusSign = false;
     mulSign = false;
     divSign = false;
     percentSign = false;
    
}
function btnPercent() {
    calDisplay.innerText = "";
    
}

function btnEqual() {
    seconfDenom = Number(calDisplay.innerText);

   
    if(plusSign == true)
    {
        hisDisplay.innerText += " " + seconfDenom + " = ";
        result = firstDenom + seconfDenom;
        calDisplay.innerText = result;
        clicked = 0;
        equal = true;
        plusSign= false;
    }
    if(minusSign == true)
    {
        hisDisplay.innerText += " " + seconfDenom + " = ";
        result = firstDenom - seconfDenom;
        calDisplay.innerText = result;
        clicked = 0;
        equal = true;
        minusSign = false;
    }
    if(mulSign == true)
    {
        hisDisplay.innerText += " " + seconfDenom + " = ";
        result = firstDenom * seconfDenom;
        calDisplay.innerText = result;
        clicked = 0;
        equal = true;
        minusSign = false;
    }
    if(divSign == true)
    {
        hisDisplay.innerText += " " + seconfDenom + " = ";
        result = firstDenom / seconfDenom;
        calDisplay.innerText = result;
        clicked = 0;
        equal = true;
        divSign = false;
    }


    
}