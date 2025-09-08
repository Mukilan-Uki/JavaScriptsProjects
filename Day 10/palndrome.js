let str="madam";
function ispalindrome(str){
    let ispalin=true;
    for(let i=0; i<(str.length/2); i++){
        if(str.charAt(i)!=str.charAt(str.length-1-i)){
            ispalin=false
        }
    }
    return ispalin;
}
if(ispalindrome(str))
    console.log("Yes, "+str+" is palindrome word");
else
    console.log("No, "+str+" isn't a palindrome word");