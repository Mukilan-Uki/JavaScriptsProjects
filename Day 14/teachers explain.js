function main(){
    let row=10;
    let col=5;
    let matrix = setNumbersIn2DArray(row,col);
    console.log("\nYour generated matrix is :")
    printMatrix(matrix);
    console.log("\nThe maximum in each row in given matrix are:")
    findMaxInEachRow(matrix);
}
main();


//function for random generation and store in 2d matrix

function setNumbersIn2DArray(row, col){
    let mat=Array.from({length: row},()=>new Array(col).fill(0));
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

function findMaxInEachRow(mat){
    for(let i=0; i<mat.length; i++){
        let maxValue=mat[i][0];
        for(let j=0; j<mat[0].length; j++){
            if(maxValue<mat[i][j]){
                maxValue=mat[i][j];
            }
        }
        console.log("The maximum value in row "+(i+1)+" is "+maxValue);
    }
}