//Search for an element in the array and return its index.
let num=[14,28,39,54,25,6,27];

console.log("Index is "+num[2]);

//Calculate the average of the elements.

function average(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log(sum/num.length);
}
average(num);

//Write a function reverseArray() that reverses the order of the elements.

function reverseArray(num){

let max=num[0];

    for(let i=1; i<num.length; i++){
        if(max<num[i]){
            max=num[i];
            num.push(max);
        }
    }
    console.log(num);
}

reverseArray(num);

//Write a function exists(element) that prints true if the element is present, otherwise false.

let max=num[0];
function check(element){
    for(let i=0; i<=num.length; i++){
        if(num==element){
            return "true";
        }
        else if(max<num[i]){
            max=num[i];
            return "false"
        }
    }
}
check(5);

//Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not.

function checkPalindrome(word){}

//Write a function sumOfDigi(number) that prints the sum of the given number.

function sumOfDigi(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log("Total: " + sum);
}
sumOfDigi(num);