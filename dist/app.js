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
    const opening=`the area of your ${shape.kind} is `
    switch (shape.kind) {
        case "circle":
           return opening + Math.PI * Math.pow(shape.radius, 2)
            break;
        case "square":
            return opening + Math.pow(shape.side, 2)
            break;
        case "rectangle":
            return opening + shape.length * shape.width
    }
}
console.log(getArea({ kind: "rectangle", length: 14, width:5 }));
//console.log(getArea({kind: "circle" ,radius:14}))