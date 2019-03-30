// JavaScript

let text = "Lorem ipsum dolor sit amet dolor.";

// duzina stringa
console.log(text.length);
// pozicija stringa
console.log(text.indexOf("dolor", 10));
// pozicija poslednjeg karaktera
console.log(text.lastIndexOf("dolor", 20));
// search metoda
console.log(text.search("dolor"));
// slice metoda
console.log(text.slice(-10, -7));
// substring metoda
console.log(text.substring(0, 10));
// replace
console.log(text.replace(/DOLOR/gi, "dolor2"));
// velika slova
console.log(text.toLocaleUpperCase());
// mala slova
console.log(text.toLocaleLowerCase());
// uklanjanje blanko na pocetku i na kraju stringa
console.error(text.trim());
// vrednost karaktera na poziciji
console.log(text.charAt(12));
// vraca broj koda iz ASCII tabele
console.log(text.charCodeAt("o"));
// property []
console.log(text[0]);
// split convert string to Array
console.log(text.split(" "));
console.clear();

// Metode za rad nad brojevima

let number = "1234.567";
let number_string = number.toString();
// konvertuje broja u string
// console.log( 'type', typeof number_string);

// pretvaranje varijabli u broj
console.log(Number(new Date("01-01-1988")));
console.log(parseFloat(number));

// Math metoda

let piValue = Math.PI;
console.log(piValue);

console.log(Math.round(3.2));

console.log(Math.pow(8, 4));

console.log(Math.sqrt(64));

console.log(Math.abs(-52.3));

console.log(Math.ceil(3.9));

console.log(Math.floor(3.9));

console.log(Math.random());

function getRandnomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandnomNumber(1, 50));

console.clear();
let ime = "Marko";
let newArray = ["NewElement", "NewVariable"];

let nizReci = text.split(" ");

// console.log(nizReci.join(" "));
console.log(nizReci);

console.log(nizReci.concat(newArray));

// petlja za pronalazenje < broja ili >

let brojevi = [];

for (let i = 1; i <= 20; i++) {
  brojevi.push(getRandnomNumber(1, 200));
}

function getMinValue() {
  let len = brojevi.length;
  let max = -Infinity;

  while (len--) {
    if (brojevi[len] > max) {
      max = brojevi[len];
    }
  }
  return max;
}

console.log("test", getMinValue());

console.log(brojevi);
