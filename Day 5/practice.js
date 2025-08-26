//greetings
var time=23;
switch(true){
    case (time>=5 && time<12):
        console.log("Good Morning")
        break;
    case (time>=12 && time<17):
        console.log("Good Afternoon")
        break;
    case (time>=17 && time<21):
        console.log("Good Evening")
        break;
    case (time>=21 && time<=24):
        console.log("Good Night")
        break;
    default:
        console.log("No Greetings(lol)")
}