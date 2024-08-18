const{addScore} = require("./mapTaskTwo");

test("addition of score", () => {
    let grades = [85,92,78,88,95]
    expect(grades).toEqual([ 90, 97, 83, 93, 100 ])
})