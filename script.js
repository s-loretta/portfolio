new Typed(".auto-typing", {
      strings: ["Loretta Samba", "Développeuse Web", "à la recherche d'un stage", "à la recherche d'une alternance"],
      typeSpeed: 100,
      backSpeed: 90,
      loop: true,
      backDelay: 1000,
    });

    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });