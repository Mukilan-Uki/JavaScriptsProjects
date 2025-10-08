//        ICT BIO Maths
//Level-1 29  60  22
//Level-2 31  54  25
//Level-3 20  57  16
//Level-4 3   18  9

//Data array
let course=["ICT","BIO","Maths"];
let batch=["Level-1","Level-2","Level-3","Level-4"];
let students=[[29,60,22],[31,54,25],[20,57,16],[3,18,9]];


//a) The total number of students in each course.
function TotalNumOfStuInCourse(mat){
    for(let i=0; i<mat[0].length; i++){
        let sum=0;
        for(let j=0; j<mat.length; j++){
            sum+=mat[j][i]
        }
        console.log("Total number of students in "+course[i]+" is "+sum);
    }
}
TotalNumOfStuInCourse(students)

console.log("\n")

//b) The total number of students in reach batch.

function TotalNumOfStuInBatch(mat){
    for(let i=0; i<mat.length; i++){
        let sum=0;
        for(let j=0; j<mat[0].length; j++){
            sum+=mat[i][j]
        }
        console.log("Total number of students in "+batch[i]+" is "+sum);
    }
}
TotalNumOfStuInBatch(students)

console.log("\n")

//c) The number of students in each level with their respective course.

function TheNumOfStuInEachLevelWithEachCourse(mat){
    for(let i=0; i<mat.length; i++){
        console.log("\t")
        console.log(batch[i]); 
        for(let j=0; j<mat[0].length; j++){
            console.log(course[j]+" "+students[i][j]);   
        }
    }
}
TheNumOfStuInEachLevelWithEachCourse(students)

console.log("\n")

//d) The total number of students in all the levels and all the courses

function TotalNumOfStudents(mat){
    let sum=0;
    for(let i=0; i<mat[0].length; i++){
        for(let j=0; j<mat.length; j++){
            sum+=mat[j][i]
        }
    }
    console.log("Total number of students is "+sum);
}
TotalNumOfStudents(students);