//  declare variable (let) named code1
// use 7 and 3 as arithmetic operator

let code1 = 10;
console.log(code1);

let num1 = 7;
let num2 = 3;
console.log(num1 + num2);

// declare variable (let) named code2 that has value of 40
// use 3 numbers with subtraction and division operators

let code2 = (100 - 20) / 2;
console.log(code2);

// declare variable (let) named code3 that has value of 39
// calculate using at least one modulo operator

let code3 = 40 - (10 % 3);
console.log(code3);

// declare variable (let) named message to have value "The vault has been secure. The combination"

let message = "The vault has been secured. The combination is:";
console.log(message);

// declare codeA to have value "10-40-39" by concatenating the variables code1, code2, code3

let codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA);

// declare codeB to have value "10-40-39" by using a single template literal that uses the variables code1, code2, code3
// make sure to use backtick `` (key below esc button)
// `${code1}-${code2}-${code3}`

let codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);

// use console.log to print message, codeA, and codeB to browser console

console.log(message, codeA, codeB);
