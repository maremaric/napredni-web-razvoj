// jQuery
$(document).ready(function() {
  // Traversing

  // parent

  let parentEl = $("#listaUl");
  //   console.log(parentEl.parent());

  // parents

  let parentsEl = $("#listaUl");
  //   console.log(parentsEl.parents());
  //   console.log(parentsEl.parents("div"));

  //   parentsUntil

  let parentsUntilEl = $("li");
  //   console.log(parentsUntilEl.parentsUntil("#wrapperDiv"));

  // closest

  let closestEl = $("li");
  //   console.log(closestEl.closest("#wrapperDiv"));

  // children

  let childrenEl = $("#wrapperDiv");
  //   console.log(childrenEl.children());
  //   console.log(childrenEl.children("ul"));

  //   find

  let findElement = $("#wrapperDiv");
  //   console.log(findElement.find("#listaUl").find("li"));

  //   siblings

  let siblingsEl = $("#itemLi");
  //   console.log(siblingsEl.siblings());
  //   console.log(siblingsEl.siblings(".item"));

  //   next

  let nextItem = $("#itemLi").css("background", "gray");
  //   nextItem.next().css("background", "red");

  //   nextAll

  let nextAllItem = $("#itemLi");
  nextAllItem.nextAll().css("background", "orange");

  //   nextUntil

  let nextUntilItem = $("#itemLi");
  nextUntilItem.nextUntil(".item").css("background", "green");

  let findT = $(".item1").css("background", "lightgray");
  findT.filter("#1").css("background", "aqua");
  //   console.log(findT.filter("#1"));

  $("#block").click(function() {
    // console.log(event);
  });

  $("#block").on("click mouseenter", function() {});

  $("#block2").click(function() {
    $(this).css("background", "yellow");
  });

  $("#block").on({
    click: function() {
      console.log("CLICKED!");
      $("#block2").triggerHandler("click");
    },
    mouseenter: function() {
      console.log("HOVERED!");
    }
  });

  $("a").attr("target", "_blank");

  $("#link").click(function() {
    event.preventDefault();
    window.open("https://www.itcentar.rs");
    console.log(event);
  });
});
