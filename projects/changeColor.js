let colorOne = "antiquewhite";
let colorTwo = "aqua";
let colorThree = "aquamarine";
let colorFour = "crimson";
let colorFive = "lightgreen";
let colorSix = "deeppink";

var colorArray = [
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
  colorFive,
  colorSix,
];

function changeColor() {
  var randNumber = Math.floor(Math.random() * colorArray.length);

  document.getElementById("box").style.backgroundColor = colorArray[randNumber];

  document.body.style.backgroundColor = colorArray[randNumber];
}
