// jQuery, JavaScript

$(document).ready(function() {
  let playing = false;
  let score;
  let step;
  let trailsLeft;
  let action;
  let maxspeed = 5;
  let paused = false;
  let name = "Marko";

  let fruits = [
    "apple",
    "banana",
    "cherries",
    "mango",
    "orange",
    "grapes",
    "pear",
    "peach",
    "watermelon"
  ];

  $("#lifes").hide();
  $("#name").text(name);
  $("#gameover").hide();

  $("#start").click(function() {
    if (playing) {
    } else {
      playing = true;
      trailsLeft = 3;
      $("#lifes").show();
      createHearts();
      startAction();
    }
  });

  function createHearts() {
    $("#lifes").empty();
    for (let i = 0; i < trailsLeft; i++) {
      $("#lifes").append('<i class="fas fa-heart"></i>');
    }
  }

  function chooseFruit() {
    $("#fruit").attr(
      "src",
      `images/${fruits[Math.round((fruits.length - 1) * Math.random())]}.png`
    );
  }

  function setFruit() {
    $("#fruit").css({ top: -100, left: Math.round(600 * Math.random()) });
    chooseFruit();
    step = 1 + Math.round(maxspeed * Math.random());
  }

  $("#fruit").on("mouseenter", function() {
    score++;
    $(this).hide("explode", 100);
    clearInterval(action);
    setTimeout(startAction, 600);
  });

  $("#reset").click(function() {
    if (paused) {
      paused = false;
      clearInterval(action);
      action = setInterval(action, 10);
    } else {
      paused = true;
      clearInterval(action);
    }
  });

  function intervalSet() {
    $("#fruit").css("top", $("#fruit").position().top + step);

    if ($("#fruit").position().top > $("#canvas").height()) {
      if (trailsLeft > 1) {
        trailsLeft--;
        createHearts();
        chooseFruit();
        setFruit();
      } else {
        playing = false;
        stopAction();
        $("#lifes").hide();
        $("#gameover").show();
        $("#gameover").hide();
        $("#gameover").text(`Igra je zavrsena vas rezultat je: ${score}!`);
      }
    }
  }
  function startAction() {
    $("#fruit").show();
    setFruit();

    action = setInterval(intervalSet, 10);
  }

  function stopAction() {
    $("#fruit").hide();
    clearInterval(action);
  }
});
