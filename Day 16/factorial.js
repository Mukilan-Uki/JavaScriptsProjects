let num=10;

function factorial(num){
    let fact=1;
    let pattern="";
    for(let i=1; i<=num; i++){
        fact=fact*i;
        pattern+=fact+", ";
    }
    console.log(pattern);
}

factorial(num);