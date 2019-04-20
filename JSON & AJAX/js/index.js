// JavaScript JSON & AJAX

// let json = '{"name":"Marko","lastname":"Maric","hobies":"none"}';
// let jsonObj = JSON.parse(json);

// document.getElementById("jsontext").innerHTML = jsonObj.name;
// console.log(jsonObj);

// let newString = JSON.stringify(jsonObj);

// let person = {
//   name: "Ime",
//   lastname: "Prezime",
//   visina: 188,
//   tezina: 82
// };

// document.getElementById("jsonstring").innerHTML = JSON.stringify(person);

let jsonString =
  '{"employes": [{"name":"Marko","lastname": "Maric","gender": "male","age": 31,"id": 1},{"name":"Nikola","lastname": "Peric","gender": "male","age": 22,"id": 2}]}';

let container = document.getElementsByClassName("person");

let jsonNewObj = JSON.parse(jsonString);
console.log(container);

jsonNewObj.employes.forEach((value, index) => {
  container[index].querySelector(".id").innerHTML = value.id;
  container[index].querySelector(".ime").innerHTML = value.name;
  container[index].querySelector(".prezime").innerHTML = value.lastname;
  container[index].querySelector(".pol").innerHTML = value.gender;
  container[index].querySelector(".godine").innerHTML = value.age;
});

console.log(jsonNewObj);
