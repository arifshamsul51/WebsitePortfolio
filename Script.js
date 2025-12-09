// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Feature 1 Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- Feature 2 Dark/Light Mode Toggle ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            if (isDark) {
                body.setAttribute('data-theme', 'light');
                themeBtn.textContent = '🌙 Mode';
            } else {
                body.setAttribute('data-theme', 'dark');
                themeBtn.textContent = '☀️ Mode';
            }
        });
    }

    // --- Feature 3 Dynamic Greeting (Time based) ---
    const greetingHeader = document.getElementById('greeting');
    const hour = new Date().getHours();
    let welcomeMsg = 'Welcome';

    if (hour < 12) welcomeMsg = 'Good Morning';
    else if (hour < 18) welcomeMsg = 'Good Afternoon';
    else welcomeMsg = 'Good Evening';

    if(greetingHeader) greetingHeader.innerText = `${welcomeMsg}, Client!`;


    // --- Feature 4 Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            nav.classList.remove('active'); // Close mobile menu if open
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Feature 5 Back To Top Button ---
    const backToTopBtn = document.getElementById('backToTop');
    
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    if(backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // --- Feature 6 Dynamic Copyright Year ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Feature 7 Form Validation ---
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const emailError = document.getElementById('emailError');
            const msgError = document.getElementById('msgError');

            // Reset errors
            emailError.textContent = '';
            msgError.textContent = '';

            if(!email.value.includes('@') || !email.value.includes('.')) {
                emailError.textContent = 'Please enter a valid email.';
                isValid = false;
            }

            if(message.value.trim().length < 5) {
                msgError.textContent = 'Message must be at least 5 characters.';
                isValid = false;
            }

            if(isValid) {
                feedback.textContent = 'Thank you! Message sent (simulated).';
                feedback.style.color = 'green';
                form.reset();
            } else {
                feedback.textContent = 'Please fix errors above.';
                feedback.style.color = 'red';
            }
        });
    }
});