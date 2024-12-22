document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    const menuIcon = mobileNavToggle.querySelector('img');

    // Add background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mobileNavToggle.classList.remove('is-active'); // Changed this line
            }

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Toggle mobile menu
    mobileNavToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        
        if (window.innerWidth <= 768) {
            navLinks.classList.toggle('active');
            mobileNavToggle.classList.toggle('is-active'); // Changed this line
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileNavToggle.classList.remove('is-active'); // Changed this line
        }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileNavToggle.classList.remove('is-active'); // Changed this line
        }
    });

    // Prevent menu from closing when clicking inside it
    navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Arrow Down Animation
    const arrowDown = document.querySelector('.arrow-down');
    
    function animateArrow() {
        arrowDown.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(20px)' },
            { transform: 'translateY(0)' }
        ], {
            duration: 1000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }

    // Start animation when page loads
    if (arrowDown) {
        animateArrow();
    }

    // Optional: Add click event to scroll to next section
    arrowDown.addEventListener('click', () => {
        const nextSection = document.querySelector('.grid');
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});