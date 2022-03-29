const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

var coll = document.getElementsByClassName("collapsible");
var i;

document.getElementById("wave-container").style.height = height + "px";

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