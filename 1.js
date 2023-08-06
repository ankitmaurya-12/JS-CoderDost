// You can print value by using any " ", ''

console.log("Welcome");
// console.log('Welcome');

//there is another typr for printing string value in HTML using document.write

// document.write("Hello World!!");
// document.write('Hello World!!');

// its not necessary to use semi-colon at end but its recomended
// <------------------------------------------------------------------------>


// 1.1 Variable Constants And Comments

//var

// var score =34;
// var score =54; //Redeclare and ReAssign of value

// console.log(score);

//let

// let points =23;

// console.log(points); //no Redeclare but ReAssign of value


// conts

// it necessary to give value at declation
// const num =23; // neither Redeclare nor ReAssign of value
// console.log(num);

// <------------------------------------------------------------------------>

// 1.2 Data Types of Values

//7 data Type

//Numbers 1,2,3,4,5.....

// Strings "I am Ankit", "34", 'Also this'

// Boolean True/False

// Null Intentionally absence of value
// let score = null;
// score =23;
// console.log(score);

// Undefined Variable declared but not initialized
// let xyz;
// console.log(xyz);

// Object is complex data structure

// Symbol look like Object

// <------------------------------------------------------------------------>

// 1.3 Strings

// console.log("Hello World!")

// let firstName="WOW";
// let lastName="Programmer";
// console.log(firstName,lastName); //console.log special property it automatically create space when see comma(,)


// String Concatination

// Method 1 Using + Operator

// let fullname= firstName + lastName;
// let fullName= firstName + " "+ lastName;
// console.log(fullName);


// Method 2 Using Template literals

// let fullName = `I want to Become ${firstName} ${lastName}.`;
// console.log(fullName);


//Getting String Character
// console.log(firstName[2]);


// Common String Methods/Functions

// a/1 uppercase, lowercase
// console.log(lastName.toUpperCase());   

// a/2 Index of
// console.log(lastName.indexOf("m"));  //used to find index of first characters

// a/3 Trim
// let hobbies='   coding reading running'
// let hobbies='coding reading running'
// console.log(hobbies);

// let result= hobbies.trim(); //trim used to remove unwanted space
// console.log(result);

// a/4 Index of
// console.log(result.indexOf('coding')); // it will give 0
// console.log(result.lastIndexOf('running')); //it will used when many time word occurs

// a/5 Includes Method
// console.log(result.includes("reading")) //case sensitive and give output true/false

// a/6 Slice Method
let fullName='wowprogrammer'
console.log(fullName.slice(0,5))  //Excluding last one 0-4

let result=fullName.slice(0,5)  //Excluding last one 0-4

// Imp Note Does not mutate original array
console.log("Original String = ",fullName);
console.log("Extracted String = ",result);