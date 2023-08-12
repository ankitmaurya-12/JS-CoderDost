// |-Chapter 6 DOM - Forms

// 6.1 Submit Event

// let form =document.querySelector('.sign-up-form')
// console.log(form);

// let email =document.querySelector('#email')
// let password =document.querySelector('#password')



// this one is traditional function
// form.addEventListener('submit',function (e) {
    
    // })    
    
    // this one is arrow function
    // form.addEventListener('submit',(e)=>{                       
        // e.preventDefault();                                   //to prevent reload we add
        // console.log("Submit form Sucessfully")             //when we click button it reload  // it only happens with buttons

        // console.log(email.value, password.value)           // one way of getting values
        
        // console.log(form.email.value,form.password.value)     // another way of getting values using name form.name(id name).value if you have given name it doesn't required qureyseletor and all
        
        // console.log(form.userEmail.value,form.userPassword.value)   // another way of getting values using name form.name(which youhave given in html).value if you have given name it doesn't required qureyseletor and all
// })





// <----------------------------------------------------------------------------------------------------------->

// 6.2 Regular Expression (Regex) 

//  It is a pattern of characters used to do pattern matching
// or we can say for "Data Validation"

// Implementation of password Validation

//Length at Least = 8;
// At least contain one Upper case Letter
// At least contain one Lower case Letter
// At least contain one Digit 0 - 9

// let form = document.querySelector('.sign-up-form');
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');


//we do not need to remeber regex code cause its easily available on enternet focus on core things
// let passwordPattern ="^(?=.*?[A-Z](?=.*?[a-z])(?.=*?[0-9]).{8,}$)"   //coderdost old version

// let passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;   //neew version code

// form.addEventListener('submit',(e)=>{
    // e.preventDefault();
    // console.log(form.email.value,form.password.value)     // another way of getting values using name form.name(id name).value if you have given name it doesn't required qureyseletor and all

//     let passwordValue =password.value;
//     console.log(passwordValue);

//     let result = passwordValue.match(passwordPattern);
//     console.log(result);
//     if (result) {
//         console.log("Your password is Strong.")
//     }else{
//     console.log("Try Again !! Your password is Weak.")
//     }
// })

// <----------------------------------------------------------------------------------------------------------->
// 6.3 Basic Form Validation 


// Basic form validation using regex

//Implement username Validation

//username can only cosnsist of A-Z or a-z
//length of username between 6 to 12

// let form =document.querySelector('.sign-up-form');
// let userInput = document.querySelector('#name');
// let password = document.querySelector('#password');

// let userNamePattern =/^[A-Za-z]{6,12}$/;

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let username =userInput.value;
//     connsole.log(username);

//     //"test" method return boolean values
//     let result = userNamePattern.test(username);
//     console.log(result);

//     if(result == true){
//      console.log("Username is Valid");   
//     }else{
    //     console.log("Username is InValid");   
    //     }
// })
// above one is coderdost cause sir didn't shown html code for it


//below one is GPT generated
let form = document.querySelector('.sign-up-form');
let usernameInput = document.querySelector('#name'); // Changed to usernameInput
let password = document.querySelector('#password');

let userNamePattern = /^[A-Za-z]{6,12}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = usernameInput.value; // Changed to usernameInput.value
    console.log(username);
    
    //"test" method returns boolean values
    let result = userNamePattern.test(username);
    console.log(result);
    
    if (result === true) { // Changed to ===
        console.log("Username is Valid.");
    } else {
        console.log("Username is Invalid."); // Changed to "Invalid"
    }
});



// <----------------------------------------------------------------------------------------------------------->
// 6.4 Live FeedBack (Keyboard Event)

// userNamePattern.addEventListener('keyup',(e)=>{
//     if(userNamePattern.test(e.target.value)){  //true
//         userNamePattern.setAttribute('class','sucess')
//         console.log("passed");
//     }else{
//         userNamePattern.setAttribute('class','error')
//         console.log("Failed");
//     }
    
// })
// above one is coderdost cause sir didn't shown html code for it


//below one is GPT generated
usernameInput.addEventListener('keyup', (e) => {
    if (userNamePattern.test(e.target.value)) {
        usernameInput.classList.add('success'); // Add a CSS class for success
        usernameInput.classList.remove('error'); // Remove the error class if present
        console.log("Passed");
    } else {
        usernameInput.classList.add('error'); // Add a CSS class for error
        usernameInput.classList.remove('success'); // Remove the success class if present
        console.log("Failed");
    }
});
