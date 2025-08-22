let num1 = 5;
let num2 = 10;

function sum(a,b){
    console.log("Sum = "+(a+b));
}

function subtract(a,b){
    console.log("Subtract = "+(a-b));
}

function divide(a,b){
    console.log("Divide = "+(a/b));
}

function multiply(a,b){
    console.log("Multiply = "+(a*b));
}

function all(){
    sum(num1,num2);
    subtract(num1,num2);
    divide(num1,num2);
    multiply(num1,num2);
}

all();