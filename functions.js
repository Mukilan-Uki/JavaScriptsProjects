var name1 = "Jack";
var name2 = "Sparrow";
var name3 = "John";
var name4 = "Doe";

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

function printName(){
    console.log("Hello "+name1);
    console.log("Hello "+name2);
    console.log("Hello "+name3);
    console.log("Hello "+name4);
}

printName();

var a = 10;
var b = 30;

function sum(){
    console.log(a+b);
}

sum();

function morningGreetings(){
    console.log("Good Morning");
}

function eveningGreetings(){
    console.log("Good Evening");
}

function greetings(){
    morningGreetings();
    eveningGreetings();
}

morningGreetings()
eveningGreetings()
greetings()
eveningGreetings();