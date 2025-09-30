//Write function for sport meet scores

let mat=[["Gryffindor",255,211],
        ["Hufflepuff",203,121],
        ["Ravenclaw",272,292],
        ["Slytherin",25,275]];

let matGender=["Girls","Boys"];

function printMatrix(mat){
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
}

printMatrix(mat);

function findLargeWin(mat){
    for(let i=0; i<mat.length; i++){
        if(mat[i][1]<mat[i][2])
            console.log("The Best Performance in "+mat[i][0]+" house house of the house meet is: Boys "+mat[i][2]);
        else
            console.log("The Best Performance in "+mat[i][0]+" house house of the house meet is: Girls "+mat[i][1]);
    }
}

findLargeWin(mat);

function findLargeWinGender(mat){
    let largest=mat[0][1];
    let num=0;
    for(let i=1; i<mat.length-1; i++){
        for(let j=1; j<mat[0].length; j++){
            if(largest<mat[j][i]){
                largest=mat[j][i];
                num=j;
            }
        }
        console.log("The highest Score of members in "+matGender[i-1]+" is "+largest+" from "+mat[num][0])
    }
}

findLargeWinGender(mat)

function findWinnerhouse(mat){
    let totalPoint=[];
    for(let i=0; i<mat.length; i++){
        let sum=0;
        for(let j=1; j<mat[0].length; j++){
            sum+=mat[i][j];
        }
        totalPoint.push(sum);
    }
    return totalPoint
}



function findWinner(totalPoint){
    let largest=totalPoint[0];
    let num=0;
    for(let j=1; j<totalPoint.length; j++){
        if(largest<totalPoint[j]){
            largest=totalPoint[j];
            num=j;
        }
    }
    console.log("The winner of the tournament is "+mat[num][0]+", which is "+largest);
}
findWinner(findWinnerhouse(mat))