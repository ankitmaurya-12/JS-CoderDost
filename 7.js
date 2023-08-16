// 7.0 Array Methods
// Working with simple Arrays(simple Methods)


// let letters =['a','b','c','d','e'];
// console.log(letters);

// {A}.  reverse (mutate the original array)

// let reverse =letters.reverse();

// console.log(reverse);
// console.log(letters);   //mutate means change original array


// {B}. Concat or adding two arrrays  (no mutating)

// let nums =[1,2,3,4,5];

// method one
// let concated =nums.concat(letters);   
// console.log(concated);

// method two
// console.log(...nums,...concated);    //spread operator


// {C}. join   (no mutating)

// let joined =letters.join(' ');  //inbetween brackets anything can comes either space(' '), ('-'),('&')
// console.log(joined);
// console.log(typeof joined);


// <--------------------------------------------------------------------------------------------->

// 7.1 slice

//used to Extract part of the array
//Array.slice(startingIndex, lsatIndex(excluded))
// Return new Array of Extracted elements

// let num = [3,5,7,9,1,6];
// let extractedArray =num.slice(0,3);   //0-2
// console.log("Original Array : ",num);
// console.log("Extracted Array : ",extractedArray);


// <--------------------------------------------------------------------------------------------->

// 7.2 splice (mutating)

// used to add new elements into the array
// Array.splice(index,deleteValue,valueToBeAdded)
// Returns deleted items in the form of Array

// let num = [3,5,7,9,1,6];
// console.log("Original Array : ",num);

// first comment out this and observe output then comment 
// let newArray = num.splice(1,1,1);
// console.log("New Array : ",newArray);
// console.log("Original Array : ",num);

// After comment out this and observe output then comment 
// let secArray = num.splice(1,2,1);
// console.log("Second New Array : ",secArray);
// console.log("Original Array : ",num);


// After comment out this and observe output then comment 
// let thirdArray = num.splice(1,0,6,9);       // it will add 6 & 9 to num at 1st index and extract nothing[]
// console.log("Third New Array : ",thirdArray);
// console.log("Original Array : ",num);


// <--------------------------------------------------------------------------------------------->

// 7.3 at  (no mutate)

// let nums =[23,45,67,79,93];

// console.log(nums[0]);
// console.log(nums.at(1));


//Getting last element of the Array

// method 1
// console.log(nums[nums.length-1]);



// method 2
// console.log(nums.slice(-1));  //it will run from last and stating index is always -1 
// console.log(nums.slice(-2));  // after -1 ther will be -2 for last two elements
// Note:- But it always in Array form

// to find actual value
// console.log(nums.slice(-1)[0]);  //Add idex of elements 



// method 3

// console.log(nums.at(nums.length-1)); 
// or above one can be also written as

// console.log(nums.at(-1));       // it will give last element
// console.log(nums.at(-2));       // it will give second last element
// console.log(nums.at(-3));       // it will give third last element


// At method can also work on strings
// let name="Ankit";
// console.log(name.at(-1));
// console.log(name.at(-2));

// <--------------------------------------------------------------------------------------------->

// 7.4 Map Method (Higher order function)

// Higher order function :- putting one function inside another

// create New Array from Original Array By applying Transformation function

// let salaries = [3000,5000,6000,9000];

// let newSalaries =salaries.map(salary =>{
//     let incrementAmount =salary/2;
//     return salary + incrementAmount;
// })

// console.log("After 50% Bounus New Salaries are ",newSalaries);

// length of new Array always "equal" to the original Array


// <--------------------------------------------------------------------------------------------->

// 7.5 Filter

// Filter Method (used to perform filteration on Array)


// let gifts =["Watch", "Ring","Chochlates","Teddy-Bear","watch","Ring","Iphone"];

// Now You want to filter only "Watch" & "Ring"

// let finteredArray =gifts.filter(gifts=>{
//     if(gifts=="watch" || gifts == "Ring"){
//         return gifts
//     }
// })

// it retun "new" Array
// console.log(finteredArray);

// console.log(gifts);

// Length of new Arrays or Filterd array will may or may not be same as original Array


// <--------------------------------------------------------------------------------------------->

// 7.6 Reduce

// Run reduceer function for each array element
// Array.reduce(function(total.currentValue),initialValue)
// It return single Value

// Sum of All elements using

