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
test("hello");
