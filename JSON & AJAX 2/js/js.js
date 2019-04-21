let jsonString =
  '{"employes": [{"name":"Marko","lastname": "Maric","gender": "male","age": 31,"id": 1},{"name":"Nikola","lastname": "Peric","gender": "male","age": 22,"id": 2}]}';

let jsonNewObj = JSON.parse(jsonString);

let JSONParser = {
  izbor: document.querySelector(".info"),
  choice: document.getElementsByClassName("person"),
  loopArrayEmp: function(array) {
    array.forEach((value, index) => {
      JSONParser.praviNoviDiv(value, index);
    });
  },
  praviNoviDiv: function(value, index) {
    let napravidiv = document.createElement("div");
    napravidiv.className = "person";
    this.izbor.appendChild(napravidiv);

    JSONParser.CreateParagraphs(value, index);
  },
  CreateParagraphs: function(value, index) {
    for (let z in value) {
      let napravip = document.createElement("p");
      this.choice[index].appendChild(napravip);
      let o = document.createTextNode(z + ": " + value[z]);
      let r = napravip.appendChild(o);
    }
  }
};

console.log(jsonNewObj);
JSONParser.loopArrayEmp(jsonNewObj.employes);
