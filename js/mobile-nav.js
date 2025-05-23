document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.navbar-collapse');
    const body = document.querySelector('body');
    const navLinksUl = navLinks.querySelector('ul');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('show');
        // Remove no-scroll class to enable scrolling
        body.classList.remove('no-scroll');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('show')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('show');
            // Remove no-scroll class to enable scrolling
            body.classList.remove('no-scroll');
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    navLinksUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('show');
            body.classList.remove('no-scroll');
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        });
    });
});