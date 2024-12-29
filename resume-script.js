document.querySelector('.back-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const targetUrl = e.target.getAttribute('href');
    window.location.href = targetUrl; // Navigate to Portfolio Page
});

// Scroll Animation for Section Titles
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 1.3;

    sections.forEach((section) => {
        if (section.offsetTop < scrollPosition) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial Animation Setup
sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
});
