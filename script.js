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