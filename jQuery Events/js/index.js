// jQuery

// click event
$(document).ready(function() {
  // click event
  $("#info").click(function() {
    alert("You clicked!");
  });

  //   PreventDefault
  $("a").click(function() {
    event.preventDefault();
    window.open("http://itcentar.rs/");
  });

  //   Hover

  $("li").hover(function() {
    $("li").each(function() {
      $(this).css("color", "black");
    });
    $(this).css("color", "red");
  });

  //   dblclick
  $(".box").dblclick(function() {
    $(this).css("backgroundColor", randomColor());
  });

  function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //   proxy

  let person = {
    name: "Marko",
    gender: "Male",
    displayInfo: function() {
      $("#personInfo").append(
        `<p>name: ${this.name}, gender; ${this.gender}</p>`
      );
    }
  };

  // Resize

  $(window).resize(function() {
    console.log(window.innerWidth);
  });
});
