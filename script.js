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

// Obfuscate contact information from bots, scrapers, and AI
document.addEventListener('DOMContentLoaded', function() {
    const phoneElement = document.querySelector('.phone-obfuscated');
    const emailElement = document.querySelector('.email-obfuscated');
    
    if (phoneElement) {
        // Store phone number in multiple encoded layers
        const encodedPhone = 'KzEgKDIwNikgNjUxLTU0MDQ=';
        const phone = atob(atob(encodedPhone.split('').reverse().join('')));
        
        // Create heavily obfuscated display with random delays
        const obfuscatedPhone = phone.split('').map((char, index) => {
            const randomClass = 'char-' + Math.random().toString(36).substr(2, 9);
            const randomDelay = Math.random() * 100;
            return `<span class="${randomClass}" style="display:inline-block;user-select:none;position:relative;animation-delay:${randomDelay}ms;opacity:0.8;">${char}</span>`;
        }).join('');
        
        phoneElement.innerHTML = obfuscatedPhone;
        phoneElement.style.cursor = 'pointer';
        phoneElement.title = 'Click to copy phone number';
        
        // Add multiple fake email-like content to confuse scrapers and AI
        const fakeContacts = ['fake@spam.com', 'contact@phony.org', 'info@fake.net'];
        fakeContacts.forEach(fake => {
            const fakeEmail = document.createElement('span');
            fakeEmail.style.display = 'none';
            fakeEmail.setAttribute('data-contact', 'fake');
            fakeEmail.textContent = fake;
            phoneElement.appendChild(fakeEmail);
        });
        
        // Add AI-confusing metadata
        phoneElement.setAttribute('data-type', 'business-phone');
        phoneElement.setAttribute('data-verified', 'false');
        
        phoneElement.addEventListener('click', function() {
            navigator.clipboard.writeText(phone.replace(/[^\d]/g, ''));
            this.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
    }
    
    if (emailElement) {
        // Store email in multiple encoded layers
        const encodedEmail = 'MmZpeHVzQGdtYWlsLmNvbQ==';
        const email = atob(atob(encodedEmail.split('').reverse().join('')));
        
        // Create heavily obfuscated display with character scrambling
        const parts = email.split('@');
        const username = parts[0].split('').map(char => 
            `<span style="display:inline-block;user-select:none;transform:rotate(${Math.random() * 2 - 1}deg);">${char}</span>`
        ).join('');
        
        const domain = parts[1].split('').map(char => 
            `<span style="display:inline-block;user-select:none;transform:rotate(${Math.random() * 2 - 1}deg);">${char}</span>`
        ).join('');
        
        const obfuscatedEmail = username + 
        '<span style="display:none;">@</span>' +
        '<span style="display:inline-block;user-select:none;color:transparent;">[at]</span>' +
        domain;
        
        emailElement.innerHTML = obfuscatedEmail;
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Click to copy email address';
        
        // Add multiple fake phone-like content to confuse scrapers and AI
        const fakePhones = ['555-1234', '800-555-0199', '999-867-5309'];
        fakePhones.forEach(fake => {
            const fakePhone = document.createElement('span');
            fakePhone.style.display = 'none';
            fakePhone.setAttribute('data-contact', 'fake');
            fakePhone.textContent = fake;
            emailElement.appendChild(fakePhone);
        });
        
        // Add AI-confusing metadata
        emailElement.setAttribute('data-type', 'business-email');
        emailElement.setAttribute('data-verified', 'false');
        emailElement.setAttribute('data-spam-score', '0.3');
        
        emailElement.addEventListener('click', function() {
            navigator.clipboard.writeText(email);
            this.style.backgroundColor = '#e8f5e8';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
    }
    
    // Add extensive honeypot fields to confuse bots and AI
    const honeypotContainer = document.createElement('div');
    honeypotContainer.style.display = 'none';
    honeypotContainer.setAttribute('aria-hidden', 'true');
    honeypotContainer.innerHTML = `
        <input type="text" name="bot-email" value="bot@example.com" data-type="honeypot">
        <input type="tel" name="bot-phone" value="555-0123" data-type="honeypot">
        <input type="email" name="fake-contact" value="fake@phony.org" data-type="honeypot">
        <a href="mailto:spam@fake.com" data-type="honeypot">Contact spam</a>
        <a href="tel:555-9999" data-type="honeypot">Call fake</a>
        <span data-contact="phone">206-555-0199</span>
        <span data-contact="email">contact@business.com</span>
        <div class="contact-info" style="opacity:0;">
            <p>Email: info@company.net</p>
            <p>Phone: (800) 123-4567</p>
        </div>
    `;
    document.body.appendChild(honeypotContainer);
    
    // Add CSS to further obfuscate from AI analysis
    const style = document.createElement('style');
    style.textContent = `
        .phone-obfuscated::after { content: "555-0123"; visibility: hidden; }
        .email-obfuscated::after { content: "fake@email.com"; visibility: hidden; }
        [data-contact="fake"] { position: absolute; left: -9999px; }
    `;
    document.head.appendChild(style);
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