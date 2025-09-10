//practice
var mat=[
    [],
    [],
    []
];

function createArray(){
let row=3;
let col=4;
let num=1;
for(let i=0; i<row; i++){
    for(let j=0; j<col; j++){
        mat[i].push(num)
        num+=Math.floor(Math.random()*10)
    }
}
for(let i=0; i<mat.length; i++){
    let string="";
    for(let j=0; j<mat[0].length; j++){
        string+=" "+mat[i][j]+","
    }
    console.log(string);
}
}
createArray()
console.log(mat);

//
var matt=[
    [],
    [],
    []
];

function createArray2(){
let row=3;
let col=4;
let num=5;
for(let i=0; i<row; i++){
    for(let j=0; j<col; j++){
        matt[i].push(num)
        num+=Math.floor(Math.random()*10)
    }
}
for(let i=0; i<matt.length; i++){
    let string="";
    for(let j=0; j<matt[0].length; j++){
        string+=" "+matt[i][j]+","
    }
    console.log(string);
}
}
createArray2()
console.log(matt);

//2d matrix sumation
let summat=[
    [],
    [],
    []
];

function sumOfMat(){
    let sum=0;
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
           sum=mat[i][j]+matt[i][j]; 
           summat[i].push(sum);
        }
    }
    for(let i=0; i<summat.length; i++){
    let string="";
    for(let j=0; j<summat[0].length; j++){
        string+=" "+summat[i][j]+","
    }
    console.log(string);
}
}
sumOfMat()
console.log(summat);