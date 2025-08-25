//Prime Numbers

var num1 = 5;

function check(a){
    if(a==1){
        return a+" is not a prime number";
    }
    else if(a%2 && a%3 && a%5){
        return a+" is a prime number";
    }
    else if(a==2 | a==3 | a==5){
        return a+" is a prime number";
    }
    else if(a/4){
        return a+" is not a prime number";
    }
}
console.log(check(num1));

//Discount

var amount = 10000;

function checkamo(a){
    if(a>5000){
        return a-a/20;
    }
    else if(a>2000){
        return a-a/10;
    }
    else if(a<=2000){
        return a;
    }
}

console.log("Final Bill is "+checkamo(amount))

//BMI

var weight = 75;
var height = 1.83;

function checkBMI(a,b){
    if((a/(b*b))<=18.5){
        return "You are Underweight";
    }
    else if(24.9>(a/(b*b))>18.5){
        return "You are Normal";
    }
    else if(25<=(a/(b*b))<=29.9){
        return "You are Overweight";
    }
    else if((a/(b*b))<=30){
        return "You are Obese";
    }
}

console.log(checkBMI(weight,height));

//Grading System

var marks = 50;

function checkMark(a){
    if(a>=90 && a<=100){
        return "A";
    }
    else if(75<=a<=89){
        return "B";
    }
    else if(50<=a<=74){
        return "C";
    }
    else if(a<50){
        return "F";
    }
    else{
        return "Inavlid Marks"
    }
}

console.log(checkMark(marks));
