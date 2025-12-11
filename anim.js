// Animated Counter
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const targetText = counter.getAttribute('data-target');
        const target = parseInt(targetText);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = targetText;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// Toggle Contact Form
function toggleContactForm() {
    const form = document.getElementById('contactForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

// Start animations when page loads
window.addEventListener('load', () => {
    setTimeout(animateCounters, 500);
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
        }
    });
});

document.querySelectorAll('.feature-card, .stat-card').forEach(el => {
    observer.observe(el);
});