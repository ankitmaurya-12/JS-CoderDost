// |-Chapter 6 DOM - Forms

// 6.1 Submit Event

let form =document.querySelector('.sign-up-form')
// console.log(form);

let email =document.querySelector('#email')
let password =document.querySelector('#password')



// this one is traditional function
// form.addEventListener('submit',function (e) {
    
    // })    
    
    // this one is arrow function
    form.addEventListener('submit',(e)=>{                       
        e.preventDefault();                                   //to prevent reload we add
        // console.log("Submit form Sucessfully")             //when we click button it reload  // it only happens with buttons

        // console.log(email.value, password.value)           // one way of getting values
        
        console.log(form.email.value,form.password.value)     // another way of getting values using name form.name(id name).value if you have given name it doesn't required qureyseletor and all

        console.log(form.userEmail.value,form.userPassword.value)   // another way of getting values using name form.name(which youhave given in html).value if you have given name it doesn't required qureyseletor and all
})


