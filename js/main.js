// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Certificate PDF Modal View
const certModal = document.getElementById('certificateModal');
const certPdfViewer = document.getElementById('certificatePdfViewer');
const certCloseModal = document.querySelector('.close-modal');

document.querySelectorAll('.view-cert').forEach(button => {
    button.addEventListener('click', (e) => {
        const pdfUrl = button.getAttribute('data-pdf');
        if (pdfUrl) {
            window.open(pdfUrl, '_blank');
        }
    });
});

if (certCloseModal) {
    certCloseModal.addEventListener('click', () => {
        certModal.classList.remove('active');
        certPdfViewer.innerHTML = '';
    });
}

if (certModal) {
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            certModal.classList.remove('active');
            certPdfViewer.innerHTML = '';
        }
    });
}

// Project Demo Modal
document.querySelectorAll('.view-demo').forEach(button => {
    button.addEventListener('click', () => {
        const projectTitle = button.closest('.project-card').querySelector('h3').textContent;
        certificateContent.innerHTML = `<h3>${projectTitle} Demo</h3><p>Project demo content will be displayed here.</p>`;
        modal.style.display = 'block';
    });
});





// Chatbot Icon Animation
const chatbotIcon = document.querySelector('.chatbot-icon');
/*
chatbotIcon.addEventListener('click', () => {
    // Placeholder for chatbot functionality
    alert('Chatbot feature coming soon!');
});*/

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('hover-lift');
});

// Add hover effects to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.classList.add('hover-scale');
});

// Add hover effects to certification cards
document.querySelectorAll('.certification-card').forEach(card => {
    card.classList.add('hover-glow');
});

// Initialize typing animation
const typingText = document.querySelector('.typing-text');
if (typingText) {
    typingText.style.width = '0';
    setTimeout(() => {
        typingText.style.width = '100%';
    }, 100);
}

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
};

createScrollProgress();

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

// Add intersection observer for lazy loading
const lazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

lazyLoad();