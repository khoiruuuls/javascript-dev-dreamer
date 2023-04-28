/*
    JavaScript Arithmetic Operators

    Addition        +
    Substraction    -
    Division        /
    Multiplication  *
    Modulus         %
    Exponantiation  **
    Increament      ++
    Decrement       --
*/

console.log(2 + 9);
console.log(2 - 9);
console.log(8 / 2);
console.log(2 * 9);
console.log(19 % 7);
console.log(8 ** 2);

let score = 99;
console.log(score++);
console.log(score);

let num = 10;
console.log(num);
console.log(--num);

// operator precedence

let sum = 2 - 4 * 3 + (10 - 2) / 8;

/* 
    BODMAS order 
    Bracket
    Order which are basically things 
    such as finding th power or square root of a number 
    Division
    Multiplication
    Addition
    Substraction

    2 - 4 * 3 + 8 / 8;
    2 - 12 + 1;
    -9;
*/
console.log(sum);

/* 
    TASK
    1.  create a num1 variable with th e value 10
        and a num2 variable with the value 20
    2.  console log num1 + num2
    3.  find modulus of the two variable
    4.  create a variable called total and set the 
        value to 10, add one to the value and console log it
*/

let num1 = 10;
let num2 = 20;

console.log(num1 + num2);

console.log(num1 % num2);

let total = 10;
total++;
console.log(total);
