// back.js - Smooth scroll for navigation

document.addEventListener('DOMContentLoaded', function() {
    // Polyfill for smooth scroll if not supported
    function smoothScrollTo(element) {
        if ('scrollBehavior' in document.documentElement.style) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            const top = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo(0, top);
        }
    }
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                setTimeout(() => smoothScrollTo(target), 0);
            }
        });
    });
});
