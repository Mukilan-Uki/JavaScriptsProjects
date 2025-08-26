//For days
let day = 2
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")
}

//If condision Different
function printday(number){
    if(number==1){
        return"Monday";
    }
    else if(number==2){
        return "Tuesday";
    }
    else if(number==3){
        return "Wednesday";
    }
    if(number==4){
        return"Thursday";
    }
    else if(number==5){
        return "Friday";
    }
    else
        return "Weekend";
}
var number=2;
console.log(printday(number));