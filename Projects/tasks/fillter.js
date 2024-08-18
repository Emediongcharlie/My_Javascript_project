// let testscore = [10,40,70,60,30,80,90,88,99,5];

function testMyScore(scores){
    return scores.filter((score) => {
        return score > 70;
    });
}

module.exports = {testMyScore};

// let filtered = testscore.filter(testMyScore)
// console.log(filtered)






