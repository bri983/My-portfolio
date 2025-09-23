        const hamburger = document.getElementById('hamburger-menu');
        const navLinks = document.getElementById('nav-links');
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });

        var typed = new Typed("#typed-text", {
        strings: ["a Web Developer", "a Designer", "a Freelancer", "a Creative Mind"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

        const themeToggle = document.getElementById('theme-toggle');
    let dark = false;
    themeToggle.onclick = function () {
        dark = !dark;
        document.body.classList.toggle('dark-mode', dark);
        themeToggle.textContent = dark ? '☀️' : '🌙';
    };