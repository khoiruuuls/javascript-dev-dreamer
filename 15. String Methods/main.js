/*
    String Methods
*/

let course = "Javascript is cool     ";
console.log(course.length); // space was count
console.log(course.trim()); // space will not count
console.log(course.toUpperCase()); // make uppercase
console.log(course.toLowerCase()); // make lowercase
console.log(course.indexOf("a")); // first a
console.log(course.lastIndexOf("a")); // last a
console.log(course.slice(0, 10)); // slice char
console.log(course.replace("cool", "awesome")); // change char
console.log(course.charAt(8)); // display char at index

/* 
    Task 
    1.  create a variable called x and assign the value 
        I am watching Dev Dreamer. Use the relevant string
        method to change the entire sentence to uppercase and 
        use console.log() to display this.
    2.  Use the right string method to extract the channel name
        "Dev Dreamer" and log this to the console.
*/

// 1.
let x = "I am watching Dev Dreamer";
console.log(x.toUpperCase());

// 2.
console.log(x.slice(14, 25));
