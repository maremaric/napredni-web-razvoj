// JavaScript

// console.log(document.getElementById("prvi"));

// let className = document.getElementsByClassName("drugi");

// console.log(className);

// for (let i = 0; i < className.lenght; i++) {
//   console.log(className[i]);
// }

// console.clear();

// console.log(document.getElementsByTagName("p"));

// console.log(document.querySelectorAll(".drugi"));

// let list = document.querySelector(".list");
// let listChildrenAll = document.querySelectorAll("li");
// let listChildren = list.children;

// for (let i = 0; i < listChildren.length; i++) {
//   listChildren[i].style.color = "magenta";
// }

// //  upwards

// let child = document.querySelector("li");
// let paremt = child.parentElement;

// let anchor = document.querySelector("a");
// console.log(anchor.closest(".list"));

// sideways

// let sibling = document.querySelector("a");
// let parentSibling = sibling.parentElement;
// let nextSibling = parentSibling.nextElementSibling;
// let previusSibling = nextSibling.previousElementSibling;

// console.log(parentSibling);
// console.log(nextSibling);
// console.log(previusSibling);

// zadatak

// let example = document.querySelector(".list-example");
// let link1 = example.querySelector("a");

// link1.style.color = "green";

// let li = link1.closest("li");
// let liParent = li.parentElement;
// let test3 = liParent.querySelector(".test-3");
// test3.style.color = "blue";
// test3.style.fontSize = "2rem";

// nnnnnnn

// let lista = document.getElementsByClassName("list")[0];

// let item = document.createElement("li");
// let text = document.createTextNode("Ovo je novi element");
// let newItem = item.appendChild(text);
// lista.appendChild(item);
// let child = document.querySelectorAll("li")[2];

// lista.insertBefore(newItem, child);

// lista.removeChild(document.querySelector("li"));

// Oneclick

function zameniBoju(el) {
  el.style.color = "green";
}

function vratiBoju(el) {
  el.style.color = "blue";
}
