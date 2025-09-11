function main(){
    let row=10;
    let col=5;
    let matrix = setNumbersIn2DArray(row,col);
    console.log("\nYour generated matrix is :")
    printMatrix(matrix);
    console.log("\nThe average in each row in given matrix are:")
    findAvgInEachRow(matrix);
    console.log("\nThe average in matrix is:")
    findAvgMatrix(matrix);
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

function findAvgInEachRow(mat){
    let rowAvg=[];
    for(let i=0; i<mat.length; i++){
        let sumValue=0;
        for(let j=0; j<mat[0].length; j++){
            sumValue+=mat[i][j];
        }
        console.log("The average value in row "+(i+1)+" is "+sumValue/mat[0].length);
        rowAvg.push(sumValue/mat[0].length);
    }
    return rowAvg;
}

function findAvgMatrix(mat){
    let totalAvg=findAvgInEachRow(mat);
    let sumAvg=0;
    for(let i=0; i<totalAvg.length; i++){
        sumAvg+=mat[i];
    }
    console.log("Total avg is "+sumAvg/totalAvg.length);
}