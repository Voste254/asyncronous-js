function test(obj: string | string[]){
    if (typeof obj === 'string'){
        console.log("it is a string")
    }else if(Array.isArray(obj)){
        console.log("this ia an array")
    }else{
        console.log("this is undefined")
    }
}

//test("hello");

function greet(name:string,age:number){
    console.log(`hey ${name}, you are ${age}!`)
}
// greet('andrew',4)
interface Circle{
    "kind":"circle";
    "radius":number
}
interface Square{
    "kind":"square";
    "side":number
}
type Shapes=Circle|Square

function getArea(shape:Shapes){
    switch (shape.kind){
        case "circle":
            return Math.PI * shape.radius**2
            
        case "square":
            return shape.side**2

    }
}
console.log(getArea({ kind: "circle", radius: 5 }))