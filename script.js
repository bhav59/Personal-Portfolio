
/*------------------Toggle icon navbar-----------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
      menuIcon.classList.toggle('fa-xmark');
      navbar.classList.toggle('active')
}

/*--------------------------Scroll Section active list------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach.apply( links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

        });
      };
    });  
  
    /*--------------------------sticky navbar----------------------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky',  window.scrollY > 100);

    /*--------------------remove toggle icon and and navbar----------------------*/

     menuIcon.classList.remove('fa-xmark');
     navbar.classList.remove('active');


};
 /* --------------------------Scroll reveal----------------------*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'button'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*--------------------------------DOWNLOAD RESUME-------------------------------------*/

document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "RESUME.pdf"; // Ensure the file is in the same directory as your HTML file
    link.download = "RESUME.pdf"; // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



