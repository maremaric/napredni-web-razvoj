// let x = document.getElementById("text1");

// let classSelect = document.getElementsByClassName("text");
// let tagSelect = document.getElementsByTagName("DIV");

// let link = document.getElementById("link1");

// console.log(link.getAttribute("href"));
// console.log(link.setAttribute("href", "http://www.google.com"));

// console.log(x.getAttribute("id"));

// console.log(tagSelect[0].style.color);

// for (let i = 1; i <= tagSelect.length - 1; i++) {
//   console.log(tagSelect[i]);
//   tagSelect[i].style.color = "green";
// }

// let selection = document.getElementsByTagName("LI");

// console.log((selection[0].parentElement.style.listStyleType = "none"));

// for (let i = 0; i <= selection.length - 1; i++) {
//   setStyle(selection[i]);
// }

// function setStyle(element) {
//   element.style.color = "blue";
//   element.style.fontSize = "2rem";
//   element.style.border = "1px solid blue";
// }

// console.log(window.localStorage);
// console.log(window.defaultStatus);

// alert("Upozorenje");
// confirm("Potvrdi");
// prompt("Potvrdi");

// let vrednost = 0;
// let brojac = setInterval(inc, 10);

// function inc() {
//   vrednost++;
//   if (10 <= vrednost) clearInterval(brojac);
//   console.log(vrednost);
// }

// vrednost za input polja

let ime = document.getElementById("ime");
let prezime = document.getElementById("prezime");

let vrednostIme = document.getElementById("vrednostIme");
let vrednostPrezime = document.getElementById("vrednostPrezime");

function setValue(element) {
  console.log(element.getAttribute("name"));

  if (element.getAttribute("name") == "ime")
    vrednostIme.innerHTML = element.value;
  else if (element.getAttribute("name") == "prezime")
    vrednostPrezime.innerHTML = element.value;
}
