function findFileEx(){
    let str="hgfdrtyujkmnbv.jpeg"
    let ext=[];
    for(let i=str.length-1; i>0; i--){
        if(str[i]!=".")
            ext.unshift(str[i]);
        else if(str[i]==".")
            break;
    }
    return ext.join('');
}
console.log(findFileEx());

function findFileEx2(){
    let str="sdfghjdfghuijbvbn.com";
    let word=str.split(".").pop()
    return word;
}
console.log(findFileEx2())

