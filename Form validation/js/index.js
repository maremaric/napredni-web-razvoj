// JavaScript

const komentar = document.getElementById("komentar");
const current = document.getElementById("current");
const max = document.getElementById("max");
const checkbox = document.getElementById("terms");
const slika = document.getElementsByClassName("slika1")[0];
const closeBtn = document.getElementsByClassName("close");

let MAX_CHAR = 10;

komentar.addEventListener("keyup", countWords);
max.innerHTML = MAX_CHAR;

// dodeljivanje atributa maxlength
komentar.setAttribute("maxlength", MAX_CHAR);

function countWords(event) {
  let len = event.srcElement.value.length;
  current.innerHTML = len;
}

// checkbox event listener
checkbox.addEventListener("change", event => {
  if (event.target.checked) {
    alert("Hvala na saradnji!");
  }
});

slika.addEventListener("click", openModal);

function openModal(event) {
  console.log(event);
  let id = event.target.getAttribute("data-modal");
  console.log(id);
  let modal = document.getElementById(id);
  modal.style.display = "block";
}

function closeModal(event) {
  let element = event.target.closest(".modal");
  element.style.display = "none";
}

console.log(closeBtn);

let lenCloseBtn = closeBtn.length;
for (let i = 0; i < lenCloseBtn; i++) {
  closeBtn[i].addEventListener("click", closeModal);
}
