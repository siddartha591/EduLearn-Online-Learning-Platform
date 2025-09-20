// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
});

// Course enrollment function
function enrollCourse(courseName) {
    const confirmed = confirm(`Enroll in ${courseName}?`);
    if (confirmed) {
        alert(`Successfully enrolled in ${courseName}!`);
    }
}

// Contact form validation
function handleFormSubmission(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const terms = document.getElementById('terms').checked;

    // Simple validation
    if (!name || !email || !message || !terms) {
        alert('Please fill all required fields and agree to terms');
        return;
    }

    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();
}

// Add form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
});
