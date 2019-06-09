// js

$(document).ready(function() {
  let reqBtn = $("#send-request");
  let reqBtnList = $("#send-request-list");
  let listWrapper = $("#lists-wrapper");
  let cardsWrapper = $("#cards-wrapper");
  let URLAllUsers = "https://reqres.in/api/users?page=1";
  let URLUsersWithId = "https://reqres.in/api/users/";
  let URLResources = "https://reqres.in/api/resources";
  let URLSingleResourcesById = "https://reqres.in/api/resources/";

  reqBtn.click(function() {
    getRequest(URLAllUsers)
      .then(data => {
        data.data.forEach((value, index) => {
          createCards(value);
        });
      })
      .catch(err => {
        console.log("Dogodila se greska!", err);
      });
  });

  function getRequest(url) {
    return $.get(url);
  }

  function createCards(userData) {
    console.log(userData);
    let template = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <p class="card-text">${userData.first_name} ${userData.last_name}</p>
        <p class="mail">${userData.email}</p>
    </div>
    <div class="card-img-top">
        <span class="id">${userData.id}</span> 
            <img src="${userData.avatar}" alt="..." />
        </div>
    </div>`;
    cardsWrapper.append(template);
  }

  reqBtnList.click(function() {
    getRequest(URLResources).then(data => {
      data.data.forEach((value, index) => {
        createList(value);
      });
    });
  });

  function createList(listData) {
    let template = `<li id="${listData.id}" class="list-group-item">${
      listData.name
    }</li>`;
    listWrapper.append(template);
  }

  $("ul").on("click", "li", function() {
    let url = URLSingleResourcesById + $(this).attr("id");
    getRequest(url).then(data => {
      animateCardAndData(data.data);
    });
  });

  function animateCardAndData(infoData) {
    $("#bg-color").css("background-color", infoData.color);
    $("#name").text(infoData.name);
    $("#color").text(infoData.color);
    $("#year").text(infoData.year);
    $("#pantone").text(infoData.pantone_value);

    $("#bg-color")
      .animate(
        {
          width: "200px",
          height: "5px"
        },
        300
      )
      .animate(
        {
          height: "150px"
        },
        300
      );
  }
});
