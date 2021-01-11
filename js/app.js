// Run AOS

AOS.init();


// Dropdown menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".dropdown-menu");
const links = document.querySelectorAll(".dropdown-menu li");

hamburger.addEventListener('click', (event) => {    
    navLinks.classList.toggle("open");
    links.forEach( link => {
        link.classList.toggle("fade");
    });
    event.preventDefault();
});
      