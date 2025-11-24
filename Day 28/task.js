// let sen="apple is green apple"

// function createArray(str){
//     let sen=str.split(" ").join("").toLowerCase();
//     console.log(sen)
//     // for(let i=0; i<sen.length; i++){
//     //     let letter=[];
//     //     for(let j=0; j<sen.length; j++){
//     //         if(sen[i]==sen[j]){
//     //             letter.push(sen[j])
//     //         }
//     //     }
//     //     console.log(letter[0]+" is "+letter.length+" times" )
//     // }

//     // count = new Set();

//     // for(let i=0; i<sen.length; i++){
//     //     if(count.has(sen[i]))continue;
//     //     count.add(sen[i]);
//     // }
//     // return count

    
// }

// console.log(createArray(sen))

let sen = "apple is green apple";

function createArray(str){
    let cleaned = str.split(" ").join("");
    let counted = new Set();  // to store characters already printed
    
    for(let i = 0; i < cleaned.length; i++){
        let char = cleaned[i];

        console.log(char)
        if(counted.has(char)) continue;  // skip if already counted
        counted.add(char);
        console.log(counted)
        console.log(char)

        let count = 0;
        for(let j = 0; j < cleaned.length; j++){
            if(cleaned[j] === char){
                count++;
            }
        }

        console.log(char + " is " + count + " times");
    }
}

createArray(sen);
