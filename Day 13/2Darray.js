let num=[
    [10,20,30],
    [10,50,60],
    [50,40,80]
];
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}
for(let i=0; i<num.length; i++){
    for(let j=0; j<num[0].length; j++){
        console.log(num[i][j]);
    }
}
for(let i=0; i<num.length; i++){
    let string="";
    for(let j=0; j<num[0].length; j++){
        string+=" "+num[i][j]+","
    }
    console.log(string);
}

//single line 2d array creating
const rows=3;
const cols=4;
const mat=Array.from({length:rows}, ()=> new Array(cols).fill(Math.floor(Math.random()*10)));
console.log("single line 2D array creating");
for(let i=0; i<mat.length; i++){
    console.log(mat[i]);
}

for(let i=0; i<mat.length; i++){
    let string="";
    for(let j=0; j<mat[0].length; j++){
        string+=" "+mat[i][j]+","
    }
    console.log(string);
}