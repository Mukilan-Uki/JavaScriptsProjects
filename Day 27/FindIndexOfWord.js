function FindIndexOfWord(){
    mat=[
        ["c","a","t"],
        ["d","g","o"],
        ["s","l","m"]
        ];
    str="tom";
    index=[];
    for(let i=0; i<str.length; i++){
        for(let j=0; j<mat.length; j++){
            for(let k=0; k<mat[0].length; k++){
                if(str[i]==mat[j][k])
                    index.push(j,k)
            }
        }
    }
    console.log(index.join(''));
}
FindIndexOfWord()