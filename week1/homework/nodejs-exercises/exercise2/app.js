'use strict';

// import the padLeft function from left-pad package
const leftPad = require('left-pad');

// // declare the numbers array 
const numbers = [ "12", "846", "2", "1236" ];

// pad a number to 8 characters
numbers.forEach(number => {
    let res = leftPad(number, 8, ' ');
    console.log(res);
}); 