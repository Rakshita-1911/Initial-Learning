// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu on link click (if open)
    if(navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Learn More button scrolls to About section
document.getElementById('learnMoreBtn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission simulation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Simple form validation could be added here
  formMessage.style.color = 'green';
  formMessage.textContent = 'Thank you for contacting us, we will get back to you soon!';
  contactForm.reset();
});
