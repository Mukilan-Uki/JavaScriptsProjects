//Return Keyword
function name(){
    return "John";
}

var a = name()
console.log(a);

console.log(name());

//Calculator
var num1=10;
var num2=20;

//Sum
function sum(a,b){
    return a+b;
}
//Sub
function sub(a,b){
    return a-b;
}
//Mul
function mul(a,b){
    return a*b;
}
//Div
function div(a,b){
    return a/b;
}

console.log("Summation of "+num1+" and "+num2+" is "+sum(num1, num2));
console.log("Subtraction of "+num1+" and "+num2+" is "+sub(num1, num2));
console.log("Multiplication of "+num1+" and "+num2+" is "+mul(num1, num2));
console.log("Division of "+num1+" and "+num2+" is "+div(num1, num2));