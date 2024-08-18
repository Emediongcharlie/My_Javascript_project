const {testMyScore} = require("./fillter");

test("filterWorks", () =>{
    let testScore = [10,40,70,60,30,80,90,88,99,5];
    expect(testMyScore(testScore)).toEqual([80, 90, 88, 99 ])
})