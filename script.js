// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Typing Effect for the Header
const textElement = document.getElementById('typing-text');
const texts = ["Luffy Dev.", "a Software Engineer.", "a React Native Developer."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait before starting next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();

// 3. Simple Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if(name === '' || email === '') {
        alert('Please fill in all fields.');
    } else {
        alert(`Thank you, ${name}! I will contact you shortly at ${email}.`);
        this.reset();
    }
});
