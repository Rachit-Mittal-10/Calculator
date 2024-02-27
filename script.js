const calculator = document.getElementById("calculator");
const display = document.getElementById("display-screen");

let number_btn = document.getElementsByClassName("number-btn");
let operator_btn = document.getElementsByClassName("operator-btn");
let clear_btn = document.getElementById("clear-btn");
let backspace_btn = document.getElementById("backspace-btn");
let equal_btn = document.getElementById("equal-btn");

let previousOperator = "";
let userInput = [];

const pressNumber = function(input){
    display.value += input;
}

const pressOperator = function(input){
    let input_num = Number(display.value);
    userInput.push(input_num);
    clearDisplay();
    if(userInput.length === 2 && previousOperator !== ""){
        let op1 = userInput[0];
        let op2 = userInput[1];
        let result = calculate(op1,op2,previousOperator);
        userInput.splice(0,2,result);
    }
    previousOperator = input;
}

const clearDisplay = function(){
    display.value = "";
}

const clearHardDisplay = function(){
    display.value = "";
    previousOperator = "";
    userInput = [];
}

const backSpace = function(){
    display.value = display.value.slice(0,-1);
}

const pressEqual = function(){
    let input_num = Number(display.value);
    clearDisplay();
    userInput.push(input_num);
    let op1 = userInput[0];
    let op2 = userInput[1];
    let result = calculate(op1,op2,previousOperator);
    clearHardDisplay();
    display.value += result;
}

const calculate = function(op1,op2,operator){
    if(operator === "+"){
        return op1+op2;
    }
    else if(operator === "-"){
        return op1-op2;
    }
    else if(operator == "*"){
        return op1*op2;
    }
    else if(operator == "/"){
        if(op2 === 0){
            return "LOL";
        }
        return op1/op2;
    }
    else{
        return op1**op2;
    }
}

clear_btn.addEventListener('click',clearHardDisplay);
backspace_btn.addEventListener('click',backSpace);
equal_btn.addEventListener('click',pressEqual);

Array.from(operator_btn).forEach(function(button){
    button.addEventListener('click',function(){
        pressOperator(button.value);
    });
})

Array.from(number_btn).forEach(function(button){
    button.addEventListener('click',function(){
        pressNumber(button.value);
    });
})