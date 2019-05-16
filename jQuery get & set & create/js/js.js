// javascript

// selektovanje

$(document).ready(() => {
  //  Do something...

  // Event onclick for button
  $("#btn").click(event => {
    $(event.target).val("Izvrseno!");
    $("label").html("izmenjen tekst:");
    $("#tekst").val("Tekst input polja");
    $(".error-msg").html('<span style="color: red">Desila se greska!</span>');
  });
  $("#link").click(() => {
    const link = $("#stranica");
    link.text("ITCentar");
    link.attr({ href: "https://itcentar.rs", target: "_blank" });
  });

  //   append
  const lista = $(".main");

  lista.append("<li>Novi element!</li>");

  //   prepend

  lista.prepend("<li>Novi element na pocetku liste!</li>");

  //   after

  lista.after("Lorem dadadasdadasdasd");

  //   before

  lista.before("<h2>Naslov liste:</h2>");

  $("#delete").click(() => {
    lista.find("li").remove(".prvi");
  });

  //   AddClass
  const lista2 = $("#lista2");
  const dugme_dodaj = $("#add_class");
  const dugme_ukloni = $("#remove");
  const dugme_smeni = $("#toggle_class");

  dugme_dodaj.click(() => {
    lista2.find("li:last-child").addClass("highlighted");
  });

  dugme_ukloni.click(() => {
    lista2.find("li:last-child").removeClass("highlighted");
  });

  dugme_smeni.click(() => {
    const li = lista2.find("li:last-child").toggleClass("highlighted");
    // console.log(lista2.find("li:last-child").css("color", "green"));

    // width & height

    console.log(`width: ${li.width()} height: ${li.height()}`);
    console.log(
      `innerWidth: ${li.innerWidth()} innerHeight: ${li.innerHeight()}`
    );
    console.log(
      `outerWidth: ${li.outerWidth()} outerHeight: ${li.outerHeight()}`
    );
    console.log(
      `outerWidth: ${li.outerWidth(true)} outerHeight: ${li.outerHeight(true)}`
    );
  });
});
