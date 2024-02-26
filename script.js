let calculator = document.getElementById("calculator");
let display = document.getElementById("display-screen");
let input_string = "";

const appendToDisplay = function(input){
    display.value += input;
}

const clearDisplay = function(){
    display.value = "";
}

const pressEqual = function(){
    input_string = display.value;
    let ans = calculate(input_string)
    display.value = ans;
}

const calculate = function(input){
    let characters = input.split('');
}