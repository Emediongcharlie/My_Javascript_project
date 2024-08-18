const {convert} = require("./taskTwo.js");

test("converter", () => {
    let number = [1, 2, 3, 4, 5]
    expect(convert(number)).toEqual([5,4,3,2,1])
})