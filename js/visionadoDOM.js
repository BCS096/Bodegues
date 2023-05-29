var carrusel = null;
var json = null;
var jsonS = null;
var jsonR = null;
var jsonC = null;
var idsFiltrado = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
];
var visionActive = 0;
var filtro = null;
var abiertoCheck = false;
var diasSelected = [false, false, false, false, false, false, false];

window.onload = function () {
  botonesNav(0);
  cargarJSON();
  cargarJSOComentarios();
};

function paginaProducto2(pos) {
  //carga de JSON's externos
  cargarJSONSupermercado();
  cargarJSONRestaurante();
  //supermercado cercano
  var supermercado = establecimientoMasCercano(jsonS, pos);
  var restaurante = establecimientoMasCercano(jsonR, pos);
  //dias de la semana
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const fechaActual = new Date();
  const diaActual = diasSemana[fechaActual.getDay()];

  //cargar el tiempo
  var tiempo = weather(
    json.itemListElement[pos].geo.latitude,
    json.itemListElement[pos].geo.longitude
  );
  var node_1 = document.getElementById("seccion");

  var node_2 = document.createElement("SECTION");
  node_2.setAttribute("id", "hero");
  node_2.setAttribute("class", "hero d-flex align-items-center section-bg");
  node_1.appendChild(node_2);

  var node_3 = document.createElement("DIV");
  node_3.setAttribute("class", "container granate aplicar-borde margen");
  node_2.appendChild(node_3);

  var node_4 = document.createElement("DIV");
  node_4.setAttribute("class", "row justify-content-between gy-5");
  node_3.appendChild(node_4);

  var node_5 = document.createElement("DIV");
  node_5.setAttribute("class", "col-sm");
  node_5.setAttribute("style", "align-self: center");
  node_4.appendChild(node_5);

  var node_6 = document.createElement("H2");
  node_6.setAttribute("data-aos", "fade-up");
  node_6.setAttribute("style", "text-align-last: center");
  node_6.setAttribute("class", "aos-init aos-animate margen");
  node_5.appendChild(node_6);

  var node_7 = document.createTextNode(new String("Bodegas"));
  node_6.appendChild(node_7);

  var node_8 = document.createElement("BR");
  node_6.appendChild(node_8);

  var node_9 = document.createTextNode(
    new String(json.itemListElement[pos].name)
  );
  node_6.appendChild(node_9);

  var node_10 = document.createElement("DIV");
  node_10.setAttribute("class", "d-flex aos-init aos-animate");
  node_10.setAttribute("data-aos", "fade-up");
  node_10.setAttribute("data-aos-delay", "200");
  node_10.setAttribute("style", "justify-content: center");
  node_5.appendChild(node_10);

  //modal

  var button_1 = document.createElement("BUTTON");
  button_1.setAttribute("id", "abrirModal");
  button_1.setAttribute("class", "btn btn-danger");

  var button_2 = document.createTextNode(new String("Ver Video"));
  button_1.appendChild(button_2);

  var button_3 = document.createElement("DIV");
  button_3.setAttribute("id", "ventanaModal");
  button_3.setAttribute("class", "modal");

  var button_4 = document.createElement("DIV");
  button_4.setAttribute("class", "contenido-modal aplicar-borde margen");
  button_4.setAttribute(
    "style",
    "text-align-last: center; background-color: #6a1a21"
  );
  button_3.appendChild(button_4);

  var button_5 = document.createElement("SPAN");
  button_5.setAttribute("class", "cerrar");
  button_4.appendChild(button_5);

  var button_6 = document.createElement("IFRAME");
  button_6.setAttribute("width", "100%");
  button_6.setAttribute("height", "500");
  button_6.setAttribute(
    "src",
    json.itemListElement[pos].subjectOf.video[0].contentUrl
  );
  button_6.setAttribute("title", "YouTube video player");
  button_6.setAttribute("frameborder", "0");
  button_6.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  button_6.setAttribute("allowfullscreen", "");
  button_4.appendChild(button_6);

  node_10.appendChild(button_1);

  document.getElementById("cuerpo").appendChild(button_3);

  // Ventana modal
  var modal = document.getElementById("ventanaModal");

  // Botón que abre el modal
  var boton = document.getElementById("abrirModal");

  // Hace referencia al elemento <span> que tiene la X que cierra la ventana
  var span = document.getElementsByClassName("cerrar")[0];

  // Cuando el usuario hace click en el botón, se abre la ventana
  boton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // Si el usuario hace click en la x, la ventana se cierra
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Si el usuario hace click fuera de la ventana, se cierra.
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  var node_15 = document.createElement("DIV");
  node_15.setAttribute("class", "col-sm margen  text-lg-start");
  node_4.appendChild(node_15);

  const contImg = document.createElement("div");
  contImg.className = "caja margen";

  const contImg1 = document.createElement("div");
  contImg1.className = "box1 tamañoImgProductoMain";

  var node_16 = document.createElement("IMG");

  node_16.setAttribute(
    "src",
    json.itemListElement[pos].image[json.itemListElement[pos].image.length - 1]
  );
  node_16.setAttribute("alt", "");
  node_16.setAttribute("data-aos", "zoom-out");
  node_16.setAttribute("data-aos-delay", "300");
  contImg1.appendChild(node_16);
  contImg.appendChild(contImg1);
  node_15.appendChild(contImg);

  var aux = document.createElement("div");
  aux.setAttribute("class", "col-sm margen   text-lg-start");
  node_4.appendChild(aux);

  const contImg2 = document.createElement("div");
  contImg2.className = "caja margen";
  aux.appendChild(contImg2);

  const contImg3 = document.createElement("div");
  contImg3.className = "box2 tamañoImgProductoMain";
  contImg2.appendChild(contImg3);

  var aux1 = document.createElement("img");
  aux1.setAttribute("src", json.itemListElement[pos].logo);
  aux1.setAttribute("class", "im aos-init aos-animate");
  aux1.setAttribute("data-aos", "zoom-out");
  aux1.setAttribute("data-aos-delay", "300");
  aux1.setAttribute("style", "height: auto");
  contImg3.appendChild(aux1);

  var node_17 = document.createElement("MAIN");
  node_17.setAttribute("id", "main");
  node_1.appendChild(node_17);

  var node_18 = document.createElement("SECTION");
  node_18.setAttribute("id", "about");
  node_18.setAttribute("class", "about");
  node_17.setAttribute(
    "style",
    'background-image: url("http://www.vinyesmortitx.com/img_blog/21_QQ6A9827.jpg") ;)'
  );
  node_17.appendChild(node_18);

  var node_19 = document.createElement("DIV");
  node_19.setAttribute("class", "container aos-init aos-animate");
  node_19.setAttribute("data-aos", "fade-up");
  node_18.appendChild(node_19);

  var node_20 = document.createElement("DIV");
  node_20.setAttribute("class", "section-header");
  node_19.appendChild(node_20);

  var node_21 = document.createElement("P");
  node_20.appendChild(node_21);

  var node_22 = document.createElement("SPAN");
  node_22.className = "margen granate aplicar-borde";
  node_21.appendChild(node_22);

  var node_23 = document.createTextNode(new String("Descripción"));
  node_22.appendChild(node_23);

  var node_24 = document.createElement("DIV");
  node_24.setAttribute("class", "row gy-4 aplicar-borde margen granate");
  node_19.appendChild(node_24);

  var node_25 = document.createElement("DIV");
  node_25.setAttribute(
    "class",
    "col-lg-7 position-relative about-img margen aos-init aos-animate"
  );
  node_25.setAttribute(
    "style",
    "background-image: url(" + json.itemListElement[pos].image[3] + ") ;"
  );
  node_25.setAttribute("data-aos", "fade-up");
  node_25.setAttribute("data-aos-delay", "150");
  node_24.appendChild(node_25);

  var node_26 = document.createElement("DIV");
  node_26.setAttribute(
    "class",
    "call-us position-absolute margen aplicar-borde granate"
  );
  node_25.appendChild(node_26);

  var node_27 = document.createElement("H4");
  node_26.appendChild(node_27);

  var node_28 = document.createTextNode(new String("Teléfono"));
  node_27.appendChild(node_28);

  var node_29 = document.createElement("P");
  node_26.appendChild(node_29);

  var node_30 = document.createTextNode(json.itemListElement[pos].telephone);
  node_29.appendChild(node_30);

  var node_31 = document.createElement("DIV");
  node_31.setAttribute(
    "class",
    "col-lg-5 d-flex align-items-end aos-init aos-animate"
  );
  node_31.setAttribute("data-aos", "fade-up");
  node_31.setAttribute("data-aos-delay", "300");
  node_24.appendChild(node_31);

  var node_32 = document.createElement("DIV");
  node_32.setAttribute("class", "content ps-0 ps-lg-5");
  node_31.appendChild(node_32);

  var node_33 = document.createElement("P");
  node_33.setAttribute("class", "fst-italic");
  node_32.appendChild(node_33);

  var node_34 = document.createTextNode(json.itemListElement[pos].description);
  node_33.appendChild(node_34);

  var node_35 = document.createElement("DIV");
  node_35.setAttribute("class", "position-relative mt-4 margen");
  node_32.appendChild(node_35);

  var video_1 = document.createElement("IFRAME");
  video_1.setAttribute("width", "100%");
  video_1.setAttribute("height", "350");
  video_1.setAttribute(
    "src",
    json.itemListElement[pos].subjectOf.video[1].contentUrl
  );
  video_1.setAttribute("title", "YouTube video player");
  video_1.setAttribute("frameborder", "1");
  video_1.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  video_1.setAttribute("allowfullscreen", "");
  video_1.setAttribute("controls", "2");
  node_35.appendChild(video_1);

  var node_38 = document.createElement("SECTION");
  node_38.setAttribute("id", "weather");
  node_38.setAttribute("class", "why-us section-bg");
  node_17.appendChild(node_38);

  var node_39 = document.createElement("DIV");
  node_39.setAttribute("class", "container aos-init aos-animate");
  node_39.setAttribute("data-aos", "fade-up");
  node_38.appendChild(node_39);

  var node_40 = document.createElement("DIV");
  node_40.setAttribute("class", "row");
  node_39.appendChild(node_40);

  var node_41 = document.createElement("DIV");
  node_41.setAttribute("class", "section-header");
  node_40.appendChild(node_41);

  var node_42 = document.createElement("P");
  node_41.appendChild(node_42);

  var node_43 = document.createElement("SPAN");
  node_43.className = "margen granate aplicar-borde";
  node_42.appendChild(node_43);

  var node_44 = document.createTextNode(new String("El tiempo"));
  node_43.appendChild(node_44);

  var node_45 = document.createElement("DIV");
  node_45.setAttribute(
    "class",
    "align-items-center margen aplicar-borde granate"
  );
  node_40.appendChild(node_45);

  var node_46 = document.createElement("DIV");
  node_46.setAttribute("class", "row gy-2 ");
  node_46.setAttribute("style", "margin-top: auto");
  node_45.appendChild(node_46);
  var posTiempo = 0;
  var diaa = fechaActual.getDay();
  for (let i = 0; i < 5; i++) {
    var node_47 = document.createElement("DIV");
    if (i != 0) {
      node_47.setAttribute("class", "col-xl-3 margen aos-init aos-animate");
    } else {
      node_47.setAttribute("class", "margen aos-init aos-animate");
    }

    node_47.setAttribute("data-aos", "fade-up");
    node_47.setAttribute("data-aos-delay", "200");
    node_46.appendChild(node_47);

    var node_48 = document.createElement("DIV");
    node_48.setAttribute(
      "class",
      "icon-box d-flex flex-column justify-content-center align-items-center"
    );
    node_47.appendChild(node_48);

    var node_49 = document.createElement("H3");
    node_48.appendChild(node_49);

    var node_50 = document.createTextNode(
      new String(diasSemana[(diaa + i) % 7])
    );
    node_49.appendChild(node_50);

    var dia = document.createElement("h4");
    var aux = fechaActual;
    if (i != 0) {
      aux.setDate(fechaActual.getDate() + 1);
    }
    dia.innerText =
      aux.getDate() + " / " + (aux.getMonth() + 1) + " / " + aux.getFullYear();
    node_48.appendChild(dia);

    var icon;
    if (i == 0) {
      icon = tiempo.list[0].weather[0].icon;
      var month;
      var day;
      if (fechaActual.getMonth() + 1 < 10) {
        month = "0" + (fechaActual.getMonth() + 1);
      } else {
        month = fechaActual.getMonth() + 1;
      }
      if (fechaActual.getDate() < 10) {
        day = "0" + fechaActual.getDate();
      } else {
        day = fechaActual.getDate();
      }

      var hoy = fechaActual.getFullYear() + "-" + month + "-" + day;
    } else {
      while (!h12h(tiempo.list[posTiempo].dt_txt)) {
        posTiempo++;
      }
      icon = tiempo.list[posTiempo].weather[0].icon;
    }

    var node_51 = document.createElement("I");
    node_51.setAttribute("class", iconoTiempo(icon));
    node_51.setAttribute("style", "color: #511f1f;");
    node_48.appendChild(node_51);
    var node_52 = document.createElement("P");
    node_48.appendChild(node_52);
    var node_53 = document.createTextNode(
      Math.round(tiempo.list[posTiempo].main.temp_max) +
        " °C / " +
        Math.round(tiempo.list[posTiempo].main.temp_min) +
        " °C"
    );
    node_52.appendChild(node_53);
    if (i == 0) {
      while (tiempo.list[posTiempo].dt_txt.includes(hoy)) {
        posTiempo++;
      }
    } else {
      posTiempo++;
    }
  }
  var node_96 = document.createElement("SECTION");
  node_96.setAttribute("id", "menu");
  node_96.setAttribute("class", "menu");
  node_17.appendChild(node_96);

  var node_97 = document.createElement("DIV");
  node_97.setAttribute("class", "container aos-init aos-animate");
  node_97.setAttribute("data-aos", "fade-up");
  node_96.appendChild(node_97);

  var node_98 = document.createElement("DIV");
  node_98.setAttribute("class", "section-header");
  node_97.appendChild(node_98);

  var node_99 = document.createElement("H2");
  node_98.appendChild(node_99);

  var node_100 = document.createTextNode(new String("Vinos"));
  node_99.appendChild(node_100);

  var node_101 = document.createElement("P");
  node_98.appendChild(node_101);

  var node_102 = document.createElement("SPAN");
  node_102.className = "margen granate aplicar-borde";
  node_101.appendChild(node_102);

  var node_103 = document.createTextNode(new String("tu vino favorito"));
  node_102.appendChild(node_103);

  var node_104 = document.createElement("UL");
  node_104.setAttribute(
    "class",
    "nav nav-tabs d-flex justify-content-center aos-init aos-animate"
  );
  node_104.setAttribute("data-aos", "fade-up");
  node_104.setAttribute("data-aos-delay", "200");
  node_104.setAttribute("role", "tablist");
  node_97.appendChild(node_104);

  var node_105 = document.createElement("LI");
  node_105.setAttribute("class", "nav-item");
  node_105.setAttribute("role", "presentation");
  node_104.appendChild(node_105);

  var node_106 = document.createElement("A");
  node_106.setAttribute("class", "nav-link active show");
  node_106.setAttribute("data-bs-toggle", "tab");
  node_106.setAttribute("data-bs-target", "#menu-starters");
  node_106.setAttribute("aria-selected", "true");
  node_106.setAttribute("role", "tab");
  node_105.appendChild(node_106);

  var node_107 = document.createElement("H4");
  node_106.appendChild(node_107);

  var node_108 = document.createTextNode(new String("Tintos"));
  node_107.appendChild(node_108);

  var node_109 = document.createElement("LI");
  node_109.setAttribute("class", "nav-item");
  node_109.setAttribute("role", "presentation");
  node_104.appendChild(node_109);

  var node_110 = document.createElement("A");
  node_110.setAttribute("class", "nav-link");
  node_110.setAttribute("data-bs-toggle", "tab");
  node_110.setAttribute("data-bs-target", "#menu-breakfast");
  node_110.setAttribute("aria-selected", "false");
  node_110.setAttribute("tabindex", "-1");
  node_110.setAttribute("role", "tab");
  node_109.appendChild(node_110);

  var node_111 = document.createElement("H4");
  node_110.appendChild(node_111);

  var node_112 = document.createTextNode(new String("Blancos"));
  node_111.appendChild(node_112);

  var node_113 = document.createElement("LI");
  node_113.setAttribute("class", "nav-item");
  node_113.setAttribute("role", "presentation");
  node_104.appendChild(node_113);

  var node_114 = document.createElement("A");
  node_114.setAttribute("class", "nav-link");
  node_114.setAttribute("data-bs-toggle", "tab");
  node_114.setAttribute("data-bs-target", "#menu-lunch");
  node_114.setAttribute("aria-selected", "false");
  node_114.setAttribute("tabindex", "-1");
  node_114.setAttribute("role", "tab");
  node_113.appendChild(node_114);

  var node_115 = document.createElement("H4");
  node_114.appendChild(node_115);

  var node_116 = document.createTextNode(new String("Rosados"));
  node_115.appendChild(node_116);

  var node_117 = document.createElement("DIV");
  node_117.setAttribute(
    "class",
    "tab-content aos-init aos-animate granate aplicar-borde margen"
  );
  node_117.setAttribute("data-aos", "fade-up");
  node_117.setAttribute("data-aos-delay", "300");
  node_97.appendChild(node_117);

  var node_118 = document.createElement("DIV");
  node_118.setAttribute("class", "tab-pane fade active show");
  node_118.setAttribute("id", "menu-starters");
  node_118.setAttribute("role", "tabpanel");
  node_117.appendChild(node_118);

  var node_119 = document.createElement("DIV");
  node_119.setAttribute("class", "tab-header text-center");
  node_118.appendChild(node_119);

  var node_120 = document.createElement("H3");
  node_119.appendChild(node_120);

  var node_121 = document.createTextNode(new String("Tintos"));
  node_120.appendChild(node_121);

  var node_122 = document.createElement("DIV");
  node_122.setAttribute("class", "row gy-5 margen");
  node_118.appendChild(node_122);

  for (
    let i = 0;
    i < json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem.length;
    i++
  ) {
    var node_123 = document.createElement("DIV");
    node_123.setAttribute("class", "col-lg-4 menu-item");
    node_122.appendChild(node_123);

    var node_124 = document.createElement("A");
    node_124.setAttribute(
      "href",
      json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].image
    );
    node_124.setAttribute("class", "glightbox");
    node_123.appendChild(node_124);

    const contImg = document.createElement("div");
    contImg.className = "caja margen";
    contImg.setAttribute("style", "margin : 25px");

    const contImg1 = document.createElement("div");
    contImg1.className = "box1 tamañoImgProductoVinos";

    var node_125 = document.createElement("IMG");
    node_125.setAttribute(
      "src",
      json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].image
    );
    node_125.setAttribute("class", "menu-img img-fluid");
    node_125.setAttribute("alt", "");
    contImg1.appendChild(node_125);
    contImg.appendChild(contImg1);
    node_124.appendChild(contImg);

    var node_126 = document.createElement("H4");
    node_123.appendChild(node_126);

    var node_127 = document.createTextNode(
      json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].name
    );
    node_126.appendChild(node_127);

    var node_128 = document.createElement("P");
    node_128.setAttribute("class", "ingredients");
    node_128.innerText =
      json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[
        i
      ].description;
    node_123.appendChild(node_128);

    var node_129 = document.createElement("P");
    node_129.setAttribute("class", "price");
    node_123.appendChild(node_129);

    var node_130 = document.createTextNode(
      json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].offers
        .price +
        " " +
        json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i]
          .offers.priceCurrency
    );
    node_129.appendChild(node_130);
  }

  var node_147 = document.createElement("DIV");
  node_147.setAttribute("class", "tab-pane fade");
  node_147.setAttribute("id", "menu-breakfast");
  node_147.setAttribute("role", "tabpanel");
  node_117.appendChild(node_147);

  var node_148 = document.createElement("DIV");
  node_148.setAttribute("class", "tab-header text-center");
  node_147.appendChild(node_148);

  var node_149 = document.createElement("H3");
  node_148.appendChild(node_149);

  var node_150 = document.createTextNode(new String("Blancos"));
  node_149.appendChild(node_150);

  var node_151 = document.createElement("DIV");
  node_151.setAttribute("class", "row gy-5");
  node_147.appendChild(node_151);

  for (
    let i = 0;
    i < json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem.length;
    i++
  ) {
    var node_152 = document.createElement("DIV");
    node_152.setAttribute("class", "col-lg-4 menu-item");
    node_151.appendChild(node_152);

    var node_153 = document.createElement("A");
    node_153.setAttribute(
      "href",
      json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].image
    );
    node_153.setAttribute("class", "glightbox");
    node_152.appendChild(node_153);

    const contImg = document.createElement("div");
    contImg.className = "caja margen";
    contImg.setAttribute("style", "margin : 25px");

    const contImg1 = document.createElement("div");
    contImg1.className = "box1 tamañoImgProductoVinos";

    var node_154 = document.createElement("IMG");
    node_154.setAttribute(
      "src",
      json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].image
    );
    node_154.setAttribute("class", "menu-img img-fluid");
    node_154.setAttribute("alt", "");
    contImg1.appendChild(node_154);
    contImg.appendChild(contImg1);
    node_153.appendChild(contImg);

    var node_155 = document.createElement("H4");
    node_152.appendChild(node_155);

    var node_156 = document.createTextNode(
      json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].name
    );
    node_155.appendChild(node_156);

    var node_157 = document.createElement("P");
    node_157.setAttribute("class", "ingredients");
    node_152.appendChild(node_157);

    var node_158 = document.createTextNode(
      json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i]
        .description
    );
    node_157.appendChild(node_158);

    var node_159 = document.createElement("P");
    node_159.setAttribute("class", "price");
    node_152.appendChild(node_159);

    var node_160 = document.createTextNode(
      json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].offers
        .price +
        " " +
        json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i]
          .offers.priceCurrency
    );
    node_159.appendChild(node_160);
  }

  var node_161 = document.createElement("DIV");
  node_161.setAttribute("class", "tab-pane fade");
  node_161.setAttribute("id", "menu-lunch");
  node_161.setAttribute("role", "tabpanel");
  node_117.appendChild(node_161);

  var node_162 = document.createElement("DIV");
  node_162.setAttribute("class", "tab-header text-center");
  node_161.appendChild(node_162);

  var node_163 = document.createElement("H3");
  node_162.appendChild(node_163);

  var node_164 = document.createTextNode(new String("Rosados"));
  node_163.appendChild(node_164);

  var node_165 = document.createElement("DIV");
  node_165.setAttribute("class", "row gy-5");
  node_161.appendChild(node_165);

  for (
    let i = 0;
    i < json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem.length;
    i++
  ) {
    var node_166 = document.createElement("DIV");
    node_166.setAttribute("class", "col-lg-4 menu-item");
    node_165.appendChild(node_166);

    var node_167 = document.createElement("A");
    node_167.setAttribute(
      "href",
      json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].image
    );
    node_167.setAttribute("class", "glightbox");
    node_166.appendChild(node_167);

    const contImg = document.createElement("div");
    contImg.className = "caja margen";
    contImg.setAttribute("style", "margin : 25px");

    const contImg1 = document.createElement("div");
    contImg1.className = "box1 tamañoImgProductoVinos";

    var node_168 = document.createElement("IMG");
    node_168.setAttribute(
      "src",
      json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].image
    );
    node_168.setAttribute("class", "menu-img img-fluid");
    node_168.setAttribute("alt", "");
    contImg1.appendChild(node_168);
    contImg.appendChild(contImg1);
    node_167.appendChild(contImg);

    var node_169 = document.createElement("H4");
    node_166.appendChild(node_169);

    var node_170 = document.createTextNode(
      json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].name
    );
    node_169.appendChild(node_170);

    var node_171 = document.createElement("P");
    node_171.setAttribute("class", "ingredients");
    node_166.appendChild(node_171);

    var node_172 = document.createTextNode(
      json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i]
        .description
    );
    node_171.appendChild(node_172);

    var node_173 = document.createElement("P");
    node_173.setAttribute("class", "price");
    node_166.appendChild(node_173);

    var node_174 = document.createTextNode(
      json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].offers
        .price +
        " " +
        json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i]
          .offers.priceCurrency
    );
    node_173.appendChild(node_174);
  }

  var nodo_1 = document.createElement("SECTION");
  nodo_1.setAttribute("id", "testimonials");
  nodo_1.setAttribute("class", "testimonials section-bg");
  nodo_1.setAttribute("style", "padding-bottom: 10px");
  node_17.appendChild(nodo_1);

  var nodo_2 = document.createElement("DIV");
  nodo_2.setAttribute("class", "container granate aplicar-borde margen");
  nodo_1.appendChild(nodo_2);

  var nodo_3 = document.createElement("DIV");
  nodo_3.setAttribute("class", "row text-center");
  nodo_2.appendChild(nodo_3);

  var nodo_4 = document.createElement("DIV");
  nodo_4.setAttribute("class", "col-12");
  nodo_3.appendChild(nodo_4);

  var nodo_5 = document.createElement("H1");
  nodo_5.setAttribute("class", "display-3 fw-bold text-white");
  nodo_4.appendChild(nodo_5);

  var nodo_6 = document.createTextNode(new String("Comentarios"));
  nodo_5.appendChild(nodo_6);

  var nodo_7 = document.createElement("HR");
  nodo_7.setAttribute("class", "bg-white mb-4 mt-0 d-inline-block mx-auto");
  nodo_7.setAttribute("style", "width: 100px; height:3px;");
  nodo_4.appendChild(nodo_7);

  var nodo_8 = document.createElement("P");
  nodo_8.setAttribute("class", "p-text text-white");
  nodo_4.appendChild(nodo_8);

  var nodo_9 = document.createTextNode(new String("Opiniones"));
  nodo_8.appendChild(nodo_9);

  var nodo_10 = document.createElement("DIV");
  nodo_10.setAttribute("class", "row align-items-md-center text-white");
  nodo_2.appendChild(nodo_10);

  var nodo_11 = document.createElement("DIV");
  nodo_11.setAttribute("class", "col-lg-12 col-md-12 col-sm-12");
  nodo_10.appendChild(nodo_11);

  var nodo_12 = document.createElement("DIV");
  nodo_12.setAttribute("id", "carouselExampleCaptions");
  nodo_12.setAttribute("class", "carousel slide");
  nodo_12.setAttribute("data-bs-ride", "carousel");
  nodo_11.appendChild(nodo_12);

  var nodo_13 = document.createElement("DIV");
  nodo_13.setAttribute("class", "carousel-inner");
  nodo_12.appendChild(nodo_13);

  for (let i = 0; i < jsonC[pos].comentarios.length; i++) {
    var nodo_14 = document.createElement("DIV");
    i == 0
      ? nodo_14.setAttribute("class", "carousel-item active")
      : nodo_14.setAttribute("class", "carousel-item");
    nodo_13.appendChild(nodo_14);

    var nodo_15 = document.createElement("DIV");
    nodo_15.setAttribute("class", "row p-4");
    nodo_14.appendChild(nodo_15);

    var nodo_16 = document.createElement("DIV");
    nodo_16.setAttribute("class", "t-card");
    nodo_15.appendChild(nodo_16);

    var nodo_17 = document.createElement("I");
    nodo_17.setAttribute("class", "fa fa-quote-left");
    nodo_17.setAttribute("aria-hidden", "true");
    nodo_16.appendChild(nodo_17);

    var nodo_18 = document.createElement("P");
    nodo_18.setAttribute("class", "lh-lg");
    nodo_18.innerText = jsonC[pos].comentarios[i].text;
    nodo_16.appendChild(nodo_18);

    var nodo_19 = document.createElement("I");
    nodo_19.setAttribute("class", "fa fa-quote-right");
    nodo_19.setAttribute("aria-hidden", "true");
    nodo_16.appendChild(nodo_19);

    var nodo_20 = document.createElement("BR");
    nodo_16.appendChild(nodo_20);

    var nodo_21 = document.createElement("DIV");
    nodo_21.setAttribute("class", "row");
    nodo_15.appendChild(nodo_21);

    var nodo_22 = document.createElement("DIV");
    nodo_22.setAttribute("class", "col-sm-2 pt-3");
    nodo_21.appendChild(nodo_22);

    //stars
    for (let j = 0; j < jsonC[pos].comentarios[i].rate; j++) {
      var star = document.createElement("I");
      star.setAttribute("class", "fa-solid fa-star");
      star.setAttribute("style", "color: #ffea00;");

      nodo_22.appendChild(star);
    }

    var nodo_24 = document.createElement("DIV");
    nodo_24.setAttribute("class", "col-sm-10");
    nodo_21.appendChild(nodo_24);

    var nodo_25 = document.createElement("DIV");
    nodo_25.setAttribute("class", "arrow-down d-none d-lg-block");
    nodo_24.appendChild(nodo_25);

    var nodo_26 = document.createElement("H4");
    nodo_24.appendChild(nodo_26);

    var nodo_27 = document.createElement("STRONG");
    nodo_26.appendChild(nodo_27);

    var nodo_28 = document.createTextNode(
      new String(jsonC[pos].comentarios[i].author)
    );
    nodo_27.appendChild(nodo_28);
  }

  var nodo_77 = document.createElement("DIV");
  nodo_77.setAttribute("class", "controls push-right");
  nodo_11.appendChild(nodo_77);

  var nodo_78 = document.createElement("A");
  nodo_78.setAttribute(
    "class",
    "left fa fa-chevron-left text-white btn btn btn-outline-light"
  );
  nodo_78.setAttribute("href", "#carouselExampleCaptions");
  nodo_78.setAttribute("data-bs-slide", "prev");
  nodo_77.appendChild(nodo_78);

  var nodo_79 = document.createElement("A");
  nodo_79.setAttribute(
    "class",
    "right fa fa-chevron-right text-white btn btn btn-outline-light"
  );
  nodo_79.setAttribute("href", "#carouselExampleCaptions");
  nodo_79.setAttribute("data-bs-slide", "next");
  nodo_77.appendChild(nodo_79);

  var form_1 = document.createElement("DIV");
  form_1.setAttribute("class", "tab-pane");
  form_1.setAttribute("id", "add-comment");

  var form_2 = document.createElement("FORM");
  form_2.setAttribute("action", "#");
  form_2.setAttribute("method", "post");
  form_2.setAttribute("class", "form-horizontal");
  form_2.setAttribute("id", "commentForm");
  form_2.setAttribute("role", "form");
  form_1.appendChild(form_2);

  var form_3 = document.createElement("DIV");
  form_3.setAttribute("class", "form-group");
  form_2.appendChild(form_3);

  var form_4 = document.createElement("LABEL");
  form_4.setAttribute("for", "email");
  form_4.setAttribute("class", "col-sm-2 control-label text-white");
  form_3.appendChild(form_4);

  var form_5 = document.createTextNode(new String("Nombre"));
  form_4.appendChild(form_5);

  var form_6 = document.createElement("DIV");
  form_6.setAttribute("class", "col-sm-10");
  form_3.appendChild(form_6);

  var form_7 = document.createElement("TEXTAREA");
  form_7.setAttribute("class", "form-control");
  form_7.setAttribute("name", "addComment");
  form_7.setAttribute("id", "addComment");
  form_7.setAttribute("rows", "5");
  form_6.appendChild(form_7);

  var form_8 = document.createElement("DIV");
  form_8.setAttribute("class", "form-group");
  form_2.appendChild(form_8);

  var form_9 = document.createElement("LABEL");
  form_9.setAttribute("for", "email");
  form_9.setAttribute("class", "col-sm-2 control-label text-white");
  form_8.appendChild(form_9);

  var form_10 = document.createTextNode(new String("Comentario"));
  form_9.appendChild(form_10);

  var form_11 = document.createElement("DIV");
  form_11.setAttribute("class", "col-sm-10");
  form_8.appendChild(form_11);

  var form_12 = document.createElement("TEXTAREA");
  form_12.setAttribute("class", "form-control");
  form_12.setAttribute("name", "addComment");
  form_12.setAttribute("id", "addComment");
  form_12.setAttribute("rows", "5");
  form_11.appendChild(form_12);

  var form_13 = document.createElement("DIV");
  form_13.setAttribute("class", "form-group");
  form_2.appendChild(form_13);

  var form_14 = document.createElement("LABEL");
  form_14.setAttribute("for", "uploadMedia");
  form_14.setAttribute("class", "col-sm-2 control-label text-white");
  form_13.appendChild(form_14);

  var form_15 = document.createTextNode(new String("Valoración [0-5]"));
  form_14.appendChild(form_15);

  var form_16 = document.createElement("DIV");
  form_16.setAttribute("class", "col-sm-10");
  form_13.appendChild(form_16);

  var form_17 = document.createElement("DIV");
  form_17.setAttribute("class", "input-group");
  form_16.appendChild(form_17);

  var form_18 = document.createElement("DIV");
  form_18.setAttribute("class", "input-group-addon");
  form_17.appendChild(form_18);

  var form_19 = document.createElement("INPUT");
  form_19.setAttribute("type", "number");
  form_19.setAttribute("class", "form-control");
  form_19.setAttribute("name", "uploadMedia");
  form_19.setAttribute("id", "uploadMedia");
  form_17.appendChild(form_19);

  var form_20 = document.createElement("DIV");
  form_20.setAttribute("class", "form-group");
  form_2.appendChild(form_20);

  var form_21 = document.createElement("DIV");
  form_21.setAttribute("class", "col-sm-offset-2 col-sm-10");
  form_20.appendChild(form_21);

  var form_22 = document.createElement("BUTTON");
  form_22.setAttribute(
    "class",
    "btn btn-danger btn-circle text-uppercase margen "
  );
  form_22.setAttribute("type", "button");
  form_22.setAttribute("id", "submitComment");
  form_21.appendChild(form_22);

  var form_23 = document.createElement("SPAN");
  form_23.setAttribute("class", "glyphicon glyphicon-send");
  form_22.appendChild(form_23);

  var form_24 = document.createTextNode(new String("Guardar"));
  form_22.appendChild(form_24);

  form_22.onclick = function () {
    console.log("Nombre: " + form_7.value);
    console.log("Comentario: " + form_12.value);
    console.log("Valoración: " + form_19.value);
    if (form_7.value != "" && form_12.value != "" && form_19.value != "") {
      if (form_19.value > 5 || form_19 < 0) {
        alert("La valoración deber ser un valor entre 0 y 5.");
      } else {
        añadirComentario(form_7.value, form_12.value, form_19.value, pos);
        prepararPaginaProducto(pos);
      }
    } else {
      alert("Rellena todos los campos para añadir el comentario.");
    }
  };

  nodo_2.appendChild(form_1);

  var node_350 = document.createElement("SECTION");
  node_350.setAttribute("id", "gallery");
  node_350.setAttribute("class", "gallery");
  node_17.appendChild(node_350);

  var node_351 = document.createElement("DIV");
  node_351.setAttribute("class", "container aos-init");
  node_351.setAttribute("data-aos", "fade-up");
  node_350.appendChild(node_351);

  var node_352 = document.createElement("DIV");
  node_352.setAttribute("class", "section-header");
  node_351.appendChild(node_352);

  var node_353 = document.createElement("H2");
  node_352.appendChild(node_353);

  var node_354 = document.createTextNode(new String("Fotos"));
  node_353.appendChild(node_354);

  var node_355 = document.createElement("P");
  node_352.appendChild(node_355);

  var node_356 = document.createElement("SPAN");
  node_356.className = "margen aplicar-borde granate";
  node_355.appendChild(node_356);

  var node_357 = document.createTextNode(new String("Fotos"));
  node_356.appendChild(node_357);

  var gallery_1 = document.createElement("DIV");
  gallery_1.setAttribute(
    "class",
    "row text-center text-lg-start granate aplicar-borde margen"
  );

  for (let i = 0; i < json.itemListElement[pos].image.length; i++) {
    var gallery_2 = document.createElement("DIV");
    gallery_2.setAttribute("class", "col-lg-3 col-md-4 col-6");
    gallery_1.appendChild(gallery_2);

    var gallery_3 = document.createElement("A");
    gallery_3.setAttribute("class", "d-block mb-4 h-100");
    gallery_2.appendChild(gallery_3);

    const contImgx = document.createElement("div");
    contImgx.className = "caja margen";

    const contImg1x = document.createElement("div");
    contImg1x.className = "box1 tamañoImgProductoMenu";

    var gallery_4 = document.createElement("IMG");
    //gallery_4.setAttribute('class', 'img-fluid img-thumbnail');
    gallery_4.setAttribute("src", json.itemListElement[pos].image[i]);
    gallery_4.setAttribute("alt", "");
    contImg1x.appendChild(gallery_4);
    contImgx.appendChild(contImg1x);
    gallery_3.appendChild(contImgx);
  }

  node_351.appendChild(gallery_1);

  var node_412 = document.createElement("SECTION");
  node_412.setAttribute("id", "contact");
  node_412.setAttribute("class", "contact section-bg");
  node_17.appendChild(node_412);

  var node_413 = document.createElement("DIV");
  node_413.setAttribute("class", "container aos-init");
  node_413.setAttribute("data-aos", "fade-up");
  node_412.appendChild(node_413);

  var node_414 = document.createElement("DIV");
  node_414.setAttribute("class", "section-header");
  node_413.appendChild(node_414);

  var node_417 = document.createElement("P");
  node_414.appendChild(node_417);

  var node_418 = document.createElement("SPAN");
  node_418.className = "margen granate aplicar-borde";
  node_417.appendChild(node_418);

  var node_419 = document.createTextNode(new String("Contacto"));
  node_418.appendChild(node_419);

  var contacte = document.createElement("div");
  contacte.className = "container margen aplicar-borde granate";

  node_413.appendChild(contacte);

  var node_420 = document.createElement("DIV");
  node_420.setAttribute("class", "mb-3");
  contacte.appendChild(node_420);

  //funcionamiento de la API de mapa
  var map_1 = document.createElement("DIV");
  map_1.setAttribute("id", "map");
  node_420.appendChild(map_1);
  initMap(
    pos,
    json.itemListElement[pos].geo.latitude,
    json.itemListElement[pos].geo.longitude,
    supermercado,
    restaurante
  );

  var node_422 = document.createElement("DIV");
  node_422.setAttribute("class", "row gy-4");
  contacte.appendChild(node_422);

  var node_423 = document.createElement("DIV");
  node_423.setAttribute("class", "col-md-6");
  node_422.appendChild(node_423);

  var node_424 = document.createElement("DIV");
  node_424.setAttribute("class", "info-item  d-flex align-items-center");
  node_423.appendChild(node_424);

  var node_425 = document.createElement("I");
  node_425.setAttribute("class", "icon bi bi-map flex-shrink-0");
  node_424.appendChild(node_425);

  var node_426 = document.createElement("DIV");
  node_424.appendChild(node_426);

  var node_427 = document.createElement("H3");
  node_426.appendChild(node_427);

  var node_428 = document.createTextNode(new String("Dirección"));
  node_427.appendChild(node_428);

  var node_429 = document.createElement("P");
  node_426.appendChild(node_429);

  var node_430 = document.createTextNode(
    new String(
      json.itemListElement[pos].address.streetAddress +
        " " +
        json.itemListElement[pos].address.postalCode +
        " " +
        json.itemListElement[pos].address.addressRegion +
        ", " +
        json.itemListElement[pos].address.addressLocality
    )
  );
  node_429.appendChild(node_430);

  var node_431 = document.createElement("DIV");
  node_431.setAttribute("class", "col-md-6");
  node_422.appendChild(node_431);

  var node_432 = document.createElement("DIV");
  node_432.setAttribute("class", "info-item d-flex align-items-center");
  node_431.appendChild(node_432);

  var node_433 = document.createElement("I");
  node_433.setAttribute("class", "icon bi bi-envelope flex-shrink-0");
  node_432.appendChild(node_433);

  var node_434 = document.createElement("DIV");
  node_432.appendChild(node_434);

  var node_435 = document.createElement("H3");
  node_434.appendChild(node_435);

  var node_436 = document.createTextNode(new String("Email"));
  node_435.appendChild(node_436);

  var node_437 = document.createElement("P");
  node_434.appendChild(node_437);

  var node_438 = document.createTextNode(json.itemListElement[pos].email);
  node_437.appendChild(node_438);

  var node_439 = document.createElement("DIV");
  node_439.setAttribute("class", "col-md-6");
  node_422.appendChild(node_439);

  var node_440 = document.createElement("DIV");
  node_440.setAttribute("class", "info-item  d-flex align-items-center");
  node_439.appendChild(node_440);

  var node_441 = document.createElement("I");
  node_441.setAttribute("class", "icon bi bi-telephone flex-shrink-0");
  node_440.appendChild(node_441);

  var node_442 = document.createElement("DIV");
  node_440.appendChild(node_442);

  var node_443 = document.createElement("H3");
  node_442.appendChild(node_443);

  var node_444 = document.createTextNode(new String("Teléfono"));
  node_443.appendChild(node_444);

  var node_445 = document.createElement("P");
  node_442.appendChild(node_445);

  var node_446 = document.createTextNode(json.itemListElement[pos].telephone);
  node_445.appendChild(node_446);

  var node_447 = document.createElement("DIV");
  node_447.setAttribute("class", "col-md-6");
  node_422.appendChild(node_447);

  var node_448 = document.createElement("DIV");
  node_448.setAttribute("class", "info-item  d-flex align-items-center");
  node_447.appendChild(node_448);

  var node_449 = document.createElement("I");
  node_449.setAttribute("class", "icon bi bi-share flex-shrink-0");
  node_448.appendChild(node_449);

  var node_450 = document.createElement("DIV");
  node_448.appendChild(node_450);

  var node_451 = document.createElement("H3");
  node_450.appendChild(node_451);

  var node_452 = document.createTextNode(new String("Horario"));
  node_451.appendChild(node_452);

  var node_453 = document.createElement("DIV");
  node_450.appendChild(node_453);

  var node_454 = document.createElement("STRONG");
  node_453.appendChild(node_454);

  var node_455 = document.createElement("STRONG");
  node_453.appendChild(node_455);

  var node_456 = document.createTextNode(
    json.itemListElement[pos].openingHours
  );
  node_453.appendChild(node_456);

  var node_467 = document.createElement("DIV");
  node_467.setAttribute("class", "col-md-6");
  node_422.appendChild(node_467);

  var node_468 = document.createElement("DIV");
  node_468.setAttribute("class", "info-item  d-flex align-items-center");
  node_467.appendChild(node_468);

  var node_469 = document.createElement("I");
  node_469.setAttribute("class", "icon <i fa-solid fa-utensils flex-shrink-0");
  node_468.appendChild(node_469);

  var node_470 = document.createElement("DIV");
  node_468.appendChild(node_470);

  var node_471 = document.createElement("H3");
  node_470.appendChild(node_471);

  var node_472 = document.createTextNode(new String("Restaurante cercano"));
  node_471.appendChild(node_472);

  var node_473 = document.createElement("div");
  node_473.className = "row";
  node_470.appendChild(node_473);

  var node_474 = document.createElement("DIV");
  node_474.className = "col-sm textoIcon";
  node_474.innerText = restaurante.name;
  node_473.appendChild(node_474);

  var imaDiv = document.createElement("div");
  imaDiv.className = "col-sm";

  node_473.appendChild(imaDiv);

  const contImg11 = document.createElement("div");
  contImg11.className = "caja margen";

  const contImg121 = document.createElement("div");
  contImg121.className = "box1 tamañoIcon";

  var node_16 = document.createElement("IMG");

  var url = "https://www.mllcarestaurantes.com/";

  node_16.setAttribute("src", url + restaurante.image[0].contentUrl);
  node_16.setAttribute("alt", "");
  node_16.setAttribute("data-aos", "zoom-out");
  node_16.setAttribute("data-aos-delay", "300");
  contImg121.appendChild(node_16);
  contImg11.appendChild(contImg121);
  imaDiv.appendChild(contImg11);

  var node_475 = document.createElement("DIV");
  node_475.setAttribute("class", "col-md-6");
  node_422.appendChild(node_475);

  var node_476 = document.createElement("DIV");
  node_476.setAttribute("class", "info-item  d-flex align-items-center");
  node_475.appendChild(node_476);

  var node_477 = document.createElement("I");
  node_477.setAttribute("class", "icon <i fa-solid fa-utensils flex-shrink-0");
  node_476.appendChild(node_477);

  var node_478 = document.createElement("DIV");
  node_476.appendChild(node_478);

  var node_479 = document.createElement("H3");
  node_478.appendChild(node_479);

  var node_480 = document.createTextNode(new String("Supermercado cercano"));
  node_479.appendChild(node_480);

  var node_473_2 = document.createElement("div");
  node_473_2.className = "row";
  node_478.appendChild(node_473_2);

  var node_474_2 = document.createElement("DIV");
  node_474_2.className = "col-sm textoIcon";
  node_474_2.innerText = supermercado.name;
  node_473_2.appendChild(node_474_2);

  var imaDiv_2 = document.createElement("div");
  imaDiv_2.className = "col-sm";

  node_473_2.appendChild(imaDiv_2);

  const contImg11_2 = document.createElement("div");
  contImg11_2.className = "caja margen";

  const contImg121_2 = document.createElement("div");
  contImg121_2.className = "box1 tamañoIcon";

  var node_16_2 = document.createElement("IMG");

  node_16_2.setAttribute("src", supermercado.image);
  node_16_2.setAttribute("alt", "");
  node_16_2.setAttribute("data-aos", "zoom-out");
  node_16_2.setAttribute("data-aos-delay", "300");
  contImg121_2.appendChild(node_16_2);
  contImg11_2.appendChild(contImg121_2);
  imaDiv_2.appendChild(contImg11_2);

  var node_457 = document.createElement("DIV");
  node_457.setAttribute("class", "col-md-6 margen");
  node_422.appendChild(node_457);

  var node_458 = document.createElement("DIV");
  node_458.setAttribute("class", "info-item  d-flex align-items-center");
  node_457.appendChild(node_458);

  var node_459 = document.createElement("I");
  node_459.setAttribute("class", "icon bi bi-globe flex-shrink-0");
  node_458.appendChild(node_459);

  var node_460 = document.createElement("DIV");
  node_458.appendChild(node_460);

  var node_461 = document.createElement("H3");
  node_460.appendChild(node_461);

  var node_462 = document.createTextNode(new String("Página Web"));
  node_461.appendChild(node_462);

  var node_463 = document.createElement("a");
  node_460.appendChild(node_463);
  node_463.innerText = json.itemListElement[pos].url;
  node_463.setAttribute("href", json.itemListElement[pos].url);
}

