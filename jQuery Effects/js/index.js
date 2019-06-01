// jQuery JS
$(document).ready(function() {
  //   let block = $(".block");
  //   let resetBtn = $("#reset");
  //   block.on("click", function() {
  //     // $(this).fadeOut(1000);
  //     // $(this).hide();
  //     $(this).slideUp(function() {
  //       resetBtn.text("Prikazi element");
  //     });
  //   });
  //   resetBtn.on("click", function() {
  //     // block.fadeIn(1000);
  //     // block.show();
  //     block.slideDown(function() {
  //       resetBtn.text("Reset");
  //     });
  //   });
  //   //   moving elements left and right
  //   let btnLeft = $("#left");
  //   let btnRight = $("#right");
  //   let block2 = $(".block2");
  //   let resetPos = $("#reset2");
  //   btnLeft.on("click", function() {
  //     block2.stop(true, false).animate(
  //       {
  //         left: "-=50"
  //       },
  //       500
  //     );
  //   });
  //   btnRight.on("click", function() {
  //     block2.stop(true, false).animate(
  //       {
  //         left: "+=50"
  //       },
  //       500
  //     );
  //   });
  //   resetPos.on("click", function() {
  //     block2.animate(
  //       {
  //         left: "0"
  //       },
  //       200
  //     );
  //   });

  //   zadatak

  let block = $(".block3");
  let prvi = $("#prvi");
  let drugi = $("#drugi");
  let treci = $("#treci");
  let cetvrti = $("#cetvrti");

  block.on({
    mouseenter: function() {
      prvi
        .stop(true, false)
        .animate({ left: "-100", top: "-100" }, 500, "linear");
      drugi
        .stop(true, false)
        .animate({ left: "200", top: "-100" }, 500, "linear");
      treci
        .stop(true, false)
        .animate({ left: "-100", top: "200" }, 500, "linear");
      cetvrti
        .stop(true, false)
        .animate({ left: "200", top: "200" }, 500, "linear");
    },
    mouseleave: function() {
      prvi.stop(true, false).animate({ left: "0", top: "0" }, 500, "linear");
      drugi.stop(true, false).animate({ left: "100", top: "0" }, 500, "linear");
      treci.stop(true, false).animate({ left: "0", top: "100" }, 500, "linear");
      cetvrti
        .stop(true, false)
        .animate({ left: "100", top: "100" }, 500, "linear");
    }
  });
});
