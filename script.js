const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const contactForm = document.getElementById('contact-form');

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

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