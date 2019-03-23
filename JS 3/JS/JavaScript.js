// function max() {
//   console.log(arguments);

//   let max = arguments[0];
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }

//   console.log(max);
// }

// max(1, 22, 4, 15, 18);

// let osoba1 = {
//   firstName: "Marko",
//   lastName: "Maric"
// };

// let osoba2 = {
//   firstName: "Jelena",
//   lastName: "Milovanovic"
// };

// let person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(person.fullName.call(osoba1));
// console.log(person.fullName.call(osoba2));

// let model = "mercedes";

// switch (model) {
//   case "bmw":
//     console.log(model);
//     break;
//   case "audi":
//     console.log(model);
//     break;
//   case "mercedes":
//     console.log(model);
//     break;
//   default:
//     console.log("Nije pronadjen model");
//     break;
// }

// let array = ["januar", "februar", "mart", "april", "jun"];

// for (var i = 0; i < array.length; i++) {
//   console.log("Index:", i, "Vrednost niza za trenutin index: ", array[i]);
// }

// neparni brojevi od 1 do 100

// function neparniBrojevi(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 != 0) {
//       array.push(i);
//     }
//   }
//   console.log(array);
// }

// neparniBrojevi(1, 100);

// let s = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     s = s + i;
//   } else {
//     s = s + 2 * i;
//   }
//   console.log(s);
// }

// while parni brojevi

// let i = 1;
// let array = [];
// while (i <= 100) {
//   if (i % 2 == 0) {
//     array.push(i);
//   }
//   i++;
// }

// console.log(array);

// do while
// i = 101;

// do {
//   document.write("broj: ", i + "<br>");
//   i++;
// } while (i <= 100);

// od 100 do 2

// function brojevi(end, start) {
//   let array = [];
//   for (let i = end; i >= start; i--) {
//     if (i % 2 == 0) {
//       array.push(i);
//     }
//   }

//   console.log(array);
// }

// brojevi(100, 1);

// for in

// let array = {
//   o1: 1,
//   o2: 2,
//   o3: 3,
//   o4: 4,
//   o5: 5
// };

// for (item in array) {
//   console.log(array[item]);
// }
