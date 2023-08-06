// Intro to Objects 
// 4.1
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// let car={
//     color:"black",
//     model:"2022",
//     company:"Honda"
// }

// console.log(car);

// const myDog = {
//     name: "Whiskers",
//     legs: 4,
//     tails: 1,
//     friends: ["Water", "Dogs"]
// };


// Accessing the Javascript object properties
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// console.log(car['color']) //metod1
// console.log(car.color)  //method2


// this can be also written as
// Accessing Object Properties with Variables

// Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

// let propertyName ='color';

// console.log(car['propertyName']); // this will search exact propertyName
// console.log(car[propertyName]); // but this will search value of propertyName

// console.log(car.propertyName); //this will retuen undefine hence preffered to use []



// Upadting/Modifying Object Property

// car.color="brown";  //using . dot
// console.log(car.color);
// console.log(car);

// car['color']="red"  //using []
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

// let returnValue = delete car.color  //assing to variable 
// console.log(car.color,returnValue)

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

//     ageCalculator : function(birthyear){
//             let age =2023-birthyear;
//             return age;
//         }
//     }
// console.log(`Current age is ${person.ageCalculator(2002)}`)
    
// Testing Objects for Properties //*from fcc*
// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

// <------------------------------------------------------------------------------------>

// 4.3 "this" keyword

// In Each Method we have an access of special keyword called 'this'

// 'this' keyword represent the object. "Calling" the "method" in which 'this' is "present"

// Example

let person={
    firstName:'Ankit',
    lastName:'Maurya',
    city:'Thane',
    birthyear:2002,
    Education:"Software Engineer",
    getSummary:function(){
        // return `Ankit Maurya lived in Thane. He is Software Engineer and his birthyear is 2002.`
        return `${this.firstName} ${this.lastName} lives in ${this.city}. He is ${this.Education} and he is born in ${this.birthyear}.`
        // return this
    }
}
console.log(person.getSummary())

//  Step 1 Check in which method we use "this" keyword 
// Step 2 Owner of that method (Who is calling those method)


// <------------------------------------------------------------------------------------>

// 4.4 forEach Method