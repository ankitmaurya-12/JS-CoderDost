// Object Oriented Programming

// Constructor function and the "new" Operator

// We can not use "arrow" function as Constructors

// Call "constructor" function using "new" keyword


// 1 new {object} Created empty initially
// 2 "this" ={object}
// 3 object linked to prototype
// 4 function automatically return {object}

// ----------------------------------------------------

// Every Constructor name Start with Capital Letter

// let Car = function(){
    // console.log(this)               //this is an empty objcet
// }

// Every function is constructor but until when didn't call it by new it not
// new Car;
// console.log(car);



// ----------------------------------------------------


// constructor is a normal fumction but have behaviour like object
// means we can use sunction as object

// let Car = function(color, model){
    // instance properties               
    // this.color =color;         
    // this.model =model; 
    // for naming anything can be used like belowe but generally we use property name
    // this.x =color;
    // this.y =model;
// }
    
// car is a constructor 
// And result is a Instance of Car which is derived from Car 
// let result=new Car("Black",2023);
// console.log(result);
    
    
// let instance= new Car("Blue",2002);
// console.log(instance);
    
    
// console.log(result,instance);
    
// instanceof is a keyword it used to find wheather the derived property is instance of Car(Function or not)
// console.log(result instanceof Car);
// console.log(instance instanceof Car);


// ----------------------------------------------------

// let Car =function(color,model){
    // this.x =color;
    // this.y =model;
    // we can't use arrrow function to create nested functions
    // since Car became an objcet so below function is called as "Method"
    // but it not a good practice

    // this.login = function(){
        // console.log("this is login.")
    // }
// }
// console.log(new Car("white",2005));


// <------------------------------------------------------------------------------------>

// 10.2 Prototypes

// Each objects created by "constuctor" function have an access tp all "methods" present inside that "constructor" prototype

// let Car = function(color,model){
    // this.color=color;
    // this.model=model;
    
    // not a good practice
    // this.startEngine = function () {
        //     console.log("This is start engine method of Car")
    // }
// }

// let instance = new Car("Red",2003);
// console.log(instance);


// Every Constructor have special property name .proptotype  it always empty but initialized
// console.log(Car.prototype);


// Method
// we can declare more property or methods using this prototype
// it like a templates
// Car.prototype.startEngine = function(){
    // console.log("This is start engine method of Car.");
// }


// console.log(Car.prototype);


// Each objects created by "constuctor" function have an access tp all "methods" present inside that "constructor" prototype
// console.log(instance.startEngine);
// console.log(instance.startEngine());
// instance.startEngine();


// console.log(instance.__proto__);   //this is same as console.log(Car.prototype);



// We can also set "properties" to prototype
// Car.prototype.company = "Honda";    //this set company same for all objects >> it also caaled as protoyipical inheritance
// console.log(Car.prototype);


// <------------------------------------------------------------------------------------>

// 10.3 Prototypical inheritance

// Protoypal inheritance on built in objects(arrays)

// let Car = function(color,model){
//     instance properties
//     this.color=color;
//     this.model=model;
// }

// Method 
// Car.prototype.startEngine=function(){
// console.log("This is strat Engine Method")
// }
// setting property using prototype
// Car.prototype.company="Honda"

// let instance = new Car("Green",2022);

// console.log(instance.__proto__);                //When we don't know constructor then we use this
// console.log(instance.__proto__.isPrototypeOf(instance));   //It will return true casue the instance in made with proptotype

// It is same as 
// console.log(Car.prototype);                      //when we know constructor then we can us this
// console.log(Car.prototype.isPrototypeOf(Car));   //It will retun false casue Car is constructor it doesn'r made from protoype

// Car.prototype is protoype of all objects created through the car Constuctor

// console.log(instance);   //run this in console





// ---------------------------------------------------------------------


// let arr = [2,3,4,5,6]  
// [] is same as/represent "new" Array([])
// thats why we didn't need to write new at the time of cosnoel.log

// console.log(arr.__proto__)         
//it will show all the Opreration which we can performof array


//it is arlready present in JS and same as above
// console.log(Array.prototype);        


// console.log(arr); // see in console you will see the peototype


// Each any every array has prototype but that protoype also have prototype
// Its Chaining of Protoype
// console.log(arr.__proto__.__proto__);


// It also present in Every Object 
// console.log(Object.prototype);



// <------------------------------------------------------------------------------------>

// 10.4 ES6 Classes

// ES6 Classes (They still implement protypal inheritance behind the scene)


// Class declaration

// class Car {
    // constructor(color,model){
        // this.color=color;
        // this.model=model;
    // }
    // startEngine(){
        // console.log("This is Start Engine Method.")
    // }
// }

