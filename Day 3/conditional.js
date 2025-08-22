//If example
//If the marks is grader than and equal to 50 then print pass, else print fail

var marks = 40;
function checkmarks(marks){
    if(marks>=50){
    console.log("PASS");
}
else{
    console.log("FAIL");
}
}

checkmarks(100);

//Traffic light color
let color = "green"
function trafficLightColor(color){
    if(color == "red"){
        return "Stop";
    }
    else if(color == "yellow"){
        return "Ready";
    }
    else if(color == "green"){
        return "Go";
    }
}

console.log(trafficLightColor(color));