// JavaScript for smooth scrolling and other interactive features
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const elements = document.querySelectorAll('.section');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });
});