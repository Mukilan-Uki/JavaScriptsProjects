const row=20;
const col=20;
function generateMatrix(){
    let mat=Array.from({length: row}, ()=>new Array(col).fill(0));
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(i==j){
                mat[i][j]=1;
                console.log(mat[i]);
            }
        }
    }
}
console.log(generateMatrix(row, col));