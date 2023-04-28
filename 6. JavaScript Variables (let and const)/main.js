/* JavaScript Variables */

let channelName;
// = called assignment operator
channelName = "Khoirul Youtube";

// or

let firstName = "Khoirul";
let lastName = "Fahmi";

console.log(channelName);
console.log(firstName);
console.log(lastName);

/* 
    ================= Variable Name Rules ================= 
    
    1. The variable name must contain only letters, numbers, or  the symbols $ and _
    2. The first character must NOT be a number and there should be no spaces
    3. The variable name must NOT be a reserved keyword in the JavaScript language

    another things to know is that variable names are case sensitive
    and so the following variable names would not be the same
    example :

    let favColor = "red";
    let favCOLOR = "blue";

    javascript would recognize them as two different variables

*/

/* 
    another thing i want to briefly mention is the var keyword 
    var is short for variable in all the scripts you might come 
    across the keyword var instead of let so for example you might 
    see something like this
*/

var age = 18;

/* 
    var was actually the olf way of creating a variable there are some slight differences
    between the var and the let keywords 

    -----------------------------
    let was created to solve some of problems of the var keyword
    we will dedicated a future lesson to this and now we will continue to use the modern way 
    of let to declare a variables  
*/

/* 
    another keyword called const
    const is called for constant its known as an unchanging variable hence the name const
    so whilst the variable declare with let can be changed as we've seen 
    variable declared with const cannot be changed
    trying to do so will cause an error and so thats what const keyword is for its used to store variable
    names that we know will never change
    lets take a look at an example 
*/

const ourPlanet = "Earth";
console.log(ourPlanet);

// ================= TASK =================

/* 
    1.  create a variable called favFood and assign the value Pizza, 
        another variable called favColor with the value Red 
        and third variable called favDrink with the value Lemonade
    2.  console log the favDrink variable to show its value 
    3.  change the value of the favFood variable to " Pasta "
        then console log the value
    4.  create a variable, call it whatever you want and assign 
        value of your birthday
*/

// 1.

let favFood = "Pizza";
let favColor = "Red";
let favDrink = "Lemonade";

// 2.
console.log(favDrink);

// 3.
favFood = "Pasta";
console.log(favFood);

// 4.
const birthDate = "29 March 2000";
console.log(birthDate);
