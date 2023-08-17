// IMP NOte:- Use console for output

// 8.1 Date And Time 

// Date Object always Carry Both "Date" and "Time"


// Using Date method

// 1. Current time
// let currentDate = new Date()
// console.log(currentDate)


// 2. Particular Time
// let particularDate = new Date(15,5,21,12,0,2);   // it will take Date(YYYY,MM,DD,HH,MM,SS,MS)  and if year is in YY it will assume as 19--
// console.log(particularDate)


// Using timeStamp Method (integer number represents in "ms" from 1-1-1970)

// Default date -->when computer first came
// let thatDate = new Date(0);          //0 is time in ms
// console.log(thatDate);

//after on day
// let onedayAfter =new Date(86400000);
// 1 Day = 24 * 60 * 60 = 86400000
// console.log(onedayAfter);


// to get time in "ms"

// let currentDate = new Date().getTime();
// console.log(currentDate);          //-> 1692292508188  Total time in "ms" from 1-1-1970




// <--------------------------------------------------------------------------------------------->

// 8.2 Date And Time Methods

// let completeDateAndTime =new Date();
// console.log(completeDateAndTime);


// Get Full Year
// console.log(completeDateAndTime.getFullYear());

// Get Month
// console.log(completeDateAndTime.getMonth());  //0-11

// Get Week Day
// console.log(completeDateAndTime.getDay());   // [0]Sunday,[1] Monday, .... [6] Saturday

// Get Hour
// console.log(completeDateAndTime.getHours());

// Get Minute
// console.log(completeDateAndTime.getMinutes());

// Get Second
// console.log(completeDateAndTime.getSeconds());

// Get Second
// console.log(completeDateAndTime.getMilliseconds());





// <--------------------------------------------------------------------------------------------->

// 8.3 Digital Clock

let hourHand =document.querySelector('.hour');
let minuteHand =document.querySelector('.minute');
let secondHand =document.querySelector('.second');

let ticking = function(){
    
    let currentDate = new Date();
    // console.log(currentDate);

    let getHour =currentDate.getHours();

    let getMinute =currentDate.getMinutes();

    let getSecond =currentDate.getSeconds();


    hourHand.textContent=getHour;
    minuteHand.textContent=getMinute;
    secondHand.textContent=getSecond;
}


setInterval(ticking,1000);   //it will call tixking after every 1000ms means 1sec