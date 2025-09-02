let arrayx=[17,38,643,83,82,63,36];
function findIndaxInArray(array, num){
    let index="";
    for(let i=0; i<array.length; i++){
        if(array[i]==num){
            index+=(i+", ");
        }
    }
    return index;
}

let indexValue = findIndexInArray(arrayx, 10);
if(indexValue=="")
    console.log("The number isn't found");
else{
    console.log("The number is available in "+indexValue+" Index slot");
}

//find average of array

function findAverage(array){
    let sum=0, avg=0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    avg = sum/array.length;
    return avg;
}

findAverage()

//

function reverseArray(array){
    let revarray=[];
    for(let i=0; i<array.length; i++){
        revarray[i]=array[array.length-1-i];
    }
    return revarray;
}
console.log("the sug"+arrayx);
console.log("the sug-"+reverseArray(arrayx));