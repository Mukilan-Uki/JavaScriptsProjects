//teachers explain
function generateMatrix(row,col){
    let mat=Array.from({length:row}, ()=> new Array(col).fill(0));
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            mat[i][j]=Math.floor(Math.random()*10);
        }
    }
    return mat;
}

function printMatrix(mat){
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
}

function sumOfMatrix(mat1, mat2){
    let sumMatrix=Array.from({length: mat1.length},()=>Array(mat1[0].length).fill(0));
    for(let i=0; i<mat1.length; i++){
        for(let j=0; j<mat1[0].length; j++){
            sumMatrix[i][j]=mat1[i][j]+mat2[i][j];
        }
    }
    return sumMatrix;
}
let row=3;
let col=4;
let mat1=generateMatrix(row,col);
let mat2=generateMatrix(row,col);
let sumMat=sumOfMatrix(mat1,mat2);

console.log("Matrix 1 is ");
printMatrix(mat1);
console.log("Matrix 2 is ");
printMatrix(mat2);

console.log("Sumation of both Matrix is ");
printMatrix(sumMat);