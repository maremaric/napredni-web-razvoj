// JavaScript
const blok = document.getElementsByClassName("item");

function getRandomColor() {
  const random = Math.random() * 256;
  const randomNumber = Math.floor(random);
  return randomNumber;
}

function createBgColor() {
  let bgColor = [];
  for (let i = 0; i < 3; i++) {
    bgColor[i] = getRandomColor();
  }

  return `rgb(${bgColor[0]},${bgColor[1]},${bgColor[2]})`;
}

function initSetColor() {
  for (let i = 0; i < blok.length; i++) {
    blok[i].addEventListener("click", changeColor);
    blok[i].style.backgroundColor = createBgColor();
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = createBgColor();
}

initSetColor();
