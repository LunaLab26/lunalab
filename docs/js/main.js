// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Download Button Handlers =====
document.querySelectorAll('.btn-download:not(.disabled)').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const platform = this.closest('.download-card').querySelector('h3').textContent;
        console.log(`Download for ${platform} clicked`);
        // Replace with actual download URLs when ready
        // Example: window.location.href = 'https://github.com/LunaLab26/lunalab/releases/download/...';
    });
});

// ===== Navbar Scroll Effect =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    }
    
    lastScrollTop = scrollTop;
});

// ===== Intersection Observer for Fade-in Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and FAQ items
document.querySelectorAll('.feature-card, .faq-item, .download-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===== Mobile Menu Toggle (for future implementation) =====
// Add mobile menu functionality if navbar becomes more complex
