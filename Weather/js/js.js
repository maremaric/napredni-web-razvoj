// Javascript & jQuery

// show / hide backdrower

$(document).ready(function() {
  let dailyItem = $(".daily_item");
  let closeBackDrower = $("#close-backdrower");

  dailyItem.click(function() {
    $(".wa-backdrower").animate({
      right: 0
    });
  });

  closeBackDrower.click(function() {
    $(".wa-backdrower").animate({
      right: -300
    });
  });
});
