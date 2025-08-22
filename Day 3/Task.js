//postive, negative, or zero

var num = 1;
function check(num){
    if(num < 0){
        return "Negative";
    }
    else if(num > 0){
        return "Positive";
    }
    else if(num == 0){
        return "Zero";
    }
}

console.log(check(num));
_____________________________________________

//Age 

var age = 20;
function check1(age){
    if(age >= 18){
        return "You Can Vote";
    }
    else{
        return "You Cannot Vote";
    }
}

console.log(check1(age));
_____________________________________________

//Even or Odd

var num1 = 4;
function check2(num1){
    if(num1%2){
        return "Odd";
    }
    else{
        return "Even";
    }
}

console.log(check2(num1));
_____________________________________________

//Divisable by 5 or not

var num2 = 20;
function check3(num2){
    if(num2%5){
        return "Num1 is nondivisable by 5";
    }
    else{
        return "Num1 is divisable by 5";
    }
}

console.log(check3(num2));
_____________________________________________