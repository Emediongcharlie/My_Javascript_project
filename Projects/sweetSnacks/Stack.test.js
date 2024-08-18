const{Stack} = require("./Stack");

test("method can push", () =>{
    let stack = new Stack();
    stack.push(1);
    expect(stack.getStack()).toEqual([1])
}) 

test("Method can pop", () => {
    const stack = new Stack();
    stack.arrays = [2,3,4,5,6]
    stack.pop();
    expect(stack.arrays).toEqual([2,3,4,5])
})