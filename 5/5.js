// Javascript Dom (Document Objcet Model)
// Crated by Browser as the html load into browser

// browser create object of html called 'document object',

// In Document object there is model of complete html in tree like structure

// console.log(document)   //it will show whole DOM structure // it will create object of html code

// console.dir(document)   //if we want more detialed DOM structure


// console.dir(document.URL)   //now if we want to access any property we can acess it by using . after document 

// <------------------------------------------------------------------------------------>

// 5.2 Query Selector


// getting Html elemts using querySelectors/All

// quesry Selector returns "first element" that match css selector

// to get all matched elements we use querySelectorAll


// let result = document.querySelector('p');  //we use css selector like tags, id, class
// console.log(result)

// let res = document.querySelectorAll('p');  //we use css selector like tags, id, class
// console.log(res)

// here the loop will work cause query selctor gives objects 
// res.forEach(element => {   
    // console.log(element)
// });

// let results = document.querySelectorAll('.coderdost');  //access through class
// console.log(results)

// let resul = document.querySelectorAll('#coders');  //access through id
// console.log(resul)


// Always Selection is First step and modification is next step


// <------------------------------------------------------------------------------------>

// 5.3 Other Ways to access Elements


// get Element by tagName

// it give html collections not html objects

// let tagNameElemnts =document.getElementsByTagName('p');
// console.log(tagNameElemnts)


// here this foreach loop will not work cause it not an object
// tagNameElemnts.array.forEach(element => {   
    // console.log(element)
// });

// get element by ID             //id should always one
// let idNameElemts =document.getElementById('coders')     //here . and # not used when calling class or Id
// console.dir(idNameElemts)       // console.dir used to print in object

// get element by class
// let classNameElements = document.getElementsByClassName('coderdost');   //here . and # not used when calling class or Id
// console.log(classNameElements)


// <------------------------------------------------------------------------------------>
// Updating and Changing Content

// 5.4 innerText Vs innerHTML


// innerText
// it ignore the spaces

// let heading =document.querySelector('h1');
// console.log(heading);        //it will display whole h1 tag

// console.log(heading.innerText);  // but it will display inner text of HTML



// innerHTML
// it dosen't ignore the spaces

// console.log(heading.innerHTML);  // but it will display inner text of HTML 



// another exapmle
// let content =document.querySelector('.content');   
// console.log(content.innerText)                     //here extract text inside the container

// console.log(content.innerHTML)                     //but this exteact structre of class container


//also we can insert text and element in .container

// content.innerText="<p> Great Learning !!</p>"      
//it will insert as it is 
// retrive and set content in Plain text

// content.innerHTML="<p> Great Learning !!</p>"      
//but it will insert as value tag will be hidden
// retrive and set content in HTML Format

// content.innerText += "<p> Great Learning !!</p>"  //if write += it will add    
// content.innerHTML += "<p> Great Learning !!</p>"      


// <------------------------------------------------------------------------------------>

// 5.5 Getting And Setting the Attribute

// getting attribute
// let coderDostLink =document.querySelector('a');
// console.log(coderDostLink.getAttribute("href"));


// setting attributes
// coderDostLink.setAttribute("href", "https://www.youtube.com/watch?v=lGmRnu--iU8&t=13548s&ab_channel=CoderDost0");
// console.log(coderDostLink.getAttribute("href"));
// coderDostLink.innerText="Complete JavaScript Masterclass"      //used to change text of a.



// IMP Note: just like herre we change the href you can change any atttributes value like 'src' in image, 'id', 'class' etc... 


// <------------------------------------------------------------------------------------>

// 5.6 Adding the style

// let heading =document.querySelector('h1');
// heading.style.color="yellow";
// heading.style.backgroundColor="blue";
// heading.style.border= '10px solid red';   
// etc we can change other css style. 


// <------------------------------------------------------------------------------------>

// 5.7 Add, Remove And Replace Class

// let heading= document.querySelector("h1");

// Add the classs

// let classList=heading.classList
// console.log(classList);

// Add class
// heading.classList.add('newClass')                    //it will add newClass to the main

//Remove class
// heading.classList.remove('newClass');               // it will remove the newClass

// Replace class
// heading.classList.replace('main', 'newClass');      // it will replace the main to newClass


// <------------------------------------------------------------------------------------>

// 5.8 Parent Children and Sibling

// let parentElement = document.querySelector('.content')
// console.log(parentElement);   //It will give div element


// All Children of Parent

// chilElement = parentElement.children;
// // console.log(chilElement);

// // We can not run forEach Method on HTMLCollection so First convert in into array

// childArray = Array.from(chilElement);
// console.log(childArray);

