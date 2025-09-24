//Upper Left Triangle
//*
//**
//***
//****
//*****

let i=5;
for(let j=1; j<=i; j++){
    let pattern="";
    for(let k=1; k<=j; k++){
        pattern+="* ";
    }
    console.log(pattern);
}

//Top Right Triangle
//
//
//
//
//

let rows=5;
for(let i=1; i<=rows; i++){
    let space="  ", star=" *";
    console.log(space.repeat(rows-i)+star.repeat(i));
}

//Bottom Left Triangle
// * * * * *
// * * * *
// * * *
// * *
// *

let row=5;
for(let j=row; j>=1; j--){
    let pattern="";
    for(let k=1; k<=j; k++){
        pattern+="* ";
    }
    console.log(pattern);
}

//Bottom Left Triangle(by chatgpt)
// * * * * *
// * * * *
// * * *
// * *
// *

let n = 5; // number of rows

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

//Bottum Right Traiangle
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

console.log("Bottom Right Traingle");

for(let i=row; i>=1; i--){
    let pattern="* ";
    let space='  ';
    console.log(space.repeat(row-i)+pattern.repeat(i));
}