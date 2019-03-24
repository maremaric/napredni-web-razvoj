// napisati js funkciju koja broj ispisuje u obrnutom smeru

// function okreniBr(broj) {
//   let brojStr = broj + "";
//   //   console.log(typeof brojStr, brojStr);
//   let x = brojStr.split(""); sece string na osnovu prosledjenog stringa...kreira se niz
//   x = x.reverse(); okrene niz
//   x = x.join(""); spaja niz
//   x = parseInt(x); pretvara string u Int
//   console.log(x);
// }

// okreniBr("12345");

// napisati js funkciju koja za unetu rec , sortira karaktere pa alfabet-u. (abcd...);

// function alfabetStr(rec) {
//   let x = rec.split("");
//   x = x.sort();
//   x = x.join("");
//   console.log(x);
// }

// alfabetStr("napredni");

// napisati javascript funkciju koja za parametar prihvata recenicu za koju je potrebno svaki prvi karakter reci pretvoriti u veliko slovo

// function velikoSlovo(recenica) {
//   let x = recenica.split(" ");
//   for (let i = 0; i < x.length; i++) {
//     x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
//   }
//   console.log(x.join(" "));
// }

// velikoSlovo("the quick brown fox");

// Codition statements & Loops

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     console.log("broj: ", i + " je deljiv sa 3");
//   }
//   if (i % 5 == 0) {
//     console.log("broj: ", i + " je deljiv sa 5");
//   }
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("broj: ", i + " je deljiv sa 3 i 5");
//   }
// }

// pronaci srednju vrednost

// let studenti = [
//   ["David", 80],
//   ["Vinoth", 77],
//   ["Divya", 88],
//   ["Isshitha", 95],
//   ["Thomas", 68]
// ];

// let sum = 0;
// let avg;

// for (let i = 0; i < studenti.length; i++) {
//   sum += studenti[i][1];
// }

// avg = sum / studenti.length;
// if (avg < 60) {
//   console.log("Average mark: ", avg + " GRADE: F");
// } else if (avg < 70) {
//   console.log("Average mark: ", avg + " GRADE: D");
// } else if (avg < 80) {
//   console.log("Average mark: ", avg + " GRADE: C");
// } else if (avg < 90) {
//   console.log("Average mark: ", avg + " GRADE: B");
// } else if (avg < 100) {
//   console.log("Average mark: ", avg + " GRADE: A");
// }

// for (let i = 1; i < 100; i++) {
//   for (let j = 0; j < i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
