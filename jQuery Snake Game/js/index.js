// JS &jQuery

$(document).ready(function() {
  let canvas = $("#canvas")[0];
  let ctx = canvas.getContext("2d");

  let w = $(canvas).width();
  let h = $(canvas).height();

  let snakeArray;
  let cw = 10;
  let food;
  let direction;
  let score;
  let speed = 60;

  function init() {
    direction = "right";
    score = 0;
    createSnake();
    createFood();

    if (typeof gameLoop != "undefined") {
      clearInterval(gameLoop);
    }
    gameLoop = setInterval(paint, speed);
  }

  init();

  function createFood() {
    food = {
      x: Math.round((Math.random() * (w - cw)) / cw),
      y: Math.round((Math.random() * (h - cw)) / cw)
    };
  }

  function createSnake() {
    let length = 5;
    snakeArray = [];
    for (let i = 0; i < length; i++) {
      snakeArray[i] = { x: i, y: 0 };
    }
  }

  function createCell(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x * cw, y * cw, cw, cw);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x * cw, y * cw, cw, cw);
  }

  function paint() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, w, h);

    for (let i = 0; i < snakeArray.length; i++) {
      let c = snakeArray[i];
      createCell(c.x, c.y);
    }

    createCell(food.x, food.y);
  }
});
