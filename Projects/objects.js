// let animal = {
//     name: "unknown",
//     color:  "blue",
//     sound: function(){
//         return(`${this.name} made a sound`)
//     }
// }

// // instance of the class - prototyped - based
// let cat = Object.create(animal)

// cat.name = "pussycat";
// cat.color = "red"
// console.log(cat)
// console.log(cat.sound())

// let blackCat = Object.create(cat)
// blackCat.name = "black";

// console.log(blackCat)

// // second method

// let dog = {};

// Object.setPrototypeOf(dog, animal);
// dog.name = "Bulldog";
// dog.color = "black";
// console.log(dog)

// // to return just the prototype
// Object.getPrototypeOf(dog);
// console.log(animal)


// let tiger = {};
// tiger._proto_ = animal;
// console.log(tiger)



// let fruit = {
//     name: "",
//     color: "",
// };

// let lion = { 
//     _proto__: fruit,
//     _proto_: animal,
// };

// console.log(lion)

// function constructor in javascript(constructor - based OOP) (To create an Object)

function Person(name, age){
    this.name = name;
    this.age = age;

    this.descibe = function(){
        console.log(`My name is ${this.name} and i am ${this.age} years old`)
    }
}

const emediong = new Person("John", "sweet 17");
emediong.descibe();

// adding another attribute to the name and age attribute

const emediog = new Person();
Person.prototype.species = 'human';
console.log(emediog.species)


// OOP with classes in javascript

class Animal{
    constructor(name , color){
        this.name = name;
        this.color = color;
    }

    getName() { 
        return this.name }
        
    getColor(){
        return(this.color)
    }
}

const goat = new Animal("goat","black")
console.log(goat.getName())
console.log(goat.getColor())

class Goat extends Animal {
    constructor(name, color,type){
        super(name, color);
        this.type = type;
    }
}