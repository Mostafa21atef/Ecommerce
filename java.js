const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
// JavaScript to handle user interactions and show/hide different sections.

// Function to show B2C content
function showB2C() {
    document.querySelector('#b2c').style.display = 'block';
    document.querySelector('#c2c').style.display = 'none';
    document.querySelector('#c2b').style.display = 'none';
}

// Function to show C2C content
function showC2C() {
    document.querySelector('#b2c').style.display = 'none';
    document.querySelector('#c2c').style.display = 'block';
    document.querySelector('#c2b').style.display = 'none';
}

// Function to show C2B content
function showC2B() {
    document.querySelector('#b2c').style.display = 'none';
    document.querySelector('#c2c').style.display = 'none';
    document.querySelector('#c2b').style.display = 'block';
}

// Attach event listeners to navigation or buttons to switch between B2C, C2C, and C2B
document.querySelector('#b2c-nav').addEventListener('click', showB2C);
document.querySelector('#c2c-nav').addEventListener('click', showC2C);
document.querySelector('#c2b-nav').addEventListener('click', showC2B);

// Initially show one of the sections (you can set your default)
showB2C();

