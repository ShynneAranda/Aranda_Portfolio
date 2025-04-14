let slidesWrapper = document.querySelector('.slides-wrapper');
let slides = document.querySelectorAll('.slide');

let currentIndex = 1; // Start at index 1 (after cloned first)
let slideWidth;
let isTransitioning = false;

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.classList.add('clone');
lastClone.classList.add('clone');

slidesWrapper.appendChild(firstClone);
slidesWrapper.insertBefore(lastClone, slidesWrapper.firstChild);

// Re-select all slides after cloning
slides = document.querySelectorAll('.slide');

// Center the current slide
function slideToIndex(index, transition = true) {
  slideWidth = slides[0].offsetWidth + 20; // 10px margin each side
  const containerWidth = slidesWrapper.parentElement.offsetWidth;
  const offset = (slideWidth * index) - (containerWidth / 2) + (slideWidth / 2);

  slidesWrapper.style.transition = transition ? 'transform 0.5s ease-in-out' : 'none';
  slidesWrapper.style.transform = `translateX(-${offset}px)`;
}

// Update active class
function updateSlideClasses() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });
}

// Move to next slide
function nextSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex++;
  slideToIndex(currentIndex);
  updateSlideClasses();
}

// Move to previous slide
function prevSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex--;
  slideToIndex(currentIndex);
  updateSlideClasses();
}

// Transition end logic to reset for infinite loop
slidesWrapper.addEventListener('transitionend', () => {
  if (slides[currentIndex].classList.contains('clone')) {
    slidesWrapper.style.transition = 'none';

    if (currentIndex === slides.length - 1) {
      currentIndex = 1; // Jump to real first
    } else if (currentIndex === 0) {
      currentIndex = slides.length - 2; // Jump to real last
    }

    slideToIndex(currentIndex, false);
    updateSlideClasses();
  }

  isTransitioning = false;
});

// Handle resize
window.addEventListener('resize', () => {
  slideToIndex(currentIndex, false);
});

// Initial setup
window.addEventListener('load', () => {
  slideToIndex(currentIndex, false);
  updateSlideClasses();
});
// Modal and Image Elements
const modal = document.getElementById('imageModal');
const fullImage = document.getElementById('fullImage');
const closeModal = document.getElementById('closeModal');
const images = document.querySelectorAll('.slide img'); // Get all images in slides

// Function to open modal with the full image
images.forEach((img) => {
  img.addEventListener('click', () => {
    fullImage.src = img.src; // Set full image source to the clicked image's source
    modal.style.display = 'flex'; // Show the modal
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
});

// Close the modal if clicked outside the image
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'; // Hide the modal if clicked outside the image
  }
});
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

window.onload = function() {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = 1; // You can adjust this number
  
    // Function to create stars dynamically
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Randomly decide the size of the star
      const sizeClass = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
      star.classList.add(sizeClass);
  
      // Randomly position the star
      const x = Math.random() * 100; // Positioning on the x-axis (percentage)
      const y = Math.random() * 100; // Positioning on the y-axis (percentage)
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
  
      // Optional: Add a slight blur effect for some stars
      if (Math.random() < 0.3) {
        star.classList.add('blur');
      }
  
      starsContainer.appendChild(star);
    }
  };
  