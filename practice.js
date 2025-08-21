//Rectangle
var length=2;
var width=3;

function area(a,b){
    return a*b;
}

console.log("Area Of Rectangle is "+area(length,width));

//Triangle
var base=2;
var height=3;

function areaTri(a,b){
    return 0.5*a*b;
}

console.log("Area Of Triangle is "+areaTri(base,height));

//Circle
var pi=22/7;
var radius=7;

function areaCir(a,b){
    return a*b*b;
}

console.log("Area Of Circle is "+areaCir(pi,radius));

//Square
var side=2;

function perimeterSqu(a){
    return 4*a;
}

console.log("Perimeter Of Square is "+perimeterSqu(side));

//Cube
var side=2;

function volumeCube(a){
    return a*a*a;
}

console.log("Volume Of Cube is "+volumeCube(side));

//Cylinder
var radius=7;
var height=3;

function volumeCyl(a,b){
    return Math.PI*a*a*b;
}

console.log("Volume Of Cylinder is "+volumeCyl(radius,height));