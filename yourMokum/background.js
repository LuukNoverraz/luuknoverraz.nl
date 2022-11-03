const images = ["images/bg/000.jpg", "images/bg/001.jpg", "images/bg/002.jpg", "images/bg/003.jpg", "images/bg/004.jpg"]


document.getElementsByClassName("landing")[0].style.background = "url(" + images[Math.floor(Math.random() * images.length)] + ") center";