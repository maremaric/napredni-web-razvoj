// jQuery

$(document).ready(function() {
  // get value from HTML elements
  let htmlEl = $("#html").html();
  let textEl = $("#text").text();
  let input = $("#name").val();

  console.log(htmlEl, textEl, input);

  //   change html
  $("#change").on("click", () => {
    console.log(event.target);
    $("#html").html("<h1>Novi elemetn</h1>");
    $("#text").text("<h1>Novi element</h1>");
    $("#name").val("Nova vrednost");
  });

  //   create paragraph
  $("#add").on("click", function() {
    $("#container").append($(".names"));
  });

  //   add in list

  $("#addAppend").on("click", function() {
    $(".lista").append("<li>Novi element</li>");
    $("#info").text("Novi element je dodat");
  });

  $("#addPrepend").on("click", function() {
    $(".lista")
      .prepend("<li>Novi element</li>")
      .find("li:even")
      .removeClass("new")
      .find("li:even")
      .addClass("new");
    $("#info").text("Novi element je dodat 2");
  });

  $("#remove").on("click", function() {
    let lista = $(".lista");
    lista.remove();
  });

  $("#toggle").on("click", function() {
    $("#panel").toggleClass("open");
  });

  //   display element dimension
  let d = $("#dimension");

  d.width();
  d.height();
  d.innerWidth(200);
  d.outerWidth();
  d.outerWidth(true);
});