function gestFiltrado(nombre, localidad, abierto, dias) {
  idsFiltrado = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  gestfiltradoNombre(nombre);
  gestfiltradoLocalidad(localidad);
  gestfiltradoAbierto(abierto);
  gestfiltradoDias(dias);
  gestorVisionado(visionActive, false);
}

function gestfiltradoNombre(value) {
  var aux = [];
  var posAux = 0;
  if (value != "") {
    for (let i = 0; i < idsFiltrado.length; i++) {
      if (
        json.itemListElement[idsFiltrado[i]].name
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        aux[posAux++] = json.itemListElement[idsFiltrado[i]].identifier;
      }
    }
    idsFiltrado = aux;
  }
}

function gestfiltradoLocalidad(value) {
  var aux = [];
  var posAux = 0;
  if (value != "") {
    for (let i = 0; i < idsFiltrado.length; i++) {
      if (
        json.itemListElement[idsFiltrado[i]].address.addressRegion
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        aux[posAux++] = json.itemListElement[idsFiltrado[i]].identifier;
      }
    }
    idsFiltrado = aux;
  }
}

function gestfiltradoAbierto(abierto) {
  if (abierto) {
    var aux = [];
    var posAux = 0;
    for (let i = 0; i < idsFiltrado.length; i++) {
      if (estaAbierto(json.itemListElement[idsFiltrado[i]].openingHours)) {
        aux[posAux++] = json.itemListElement[idsFiltrado[i]].identifier;
      }
    }
    idsFiltrado = aux;
  }
}

