function toggleMobileMenu() {
    document.getElementById('mainNav').classList.toggle('active');
    const rightNav = document.querySelector('.right-nav');
    if (rightNav) {
        rightNav.classList.toggle('active');
    }
}

function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Close all dropdowns first
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    
    // Open the clicked dropdown
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.add('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }
});


let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(() => moveSlide(1), 5000);