// // now we can apply all array methods functions
// // console.log(childArray[0]);

// // lets apply forEach loop to chald Array
// childArray.forEach(element => {
    //     console.log(element)
//     element.classList.add("Ankit");         // it used to add class seen in 5.7
//     console.log(element.classList);         // it used to print all class seen in 5.7
// });



// finiding Parent Element from ChildElement

// let child = document.querySelector('h2');        //remeber query slector always select 1st element
// console.log(child);

// parent = child.parentElement
// console.log(parent);


// finding Sibling Element 

// console.log(child.nextElementSibling);   //used to find next sibling after h2 but h2 is last element in conatiner so it will retuen null

// console.log(child.previousElementSibling);



// <------------------------------------------------------------------------------------>

// 5.9 Event Basics (click event)

// let eventElement =document.querySelector('.clickme');
// console.log(eventElement);

// eventElement.addEventListener('click',function(){
    //     console.log('clicked')
// })



// let elements = document.querySelectorAll('li');
// console.log(elements);

// elements.forEach(element => {
    // element.addEventListener('click',function(e) {              // e used to store event object --> it give fetail about where mousec clicked, X ad Y cooredinates of mouse etc. 
    // console.log('Item Clicked')                       
        // console.log(e)                                       // it will give mouse pointer object
        // console.log(e.target)                                 // and when it act as object we can access property using . and []. as seen in chap 4.
    
        // console.log(`${e.target.innerText} Item Clicked`)      // We can also use othe javascript Array, function and object properties. 
        
        // e.target.style.textDecoration = 'line-through'         // when we get elment we can change it style also seen in 5.6
        
        // e.target.remove();                                     // it used to remove the target
    // })
    // IMP Note:- always assign value to any varibale then print it using concole log. 
// });

// do more research about e 



// <------------------------------------------------------------------------------------>

// 5.10 Creating And Removing Element

// creating

// const ul = document.querySelector('ul')
// console.log(ul)

// let button = document.querySelector('.clickme');

// button.addEventListener('click',function (e) {
    //     console.log('clicked');

    //     let li = document.createElement('li')            //creating li element
    //     li.textContent="Something New Added"             //assigning value to li tag
    //     ul.append(li)                                    // append used to add value in last in this case li
//     ul.prepend(li)                                 // prepend used to add value in starting in this case li

// })


// removing seen in line 233


// <------------------------------------------------------------------------------------>

// 5.11 Bubbling And Delegation                          


// Bubbling means when we run some function on any child element then it will go to the root means it will aslo work on ul and then bosy for this

// AND Delegation is a group of people who have been chosen to speak or take decisions for a larger group of people, especially at a meeting

// THIS CODE FOR UL ELEMENT CLICKING
// const ul = document.querySelector('ul')
// ul.addEventListener('click',function (e) {
    // console.log("Inside UL")
    // console.log(e.target)
    // if(e.target.nodeName=='LI'){                         // this is used to remove LI node inside ul. now it will remove all li previously it only run on EAT SLEEP CODE REPEATE
        // e.target.remove();                               // and here ul is working as Delegation which doing work of all li
    // }
// })
// 
// let button = document.querySelector('.clickme');


//THIS CODE FOR BUTTON CLICKING
// button.addEventListener('click',function (e) {
//         console.log('clicked');
        
//         let li = document.createElement('li')            //creating li element
//         li.textContent="Something New Added"             //assigning value to li tag
//         ul.append(li)                                    // append used to add value in last in this case li
//         // ul.prepend(li)                                  // prepend used to add value in starting in this case li
//         e.target.remove();                             //it assign remove to only withiin this loop individually to each after complition of loop it not work so this means it only remove EAT SLEEP CODE REPEATE
    
//     })

    // THIS CODE FOR LI ELEMENT CLICKING 
// let elements = document.querySelectorAll('li');
// console.log(elements);

// elements.forEach(element => {
//     element.addEventListener('click',function(e) {              // e used to store event object --> it give fetail about where mousec clicked, X ad Y cooredinates of mouse etc. 
//         console.log('Inside LI')                       
    // console.log(e)                                       
    // console.log(e.target)                              
     
// })
// });


// <------------------------------------------------------------------------------------>

// 5.12 more events



//copy event

// let copyRightElement =document.querySelector('.copy');
// console.log(copyRightElement);

// copyRightElement.addEventListener('copy', function () {
    // console.log('OOOOI !! This is CopyRight Content.')
// })



//Mouse move element

// let box =document.querySelector('.box');
// console.log('box');

// box.addEventListener('mousemove',function (e) {
    // console.log(e);
//     console.log(e.offsetX,e.offsetY);
// })