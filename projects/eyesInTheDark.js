var iris = document.querySelectorAll(".iris");

window.addEventListener("mousemove", (e) => {
    e = e || window.event;

//in pixels the position of the mouse
var { pageX, pageY } = e;
var { innerWidth, innerHeight } = window;