document.addEventListener("DOMContentLoaded", function () {
    // === Fade in sections on scroll ===
    const elementsToObserve = document.querySelectorAll(".meet-container, .about-me, .education, .experiences, .skills-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    elementsToObserve.forEach(el => observer.observe(el));

    // === Star background animation ===
    const starsContainer = document.querySelector(".stars-container");

    for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const sizes = ["small", "medium", "large"];
        const blur = Math.random() > 0.5 ? " blur" : "";
        star.className += ` ${sizes[Math.floor(Math.random() * sizes.length)]}${blur}`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        starsContainer.appendChild(star);
    }

    // === Hamburger menu toggle ===
    const hamburger = document.querySelector(".hamburger");
    const sideMenu = document.querySelector(".side-menu");

    hamburger.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent click from bubbling to document
        sideMenu.classList.toggle("open");
    });

    document.querySelectorAll(".side-menu a").forEach(link => {
        link.addEventListener("click", () => {
            sideMenu.classList.remove("open");
        });
    });

    // === Close sidebar if clicked outside ===
    document.addEventListener("click", function (e) {
        if (
            sideMenu.classList.contains("open") &&
            !sideMenu.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            sideMenu.classList.remove("open");
        }
    });

    document.addEventListener("touchstart", function (e) {
        if (
            sideMenu.classList.contains("open") &&
            !sideMenu.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            sideMenu.classList.remove("open");
        }
    });

    // === Top bar hover behavior (updated version) ===
    const topBar = document.querySelector('.top-bar');
    const hoverZone = document.querySelector('.top-hover-zone');

    let hoverTimeout;

    hoverZone.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        topBar.style.top = '0';
    });

    hoverZone.addEventListener('mouseleave', () => {
        hoverTimeout = setTimeout(() => {
            if (!isHoveringTopBar) {
                topBar.style.top = '-60px';
            }
        }, 300);
    });

    topBar.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        isHoveringTopBar = true;
    });

    topBar.addEventListener('mouseleave', () => {
        isHoveringTopBar = false;
        hoverTimeout = setTimeout(() => {
            if (!isHoveringTopBar) {
                topBar.style.top = '-60px';
            }
        }, 300);
    });

    // === Close sidebar when "back" is clicked ===
    const backLink = document.getElementById('back');
    if (backLink) {
        backLink.addEventListener('click', function () {
            sideMenu.classList.remove('open');
        });
    }
});

// === Info section fade in ===
window.addEventListener('scroll', function () {
    const infoSection = document.querySelector('.info');
    if (!infoSection) return;
    const infoPosition = infoSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (infoPosition < screenHeight - 100) {
        infoSection.style.opacity = 1;
    } else {
        infoSection.style.opacity = 0;
    }
});

// === Contacts section animation ===
window.addEventListener('scroll', function () {
    const contactsSection = document.querySelector('.contacts');
    if (!contactsSection) return;
    const contactsPosition = contactsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (contactsPosition < screenHeight - 100) {
        contactsSection.classList.add('show');
    }
});

// === Top bar scroll behavior ===
let lastScrollTop = 0;
let isHoveringTopBar = false;

window.addEventListener("scroll", function () {
    if (isHoveringTopBar) return;

    const topBar = document.querySelector('.top-bar');
    if (!topBar) return;

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        topBar.style.top = '-60px';
    } else {
        topBar.style.top = '0';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


  const observerOptions = {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  }, observerOptions);

  // Observe elements with .link and .contact-row
  const links = document.querySelectorAll('.link');
  const contactRows = document.querySelectorAll('.contact-row');
  
  links.forEach(link => observer.observe(link));
  contactRows.forEach(contactRow => observer.observe(contactRow));

  
function scrollDown() {
    window.scrollBy({
        top: 800, // change this number to scroll more or less
        left: 0,
        behavior: 'smooth'
    });
}