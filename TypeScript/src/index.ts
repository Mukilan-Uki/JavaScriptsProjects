import { Student } from "./student";
import { Circle } from "./Day 1/circle";

console.log("Hello TypeScript!");

function main(){
    const student1 = new Student("Mukilan",20,"Batticaloa")
    console.log(student1.getStudentName());
    const student2 = new Student("Dilu",20,"Batticaloa")
    console.log(student2.getStudentName());

    const circle1 = new Circle(7);
    const circle2 = new Circle(25);
    const circle3 = new Circle(125);
    console.log("Area of circle1 is "+Math.floor(circle1.getArea()));
    console.log("Area of circle2 is "+Math.floor(circle2.getArea()));
    console.log("Area of circle3 is "+Math.floor(circle3.getArea()));

    console.log("Perimeter of circle1 is "+Math.floor(circle1.getPerimeter()));
    console.log("Perimeter of circle2 is "+Math.floor(circle2.getPerimeter()));
    console.log("Perimeter of circle3 is "+Math.floor(circle3.getPerimeter()));
}
main();