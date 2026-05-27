// SCROLL SUAVE

const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id = this.getAttribute('href');

        const section = document.querySelector(id);

        window.scrollTo({

            top: section.offsetTop - 70,
            behavior: 'smooth'

        });

    });

});


// ANIMAÇÃO AO ROLAR

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    const trigger = window.innerHeight / 1.2;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';

        }

    });

});


// ESTADO INICIAL

sections.forEach(section => {

    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = '0.8s';

});