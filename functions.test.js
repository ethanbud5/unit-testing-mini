const functions = require("./functions");

test("return number 2",()=>{
    expect(functions.returnTwo()).toEqual(2)
})
test("greeting should return greeting with name",()=>{
    expect(functions.greeting("Bill")).toBe("Hello, Bill.")
    expect(functions.greeting("Natalie")).toBe("Hello, Natalie.")
})
test("add two numbers",()=>{
    expect(functions.add(2,3)).toEqual(5);
    expect(functions.add(100,22)).toEqual(122);
})