function gestfiltradoDias(dias) {
  if (dias.length > 0) {
    var aux = [];
    var posAux = 0;
    for (let i = 0; i < idsFiltrado.length; i++) {
      if (
        diasAbierto(dias, json.itemListElement[idsFiltrado[i]].openingHours)
      ) {
        aux[posAux++] = json.itemListElement[idsFiltrado[i]].identifier;
      }
    }
    idsFiltrado = aux;
  }
}

function diasAbierto(dias, horario) {
  const semana = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  for (let i = 0; i < dias.length; i++) {
    if (dias[i] && !horario.includes(semana[i])) {
      return false;
    }
  }
  return true;
}

function filtrado2() {
  const dad = document.getElementById("seccion");
  // Crear el elemento contenedor y añadir las clases necesarias

  var filtrado_1 = document.createElement("DIV");
  filtrado_1.setAttribute("class", "container granate aplicar-borde margen");
  filtrado_1.setAttribute("id", "filtrado");

  var filtrado_2 = document.createElement("DIV");
  filtrado_2.setAttribute("class", "row");
  filtrado_1.appendChild(filtrado_2);

  var filtrado_3 = document.createElement("DIV");
  filtrado_3.setAttribute("class", "col-sm margen");
  filtrado_2.appendChild(filtrado_3);

  var filtrado_4 = document.createElement("DIV");
  filtrado_4.setAttribute("class", "form-floating margen");
  filtrado_3.appendChild(filtrado_4);

  var filtrado_5 = document.createElement("INPUT");
  filtrado_5.setAttribute("type", "nombre");
  filtrado_5.setAttribute("class", "form-control");
  filtrado_5.setAttribute("id", "nombre");
  filtrado_5.setAttribute("placeholder", "Nombre");

  filtrado_4.appendChild(filtrado_5);

  var filtrado_6 = document.createElement("LABEL");
  filtrado_6.setAttribute("for", "nombre");
  filtrado_4.appendChild(filtrado_6);

  var filtrado_7 = document.createTextNode(new String("Nombre"));
  filtrado_6.appendChild(filtrado_7);

  var filtrado_8 = document.createElement("DIV");
  filtrado_8.setAttribute("class", "col-sm margen");
  filtrado_2.appendChild(filtrado_8);

  var filtrado_9 = document.createElement("DIV");
  filtrado_9.setAttribute("class", "form-floating margen");
  filtrado_8.appendChild(filtrado_9);

  var filtrado_10 = document.createElement("INPUT");
  filtrado_10.setAttribute("type", "localidad");
  filtrado_10.setAttribute("class", "form-control");
  filtrado_10.setAttribute("id", "localidad");
  filtrado_10.setAttribute("placeholder", "Localidad");
  filtrado_9.appendChild(filtrado_10);

  var filtrado_11 = document.createElement("LABEL");
  filtrado_11.setAttribute("for", "localidad");
  filtrado_9.appendChild(filtrado_11);

  var filtrado_12 = document.createTextNode(new String("Localidad"));
  filtrado_11.appendChild(filtrado_12);

  var filtrado_13 = document.createElement("DIV");
  filtrado_13.setAttribute("class", "col-md-auto margen");
  filtrado_13.setAttribute("style", "align-self: center");
  filtrado_2.appendChild(filtrado_13);

  var filtrado_14 = document.createElement("DIV");
  filtrado_14.setAttribute("class", "multiselect");
  filtrado_13.appendChild(filtrado_14);

  var filtrado_15 = document.createElement("DIV");
  filtrado_15.setAttribute("class", "selectBox");
  filtrado_15.setAttribute("onclick", "showCheckboxes()");
  filtrado_14.appendChild(filtrado_15);

  var filtrado_16 = document.createElement("SELECT");
  filtrado_16.setAttribute("class", "form-select");
  filtrado_16.setAttribute("aria-label", "Default select example");
  filtrado_15.appendChild(filtrado_16);

  var filtrado_17 = document.createElement("OPTION");
  filtrado_16.appendChild(filtrado_17);

  var filtrado_18 = document.createTextNode(new String("Elige los días"));
  filtrado_17.appendChild(filtrado_18);

  var filtrado_19 = document.createElement("DIV");
  filtrado_19.setAttribute("class", "overSelect");
  filtrado_15.appendChild(filtrado_19);

  var filtrado_20 = document.createElement("DIV");
  filtrado_20.setAttribute("id", "checkboxes");
  filtrado_14.appendChild(filtrado_20);

  var filtrado_21 = document.createElement("LABEL");
  filtrado_21.setAttribute("for", "one");
  filtrado_20.appendChild(filtrado_21);

  var filtrado_22 = document.createElement("INPUT");
  filtrado_22.setAttribute("type", "checkbox");
  filtrado_22.setAttribute("id", "one");
  filtrado_21.appendChild(filtrado_22);

  var filtrado_23 = document.createTextNode(new String("Lunes"));
  filtrado_21.appendChild(filtrado_23);

  var filtrado_24 = document.createElement("LABEL");
  filtrado_24.setAttribute("for", "two");
  filtrado_20.appendChild(filtrado_24);

  var filtrado_25 = document.createElement("INPUT");
  filtrado_25.setAttribute("type", "checkbox");
  filtrado_25.setAttribute("id", "two");
  filtrado_24.appendChild(filtrado_25);

  var filtrado_26 = document.createTextNode(new String("Martes"));
  filtrado_24.appendChild(filtrado_26);

  var filtrado_27 = document.createElement("LABEL");
  filtrado_27.setAttribute("for", "three");
  filtrado_20.appendChild(filtrado_27);

  var filtrado_28 = document.createElement("INPUT");
  filtrado_28.setAttribute("type", "checkbox");
  filtrado_28.setAttribute("id", "three");
  filtrado_27.appendChild(filtrado_28);

  var filtrado_29 = document.createTextNode(new String("Miercoles"));
  filtrado_27.appendChild(filtrado_29);

  var filtrado_30 = document.createElement("LABEL");
  filtrado_30.setAttribute("for", "four");
  filtrado_20.appendChild(filtrado_30);

  var filtrado_31 = document.createElement("INPUT");
  filtrado_31.setAttribute("type", "checkbox");
  filtrado_31.setAttribute("id", "four");
  filtrado_30.appendChild(filtrado_31);

  var filtrado_32 = document.createTextNode(new String("Jueves"));
  filtrado_30.appendChild(filtrado_32);

  var filtrado_33 = document.createElement("LABEL");
  filtrado_33.setAttribute("for", "five");
  filtrado_20.appendChild(filtrado_33);

  var filtrado_34 = document.createElement("INPUT");
  filtrado_34.setAttribute("type", "checkbox");
  filtrado_34.setAttribute("id", "five");
  filtrado_33.appendChild(filtrado_34);

  var filtrado_35 = document.createTextNode(new String("Viernes"));
  filtrado_33.appendChild(filtrado_35);

  var filtrado_36 = document.createElement("LABEL");
  filtrado_36.setAttribute("for", "six");
  filtrado_20.appendChild(filtrado_36);

  var filtrado_37 = document.createElement("INPUT");
  filtrado_37.setAttribute("type", "checkbox");
  filtrado_37.setAttribute("id", "six");
  filtrado_36.appendChild(filtrado_37);

  var filtrado_38 = document.createTextNode(new String("Sabado"));
  filtrado_36.appendChild(filtrado_38);

  var filtrado_39 = document.createElement("LABEL");
  filtrado_39.setAttribute("for", "seven");
  filtrado_20.appendChild(filtrado_39);

  var filtrado_40 = document.createElement("INPUT");
  filtrado_40.setAttribute("type", "checkbox");
  filtrado_40.setAttribute("id", "seven");
  filtrado_39.appendChild(filtrado_40);

  var filtrado_41 = document.createTextNode(new String("Domingo"));
  filtrado_39.appendChild(filtrado_41);

  var filtrado_42 = document.createElement("DIV");
  filtrado_42.setAttribute("class", "col-md-auto margen");
  filtrado_42.setAttribute("style", "align-self: center");
  filtrado_2.appendChild(filtrado_42);

  var filtrado_43 = document.createElement("DIV");
  filtrado_43.setAttribute("class", "form-check form-switch");
  filtrado_42.appendChild(filtrado_43);

  var filtrado_44 = document.createElement("INPUT");
  filtrado_44.setAttribute("class", "form-check-input");
  filtrado_44.setAttribute("type", "checkbox");
  filtrado_44.setAttribute("id", "flexSwitchCheckDefault");
  filtrado_43.appendChild(filtrado_44);

  var filtrado_45 = document.createElement("LABEL");
  filtrado_45.setAttribute("class", "form-check-label letraEstilo");
  filtrado_45.setAttribute("for", "flexSwitchCheckDefault");
  filtrado_43.appendChild(filtrado_45);

  var filtrado_46 = document.createTextNode(new String("Abierto"));
  filtrado_45.appendChild(filtrado_46);

  //instancia de eventos
  filtrado_5.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };

  filtrado_10.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };

  filtrado_44.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    abiertoCheck = !abiertoCheck;
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };

  filtrado_22.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    diasSelected[0] = !diasSelected[0];
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };
  filtrado_25.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    diasSelected[1] = !diasSelected[1];
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };
  filtrado_28.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    diasSelected[2] = !diasSelected[2];
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };
  filtrado_31.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    diasSelected[3] = !diasSelected[3];
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };
  filtrado_34.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    diasSelected[4] = !diasSelected[4];
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };

  filtrado_37.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    diasSelected[5] = !diasSelected[5];
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };

  filtrado_40.oninput = function () {
    const nombre = filtrado_5.value;
    const localidad = filtrado_10.value;
    diasSelected[6] = !diasSelected[6];
    gestFiltrado(nombre, localidad, abiertoCheck, diasSelected);
  };

  dad.appendChild(filtrado_1);
}

