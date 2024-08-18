// function sumEvenNumbers(numbers){
//     let sum = 0;
//     for(let i=0; i<numbers.length; i++){
//         if(numbers[i] % 2 == 0){
//             sum += numbers[i];
//         }
//     }
//     return sum;

// }
// number = [1, 2, 3,4]
// let sum = number.reduce(sumEvenNumbers)

// console.log(sum) 

// console.log(number.reduce(sumEvenNumbers))

// console.log(sumEvenNumbers(number)) 

function sumEvenNumbers(initial, final) {
    let sum = initial + final;
    sum.reduce((digit) =>{
        return sum
    })

}

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumEvenNumbers(digits))