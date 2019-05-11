// JavaScript

let promises = fetch("https://jsonplaceholder.typicode.com/users");

promises
  .then(data => {
    console.log("uspesno izvrsen zahtev!");
    return data.json();
  })
  .then(json => {
    console.log(json);
  });

function Funkcija1() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("Funkcija 1");
    }, 1000);
  });
}

function Funkcija2() {
  return new Promise((reslove, reject) => {
    let error = false;

    if (error) {
      reject(new Error("Ova funkcija nije validna!"));
    } else {
      setTimeout(() => {
        reslove("Funkcija 2");
      }, 1000);
    }
  });
}

function Funkcija3() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("Funkcija3");
    }, 1000);
  });
}

// Funkcija1()
//   .then(data => {
//     console.log(`Promise ${data} funkcija je uspesno izvrsena!`);
//     return Funkcija2();
//   })
//   .then(data => {
//     console.log(`Promise ${data} funkcija je uspesno izvrsena!`);
//     return Funkcija3();
//   })
//   .then(data => {
//     console.log(`Promise ${data} funkcija je uspesno izvrsena!`);
//   })
//   .catch(err => {
//     console.error(err);
//   });

for (let i = 0; i < 10; i++) {
  PromiseAsync()
    .then(data => {
      console.log("success!", data);
    })
    .catch(err => {
      console.error(err);
    });
}

async function PromiseAsync() {
  let response1 = await fetch("https://jsonplaceholder.typicode.com/users");
  let json1 = await response1.json();
  let response2 = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${json1[0].id}`
  );
  let json2 = await response2.json();

  return json2;
}