function botonesNav(navState) {
  if (document.getElementById("navbar").hasChildNodes()) {
    while (document.getElementById("navbar").childNodes.length >= 1) {
      document
        .getElementById("navbar")
        .removeChild(document.getElementById("navbar").firstChild);
    }
  }

  var ul = document.createElement("ul");
  ul.setAttribute("id", "ul-nav");
  //ul.setAttribute('style', 'margin-right: 100%');
  switch (navState) {
    case 0:
      var busqueda = document.createElement("li");
      var refb = document.createElement("a");
      refb.setAttribute("id", "busqueda");
      refb.setAttribute("href", "javascript:prepararBusqueda()");
      refb.innerText = "Búsqueda";
      busqueda.appendChild(refb);

      var contacto = document.createElement("li");
      var refc = document.createElement("a");
      refc.setAttribute("id", "¿Quiénes Somos?");
      refc.setAttribute("href", "javascript:prepararQuienesSomos()");
      refc.innerText = "¿Quiénes Somos?";
      contacto.appendChild(refc);

      ul.appendChild(busqueda);
      ul.appendChild(contacto);
      document.getElementById("navbar").appendChild(ul);
      break;
    case 1:
      var busqueda = document.createElement("li");
      var refb = document.createElement("a");
      refb.setAttribute("id", "busqueda");
      refb.setAttribute("href", "javascript:prepararBusqueda()");
      refb.innerText = "Búsqueda";
      busqueda.appendChild(refb);

      var contacto = document.createElement("li");
      var refc = document.createElement("a");
      refc.setAttribute("id", "¿Quiénes Somos?");
      refc.setAttribute("href", "javascript:prepararQuienesSomos()");
      refc.innerText = "¿Quiénes Somos?";
      contacto.appendChild(refc);

      ul.appendChild(busqueda);
      ul.appendChild(contacto);

      var node_1 = document.createElement("LI");
      var node_2 = document.createElement("A");
      node_2.setAttribute("href", "#hero");
      //node_2.setAttribute('style', 'color:white');
      node_1.appendChild(node_2);
      var node_3 = document.createTextNode(new String("Inicio"));
      node_2.appendChild(node_3);

      var node_4 = document.createElement("LI");
      var node_5 = document.createElement("A");
      node_5.setAttribute("href", "#about");
      //node_5.setAttribute('style', 'color:white');
      node_4.appendChild(node_5);
      var node_6 = document.createTextNode(new String("Descripción"));
      node_5.appendChild(node_6);

      var node_7 = document.createElement("LI");
      var node_8 = document.createElement("A");
      node_8.setAttribute("href", "#weather");
      //node_8.setAttribute('style', 'color:white');
      node_7.appendChild(node_8);
      var node_9 = document.createTextNode(new String("Tiempo"));
      node_8.appendChild(node_9);

      var node_10 = document.createElement("LI");
      var node_11 = document.createElement("A");
      node_11.setAttribute("href", "#menu");
      //node_11.setAttribute('style', 'color:white');
      node_10.appendChild(node_11);
      var node_12 = document.createTextNode(new String("Vinos"));
      node_11.appendChild(node_12);

      var node_10x = document.createElement("LI");
      var node_11x = document.createElement("A");
      node_11x.setAttribute("href", "#testimonials");
      //node_11.setAttribute('style', 'color:white');
      node_10x.appendChild(node_11x);
      var node_12x = document.createTextNode(new String("Comentarios"));
      node_11x.appendChild(node_12x);

      var node_19 = document.createElement("LI");
      var node_20 = document.createElement("A");
      node_20.setAttribute("href", "#gallery");
      //node_20.setAttribute('style', 'color:white');
      node_19.appendChild(node_20);
      var node_21 = document.createTextNode(new String("Fotos"));
      node_20.appendChild(node_21);

      var node_22 = document.createElement("LI");
      var node_23 = document.createElement("A");
      node_23.setAttribute("href", "#contact");
      //node_23.setAttribute('style', 'color:white');
      //node_22.setAttribute('style', 'margin-right: 25%');
      node_22.appendChild(node_23);
      var node_24 = document.createTextNode(new String("Contacto"));
      node_23.appendChild(node_24);

      ul.appendChild(node_1);
      ul.appendChild(node_4);
      ul.appendChild(node_7);
      ul.appendChild(node_10);
      ul.appendChild(node_10x);
      ul.appendChild(node_19);
      ul.appendChild(node_22);

      document.getElementById("navbar").appendChild(ul);
      //document.getElementById('navbar').appendChild(ul1);
      break;
  }
  const icono = document.getElementById("icono");
  icono.onclick = function () {
    paginaPrincipal();
  };
}

function paginaPrincipal() {
  var seccion = document.getElementById("seccion");
  botonesNav(0);

  if (seccion.hasChildNodes()) {
    while (seccion.childNodes.length >= 1) {
      seccion.removeChild(seccion.firstChild);
    }
  }

  if (carrusel != null) {
    seccion.appendChild(carrusel);
    carrusel = null;
  }
}

function about() {

    
  var seccion = document.getElementById("seccion");

  var about_1 = document.createElement("SECTION");
  about_1.setAttribute("class", "section about-section gray-bg");
  about_1.setAttribute("id", "about");
  seccion.appendChild(about_1);

  var about_2 = document.createElement("DIV");
  about_2.setAttribute("class", "container granate aplicar-borde margen");
  about_1.appendChild(about_2);

  var about_3 = document.createElement("DIV");
  about_3.setAttribute("class", "container");
  about_2.appendChild(about_3);

  var about_4 = document.createElement("DIV");
  about_4.setAttribute("class", "row align-items-center flex-row-reverse");
  about_3.appendChild(about_4);

  var about_5 = document.createElement("DIV");
  about_5.setAttribute("class", "col-lg-6");
  about_4.appendChild(about_5);

  var about_6 = document.createElement("DIV");
  about_6.setAttribute(
    "class",
    "about-text go-to margen bg-white aplicar-borde"
  );
  about_5.appendChild(about_6);

  var about_7 = document.createElement("DIV");
  about_7.setAttribute("style", "text-align: center;");
  about_6.appendChild(about_7);

  var about_8 = document.createElement("H3");
  about_8.innerHTML = "¿Quiénes Somos?";
  about_7.appendChild(about_8);

  var about_9 = document.createElement("H6");
  about_9.setAttribute("class", "lead");
  about_7.appendChild(about_9);

  var about_10 = document.createTextNode(new String("Equipo"));
  about_9.appendChild(about_10);

  var about_11 = document.createElement("P");
  about_7.appendChild(about_11);

  var about_12 = document.createTextNode(
    new String(
      "Esta webApp pertenece a la elaboración de la práctica de Tecnología Multimedia de la Universidad de las Islas Baleares. Este equipo está formado por un solo integrante que ha llevado a cabo toda la implementación de la webApp en honor a todas las bodegas de alta cualidad que habitan en la isla de Mallorca. "
    )
  );
  about_11.appendChild(about_12);

  var about_13 = document.createElement("DIV");
  about_13.setAttribute("class", "row about-list");
  about_7.appendChild(about_13);

  var about_14 = document.createElement("DIV");
  about_14.setAttribute("class", "col-md-6");
  about_13.appendChild(about_14);

  var about_15 = document.createElement("DIV");
  about_15.setAttribute("class", "media");
  about_14.appendChild(about_15);

  var about_16 = document.createElement("LABEL");
  about_15.appendChild(about_16);

  var about_17 = document.createTextNode(new String("Edad"));
  about_16.appendChild(about_17);

  var about_18 = document.createElement("P");
  about_15.appendChild(about_18);

  var about_19 = document.createTextNode(new String("23 años"));
  about_18.appendChild(about_19);

  var about_20 = document.createElement("DIV");
  about_20.setAttribute("class", "media");
  about_14.appendChild(about_20);

  var about_21 = document.createElement("LABEL");
  about_20.appendChild(about_21);

  var about_22 = document.createTextNode(new String("Residencia"));
  about_21.appendChild(about_22);

  var about_23 = document.createElement("P");
  about_20.appendChild(about_23);

  var about_24 = document.createTextNode(new String("Mallorca"));
  about_23.appendChild(about_24);

  var about_25 = document.createElement("DIV");
  about_25.setAttribute("class", "media");
  about_14.appendChild(about_25);

  var about_26 = document.createElement("LABEL");
  about_25.appendChild(about_26);

  var about_27 = document.createTextNode(new String("Dirección"));
  about_26.appendChild(about_27);

  var about_28 = document.createElement("P");
  about_25.appendChild(about_28);

  var about_29 = document.createTextNode(new String("Pollensa, ES"));
  about_28.appendChild(about_29);

  var about_30 = document.createElement("DIV");
  about_30.setAttribute("class", "col-md-6");
  about_13.appendChild(about_30);

  var about_31 = document.createElement("DIV");
  about_31.setAttribute("class", "media");
  about_30.appendChild(about_31);

  var about_32 = document.createElement("LABEL");
  about_31.appendChild(about_32);

  var about_33 = document.createTextNode(new String("E-mail"));
  about_32.appendChild(about_33);

  var about_34 = document.createElement("P");
  about_31.appendChild(about_34);

  var about_35 = document.createTextNode(
    new String("bartomeu.capo2@estudiant.uib.cat")
  );
  about_34.appendChild(about_35);

  var about_36 = document.createElement("DIV");
  about_36.setAttribute("class", "media");
  about_30.appendChild(about_36);

  var about_37 = document.createElement("LABEL");
  about_36.appendChild(about_37);

  var about_38 = document.createTextNode(new String("Telefono"));
  about_37.appendChild(about_38);

  var about_39 = document.createElement("P");
  about_36.appendChild(about_39);

  var about_40 = document.createTextNode(new String("638 346 523"));
  about_39.appendChild(about_40);

  var about_41 = document.createElement("DIV");
  about_41.setAttribute("class", "col col-sm-6 col-xs-12 wow fadeInUp");
  about_41.setAttribute("data-wow-duration", "1s");
  about_41.setAttribute("data-wow-delay", "0.2s");
  about_41.setAttribute("data-wow-offset", "0");
  about_41.setAttribute(
    "style",
    "visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeInUp;"
  );
  about_4.appendChild(about_41);

  var about_42 = document.createElement("DIV");
  about_42.setAttribute("class", "our-team margen");
  about_41.appendChild(about_42);

  var about_43 = document.createElement("IMG");
  about_43.setAttribute("src", "img/profile.jpg");
  about_43.setAttribute("alt", "Bartomeu Capó Salas");
  about_42.appendChild(about_43);

  var about_44 = document.createElement("DIV");
  about_44.setAttribute("class", "team-content");
  about_42.appendChild(about_44);

  var about_45 = document.createElement("H3");
  about_45.setAttribute("class", "title");
  about_44.appendChild(about_45);

  var about_46 = document.createTextNode(new String("Bartomeu Capó Salas"));
  about_45.appendChild(about_46);

  var about_47 = document.createElement("SPAN");
  about_47.setAttribute("class", "post");
  about_44.appendChild(about_47);

  var about_48 = document.createTextNode(new String("Developer"));
  about_47.appendChild(about_48);

  var about_49 = document.createElement("BR");
  about_3.appendChild(about_49);

  var about_50 = document.createElement("DIV");
  about_50.setAttribute("class", "row");
  about_50.setAttribute("style", "text-align: center;");
  about_2.appendChild(about_50);

  var col1 = document.createElement("div");
  col1.className = "col-sm margen";
  about_50.appendChild(col1);

  var col2 = document.createElement("div");
  col2.className = "col-sm";
  about_50.appendChild(col2);

  var video_0 = document.createElement('div');
  video_0.className = "video-container";
  col1.appendChild(video_0);

  var video_1 = document.createElement("VIDEO");
  video_1.setAttribute("controls", "");
  video_0.appendChild(video_1);

  var video_2 = document.createElement("SOURCE");
  video_2.setAttribute("src", "video/feria.mp4");
  video_2.setAttribute("type", "video/mp4");
  video_1.appendChild(video_2);

  var video_3 = document.createElement("SOURCE");
  video_3.setAttribute("src", "video/feria.webm");
  video_3.setAttribute("type", "video/webm");
  video_1.appendChild(video_3);

  var video_4 = document.createElement("SOURCE");
  video_4.setAttribute("src", "video/feria.ogg");
  video_4.setAttribute("type", "video/ogg");
  video_1.appendChild(video_4);

  //grafico
  const contImg2 = document.createElement("div");
  contImg2.setAttribute('id','chart');
  col2.appendChild(contImg2);

  createGrafico();
}

