// jQuery

$(document).ready(() => {
  const lista = $("#lista li:odd");
  const neparniListaItem = $("#lista li:even");

  lista.css("color", "red");

  neparniListaItem
    .addClass("select")
    .removeClass("text-blue")
    .fadeOut(500, () => {});
  $("body").html(() => {
    $("body").append("<p>Lorem</p>");
  });

  let ime = $("#ime").val("Izmenjeno ime");
  let prezime = $("#prezime").val("Izmenjeno prezime");
  let approved = $("#check").val(3);

  console.log(ime, prezime, approved);
});
