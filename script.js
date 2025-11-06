const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const contactForm = document.getElementById('contact-form');

// Sticky header and active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const nav_links = document.querySelectorAll('#nav-links a');

window.addEventListener('scroll', () => {
    // Sticky header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Active section highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    nav_links.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').substring(1) === current) {
            a.classList.add('active');
        }
    });
});

// Hamburger menu
const hamburgerButton = document.getElementById('hamburger-button');
const navLinks = document.getElementById('nav-links');

if (hamburgerButton) {
    hamburgerButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerButton.classList.toggle('active');
    });
}

// On-scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
} else {
    themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Obfuscate contact information
document.addEventListener('DOMContentLoaded', function() {
    const phoneElement = document.querySelector('.phone-obfuscated');
    const emailElement = document.querySelector('.email-obfuscated');
    
    if (phoneElement) {
        const phone = '+1 (206) 651-5404';
        phoneElement.innerHTML = phone.split('').map(char => 
            `<span style="display:inline-block;user-select:none;">${char}</span>`
        ).join('');
        
        phoneElement.style.cursor = 'pointer';
        phoneElement.title = 'Click to copy phone number';
        phoneElement.addEventListener('click', function() {
            navigator.clipboard.writeText(phone.replace(/[^\d]/g, ''));
            this.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
    }
    
    if (emailElement) {
        const email = '2fixus@gmail.com';
        const parts = email.split('@');
        emailElement.innerHTML = `${parts[0]}<span style="display:none;">@</span><span style="display:inline-block;user-select:none;">[at]</span>${parts[1]}`;
        
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Click to copy email address';
        emailElement.addEventListener('click', function() {
            navigator.clipboard.writeText(email);
            this.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
    }
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const emailAddr = '2fixus' + '@' + 'gmail.com';
        const smsAddr = '2066515404';
        const mailto = 'mailto:' + emailAddr + '?subject=New Contact&body=' + encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        window.location = mailto;
        const sms = 'sms:' + smsAddr + '?body=' + encodeURIComponent(`New contact: ${name} - ${email} - ${message}`);
        window.open(sms, '_blank');
        contactForm.reset();
    });
}