function listadoCardXL() {
  const dad = document.getElementById("seccion");
  const container1 = document.createElement("div");
  container1.setAttribute("id", "tabla");
  container1.className = "container granate aplicar-borde margen";

  const row = document.createElement("div");
  row.className = "row";

  const containerIcons = document.createElement("div");
  containerIcons.className = "container";

  const icon1 = document.createElement("i");
  icon1.className = "fa-solid fa-map-location iconosVisionado";
  icon1.onclick = function () {
    gestorVisionado(2,false);
  };

  const icon2 = document.createElement("i");
  icon2.className = "fa-solid fa-table-cells iconosVisionado";
  icon2.onclick = function () {
    gestorVisionado(0,false);
  };

  const icon3 = document.createElement("i");
  icon3.className = "fa-solid fa-list iconosVisionado";
  icon3.onclick = function () {
    gestorVisionado(1,false);
  };

  containerIcons.appendChild(icon1);
  containerIcons.appendChild(icon2);
  containerIcons.appendChild(icon3);

  row.appendChild(containerIcons);

  container1.append(row);

  dad.appendChild(container1);

  const col = document.createElement("div");
  col.className = "col margen";

  for (let i = 0; i < idsFiltrado.length; i++) {
    const container = document.createElement("div");
    container.classList.add("container", "bg-white", "aplicar-borde", "margen");

    const fila = document.createElement("div");
    fila.classList.add("row");

    const col1 = document.createElement("div");
    col1.classList.add("col-sm");
    //meter carousel
    const carousel = document.createElement("div");
    carousel.setAttribute("id", "carouselExamplex" + i);
    carousel.classList.add("carousel", "slide", "margen");
    carousel.setAttribute("data-bs-ride", "carousel");

    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel-inner");

    const carouselItem1 = document.createElement("div");
    carouselItem1.classList.add("carousel-item", "active");

    const img1 = document.createElement("img");
    img1.setAttribute("src", json.itemListElement[idsFiltrado[i]].image[0]);
    img1.classList.add("d-block", "w-100");
    carouselItem1.appendChild(img1);

    const carouselItem2 = document.createElement("div");
    carouselItem2.classList.add("carousel-item");

    const img2 = document.createElement("img");
    img2.setAttribute("src", json.itemListElement[idsFiltrado[i]].image[1]);
    img2.classList.add("d-block", "w-100");
    carouselItem2.appendChild(img2);

    const carouselItem3 = document.createElement("div");
    carouselItem3.classList.add("carousel-item");

    const img3 = document.createElement("img");
    img3.setAttribute("src", json.itemListElement[idsFiltrado[i]].image[2]);
    img3.classList.add("d-block", "w-100");
    carouselItem3.appendChild(img3);

    carouselInner.appendChild(carouselItem1);
    carouselInner.appendChild(carouselItem2);
    carouselInner.appendChild(carouselItem3);

    const prevButton = document.createElement("button");
    prevButton.setAttribute("type", "button");
    prevButton.setAttribute("data-bs-target", "#carouselExamplex" + i);
    prevButton.setAttribute("data-bs-slide", "prev");
    prevButton.classList.add("carousel-control-prev");

    const prevIcon = document.createElement("span");
    prevIcon.classList.add("carousel-control-prev-icon");
    prevIcon.setAttribute("aria-hidden", "true");
    prevButton.appendChild(prevIcon);

    const prevText = document.createElement("span");
    prevText.classList.add("visually-hidden");
    prevText.innerText = "Previous";
    prevButton.appendChild(prevText);

    const nextButton = document.createElement("button");
    nextButton.setAttribute("type", "button");
    nextButton.setAttribute("data-bs-target", "#carouselExamplex" + i);
    nextButton.setAttribute("data-bs-slide", "next");
    nextButton.classList.add("carousel-control-next");

    const nextIcon = document.createElement("span");
    nextIcon.classList.add("carousel-control-next-icon");
    nextIcon.setAttribute("aria-hidden", "true");
    nextButton.appendChild(nextIcon);

    const nextText = document.createElement("span");
    nextText.classList.add("visually-hidden");
    nextText.innerText = "Next";
    nextButton.appendChild(nextText);

    carousel.appendChild(carouselInner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    col1.appendChild(carousel);
    //end carousel
    const col2 = document.createElement("div");
    col2.classList.add("col-sm");
    //desc
    const row2 = document.createElement("div");
    row2.classList.add("row");

    const col4 = document.createElement("div");
    col4.classList.add("col");

    const contImg = document.createElement("div");
    contImg.className = "caja margen";

    const contImg1 = document.createElement("div");
    contImg1.className = "box1 tamañoImgCard";

    const logoimg = document.createElement("img");
    logoimg.setAttribute("src", json.itemListElement[idsFiltrado[i]].logo);

    const dl = document.createElement("dl");

    const dt1 = document.createElement("dt");
    dt1.textContent = "Horario: ";
    const dd1 = document.createElement("dd");
    dd1.textContent = json.itemListElement[idsFiltrado[i]].openingHours;

    const dt2 = document.createElement("dt");
    dt2.textContent = "Teléfono: ";
    const dd2 = document.createElement("dd");
    dd2.textContent = json.itemListElement[idsFiltrado[i]].telephone;

    const dt3 = document.createElement("dt");
    dt3.textContent = "Email: ";
    const dd3 = document.createElement("dd");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.classList.add("text-navy");
    a.textContent = json.itemListElement[idsFiltrado[i]].email;
    dd3.appendChild(a);

    const dt4 = document.createElement("dt");
    dt4.textContent = "Web: ";
    const dd4 = document.createElement("dd");
    const a2 = document.createElement("a");
    a2.setAttribute("href", json.itemListElement[idsFiltrado[i]].url);
    a2.classList.add("text-navy");
    a2.textContent = json.itemListElement[idsFiltrado[i]].url;
    dd4.appendChild(a2);

    const dt5 = document.createElement("dt");
    dt5.textContent = "Dirección: ";
    const br = document.createElement("br");
    const dd5_1 = document.createElement("dd");
    dd5_1.textContent =
      json.itemListElement[idsFiltrado[i]].address.streetAddress;
    const dd5_2 = document.createElement("dd");
    dd5_2.textContent =
      json.itemListElement[idsFiltrado[i]].address.addressLocality +
      " " +
      json.itemListElement[idsFiltrado[i]].address.addressRegion +
      " " +
      json.itemListElement[idsFiltrado[i]].address.postalCode;

    dl.appendChild(dt1);
    const iconHorario = document.createElement("i");
    iconHorario.className = "fa-solid fa-clock";
    dt1.appendChild(iconHorario);
    dl.appendChild(dd1);
    dl.appendChild(dt2);
    const iconPhone = document.createElement("i");
    iconPhone.className = "fa-solid fa-phone";
    dt2.appendChild(iconPhone);
    dl.appendChild(dd2);
    dl.appendChild(dt3);
    const iconEmail = document.createElement("i");
    iconEmail.className = "fa-solid fa-envelope";
    dt3.appendChild(iconEmail);
    dl.appendChild(dd3);
    dl.appendChild(dt4);
    const iconWeb = document.createElement("i");
    iconWeb.className = "fa-solid fa-at";
    dt4.appendChild(iconWeb);
    dl.appendChild(dd4);
    dl.appendChild(dt5);
    const iconDir = document.createElement("i");
    iconDir.className = "fa-solid fa-location-dot";
    dt5.appendChild(iconDir);
    dl.appendChild(br);
    dl.appendChild(dd5_1);
    dl.appendChild(dd5_2);

    const div1 = document.createElement("div");
    div1.classList.add("col-sm");
    div1.appendChild(dl);

    const div2 = document.createElement("div");
    div2.classList.add("col-sm");
    div2.appendChild(div1);

    contImg1.appendChild(logoimg);
    contImg.appendChild(contImg1);
    col4.appendChild(contImg);
    col4.appendChild(div2);

    const colSmDiv = document.createElement("div");
    colSmDiv.className = "col-sm";

    const containerDiv = document.createElement("div");
    containerDiv.className = "container margen";

    const customScrollbarDiv = document.createElement("div");
    customScrollbarDiv.className = "custom-scrollbar-css";

    const italicPara = document.createElement("p");
    italicPara.className = "font-italic";
    italicPara.textContent = json.itemListElement[idsFiltrado[i]].description;

    customScrollbarDiv.appendChild(italicPara);
    containerDiv.appendChild(customScrollbarDiv);
    colSmDiv.appendChild(containerDiv);

    var openDiv = document.createElement("div");
    colSmDiv.appendChild(openDiv);

    var open = document.createElement("p");
    if (estaAbierto(json.itemListElement[idsFiltrado[i]].openingHours)) {
      open.innerText = "Abierto ahora";
      open.setAttribute("style", "color: #37eb05");
    } else {
      open.innerText = "Cerrado ahora";
      open.setAttribute("style", "color: #da1616");
    }

    openDiv.appendChild(open);

    const moreInfoButton = document.createElement("button");
    moreInfoButton.className = "add-to-cart margen";
    moreInfoButton.textContent = "Más información";
    moreInfoButton.onclick = function () {
      prepararPaginaProducto(json.itemListElement[idsFiltrado[i]].identifier);
    };

    var nodo_22 = document.createElement("DIV");
    nodo_22.setAttribute("class", "col-sm");
    colSmDiv.appendChild(nodo_22);

    for (let j = 0; j < calcularMedia(i) + 1; j++) {
      var star = document.createElement("I");
      star.setAttribute("class", "fa-solid fa-star");
      star.setAttribute("style", "color: #ffea00;");

      nodo_22.appendChild(star);
    }

    const conte = document.createElement("div");
    conte.className = "container margen";
    conte.appendChild(moreInfoButton);

    colSmDiv.appendChild(conte);

    row2.appendChild(col4);
    row2.appendChild(colSmDiv);
    col2.appendChild(row2);
    //end desc

    fila.appendChild(col1);
    fila.appendChild(col2);

    container.appendChild(fila);
    col.appendChild(container);
    //end for
  }
  if (idsFiltrado.length == 0) {
    col.className = "col margen textoGrande";
    col.innerText = "NO HAY RESULTADOS PARA ESTOS FILTROS.";
  }
  row.appendChild(col);
}

function listadoCard() {
  const dad = document.getElementById("seccion");
  const container1 = document.createElement("div");
  container1.setAttribute("id", "tabla");
  container1.className = "container granate aplicar-borde margen";

  const row = document.createElement("div");
  row.className = "row";

  const containerIcons = document.createElement("div");
  containerIcons.className = "container";

  const icon1 = document.createElement("i");
  icon1.className = "fa-solid fa-map-location iconosVisionado";
  icon1.onclick = function () {
    gestorVisionado(2,false);
  };

  const icon2 = document.createElement("i");
  icon2.className = "fa-solid fa-table-cells iconosVisionado";
  icon2.onclick = function () {
    gestorVisionado(0,false);
  };

  const icon3 = document.createElement("i");
  icon3.className = "fa-solid fa-list iconosVisionado";
  icon3.onclick = function () {
    gestorVisionado(1,false);
  };

  containerIcons.appendChild(icon1);
  containerIcons.appendChild(icon2);
  containerIcons.appendChild(icon3);

  row.appendChild(containerIcons);

  const rowCard = document.createElement("div");
  rowCard.className = "row ";

  for (let i = 0; i < idsFiltrado.length; i++) {
    const colCard = document.createElement("div");
    colCard.className = "col-lg-3 margen";

    const card = document.createElement("div");
    card.className = "card rounded shadow-sm border-0";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body p-0";

    const contImg = document.createElement("div");
    contImg.className = "caja margen";

    const contImg1 = document.createElement("div");
    contImg1.className = "box1 tamañoImgCard";

    const imgCard = document.createElement("img");
    imgCard.className = "";
    imgCard.setAttribute("src", json.itemListElement[idsFiltrado[i]].logo);

    const h5 = document.createElement("h5");
    h5.innerText = json.itemListElement[idsFiltrado[i]].name;

    const desc = document.createElement("p");
    desc.className = "small text-muted font-italic";
    desc.innerText =
      json.itemListElement[idsFiltrado[i]].address.streetAddress +
      " " +
      json.itemListElement[idsFiltrado[i]].address.postalCode +
      " " +
      json.itemListElement[idsFiltrado[i]].address.addressRegion +
      ", " +
      json.itemListElement[idsFiltrado[i]].address.addressLocality;

    const open = document.createElement("p");
    open.className = "small  font-italic";
    if (estaAbierto(json.itemListElement[idsFiltrado[i]].openingHours)) {
      open.innerText = "Abierto ahora";
      open.setAttribute("style", "color: #37eb05");
    } else {
      open.innerText = "Cerrado ahora";
      open.setAttribute("style", "color: #da1616");
    }

    const button = document.createElement("button");
    button.className = "add-to-cart margen";
    button.innerText = "Más información";
    button.onclick = function () {
      prepararPaginaProducto(json.itemListElement[idsFiltrado[i]].identifier);
    };

    contImg1.appendChild(imgCard);
    contImg.appendChild(contImg1);
    cardBody.appendChild(contImg);
    cardBody.appendChild(h5);
    cardBody.appendChild(desc);
    cardBody.appendChild(open);

    var nodo_22 = document.createElement("DIV");
    nodo_22.setAttribute("class", "col-sm");
    cardBody.appendChild(nodo_22);

    for (let j = 0; j < calcularMedia(i) + 1; j++) {
      var star = document.createElement("I");
      star.setAttribute("class", "fa-solid fa-star");
      star.setAttribute("style", "color: #ffea00;");

      nodo_22.appendChild(star);
    }
    cardBody.appendChild(button);

    card.appendChild(cardBody);

    colCard.appendChild(card);

    rowCard.appendChild(colCard);
  }

  if (idsFiltrado.length == 0) {
    rowCard.className = "col margen textoGrande";
    rowCard.innerText = "NO HAY RESULTADOS PARA ESTOS FILTROS.";
  }

  row.appendChild(rowCard);

  container1.appendChild(row);

  dad.appendChild(container1);
}

function listadoMap() {
  const dad = document.getElementById("seccion");
  const container = document.createElement("div");
  container.setAttribute("id", "tabla");
  container.classList.add("container", "granate", "aplicar-borde", "margen");
  dad.appendChild(container);
  const row = document.createElement("div");
  row.classList.add("row");
  row.setAttribute("id", "infoMap");
  container.appendChild(row);
  const containerIcons = document.createElement("div");
  containerIcons.className = "container";

  const icon1 = document.createElement("i");
  icon1.className = "fa-solid fa-map-location iconosVisionado";
  icon1.onclick = function () {
    gestorVisionado(2,false);
  };

  const icon2 = document.createElement("i");
  icon2.className = "fa-solid fa-table-cells iconosVisionado";
  icon2.onclick = function () {
    gestorVisionado(0,false);
  };

  const icon3 = document.createElement("i");
  icon3.className = "fa-solid fa-list iconosVisionado";
  icon3.onclick = function () {
    gestorVisionado(1,false);
  };

  containerIcons.appendChild(icon1);
  containerIcons.appendChild(icon2);
  containerIcons.appendChild(icon3);

  row.appendChild(containerIcons);

  const col1 = document.createElement("div");
  col1.setAttribute("id", "mapa");
  col1.className = "mb-3";
  row.appendChild(col1);
  var map_1 = document.createElement("DIV");
  map_1.setAttribute("id", "map");
  map_1.setAttribute("class", "margen");
  col1.appendChild(map_1);
  initMap2();
}

function infoMapa(pos) {
  const row = document.getElementById("infoMap");

  if (hasNode(row, document.getElementById("info"))) {
    row.removeChild(document.getElementById("info"));
  }

  document.getElementById("mapa").classList.add("col");

  const col2 = document.createElement("div");
  col2.classList.add("col-sm");
  col2.setAttribute("id", "info");

  const col3 = document.createElement("div");
  col3.classList.add("col-lg-auto", "bg-white", "aplicar-borde", "margen");

  const colLabel = document.createElement("div");
  colLabel.classList.add("col-form-label");

  const container2 = document.createElement("div");
  container2.classList.add("container", "margen");

  const carousel = document.createElement("div");
  carousel.setAttribute("id", "carouselExamplex");
  carousel.classList.add("carousel", "slide", "margen");
  carousel.setAttribute("data-bs-ride", "carousel");

  const carouselInner = document.createElement("div");
  carouselInner.classList.add("carousel-inner");

  for (let i = 0; i < json.itemListElement[pos].image.length; i++) {
    const carouselItem1 = document.createElement("div");
    carouselItem1.classList.add("carousel-item", "active");
    const img1 = document.createElement("img");
    img1.setAttribute("src", json.itemListElement[pos].image[i]);
    img1.classList.add("d-block", "w-100");
    carouselItem1.appendChild(img1);
    carouselInner.appendChild(carouselItem1);
  }

  const prevButton = document.createElement("button");
  prevButton.setAttribute("type", "button");
  prevButton.setAttribute("data-bs-target", "#carouselExamplex");
  prevButton.setAttribute("data-bs-slide", "prev");
  prevButton.classList.add("carousel-control-prev");

  const prevIcon = document.createElement("span");
  prevIcon.classList.add("carousel-control-prev-icon");
  prevIcon.setAttribute("aria-hidden", "true");
  prevButton.appendChild(prevIcon);

  const prevText = document.createElement("span");
  prevText.classList.add("visually-hidden");
  prevText.innerText = "Previous";
  prevButton.appendChild(prevText);

  const nextButton = document.createElement("button");
  nextButton.setAttribute("type", "button");
  nextButton.setAttribute("data-bs-target", "#carouselExamplex");
  nextButton.setAttribute("data-bs-slide", "next");
  nextButton.classList.add("carousel-control-next");

  const nextIcon = document.createElement("span");
  nextIcon.classList.add("carousel-control-next-icon");
  nextIcon.setAttribute("aria-hidden", "true");
  nextButton.appendChild(nextIcon);

  const nextText = document.createElement("span");
  nextText.classList.add("visually-hidden");
  nextText.innerText = "Next";
  nextButton.appendChild(nextText);

  carousel.appendChild(carouselInner);
  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);

  const row2 = document.createElement("div");
  row2.classList.add("row");

  const col4 = document.createElement("div");
  col4.classList.add("col");

  const contImg = document.createElement("div");
  contImg.className = "caja margen";

  const contImg1 = document.createElement("div");
  contImg1.className = "box1 tamañoImgCard";

  const logoimg = document.createElement("img");
  logoimg.setAttribute("src", json.itemListElement[pos].logo);

  const dl = document.createElement("dl");

  const dt1 = document.createElement("dt");
  dt1.textContent = "Horario: ";
  const dd1 = document.createElement("dd");
  dd1.textContent = json.itemListElement[pos].openingHours;

  const dt2 = document.createElement("dt");
  dt2.textContent = "Teléfono: ";
  const dd2 = document.createElement("dd");
  dd2.textContent = json.itemListElement[pos].telephone;

  const dt3 = document.createElement("dt");
  dt3.textContent = "Email: ";
  const dd3 = document.createElement("dd");
  const a = document.createElement("a");
  a.classList.add("text-navy");
  a.textContent = json.itemListElement[pos].email;
  dd3.appendChild(a);

  const dt4 = document.createElement("dt");
  dt4.textContent = "Web: ";
  const dd4 = document.createElement("dd");
  const a2 = document.createElement("a");
  a2.setAttribute("href", json.itemListElement[pos].url);
  a2.classList.add("text-navy");
  a2.textContent = json.itemListElement[pos].url;
  dd4.appendChild(a2);

  const dt5 = document.createElement("dt");
  dt5.textContent = "Dirección: ";
  const br = document.createElement("br");
  const dd5_1 = document.createElement("dd");
  dd5_1.textContent = json.itemListElement[pos].address.streetAddress;
  const dd5_2 = document.createElement("dd");

  dd5_2.textContent =
    json.itemListElement[pos].address.addressLocality +
    ", " +
    json.itemListElement[pos].address.addressRegion +
    ", " +
    json.itemListElement[pos].address.postalCode;

  dl.appendChild(dt1);
  const iconHorario = document.createElement("i");
  iconHorario.className = "fa-solid fa-clock";
  dt1.appendChild(iconHorario);
  dl.appendChild(dd1);
  dl.appendChild(dt2);
  const iconPhone = document.createElement("i");
  iconPhone.className = "fa-solid fa-phone";
  dt2.appendChild(iconPhone);
  dl.appendChild(dd2);
  dl.appendChild(dt3);
  const iconEmail = document.createElement("i");
  iconEmail.className = "fa-solid fa-envelope";
  dt3.appendChild(iconEmail);
  dl.appendChild(dd3);
  dl.appendChild(dt4);
  const iconWeb = document.createElement("i");
  iconWeb.className = "fa-solid fa-at";
  dt4.appendChild(iconWeb);
  dl.appendChild(dd4);
  dl.appendChild(dt5);
  const iconDir = document.createElement("i");
  iconDir.className = "fa-solid fa-location-dot";
  dt5.appendChild(iconDir);
  dl.appendChild(br);
  dl.appendChild(dd5_1);
  dl.appendChild(dd5_2);

  const div1 = document.createElement("div");
  div1.classList.add("col-sm");
  div1.appendChild(dl);

  const div2 = document.createElement("div");
  div2.classList.add("col-sm");
  div2.appendChild(div1);

  contImg1.appendChild(logoimg);
  contImg.appendChild(contImg1);
  col4.appendChild(contImg);
  col4.appendChild(div2);

  const colSmDiv = document.createElement("div");
  colSmDiv.className = "col-sm";

  const containerDiv = document.createElement("div");
  containerDiv.className = "container margen";

  const customScrollbarDiv = document.createElement("div");
  customScrollbarDiv.className = "custom-scrollbar-css";

  const italicPara = document.createElement("p");
  italicPara.className = "font-italic";
  italicPara.textContent = json.itemListElement[pos].description;

  customScrollbarDiv.appendChild(italicPara);
  containerDiv.appendChild(customScrollbarDiv);
  colSmDiv.appendChild(containerDiv);

  var nodo_22 = document.createElement("DIV");
  nodo_22.setAttribute("class", "col-sm");
  colSmDiv.appendChild(nodo_22);

  for (let j = 0; j < calcularMedia(pos) + 1; j++) {
    var star = document.createElement("I");
    star.setAttribute("class", "fa-solid fa-star");
    star.setAttribute("style", "color: #ffea00;");

    nodo_22.appendChild(star);
  }

  const conte = document.createElement("div");
  conte.className = "container margen";

  colSmDiv.appendChild(conte);

  const moreInfoButton = document.createElement("button");
  moreInfoButton.className = "add-to-cart margen";
  moreInfoButton.textContent = "Más información";
  moreInfoButton.onclick = function () {
    prepararPaginaProducto(pos);
  };
  conte.appendChild(moreInfoButton);

  row2.appendChild(col4);
  row2.appendChild(colSmDiv);

  container2.appendChild(carousel);
  container2.appendChild(row2);

  colLabel.appendChild(container2);

  col3.appendChild(colLabel);

  col2.appendChild(col3);
  row.appendChild(col2);
}

