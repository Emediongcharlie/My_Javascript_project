let time = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"]

function analysis(times){
    return times.slice(-2) == "PM"
}

let classTiming = time.filter(analysis)
console.log(classTiming)
