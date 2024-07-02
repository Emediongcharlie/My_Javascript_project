const {aliceStudentScore} = require("./map.js");

test("scoreIsCorrect", ()=>{
    let score = aliceStudentScore([95,78,85,60,45,92])
    let grade = studentScores.map([ 'A', 'C', 'B', 'D', 'F', 'A' ])
    expect(grade).toStrictEquals([ 'A', 'C', 'B', 'D', 'F', 'A' ])
})