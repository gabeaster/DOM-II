// // Your code goes here
// console.log('something else');

// //about to register some functionality in the event the item is clicked
// homeLink.addEventListener(
//     //pass two arguemtns    
//     'click',    //the string with the name of the event
//     () => {
//         //this is a call back. here is where we put things we want happening when this link gets clicked
//         console.log('the link got clicked');
//     });


//     //inner most element is the target of the event
//     //addEventListener works on elements, document, and window
// document.querySelector('nav ').addEventListener('click', () =>{
//     console.log('the nav got clicked');
// })

// //attach a click listener (listener is the function/aka handler) to the header element
// document.querySelector('header').addEventListener('click', () => {
//     console.log('the header got clicked');
// })
// //attach a click listener to the body of the page
// document.body.addEventListener('click', () => {
//     console.log('the body of the page got clicked');
// })

// //CHROME CALLS THE EVENT LISTENER CALL BACK - 

// document.addEventListener('click', (event) => {
//     console.log('You clicked on the document');
// })

// window.addEventListener('click', (event) =>{
//     console.log('you clicked on the window');
// })



// //turn clickEventHandler into a function that takes in a parameter called event
// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!')
//     console.log(event.target)
// };

// //use clickEventHandler as the callback argument
// document.querySelector('a').addEventListener('click', clickEventHandler)
// document.querySelector('nav').addEventListener('click', clickEventHandler)
// document.querySelector('header').addEventListener('click', clickEventHandler)
// document.body.addEventListener('click', clickEventHandler)
// document.addEventListener('click', clickEventHandler)
// window.addEventListener('click', clickEventHandler)

//functions
//random color function
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Navigation Toggle Function
function navToggle() {
    if (menuStatus == false) {
        navToggle.style.marginTop = '0px';
        menuStatus = true;
    }else if (menuStatus == true) {
        navToggle.style.marginTop = '-300px';
        menuStatus = false;
    }
}

const nav = document.querySelector('nav');
const navHead = document.querySelector('.main-navigation');

//this will set the nav offscreen
nav.style.marginTop = '-300px';
const navBtn = document.querySelector('.logo-heading');
 
const logoText = document.querySelector('.logo-heading');
