//Sum random numbers
function addNumbers(){
    let sum=0;
    let count=0;
    let randomNumber=0;
    while(randomNumber!=5){
        randomNumber=Math.floor(Math.random()*10);
        console.log(randomNumber);
        sum+=randomNumber;
        count++;
    }
    console.log("Total value is :",sum);
    console.log("Total value is :",count);
}
console.log(addNumbers());