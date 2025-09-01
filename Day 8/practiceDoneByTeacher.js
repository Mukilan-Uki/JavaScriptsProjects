let numbers=[];

function addAnElement(numbers,index,value){
    if(index<0 || index>=numbers.length){
        console.log("Invalid index number");
    }
    else{
        number.splice(index,0,value);
        console.log("New array is "+numbers);
        console.log("Array lenth else part "+numbers.length);
    }
}


function printAllElements(numbers){
    console.log(numbers);
}

function printRange(numbers, start, end){
    if(start<0 || end>=numbers.lenth){
        console.log("Invalid start and end values");
    }
    else{
        for(let i=start; i<=end; i++)
            console.log(numbers[i]);
    }
}
printRange(numbers, 2, 5);

function addAnElementAtleast(numbers, element){
    numbers.push(element);
    console.log(element+ " is added to the array");
    return numbers;
}
numbers=addAnElementAtleast(numbers,45);
console.log(numbers);

//finding the largest number of array
let num=[1,2,3,4,5,6];
function findLargestNumber(num){

let max=num[0];

    for(let i=1; i<num.length; i++){
        if(max<num[i]){
            max=num[i];
        }
    }
    console.log("The largest value of this array is "+max);
}

findLargestNumber(num);

//sum all the arrays values

function sumAllArrays(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log("Total: " + sum);
}
sumAllArrays(num);