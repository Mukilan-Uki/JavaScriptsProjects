function main(){
    let A=[[1,2,3],[4,5,6],[7,8,9],[7,8,9]];
    let B=[[10,11,12,17,20],[13,14,15,16,12],[18,19,20,21,15]];
    let output=matrixMultiply(A,B);
    printMatrix(output);
    findLengthOfMatrixCol(output);
}
main();
function canMultiply(a,b){
    if(a[0].length==b.length){
        return true;
    }
    else{
        return false;
    }
}

function matrixMultiply(a,b){
    if(canMultiply(a,b)){
        let row=a.length;
        let col=b[0].length;
        let colRow=b.length;
        let sum=0;
        let output=Array.from({length: row},()=>new Array(col).fill(0));

        for(let i=0; i<row; i++){
            for(let j=0; j<col; j++){
                for(let k=0; k<colRow; k++){
                    sum+=(a[i][k]*b[k][j]);
                }
                output[i][j]=sum;
            }
        }
        return output;
    }
    else{
        console.log("Cannot Multiplication. Bcz, the column value of the first matrix and the row value of the second matrix are difference");
    }
}

function printMatrix(a){
    for(let i=0; i<a.length; i++){
        console.log(a[i]);
    }
}

function findLengthOfMatrixCol(a){
    for(let i=0; i<a.length; i++){
        let max=0;
        max=a[i].length
    }
    return max;
}
