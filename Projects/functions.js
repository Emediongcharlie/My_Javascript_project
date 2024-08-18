// function declaration, you can  even call it before declaring it

function name(param, value){
    console.log(param, value);
}
    
name("Emediong", "emma")

// function expression, can call the function even after declaration

const myname = function(param){
    console.log(param)
}

myname("Emma")

//arraow function
const print =()=>{
    console.log("i am an arrow function")
}
print()

//passing frunction into functio

function firstFunction(){
    console.log("firstFunction")
}

function secondFunction(callBack){
    console.log("second function")
    callBack()
}

secondFunction(firstFunction)

