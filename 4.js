// Intro to Objects 
// 4.1
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// let car={
//     color:"black",
//     model:"2022",
//    company:"Honda"
// }

// console.log(car);

// const myDog = {
        // name: "Whiskers",
        // legs: 4,
        // tails: 1,
        // friends: ["Water", "Dogs"]
    // };
    
// console.log(myDog);

// Accessing the Javascript object properties
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// console.log(car['color']) //metod1
// console.log(car.color)  //method2


// this can be also written as
// Accessing Object Properties with Variables

// Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

// let propertyName ='color';

// console.log(car['propertyName']); // this will search exact propertyName cause it inside the bracket
// console.log(car[propertyName]); // but this will search value of propertyName

// console.log(car.propertyName); //this will retuen undefine hence preffered to use []



// Upadting/Modifying Object Property

// car.color="brown";  //using . dot then updated value
// console.log(car.color);
// console.log(car);

// car['color']="red"  //using [] then updated value
// console.log(car.color);
// console.log(car);


// Add New Properties to a JavaScript Object

// car.age=5;  //using .dot
// console.log(car);

// car.milage="10km";  //usinng []
// console.log(car);
// console.log(car);
// console.log(car);


// Delete Properties from a JavaScript Object

//milage property will delete
// delete car.milage;  //using .dot method 
// delete car['milage']; // using []
// console.log(car);

// let returnValue = delete car.color  //assing to variable  --> it will say true and false "ha delete ho gaya nahi hua"
// console.log(car.color,returnValue)
// console.log(car);

// <------------------------------------------------------------------------------------>

// 4.2
// Function vs Methods

// let ageCalculator =function(birthyear){            //this is fumction
//     let age =2023-birthyear;
//     console.log(`Current age is ${age}`)
// }
// ageCalculator(2003);

// Methods --> When function is defined under Objects it called function
// Function as "Value"

// let person ={                                          //  this is method

//     ageCalculator : function(birthyear){     // we can assign default vale also birthyear =2002
//             let age =2023-birthyear;
//             return age;
//         }
//     }
// console.log(`Current age is ${person.ageCalculator(2002)} and your brother age is ${person.ageCalculator(2004)}.`)  // Note :- when you try to print usinng dollar then write in `1 ke left wala key `


// <------------FCC----------------------FCC-----------------------FCC--------------------------->

// Testing Objects for Properties //*from fcc*
// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

// Example 1 :-

// function checkForProperty(object, property) {
//     return object.hasOwnProperty(property);
// }

// checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true  for it you have to use cosole.log else you can store it in variable then console.log

// console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle')); // false

// Example 2 :-

// Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.

// function checkObj(obj, checkProp) {
//     //   // Only change code below this line
//       if (obj.hasOwnProperty(checkProp)){
//           return obj[checkProp];
//       }else {
//         return "Not Found";
//       }
//     //   // Only change code above this line
// }

// const result = checkObj({color: 'red', brank: 'Fox'}, 'color');   
// console.log(result);  // This will output: true




// <------------FCC----------------------FCC-----------------------FCC--------------------------->

// Manipulating Complex Objects
// Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

// Here's an example of a complex data structure:

// const ourMusic = [
//   {
    //     "artist": "Daft Punk",
    //     "title": "Homework",
//     "release_year": 1997,
//     "formats": [ 
//       "CD", 
//       "Cassette", 
//       "LP"
//     ],
//     "gold": true
//   }
// ];

// console.log(ourMusic[0]);                           // accessing array
// console.log(ourMusic[0].artist);                    // accessing object inside array
// console.log(ourMusic[0].formats[2]);                // accessing array inside object inside array

// This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

// Note: You will need to place a comma after every object in the array, unless it is the last object in the array.




// <------------FCC----------------------FCC-----------------------FCC--------------------------->


// Accessing Nested Objects
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested object:

// const ourStorage = {
//     "desk": {
    //       "drawer": "stapler"
//     },
//     "cabinet": {
    //       "top drawer": { 
        //         "folder1": "a file",
        //         "folder2": "secrets"
//       },
//       "bottom drawer": "soda"
//     }
//   };
  
// ourStorage.cabinet["top drawer"].folder2;    //add console.log to print value
// console.log(ourStorage.desk.drawer);

// ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.




// <------------FCC----------------------FCC-----------------------FCC--------------------------->

// Accessing Nested Arrays
// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

// Here is an example of how to access a nested array:

// const ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];

// ourPets[0].names[1];   //add conosle.log 
// console.log(ourPets[1].names[0]);

// ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.





// <------------------------------------------------------------------------------------>

// 4.3 "this" keyword

// In Each Method we have an access of special keyword called 'this'

