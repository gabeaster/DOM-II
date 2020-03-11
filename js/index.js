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
const navBtn = document.querySelector('.logo-heading');

//this will set the nav offscreen
// nav.style.marginTop = '-300px';

 
const logoText = document.querySelector('.logo-heading');

//1 MOUSEOVER - will change the color of the logo into a different color each time the mouse is over the logo
logoText.addEventListener('mouseover', function() {
    logoText.style.color = randomColor();
});

//2 MOUSEOUT - We'll turn the random color off when the mouse is no longer over the logo it returns to black instead of staying the random color
logoText.addEventListener('mouseout', function(){
    logoText.style.color = 'black';
});

//3 DBLCLICK - will style nav to a random background color on a double click
nav.addEventListener('dblclick', function(event){
    nav.style.backgroundColor = randomColor();
});

//4 CLICK - will change the color of the top section to a random color
navHead.addEventListener('keydown', function() {
    navHead.style.background = randomColor();
});

//5 forEach on the navItems that also incudes preventDefault
const navItems = document.querySelectorAll('nav a');
navItems.forEach(function(item){
    item.addEventListener.apply('click', function(event) {
        event.target.style.color = randomColor();
        event.preventDefault();
        event.stopPropagation();
    });
});

//6 Keydown This will change the color of p tags when the a key is pressed
const superText = document.querySelectorAll('.content-section');
superText.addEventListener('click', function(){
    superText.style.backgroundColor = randomColor();
    event.stopPropagation;
});


// 7 this will change the color of the header
const header = document.querySelector('.intro');
header.addEventListener('scroll',function(event){
    event.currentTarget.style.backgroundColor = randomColor();
    event.stopPropagation;
});

//8 and 9; this is to rickroll; used onload to make sure the image loads in the background; then use click to actually 
let rick = new Image();
let ricked = true;
rick.src =
  "http://pm1.narvii.com/6350/75953997c8fbb2766b8feb9cf347b2464df25b9c_hq.jpg";

  const imgs = document.querySelectorAll('img');
rick.onload = function() {

  imgs.forEach(function(img) {
    img.addEventListener('click', function() {
      img.src = rick.src;
      ricked = true;
    });
  });

const body = document.querySelector('body');
  window.addEventListener('resize', function(event) {
    if (ricked) {
      body.style.background = `url(${rick.src})`;
      body.style.backgroundSize = '100%';
      body.style.backgroundAttachment = "fixed";
    }
  });
};

//10
const text = document.querySelectorAll('h2');
text.addEventListener("click", function() {
  text.textContent = "I'm Pickle Rick!";
});
