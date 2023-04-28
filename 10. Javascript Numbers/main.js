/*
     JavaScript Numbers
*/

let num = 3;
let newNum = 6.78;

console.log(typeof num);
console.log(typeof newNum);

let mill = 1e6;
// 1 * (10**6)
console.log(mill);

let smallNum = 1e-2;
console.log(smallNum);

/* 

    Object has : 
    
    - methods to do something like 
    greeting() {
        alert("Meow!");
    } 

    - properties are something like 
    color : yellow;

    Javascript has build in object such as Date and Math

    Primitives                      Build in objects

    number      ----------------->  Number
    string      ----------------->  String
    boolean     ----------------->  Boolean

*/

let FirstName = "Khoirul";

FirstName = FirstName.toUpperCase();
console.log(FirstName);

let score = new Number(100);
console.log(typeof score);

let float = 4.89;
console.log(float.toFixed());

/* 
    Summarize
    the number data type is a primitive. 
    Primitives although not objects themselves 
    do have to access to build in object counterparts
    the number object for numbers 
    string for strings
    we can use these methods on our primitive 
    values to perform some useful actions 
    and finally we should always create 
    primitive value as primitives 
*/

/* 
    Task 
    1.  Declare and initialize a variable with the value of 100,000
        log this to the console
    2.  In the console, identify the data type of the variable 
    3.  create a float data type, and log this to the console
*/

let salary = 100000;
console.log(salary);
