'use strict';

// import the padLeft function from andrejs-awesome-function.js
const PadLeft= require('./andrejs-awesome-function');

let numbers = [ "12", "846", "2", "1236" ]

numbers.forEach(element => {let outPut =PadLeft(element,4,'') ;console.log(outPut)
    
});