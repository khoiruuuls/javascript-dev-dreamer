/*
    Template Literals
*/

let title = `Sewu Dino`;
let platform = `Paramount`;
let year = 1991;

let info =
	title + " was released by " + platform + " in the year " + year + ".";

let infoMovie = `${title} was released by ${platform} in the year ${year}.`;

console.log(info);
console.log(infoMovie);

let num1 = 90;
let num2 = 10;

let total = `The total is ${num1 + num2}`;
console.log(total);

/* 
    Task 
    1.  create three variables, called firstName, course, and channel.
        assign the value your name to name, Javascript to course
        and Dev Dreamer to channel.
    2.  create another variable called sentence, and use template literals
        to construct the sentence, e.g. 
        "Khoirul is learning Javascript with Dev Dreamer."
*/

// 1.
let firstName = "Khoirul";
let course = "Javascript";
let channel = "Dev Dreamer";

let sentence = `${firstName} is learning ${course} with ${channel}.`;
console.log(sentence);
