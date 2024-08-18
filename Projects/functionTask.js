// Area of a rectangle
function calculateArea(width, height){
    console.log(width*height)
}
calculateArea(10,5)

//convert to Fanrenheit
function convertToFanrenheit(temperature){
    Fanrenheit = temperature * 9/5 + 32;
    console.log(Fanrenheit)
}
convertToFanrenheit(12)

//find even number
function isEven(number){
    if(number % 2 == 0)
        console.log("True")
    else
        console.log("false")
}
isEven(22)

// is leap year
function isLeapYear(year){
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("True")
}
else{
    console.log("False")
}
}
isLeapYear(2001)

function countVowel(letters){
    let vowel = "a,e,i,o,u"
    let vowels = 0
    for(let count = 0; count < letters.length; count++)
        for(let index = 0; index < vowel; index++)
    if (letters == vowel){
        vowels = vowels + 1
        return vowels
    }
}
countVowel("come")