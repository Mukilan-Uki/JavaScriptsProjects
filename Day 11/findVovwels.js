//find vowel letter
var letter="U";

function findVowel(letter){
    if(letter=="a" || letter=="u" || letter=="o" || letter=="i" || letter=="e"|| letter=="U"|| letter=="A"|| letter=="I"|| letter=="O"|| letter=="E"){
        console.log(letter+" is a vowel letter");
    }
    else{
        console.log(letter+" is not a vowel letter");
    }
}
findVowel(letter);

//read the  a number in reverse
let num = 876;
function getReverseNumber(num){
    let revNum=0;
    let count=0;
    while(num>0){
        revNum= (revNum*10)+(num%10);
        num=Math.floor(num/10);
        count++;
    }
    console.log("Total itteration is "+count);
    return revNum;
}
console.log("The reverse number of "+num+" is "+getReverseNumber(num));

//array random
var numbers=[];
function addNumber(){
    let length=10;
    for(let i=0; i<length; i++){
        num1=Math.floor(Math.random()*10);
        numbers.push(num1);
    }
    console.log(numbers);
}
addNumber()

//array summation
function sumNumber(){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    console.log(sum);
}
sumNumber();
