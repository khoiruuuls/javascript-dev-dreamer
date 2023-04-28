/*
    JavaScript Concatenation
*/

let day = "Good Morning, ";
let night = "Good Night, ";
let question = "How are you ?";

let greetingDay = day + question;
let greetingNight = night + question;

console.log(greetingDay);
console.log(day + "Have you had breakfast ?");
console.log(greetingNight);

// let firstName = prompt("What is your name ?");
// console.log("Hello " + firstName + ", " + question);

let string = "10";
let num = 6;
let resultNumber = string + num;
console.log(resultNumber);

/* 
    Task 
    1.  create two variable with the values "I am learning"
        and "Javascript" Concatenate these together using the +
        operator and store the value in a new variable called result.
        console log result
    2.  complate the same task, this time using the string concat()
*/

// 1.
let hobby = "I am learning ";
let course = "Javascript";

let result1 = hobby + course;
console.log(result1);

// 2.
let result2 = hobby.concat(course);
console.log(result2);
