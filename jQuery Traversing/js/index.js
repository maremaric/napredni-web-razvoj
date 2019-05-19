// javascript

// $("#start").click(function() {
//   $(this).css("color", "red");

//   $(this)
//     .next()
//     .css("color", "blue");
// });

// paretn select
$("#start")
  .parentsUntil("div")
  .css("border", "1px solid red");

// Children()

let c = $("#lista")
  .children("li")
  .css("color", "red");
let a = $("#lista")
  .find("sapn")
  .css("border-color", "black");

// first

$("li")
  .filter(function() {
    return $(this).attr("id") === "prvi";
  })
  .css("color", "blue");

// not

$("li")
  .not(".none")
  .eq(0)
  .css("background-color", "lightgray");

// colorize stars

$("i").click(function() {
  $(this)
    .css({ color: "yellow" })
    .prevAll()
    .css({ color: "yellow" });
  $(this)
    .nextAll()
    .css({ color: "gray" });
});

$("i").hover(function() {
  $(this)
    .css({ color: "yellow" })
    .prevAll()
    .css({ color: "yellow" });
  $(this)
    .nextAll()
    .css({ color: "gray" });
});
