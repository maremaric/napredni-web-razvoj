// javascript

function create() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      let text_ele = document.createElement("P");
      let img_ele = document.createElement("IMG");

      reslove({
        text: text_ele,
        img: img_ele
      });
    }, 1000);
  });
}

function adding(data) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      data.text.innerText = "Lorem ispum dolor sit amet.";
      data.img.setAttribute("src", "https://imgplaceholder.com/420x320");
      reslove(data);
    }, 2000);
  });
}

function appendEle(date) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const element = document.querySelector("#content");
      element.appendChild(date.text);
      element.appendChild(date.img);
      reslove();
    }, 1000);
  });
}

async function promiseF() {
  let f1 = await create();
  let f2 = await adding(f1);
  let f3 = await appendEle(f2);

  return "Uspesno kreirani elementi!";
}

// ?Call promiseF function

promiseF()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });
