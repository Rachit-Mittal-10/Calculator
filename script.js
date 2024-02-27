let calculator = document.getElementById("calculator");
let display = document.getElementById("display-screen");
let input_string = "";

let operators = ['+','-','/','*','**','%'];

const appendToDisplay = function(input){
    display.value += input;
}

const clearDisplay = function(){
    display.value = "";
}

const backspace = function(){
    display.value = display.value.slice(0,-1);
    return;
}

const pressEqual = function(){
    input_string = display.value;
    let ans = calculate(input_string)
    display.value = ans;
}

const calculate = function(input){
    let characters = input.split(operators);
    console.log(characters);
    return "";
}