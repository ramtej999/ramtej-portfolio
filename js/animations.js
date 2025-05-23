// Parallax Effect
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Text Split Animation
const splitText = (element) => {
    const text = element.textContent;
    const chars = text.split('');
    element.textContent = '';
    
    chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.05}s`;
        element.appendChild(span);
    });
};

document.querySelectorAll('.split-text').forEach(splitText);

// Mouse Move Effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        
        const angleX = (mouseY - cardY) / 30;
        const angleY = (mouseX - cardX) / -30;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
});

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// Animated Counter
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 30);
};

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
});

document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// Smooth Reveal Animation (removed duplicate declaration - already defined in main.js)

// Typing Animation
const typeText = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Initialize typing animations
document.querySelectorAll('.typing').forEach(element => {
    const text = element.dataset.text;
    if (text) {
        typeText(element, text);
    }
});

// Hover Tilt Effect
const cards = document.querySelectorAll('.tilt-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Animated Gradient Background
const gradientBackground = document.querySelector('.gradient-bg');
if (gradientBackground) {
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 1) % 360;
        gradientBackground.style.background = `linear-gradient(${hue}deg, var(--gradient-start), var(--gradient-end))`;
    }, 50);
}

// Scroll-triggered animations
const scrollAnimations = () => {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', scrollAnimations);
window.addEventListener('load', scrollAnimations);

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add animation classes to elements
document.querySelectorAll('.fade-in').forEach(element => {
    element.classList.add('reveal');
});

document.querySelectorAll('.slide-in').forEach(element => {
    element.classList.add('reveal');
});

document.querySelectorAll('.scale-in').forEach(element => {
    element.classList.add('reveal');
});