//generate 10x5 array

const row=10;
const col=5;
function generateMatrix(row,col){
    var mat=Array.from({length:row}, ()=> new Array(col).fill(0));
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            mat[i][j]=Math.floor(Math.random()*10);
        }
    }
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            
        }
    }
    let max=mat[0][0];
    for(let i=1; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            if(max<mat[i][j]){
                max=mat[i][j];
            }
        }
        console.log("The largest value of this array is "+max);
    }
    
}
console.log(generateMatrix(row,col));
