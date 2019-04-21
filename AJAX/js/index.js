// AJAX Request

const demo = document.querySelector("#demo");

// Create XML
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let parsed = JSON.parse(this.responseText);
    demo.innerHTML = "Moje ime je: ${parsed.name}";
  }
};

xhttp.open("GET", "server/ajax_info.txt", true);
xhttp.send();
