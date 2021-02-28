var input = document.getElementById('inputLabel');

function valueBtn(btnObj) {
    var pushed = btnObj.innerHTML;
    
    if(pushed=='='){
        // Calculations
        input.innerHTML = eval(input.innerHTML);
    }
    else if(pushed=='AC'){
        // Clear Functions //All Clear
        input.innerHTML = '0';      
    }
    else if(pushed=='C'){
        input.innerHTML=input.innerHTML.slice(0,-1);
    }
    else {
        if (input.innerHTML == '0'){
            input.innerHTML = pushed;
        }
        else{
            input.innerHTML += pushed;   
        }
    }
}