// let honda = new Car("Red",2023);
// console.log(honda);

// honda.startEngine();


// We can also add prototype by traditional method 
// Car.prototype.breakEngine= function(){
    // console.log("This is Break Engine MEthod.");
// }
// honda.breakEngine();

// Now break Also Has been added to prototype
// console.log(honda);


// Everything is same as traditional function just writing and reading make easy in ES6.

// Important Point
// Classess Are not Hoisted
// Classess Are also First Class Citizens(Pass as an Argument)
// Classes are executed in Strict Mode



// <------------------------------------------------------------------------------------>

// 10.5 setters and getters

// Getters and Setters allow you to define Object Accessor (Computed Properties)


// class Car {
//     constructor(color,model){
    //         this.color=color;
//         this.model=model;
//     }

//     startEngine(){
//         console.log("This is start Engine of Car.");
//     }

//     get _startEngine(){
//         console.log("This is Start Enine using getComputedStyle.");
//     }

//     set changeColor(color){
//         this.color=color;
//         console.log(this.color);
//     }

// }

// let Honda = new Car("Red", 2003);
// // console.log(Honda);

// // this is a accessinig as a function
// Honda.startEngine();

// // this is a accessinig as a property
// Honda._startEngine;

// // this is a accessinig as a property
// Honda.changeColor="Blue";    //set as property
// console.log(Honda);

// Introduced in ES5 (2009)


// -------------------------------------------------------------------------------

// One more use case of "getter"

// class Car {
//     constructor(color,model){
//         this.color=color;
//         this.model=model;
//     }
    
//     startEngine(){
//         console.log("This is start Engine of Car.");
//     }
    
//     get description(){
//         return `Color of bike is ${this.color} and its model is ${this.model}.`
//     }
    
// }

// let honda = new Car("Red",2004);

// console.log(honda.description);






// <------------------------------------------------------------------------------------>
// <------------------------------------------------------------------------------------>

// 10.6 static methods

// static methods (Method which is not present on constructor "prototype" property but "constructor" itself)


// class declaration

// class Car {
//     constructor(color,model){
    //         this.color=color;
    //         this.model=model;
//     }
//     startEngine(){
//         console.log("Hello World")
//     }
// }

// let honda = new Car("Black",2005);
// console.log(honda);

// static method --> Its only on Constructor not on any instance
// (CAn never inherited to all objects)
// Car.breakMethod = function(){
//     console.log("End World !!")
// }

// Car.breakMethod();






// <------------------------------------------------------------------------------------>

// 10.7 Class Inheritance



// // Class declartion

// // Parent Class
// class Car {
//     constructor(color,model){
//         this.color=color;
//         this.model=model;
//     }
//     startEngine(){
//         console.log("Hello World")
//     }
// }

// // Child Class
// // class Bike extends Car{
    
// // }
// // let newBike= new Bike("Black",2023);
// // console.log(newBike)

// class Bike extends Car{
//     // We Can Add new properties and "Methods" as well
//     constructor(color,model,engineCapacity){
//         super(color,model);
//         this.engineCapacity= engineCapacity;
//     }
    
//     // Also we can add methods
//     bikeMethod(){
//         console.log("This is Bike Method.")
//     }
// }

// let newBike= new Bike("Black",2023,"125CC");
// let bike2= new Bike("White",2022,"1200CC")
// console.log(newBike,bike2)

// // if you want to check level of protoype you can use following method
// console.log(newBike.__proto__);   //--> it will give car cause car is parent of this

// newBike.bikeMethod();


// let honda = new Car("Black",2005);
// console.log(honda);
// honda.startEngine();
// console.log(honda.__proto__);   //-->it will give nothing cause no one parent of this this is superior.





// <------------------------------------------------------------------------------------>

// 10.8 Inheritance by Prototypes

// it and old method before class

// Class Declaration

// // Parent Class
// let Car = function(color,model){
//     this.color=color;
//     this.model=model;
// }
// // Method
// Car.prototype.startEngine=function(){
//     console.log("This is strat Engine Method")
// }

// let honda =new Car("Red",2023);
// console.log(honda);

// // Child Class
// let Bike = function(color,model,engineCapacity){
//     Car.call(this,color,model);
//     this.engineCapacity=engineCapacity;
// }


// // Inherited from Parent Class
// Bike.prototype=Object.create(Car.prototype);       //--> Object.create is necesary for linking the prototype with child

// // Not inherited
// Bike.prototype.ownBike = function(){
//     console.log("This is Own Bike Class Method")
// }


// let newBike = new Bike("Green",2019,"200CC");
// let bike2= new Bike("Black",2020,"250CC");
// console.log(newBike,bike2);




// <------------------------------------------------------------------------------------>

// 10.9 Chaining of methods
