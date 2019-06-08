// jQuery

$(document).ready(function() {
  $("#data").load("data/ajax_tekst.txt");
  function getMethod() {
    // get method
    $.get("https://reqres.in/api/users", function(data, status) {
      console.log("data:", data);
      console.log("status:", status);
    })
      .done(function(data) {
        console.log("done fn data: ", data);
      })
      .fail(function(err) {
        console.log("error:", err);
        console.log(err.statustext);
      });
  }

  $("#get").click(function() {
    getMethod();
  });

  // post method
  function postMethod() {
    $.post("php/index.php", { name: "Test" }, function(data) {
      let data_json = JSON.parse(data);
      $("#name").html(data_json.name);
    });
  }

  $("#post").click(function() {
    postMethod();
  });

  function ajaxPost() {
    // ajax
    let data_name = {
      name: "Marko"
    };
    $.ajax({
      url: "php/index.php",
      method: "POST",
      data: data_name,
      success: function(data) {
        let data_json = JSON.parse(data);
        $("#name").html(data_json.name);
      },
      error: function(err) {
        console.log(err);
      },
      statusCode: {
        200: function() {
          console.log("Sve je ok!");
        },
        404: function() {
          console.log("not found!");
        },
        500: function() {
          console.error("Server nije pronadjen!");
        }
      }
    });
  }

  $("#ajaxPost").click(function() {
    ajaxPost();
  });
});
