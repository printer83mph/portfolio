
var title, startPos;

window.onload = function() {
    title = document.getElementById("title");
}

window.addEventListener('scroll', function(e) {
    title.style.transform = "translate(0, " + ( - window.scrollY/2) + "px)";
});