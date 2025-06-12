"use strict";
function test(obj) {
    if (typeof obj === 'string') {
        console.log("it is a string");
    }
    else if (Array.isArray(obj)) {
        console.log("this ia an array");
    }
    else {
        console.log("this is undefined");
    }
}
//test("hello");
function greet(name, age) {
    console.log(`hey ${name}, you are ${age}!`);
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
            break;
        case "square":
            return Math.pow(shape.side, 2);
    }
}
console.log(getArea({ kind: "square", side: 5 }));
