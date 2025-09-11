//2d matrix
//row wise avg
//col wise avg
//total avg

function set2DArray(){
    
}

function print2DArray(mat){

}

function rowAvg(mat){
    for(let i=0; i<mat.length; i++){
        let avg=[];
        let rowsum=0;
        for(let j=0; j<mat[0].length; j++){
            rowsum+=mat[i][j];
        }
        avg.push(rowsum/mat[0].length);
    }
    return avg;
}

function totalAvgOf2DMatrix(mat){
    let rowAvg = rowAvg(mat);
    let totalAvg=0;
    for(let i=0; i<rowAvg.length; i++)
        totalAvg+=rowAvg[i];
    totalAvg/=rowAvg.length;
    return totalAvg;
}