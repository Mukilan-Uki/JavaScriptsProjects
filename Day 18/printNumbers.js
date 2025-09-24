let num=16;
let numbers=[];
function PrintNumbers(num){
    for(let i=1; i<=num; i++){
        numbers.push(i);
    }
    return "The numbers are "+numbers;
}
console.log(PrintNumbers(num));