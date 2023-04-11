
function addition(num1, num2){
    let result = num1 + num2;
    return result;

}

document.getElementById("cD").innerHTML = document.getElementById("one").value;

function subtraction(num1, num2){
    
}

function multiplication(num1, num2){
    let result = num1 * num2;
    return result;
}

function division(num1, num2){
    if (num1 || num2 !=0){
        let result = num1 / num2; 
    }
}

function inputValue(){
    let value = document.getElementById("inputValue").value;
    // document.getElementById("demo").innerHTML = value;
}

function onClick(elem){
    let parent = elem.parentNode;

    let val = parent
    .querySelector("input[type=text]")
    .value;

    if(val == ""){
        alert("No Value");
    }

    else{
        alert(val);
    }

}