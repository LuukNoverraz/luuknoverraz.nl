// Get a reference to the <a> element
const index = document.getElementById('header-index');
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

function scrollToSection(sectionId, offset = 0) {
    // Calculate the target scroll position by considering the header's height
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetSection = document.querySelector(sectionId);
    const targetPosition = targetSection.offsetTop - headerHeight - offset;
  
    // Scroll to the target position with smooth behavior
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }

// Get the current year
const currentYear = new Date().getFullYear();

// Find the copyright element by its class
const copyrightElement = document.querySelector('.copyright');

// Update the text content with the current year
copyrightElement.textContent = copyrightElement.textContent.replace('20XX', currentYear);

// Get the current date
const currentDate = new Date();

// Determine the year value based on the current date and condition
let yearValue = 2; // Default value

if (currentDate > new Date('2024-09-30')) {
    yearValue = 3;
}

if (currentDate > new Date('2025-09-30')) {
    yearValue = 4;
}

// Update the content of the span with the calculated year value
document.getElementById('studyYear').textContent = `${yearValue}e`;

const projects = document.querySelectorAll('.project');
const additionalContent = document.querySelector('.additional-content');
const closeButton = document.querySelector('.close-button');

const gameProject = document.querySelector('.game-project');
const webProject = document.querySelector('.web-project');
const videoProject = document.querySelector('.video-project');

// Initially hide the project descriptions
gameProject.style.display = 'none';
webProject.style.display = 'none';
videoProject.style.display = 'none';

projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        // Expand the clicked project
        project.style.flex = '2';
        project.style.borderRadius = '5px';
        project.style.margin = '0';

        // Hide the other projects
        projects.forEach((p, i) => {
            if (i !== index) {
                p.style.display = 'none'; // Hide the other projects
            }
        });

        // Show the additional content
        additionalContent.style.display = 'block';

        // Show the corresponding project description
        if (index === 0) {
            gameProject.style.display = 'block';
            webProject.style.display = 'none';
            videoProject.style.display = 'none';
        } else if (index === 1) {
            gameProject.style.display = 'none';
            webProject.style.display = 'block';
            videoProject.style.display = 'none';
        } else if (index === 2) {
            gameProject.style.display = 'none';
            webProject.style.display = 'none';
            videoProject.style.display = 'block';
        }
  });
});

closeButton.addEventListener('click', () => {
    // Reset the projects and show them
    projects.forEach((project) => {
        project.style.flex = '1';
        project.style.borderRadius = ''; // Revert border radius
        project.style.margin = ''; // Revert margins
        project.style.display = 'flex'; // Show the projects
    });

    // Hide the additional content
    additionalContent.style.display = 'none';

    // Hide the project descriptions when closing
    gameProject.style.display = 'none';
    webProject.style.display = 'none';
    videoProject.style.display = 'none';
});
