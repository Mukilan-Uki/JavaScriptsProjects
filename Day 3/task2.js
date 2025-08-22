//Find the largast number

var num1 = 5;
var num2 = 10;
var num3 = 20;

function check(num1,num2,num3){
    if(num1 > num2 && num2 > num3){
        return num2;
    }
    else if(num1 > num3 && num1 > num2){
        return num1;
    }
    else if(num1 < num3){
        return num3;
    }
}
console.log(check(num1,num2,num3));

//Leap year

var year = 2020;

function check1(year){
    if(year%4){
        return year+" not a leap year";
    }
    else{
        return year+" a leap year"
    }
}
console.log(check1(year));

//Vowel or consonant

var letter = "e";

function check3(letter){
    if(letter == "a" || letter == "u" || letter == "e" || letter == "o" || letter == "i"){
        return letter+" is a vowel"
    }
    else{
        return letter+" is a consonant"
    }
}
console.log(check3(letter));