function hasNode(dad, child) {
  if (dad.hasChildNodes()) {
    for (let i = 0; i < dad.childNodes.length; i++) {
      if (dad.childNodes[i] == child) {
        return true;
      }
    }
  }
  return false;
}

function gestorVisionado(vision, reset) {
  var body = document.getElementById("cuerpo");
  var modal = document.getElementById("ventanaModal");
  var seccion = document.getElementById("seccion");
  var car = document.getElementById("carouselPrincipal");

  if (hasNode(seccion, car)) {
    carrusel = car;
    seccion.removeChild(car);
  }

  if (hasNode(body, modal)) {
    body.removeChild(modal);
  }

  if (hasNode(seccion, document.getElementById("tabla"))) {
    seccion.removeChild(document.getElementById("tabla"));
  }

  if (filtro != null) {
    if(!reset) seccion.appendChild(filtro);
    filtro = null;
  }

  if (vision == 2) {
    filtro = document.getElementById("filtrado");
    seccion.removeChild(filtro);
  }
  botonesNav(0);
  switch (vision) {
    case 1:
      listadoCardXL();
      break;
    case 0:
      listadoCard();
      break;
    case 2:
      listadoMap();
      break;
  }
  visionActive = vision;
}

function prepararBusqueda() {
  var seccion = document.getElementById("seccion");

  idsFiltrado = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


    while (seccion.hasChildNodes()) {
      seccion.removeChild(seccion.firstChild);
    }

  filtrado2();
  gestorVisionado(0, true);
}

function prepararQuienesSomos() {
  var body = document.getElementById("cuerpo");
  var modal = document.getElementById("ventanaModal");
  var seccion = document.getElementById("seccion");

  if (hasNode(body, modal)) {
    body.removeChild(modal);
  }
  if (seccion.hasChildNodes()) {
    while (seccion.childNodes.length >= 1) {
      seccion.removeChild(seccion.firstChild);
    }
  }
  botonesNav(0);
  about();
}

function prepararPaginaProducto(producto) {
  var seccion = document.getElementById("seccion");

  if (seccion.hasChildNodes()) {
    while (seccion.childNodes.length >= 1) {
      seccion.removeChild(seccion.firstChild);
    }
  }
  botonesNav(1);
  paginaProducto2(producto);
}