// 'this' keyword represent the object. "Calling" the "method" in which 'this' is "present"

// Example

// let person={
//     firstName:'Ankit',
//     lastName:'Maurya',
//     city:'Thane',
//     birthyear:2002,
//     Education:"Software Engineer",
//     getSummary:function(){
        // return `Ankit Maurya lived in Thane. He is Software Engineer and his birthyear is 2002.`
        // return `${this.firstName} ${this.lastName} lives in ${this.city}. He is ${this.Education} and he is born in ${this.birthyear}.`
        // return this;
    // }
// }
// console.log(person.getSummary())

// use of this is we not have to type manually changes when we do in parent/main object
// like below we change city to Mumbai then cause of this we do not need to amend it in getSummary function

// person.city='Mumbai';
// console.log(person.city);
// console.log(person);

// console.log(person.getSummary())  // now it will return mumbai.

//  Step 1 Check in which method we use "this" keyword 
// Step 2 Owner of that method (Who is calling those method)




// <------------------------------------------------------------------------------------>

// 4.4 forEach Method of array

// Its another type of loop which we used to traverse over the array


// let dishes=["Biryani","Pani-Puri","choley","Pizza"]

// // using loop

// for(let i=0; i<dishes.length; i++){
//     console.log(dishes[i]);
// }

// console.log("----------------------------------")

// // using forEach method

// dishes.forEach(function(element){    //it different type of programming called fuctional programing
//     console.log(element);
// })





// <------------------------------------------------------------------------------------>

// 4.5 Objects inside Array


// let blockList = [{userName:'Jhon',reason:'Abusive Content'},{userName:'Peter',reason:'copyright content'}]

// console.log(blockList);         // print whole array name blockList

// for(let i =0;i<blockList.length;i++){
//     console.log(`User ${blockList[i].userName} Blocked Due to ${blockList[i].reason}.`);
// }




// <------------------------------------------------------------------------------------>

// 4.6 Math Object
// Math Object built in object in JavaScript

// console.log(Math);

// let number =7.6;
// let number =7.9;

//Math.round
// console.log(Math.round(number))   //Math.round used to find nearest number according to input


//Math.floor
// console.log(Math.floor(number))   //Math.floor used to find smallest number according to input 


//Math.ceil
// console.log(Math.ceil(number))   //Math.ceil used to find larger number according to input

// Math.trunc
// console.log(Math.trunc(number))   //Math.trunc used to remove decimle part according to input

// Math.random
// let random=Math.random()         //it will select random numbers in between 0 and 1
// console.log(random);

// console.log(Math.round(random));  // after round off if greater than 0.5 then 1 else 0

// console.log(Math.round(random*100));  // when we need number between 0 and 100 multiply it by 100.





// <------------------------------------------------------------------------------------>

// 4.7 Call, apply and bind

// We can manually set the value of "this" Keyword using "call and apply"

"use-strict"   // its a javascript property which will tell you error correctly in inspect

let mainPlane={
    airline:'Air India',
    iatacode:'F1',
    booking:[],
    book:function(flightNum,name){
        console.log(`Mr\\Mrs. ${name} booked Flight on ${this.airline} with Seat-Number "${flightNum}" which and Plane IATA Code is ${this.iatacode}.`)
        this.booking.push({flightName:`${this.airline}`,passangerName:name, flightNum:`${this.iatacode}${flightNum}`})
    }
}

mainPlane.book(204,"Ankit");
mainPlane.book(110,"Shubham");    //now just you have to add flighht no. and name else work done automatically

// console.log(mainPlane)


// New airline launched of same group

let childPlane={
    airline:'Air Assia',
    iatacode:'F5',
    booking:[],
    book:function(flightNum,name){
        // we can just copy paste above code here but it not a best practice
        
        // console.log(`Mr\\Mrs. ${name} booked Flight on ${this.airline} with Seat-Number "${flightNum}" which and Plane IATA Code is ${this.iatacode}.`)
        // this.booking.push({flightName:`${this.airline}`,passangerName:name, flightNum:`${this.iatacode}${flightNum}`})
        
    }
}

let book=mainPlane.book

// book(368,"Lucky");  //book is regular function but it can read push value
// "this" value is undefined at least in strict mode


// Solution using "call" metod

book.call(childPlane,368,"Lucky");   // it euivalent to book(368,"Lucky")


console.log(childPlane)   //this will return whole object with push value in "booking"



book.call(mainPlane,151,"Santu");   // you can also call it for mainplane 
console.log(mainPlane) //this will return whole object with push value in "booking"





// *IMP* "apply" mrthod

// it used previously when there is no callback function then apply used 
// apply is same as callback function just pass value in array function


book.apply(childPlane,[654,"Harry"]);
console.log(childPlane);