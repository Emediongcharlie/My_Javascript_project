let grades = [85,92,78,88,95];

function addScore(grade){
    return grade + 5
       
    }

let studentGrade = grades.map(addScore)
console.log(studentGrade)