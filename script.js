// Variables to make it easier to get these elements/classes
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient')
var randomBtn = document.getElementById('random');

// Function to 
function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + ', ' + color2.value + ')';

    // New feature- textContent: adds a text content;
    css.textContent = body.style.background + ";"
}


// Display initial CSS linear-gradient property on page load
color1.value= '#41B56E';
color2.value="#000000";
setGradient();

// Function for random button
function setRandom() {
    color1.value = "#"+(Math.floor(Math.random()*(0x1000000))).
	toString(16); 
	color2.value = "#"+(Math.floor(Math.random()*(0x1000000))).
	toString(16); 
	setGradient();
}

// The event for input is well "input"
// We don't need to run the function because the second parameters automatically runs as soon as the event listener is put into play.
color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
randomBtn.addEventListener('click',setRandom);



// **********************************************

// Difference between event listener on Js and oninput in the HTML has to do with separation of concerns which allows the code be separated to its own indicated section with out cluttering. On top of that, within the JS file we can do more with it.