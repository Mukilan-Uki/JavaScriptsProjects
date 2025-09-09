//check palindrome
let word="mom";
function checkpalindrome(word){
    for(let i=0; i<word.length/2; i++){
        if(word.charAt(i)==word.charAt(word.length-1-i)){
            return word+" is a palindrome";
        }
        else{
            return word+" isn't a palindrome";
        }
    }
}
console.log(checkpalindrome(word));


//find the same numbers in array
let mukilan = [1,1,1,2,4,6,7,8,4,2,1];
let samemukilan = [];
let notsamemukilan=[];

function checksame(){
    for(let i=0; i<mukilan.length; i++){
       let j=0;
            if(mukilan[j]==mukilan[i]){
                samemukilan.push(mukilan[i])
            }
            else{
                notsamemukilan.push(mukilan[i]);
            }
        }
    }

checksame()
console.log(samemukilan)
console.log("Total same numbers is "+samemukilan[0]+" = "+samemukilan.length)
console.log(notsamemukilan)