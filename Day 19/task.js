function generate2DArray(row,col){
    let mat=Array.from({length:row}, ()=>new Array(col).fill(0));
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            mat[i][j]=Math.floor(Math.random()*20);
        }
    }
    return mat;
}

function reverse(mat){
    let revmat=Array.from({length:matrix[0].length},()=>new Array(matrix.length).fill(0))
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            revmat[j][i]=mat[i][j];
        }
    }
    return revmat;
}

function printArray(mat){
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
}

let row=4;
let col=3;
let matrix=generate2DArray(row,col);
let revmatrix=reverse(matrix);

printArray(matrix);
printArray(revmatrix);