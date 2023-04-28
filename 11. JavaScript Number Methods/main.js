/*
    JavaScript Number Methods
*/

const numFloat = 3.14159265359;

let numFixed = numFloat.toFixed(3);
console.log(numFixed);
// 3 digit after coma

let numPrecition = numFloat.toPrecision(3);
// 3 digit at all
console.log(numPrecition);

let mill = 100000;
mill = mill.toExponential();
console.log(mill);

/* 
    TASK
    1.  create a variable called PI and set its 
        value to 3.14159. Use the correct Number Method
        too display only three digits after the decimal
        point, log this to the console
    2.  using the previous PI variable, create a new variable
        called num2 and use the correct Number method to display
        a total of three digits only
    3.  create a variable called lightSpeed and set its value to 
        186000. use the .toExponential() method to log this new 
        display in the console
*/

// 1.
const PI = 3.14159;
console.log(PI.toFixed(3));

// 2.
let num2 = PI.toPrecision(3);
console.log(num2);

// 3.
let lightSpeed = 186000;
console.log(lightSpeed.toExponential());
