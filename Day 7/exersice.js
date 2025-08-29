//Write javascript programme for below tasks

//find fectorial number
var num=5;
var fact=1;
for(i=1; i<=num; i++){
        fact=fact*i;
        console.log(fact);
}

//find fectorial with recursive functions
var i=1;
function findFib(){
    if(i<=num){
        fact=fact*i;
        i++;
        console.log(fact);
        return findFib();
    }
    else{
        return ""
    }
}

console.log(findFib());

//find fibonici series
var a=0;
var b=1;
var count=2;

function findFI(){
    if(num==1){
        return a;
    }
    else if(num==2){
        return a,b;
    }
    else if(count<num){
        for(next=a+b; a=b,b=next; count++)
        return next;
    }
} 

console.log(findFI());

//find fibonici series(teacher's script)
function printFibonacciseries(){
    if(num==1){
        return "0";
    }
    else if(num==2){
        return "0,1";
    }
    else if(2<num){
        seriesFib="0,1";
        let a=0, b=1, c=1;
        for(let i=3; i<=num; i++){
            c=a+b;
            a=b;
            b=c;
            seriesFib+=(", "+c);
        }
    }
    console.log(seriesFib);
} 
printFibonacciseries();