// javascript & jQuery
$(document).ready(function() {
  // dodavanje eventa klik na toggle button
  $("input").on("change", function() {
    let item = $(this).parents(".list-group-item");
    // ispitivanje da li je toggle button aktiviran / deaktiviran
    if (this.checked) {
      $("#korpa").append(item);
    } else {
      $("#proizvodi").append(item);
    }
  });

  let stars = $(".stars i");

  stars.on("click", function(e) {
    $(this)
      .css("color", "#e67e22")
      .prevAll()
      .css("color", "#e67e22");
    $(this)
      .nextAll()
      .css("color", "#000");
  });
});
