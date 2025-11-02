const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const contactForm = document.getElementById('contact-form');

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
} else {
    themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
    console.log('Theme toggle clicked');
    const currentTheme = body.getAttribute('data-theme');
    console.log('Current theme:', currentTheme);
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
        console.log('Switched to light mode');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
        console.log('Switched to dark mode');
    }
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const emailAddr = '2fixus' + '@' + 'gmail.com';
        const smsAddr = '2066515404';
        const mailto = 'mailto:' + emailAddr + '?subject=New Contact&body=' + encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        window.location = mailto;
        const sms = 'sms:' + smsAddr + '?body=' + encodeURIComponent(`New contact: ${name} - ${email} - ${message}`);
        window.open(sms, '_blank');
        contactForm.reset();
    });
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailAddr = '2fixus' + '@' + 'gmail.com';
    const smsAddr = '2066515404';
    const mailto = 'mailto:' + emailAddr + '?subject=New Contact&body=' + encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location = mailto;
    const sms = 'sms:' + smsAddr + '?body=' + encodeURIComponent(`New contact: ${name} - ${email} - ${message}`);
    window.open(sms, '_blank');
    contactForm.reset();
});