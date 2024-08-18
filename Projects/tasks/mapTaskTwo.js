let grades = [85,92,78,88,95];

function addScore(grade){
    return grade.map((grades) => {
        return grades + 5 
    })
    }

    // module.exports = {addScore};

// let studentGrade = grades.map(addScore)
console.log(addScore(grades))