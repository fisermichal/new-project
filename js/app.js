// Run AOS

AOS.init({
    disable: 'mobile'
});


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


// lightbox


const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');

    images.forEach( image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

lightbox.addEventListener('click', e => {

    if ( e.target !== e.currentTarget ) return;

    lightbox.classList.remove('active');
});
      