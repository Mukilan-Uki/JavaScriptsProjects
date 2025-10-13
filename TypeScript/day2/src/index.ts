import { Tv } from "./tv";

console.log("Hello TypeScript!");

function main(){
    const student1 = new Tv(7,20,true)
    console.log(student1.getTvChannel());
    const student2 = new Tv(5,2,false)
    console.log(student2.getTvChannel());

    const tv1 = new Tv;
    const tv2 = new Tv(25);
    const tv3 = new Tv(125);

    const tvOn1 = new Tv(true);
    const tvOn2 = new Tv(true);
    const tvOn3 = new Tv(true);
    console.log("Area of circle1 is "+tv1.getVolumeLevel());
    console.log("Area of circle2 is "+tv2.getVolumeLevel());
    console.log("Area of circle3 is "+tv3.getVolumeLevel());

    console.log("Perimeter of circle1 is "+tvOn1.getTvOn());
    console.log("Perimeter of circle2 is "+tvOn2.getTvOn());
    console.log("Perimeter of circle3 is "+tvOn3.getTvOn());
}
main();