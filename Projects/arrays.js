// //array declarration

// //const arrayOfNames = []

// // declaring by creating a new object of a class(constructor ARRAY)

// const arrayOfNumbers = new Array(2);

// arrayOfNumbers[0] = 1
// arrayOfNumbers[1] = 1
// arrayOfNumbers[2] = 3
// arrayOfNumbers[3] = 5

// console.log(arrayOfNumbers)


// push method

// let arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

// function evenNumbers(numbers){
//     let arrayOfEvenNumbers = [];
//     for(let index = 0; index <numbers.length; index++){
//         let isEven = numbers[index] % 2 == 0
//         if(isEven){
//              arrayOfEvenNumbers.push(numbers[index])
//         }
// }
//     //arrayOfEvenNumbers.pop()
//     return arrayOfEvenNumbers
    
// }
// console.log(evenNumbers(arrayOfNumbers))

// //pop method

// let arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

// function evenNumbers(numbers){
//     let arrayOfEvenNumbers = [];
//     for(let index = 0; index <numbers.length; index++){
//         let isEven = numbers[index] % 2 == 0
//         if(isEven){
//              arrayOfEvenNumbers.push(numbers[index])
//         }
// }
//     arrayOfEvenNumbers.pop()
//     return arrayOfEvenNumbers
    
// }
// console.log(evenNumbers(arrayOfNumbers))

// //unshift method

// let arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

// function evenNumbers(numbers){
//     let arrayOfEvenNumbers = [];
//     for(let index = 0; index <numbers.length; index++){
//         let isEven = numbers[index] % 2 == 0
//         if(isEven){
//              arrayOfEvenNumbers.unshift(numbers[index])
//         }
// }
//     arrayOfEvenNumbers.shift()
//     return arrayOfEvenNumbers
    
// }
// console.log(evenNumbers(arrayOfNumbers))

//shift method

// let arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

// function evenNumbers(numbers){
//     let arrayOfEvenNumbers = [];
//     for(let index = 0; index <numbers.length; index++){
//         let isEven = numbers[index] % 2 == 0
//         if(isEven){
//              arrayOfEvenNumbers.unshift(numbers[index])
//         }
// }
//     arrayOfEvenNumbers.shift()
//     return arrayOfEvenNumbers
    
// }
// console.log(evenNumbers(arrayOfNumbers))


// slice method

// let arrayOfNumbers = [1,8,3,9,5,6,7];
//     console.log(arrayOfNumbers.slice(2,5))

//splice method - remove those indices
// let arrayOfNumbers = [1,8,3,9,5,6,7];
// console.log(arrayOfNumbers.splice(2,5))

//splice method - to add after index 3

// let arrayOfNumbers = [1,8,3,9,5,6,7];
// arrayOfNumbers.splice(3,0,"semicolon")
// console.log(arrayOfNumbers)

//splice method for replacing index 2 only

// let arrayOfNumbers = [1,8,3,9,5,6,7];
// arrayOfNumbers.splice(3,1,"semicolon")
// console.log(arrayOfNumbers)

// forEach method 

// let arrayOfNumbers = [1,8,3,9,5,6,7];
// arrayOfNumbers.forEach((numbers)=>{
//     let answer = numbers * 2;
//     console.log(answer)
// })

let arr = [1,2,3,4,5,6,7]
arr.splice(3, 1,0)
console.log(arr)


