
function convert(number){
    let arrays = []
    for(let i=0; i<number.length; i++){
        arrays.unshift(number[i])
    }
    return arrays;
}

module.exports = {convert};
