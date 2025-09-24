let word="mukilan";
let vow=[];
function countVowel(word){
    let letter=0;
    for(let i=0; i<word.length; i++){
        letter=word.charAt(i);
        if(letter=="a" || letter=="u" || letter=="e" || letter=="i" || letter=="o" || letter=="E" || letter=="O" || letter=="I" || letter=="A" || letter=="U"){
            vow.push(letter);
        }
    }
    return "Total vowel letter of "+word+" is "+vow;
}
console.log(countVowel(word));