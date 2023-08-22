let calDisplay;
let firstNumber = 0;
let secondNumber = 0;
let nextNumber = 0;
let clicked = 0;
let firstDenom = 0;
let seconfDenom = 0;
let equal = false;
let result = 0;
console.log(1000 * 10/100);
let plusSign =false;
let minusSign = false;
let mulSign = false;
let divSign = false;
let percentSign = false;
let thirdNumber = 0;
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
     if (clicked == 0)
    {
        btnClear();
    }
    else{
        thirdNumber = Number(calDisplay.innerText);
        percentSign = true;
        hisDisplay.innerText += thirdNumber + " % ";
        calDisplay.innerText = " % ";
        clicked = 0;
    }
    
}

function btnEqual() {
    seconfDenom =  Number(calDisplay.innerText);
    

   
    if(plusSign == true  && percentSign == false)
    {
        hisDisplay.innerText += " " + seconfDenom + " = ";
        result = firstDenom + seconfDenom;
        calDisplay.innerText = result;
        clicked = 0;
        equal = true;
        plusSign= false;
    }
    if(minusSign == true && percentSign == false)
    {
        hisDisplay.innerText += " " + seconfDenom + " = ";
        result = firstDenom - seconfDenom;
        calDisplay.innerText = result;
        clicked = 0;
        equal = true;
        minusSign = false;
    }
    if(mulSign == true && percentSign == false)
    {
        hisDisplay.innerText += " " + seconfDenom + " = ";
        result = firstDenom * seconfDenom;
        calDisplay.innerText = result;
        clicked = 0;
        equal = true;
        mulSign = false;
    }
    if(divSign == true && percentSign == false)
    {
        hisDisplay.innerText += " " + seconfDenom + " = ";
        result = firstDenom / seconfDenom;
        calDisplay.innerText = result;
        clicked = 0;
        equal = true;
        divSign = false;
    }
    if(percentSign == true)
    {
        hisDisplay.innerText += " = ";
        result = firstDenom * (thirdNumber/100);
        calDisplay.innerText = result;
        console.log(result)
        clicked = 0;
        equal = true;
        percentSign = false;
        mulSign = false;
    }

    
}