"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tv_1 = require("./tv");
console.log("Hello TypeScript!");
function main() {
    const student1 = new tv_1.Tv(7, 20, true);
    console.log(student1.getTvChannel());
    const student2 = new tv_1.Tv(5, 2, false);
    console.log(student2.getTvChannel());
    const tv1 = new tv_1.Tv(true);
    const tv2 = new tv_1.Tv(25);
    const tv3 = new tv_1.Tv(125);
    console.log("Area of circle1 is " + Math.floor(tv1.getVolumeLevel()));
    console.log("Area of circle2 is " + Math.floor(tv2.getVolumeLevel()));
    console.log("Area of circle3 is " + Math.floor(tv3.getVolumeLevel()));
    console.log("Perimeter of circle1 is " + Math.floor(tv1.getTvOn()));
    console.log("Perimeter of circle2 is " + Math.floor(tv2.getTvOn()));
    console.log("Perimeter of circle3 is " + Math.floor(tv3.getTvOn()));
}
main();
//# sourceMappingURL=index.js.map