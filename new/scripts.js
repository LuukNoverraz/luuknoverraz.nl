// Get a reference to the <a> element
const index = document.getElementById('index');
const about = document.getElementById('header-about');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the scroll position is greater than 500px
    if (scrollPosition > 1200) {
        // If the user has scrolled past 500px, change the color to black
        index.style.color = 'var(--black)';
        about.style.color = 'var(--red)';
    } else {
        // If the user has not scrolled past 500px, keep the color red
        index.style.color = 'var(--red)';
        about.style.color = 'var(--black)';
    }
});