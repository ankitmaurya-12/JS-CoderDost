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
// console.log("Original Array : ",num);
// console.log("New Array : ",newArray);

// console.log(num.splice(1,1,1));

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

// Sum of All elements using reduce method

// let num =[1,2,3,4,5,6,7,8,9,10,11];
// console.log(num);

// method 1
// let sum =num.reduce(fuction(total,currentValue){
//     return total + currentValue;
// },0);

// method 2
// let sum =num.reduce((total,currentValue)=>{
// return total + currentValue;
//},0);


// console.log(sum);
// console.log(num);

// Does not mutate original array


// <--------------------------------------------------------------------------------------------->

// 7.7 find 

// It retun the "first" elments we are looking for....
// Used in complex objects like structure

// let students =[{id:1,name:"Ankit"},{id:2,name:"Jhon"},{id:3,name:"Alex"},{id:1,name:"Paul"}];
// console.log(students);

// if two or more students have same id then it will return only first element
// let result =students.find(students=>{
    // return students.id ===1
// })

// console.log(result);

// if id din't match then it will return undefined



// <--------------------------------------------------------------------------------------------->

// 7.8 findIndex

// Execuate function for each array element 
// It rreturn "index" of that array element who "first" pass the test otherwise "-1".


// let students =[{id:1,name:"Ankit"},{id:2,name:"Jhon"},{id:3,name:"Alex"},{id:1,name:"Paul"}];
// console.log(students);

// 1
// if two or more students have same id then it will return only first element index
// let result =students.findIndex(students=>{
    //     return students.id ===1
// })
// console.log(result);

// 2
// let res =students.findIndex(students=>{
    //     return students.id === 5
// })
// console.log(res);         //if id not find it will retun -1


// another way
// in below example  we can use Indexof also
// but disadvantage of indexOf is that we cann't put condition on it to find index

// let ages =[15,21,18,17,23];
// let results=ages.findIndex(ages=>{
    //     return ages>20;
// })
// console.log(results);



// <--------------------------------------------------------------------------------------------->

// 7.9 "some" and "every" methods

// some method return "true" if "any" element pass the testcase

// every method return "true" if "all" element pass the testcase



// some method  -->its is losse condition
// let scores = [25,34,67,80,92];

// let result=scores.some(scores=>{
//     return scores >50
// return scores >95
// })
// console.log("some method result :",result);



// every method
// let newScores=[54,65,78,92,59];

// let result1=newScores.every(newScores=>{
    //     return newScores>50
// })
// console.log("every method result :",result1)



// <--------------------------------------------------------------------------------------------->

// 7.10 flat Method

// It create a new array with the elements of the subarrays "concatenated" into it.


// let arr =[1,2,3,[4,[5,7,9]]];

// console.log("Before Flat",arr);

// let result =arr.flat(1);  //by default 1 value --> it will go to the depth "one" sub array

// let result =arr.flat(2);  //it we go to the depth "2nd" subarray

// console.log("After Flat",result);



// it also non mutating method



// <--------------------------------------------------------------------------------------------->

// 7.11 flatMap Method 

// it is the combination of 'map()' method followed by the 'flat()' method of depth "1"

// let cart = [{
//     name:"Mobile Phone",
//     qty:2,
//     price:15000
// },{
//     name:"Tablet",
//     qty:1,
//     price:12000
// }]


// first print it with map and then change to flatMap using commentout

// let newCart = cart.map(item=>{
// let newCart = cart.flatMap(item=>{
//         if (item.name == "Mobile Phone") {
//         return[item,{
//             name:"Screen Protector",
//             qty:1,
//             price:0
//         }]
//     }else{
//         return[item]
//     }
// })

// console.log(newCart);


// <--------------------------------------------------------------------------------------------->

// 7.12 Sorting arrays

// By default sort method is used to sort strings
// It firstly convert everything into string and then ...

// let letters=["d","r","w","a","h"];

// to sort in accending order
// console.log(letters.sort());

// to sort in decensing order
// console.log(letters.sort().reverse());


// Another example
// let num=[6,4,8,2,9,2,9,0,3,4,7];

// console.log(num.sort());
// console.log(num.sort().reverse());


// Another example
// let nums=[2,4,-7,-1,-66, 94];
// console.log("Unsorted",nums);    
// console.log(nums.sort());    // Note :- Resukt will be Unexcpected means wrong

// suppose we have two value a and b.
// case 1:
// if a-b < 0 => a < b =>A,B  (keep order Same)
// case 2:
// if a-b > 0 => a > b =>B,A  (switch the order)


// nums.sort((a,b)=>{
//     if (a<b) {
//         return -1;    //Any number less than zero
//     }
//     if(a>b){
    //         return 1;  // Any number greater than zero
//     }
// })

// above conditon alos can be written as
// it will give "Acccending" Sort
// nums.sort((a,b)=>{
    // return a-b;
    // })

// for "Desending" Sort
// nums.sort((a,b)=>{
// return b-a;              //change to b-a
// })

// console.log("Sorted",nums);

    


// <--------------------------------------------------------------------------------------------->

// 7.13 Chaining of methods

let num =[1,2,3,4,5,6,7];
console.log(num);

let result= num.slice(0,3).splice(2,1,7);
console.log(result);

console.log(num);  //it will not chnage cause slice in non mutating elements

// if we have directly applied splicce then it will mutate