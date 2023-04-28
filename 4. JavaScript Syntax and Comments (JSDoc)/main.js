// alert("Hello Bang");
// ["Khoirul", "Fahmi"].forEach(alert);

// this is a comment

/* 
    this 
    is 
    a
    multi-line
    comment
*/

// Check if value is even number
function num(value) {
	if (value % 2 == 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}

num(2);

function isEven(value) {
	if (value % 2 == 0) {
		console.log("Even Number");
	} else {
		console.log("Odd Number");
	}
}

isEven(9);

/**
 * commment using JSDocs
 * @param {number} num1 the number to raise
 * @param {number} num2 the power to be raised by
 */

function power(num1, num2) {
	return Math.pow(num1, num2);
}

console.log(power(4, 3)); // 4 x 4 x 4 = 64
