"use strict";
let isDone = false;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let color = 'blue';
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, my name is ${fullName}
I'll be ${age + 1} years 
`;
let list = [1, 2, 3];
console.log(list);
// Generic
let generic = [4, 5, 6, 7];
// Tuple
let tuple;
tuple = ['HelloWorld', 456, true];
console.log(tuple[0], tuple[0].substring(2), tuple[2]);
