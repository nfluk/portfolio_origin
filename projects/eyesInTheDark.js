var iris = document.querySelectorAll(".iris");

window.addEventListener("mousemove", (e) => {
  e = e || window.event;

  //in pixels the position of the mouse
  var { pageX, pageY } = e;
  var { innerWidth, innerHeight } = window;

  //mouse position in % left
  var left = (pageX / innerWidth) * 100;

  //mouse position in % left
  var top = (pageY / innerHeight) * 100;

  //keep eyes from getting too far to sides & up and down
  left = left < 20 ? 20 : left;
  left = left > 80 ? 80 : left;
  top = top < 20 ? 20 : top;
  top = top > 80 ? 80 : top;

  //moving the eye & behavior when mouse between the eyes
  iris.forEach((f) => {
    f.style.left = `${left > 60 && left < 40 ? 40 : left}%`;
    f.style.top = `${top > 60 && top < 40 ? 40 : top}%`;
  });
});
