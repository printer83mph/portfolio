
var splash, startPos;

window.onload = function() {
    splash = document.getElementById("splash");
}

window.addEventListener('scroll', function(e) {
    splash.style.transform = "translate(0, " + ( - window.scrollY * .4 ) + "px)";
});