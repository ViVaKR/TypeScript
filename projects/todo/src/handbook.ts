let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = 'blue';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}
I'll be ${age + 1} years 
`;

let list: number[] = [1, 2, 3];
console.log(list);

// Generic
let generic: Array<number> = [4, 5, 6, 7];

// Tuple
let tuple: [string, number, boolean];
tuple = ['HelloWorld', 456, true];

console.log(tuple[0], tuple[0].substring(2), tuple[2]);
