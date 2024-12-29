const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

// Smooth Scroll for Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // 50px to account for navbar
            behavior: 'smooth'
        });
    });
});

// Form Validation for Contact Form
const contactForm = document.querySelector('.contact-form');
const formBtn = document.querySelector('.form-btn');

contactForm.addEventListener('submit', (e) => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    if (name.value === '' || email.value === '' || message.value === '') {
        e.preventDefault();
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
    }
});

// Scroll Animation Effect
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
});

// Auto Close Mobile Menu After Clicking a Link
const menuLinks = document.querySelectorAll('.menu-list-items a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
    });
}); 
