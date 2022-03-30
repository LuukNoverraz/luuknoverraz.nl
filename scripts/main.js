const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

var coll = document.getElementsByClassName("collapsible");
var i;

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

// Change wave container height based on screen size
document.getElementById("wave-container").style.height = height + "px";

// Open collapsible content and close/open on click
for (i = 0; i < coll.length; i++) {
    coll[i].classList.toggle("active");
    coll[i].nextElementSibling.style.maxHeight = coll[i].nextElementSibling.scrollHeight + "px";
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    });
}

// Did scroll if you scroll
// Makes sense right
$(window).scroll(function(event){
    didScroll = true;
});

// Check for scroll every 250 milliseconds
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure user scrolls more than delta variable
    if(Math.abs(lastScrollTop - st) <= delta) {
        return;
    }

    // If user scrolled down and is past the navbar, add class .nav-up (so you don't see behind the nav bar)
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}