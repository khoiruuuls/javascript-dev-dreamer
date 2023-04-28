/*
    Javascript Data Types

    Primitives 
    - Number
    - String
    - Boolean
    - bigInt
    - Symbol
    - Undefined
    - Null

    Non-Primitives
    - Arrays
    - Functions
    - Objects 

    we can check the data type using typeof query in console

        typeof [name of variable]

*/

// 1. number data type
let num = 9;
let newNum = 3.67;
console.log(typeof newNum);

// 2. string data type
let firstName = "Khoirul";
console.log(typeof firstName);

// 3.  boolean data type
let js = "cool";
console.log(js == "cool"); //and will return to true
// other example
console.log(1 > 100);

/* 
    == called equals but = called assign operator
    == has to check that variable js has equals to the string "cool"
*/

// 4. bigInt data type

let maxNumber = 9007199254740991; // Max number in javascript
console.log(typeof maxNumber);

// function pow(a, b) {
// 	return Math.pow(a, b);
// }

// console.log(pow(2, 53));

let bigIntNumber = 9007199254740992n; // bigInt data type was start at 2^53 and place 'n'
console.log(typeof bigIntNumber);

// 5. symbol data type

/*
    the data type symbol can be created by invoking the symbol function
    and its basically used to create unique identifiers for objects 
    we will look at symbols when we cover object in detail in a future lesson 
*/

// 6. undefined data types

/* 
    undefined data types is simply a variable that has not been assigned value 
*/

let channelName;
console.log(typeof channelName);

// 6. null data types

/* 
    the difference between null and undefined, they are as to their type
    null is declare a value as empty so null is something that we specifically declare value 
    as where as undefined is reserved as the default data type for variable that have 
    not been initialized like that channelName variable before 
*/

// 7. arrays data type

let myList = ["Khoirul", true, 7];

console.log(myList);
console.log(myList[0]);

// function data type

function hello() {
	console.log("hello");
}

hello();

let world = function () {
	console.log("world");
};

world();

// objects

/*  
    object can be used to store multiple values 
    lets take a look an example 
*/

let character = {
	name: "Aliyyu Gani",
	color: "Red",
	speed: 1000,
	fast: true,
};

console.log(character.name);
console.log(character.speed);

/* 
    TASK 
    1.  create a string variable called favDrink 
        and assign value to it 
    2.  create a number variable called favNum 
        and assign value to it 
    3.  create a function  block called myFavs 
        that console logs your answer
        dont forget to invoke the myFavs function
    4.  create an object called person, 
        with name set to John and age set to 30

*/

// 1.
let favDrink = "Lemonade";

// 2.
let favNum = 30;

// 3.
let myFavs = function () {
	console.log("I want", favDrink, favNum);
};

myFavs();

// 4.
let person = {
	name: "john",
	age: 30,
};

console.log(person);
