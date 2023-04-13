var carrusel = null;
var opcionActiva = 0; //0 : descripcion  1: Opiniones  2: Videos

window.onload = function () {
    botonesNav();
}

function descripcionProducto(dad) {
    const div = document.createElement('div');
    div.className = 'custom-scrollbar-css p-2';

    const p = document.createElement('p');
    p.className = 'font-italic';
    p.innerText = 'El proyecto nació a partir de la idea de un grupo de personas aficionadas al vino, el cual se materializó en junio de 2001, constituyendo la sociedad Vinyes Mortitx S.A. y la compra de una parte de la finca de Mortitx, con un objetivo principal: la elaboración de vinos de calidad, donde se manifiesten las peculiaridades y carácter propio de la tierra de donde proceden. Actualmente esta sociedad está formada por 53 socios.';

    div.appendChild(p);

    dad.appendChild(div);
}

function videoProducto(dad) {
    const img = document.createElement('img');
    img.src = 'img/video.png';
    dad.appendChild(img);
}

function opinionProducto(dad) {
    const customScrollbar = document.createElement("div");
    customScrollbar.classList.add("custom-scrollbar-css", "p-2");

    const colContainer = document.createElement("div");
    colContainer.classList.add("col-sm-12", "col-md-8");

    const reviewBlock = document.createElement("div");
    reviewBlock.classList.add("review-block");

    for (let i = 0; i < 3; i++) {

        const row = document.createElement("div");
        row.classList.add("row");

        const colImg = document.createElement("div");
        colImg.classList.add("col-sm-3");

        const reviewImg = document.createElement("div");
        reviewImg.classList.add("review-block-img");

        const img = document.createElement("img");
        img.src = "https://bootdey.com/img/Content/avatar/avatar6.png";
        img.classList.add("img-rounded");
        img.alt = "";

        reviewImg.appendChild(img);

        const reviewName = document.createElement("div");
        reviewName.classList.add("review-block-name");

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "nktailor";

        reviewName.appendChild(link);

        const reviewDate = document.createElement("div");
        reviewDate.classList.add("review-block-date");
        reviewDate.innerHTML = "January 29, 2016<br>1 day ago";

        colImg.appendChild(reviewImg);
        colImg.appendChild(reviewName);
        colImg.appendChild(reviewDate);

        const colDesc = document.createElement("div");
        colDesc.classList.add("col-sm-9");

        const reviewRate = document.createElement("div");
        reviewRate.classList.add("review-block-rate");

        const btnSuccess1 = document.createElement("button");
        btnSuccess1.type = "button";
        btnSuccess1.classList.add("btn", "btn-success", "btn-xs");
        btnSuccess1.setAttribute("aria-label", "Left Align");

        const span1 = document.createElement("span");
        span1.classList.add("glyphicon", "glyphicon-star");
        btnSuccess1.appendChild(span1);

        btnSuccess1.appendChild(span1);

        const btnSuccess2 = document.createElement("button");
        btnSuccess2.type = "button";
        btnSuccess2.classList.add("btn", "btn-success", "btn-xs");
        btnSuccess2.setAttribute("aria-label", "Left Align");

        const span2 = document.createElement("span");
        span2.classList.add("glyphicon", "glyphicon-star");
        btnSuccess2.appendChild(span2);

        btnSuccess2.appendChild(span2);

        const btnSuccess3 = document.createElement("button");
        btnSuccess3.type = "button";
        btnSuccess3.classList.add("btn", "btn-success", "btn-xs");
        btnSuccess3.setAttribute("aria-label", "Left Align");

        const span3 = document.createElement("span");
        span3.classList.add("glyphicon", "glyphicon-star");
        btnSuccess3.appendChild(span3);

        btnSuccess3.appendChild(span3);

        const btnDefault1 = document.createElement("button");
        btnDefault1.type = "button";
        btnDefault1.classList.add("btn", "btn-default", "btn-xs");
        btnDefault1.setAttribute("aria-label", "Left Align");

        const span4 = document.createElement("span");
        span4.classList.add("glyphicon", "glyphicon-star");
        btnDefault1.appendChild(span4);

        btnDefault1.appendChild(span4);

        const btnDefault2 = document.createElement("button");
        btnDefault2.type = "button";
        btnDefault2.classList.add("btn", "btn-default", "btn-xs");
        btnDefault2.setAttribute("aria-label", "Left Align");

        const span5 = document.createElement("span");
        span5.classList.add("glyphicon", "glyphicon-star");
        btnDefault2.appendChild(span5);

        btnDefault2.appendChild(span5);

        reviewRate.appendChild(btnSuccess1);
        reviewRate.appendChild(btnSuccess2);
        reviewRate.appendChild(btnSuccess3);
        reviewRate.appendChild(btnDefault1);
        reviewRate.appendChild(btnDefault2);

        const reviewTitle = document.createElement("div");
        reviewTitle.classList.add("review-block-title");
        reviewTitle.textContent = "this was nice in buy";

        const reviewDesc = document.createElement("div");
        reviewDesc.classList.add("review-block-description");
        reviewDesc.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.";

        colDesc.appendChild(reviewRate);
        colDesc.appendChild(reviewTitle);
        colDesc.appendChild(reviewDesc);

        row.appendChild(colImg);
        row.appendChild(colDesc);


        const hr = document.createElement("hr");

        reviewBlock.appendChild(row);
        reviewBlock.appendChild(hr);
    }
    colContainer.appendChild(reviewBlock);

    customScrollbar.appendChild(colContainer);

    dad.appendChild(customScrollbar);

}




function paginaProducto2() {

    var node_1 = document.getElementById('seccion');

    var node_2 = document.createElement('SECTION');
    node_2.setAttribute('id', 'hero');
    node_2.setAttribute('class', 'hero d-flex align-items-center section-bg');
    node_1.appendChild(node_2);

    var node_3 = document.createElement('DIV');
    node_3.setAttribute('class', 'container granate aplicar-borde margen');
    node_2.appendChild(node_3);

    var node_4 = document.createElement('DIV');
    node_4.setAttribute('class', 'row justify-content-between gy-5');
    node_3.appendChild(node_4);

    var node_5 = document.createElement('DIV');
    node_5.setAttribute('class', 'col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start m-auto');
    node_4.appendChild(node_5);

    var node_6 = document.createElement('H2');
    node_6.setAttribute('data-aos', 'fade-up');
    node_6.setAttribute('class', 'aos-init aos-animate');
    node_5.appendChild(node_6);

    var node_7 = document.createTextNode((new String("Bodegas")));
    node_6.appendChild(node_7);

    var node_8 = document.createElement('BR');
    node_6.appendChild(node_8);

    var node_9 = document.createTextNode((new String("Mortitx")));
    node_6.appendChild(node_9);

    var node_10 = document.createElement('DIV');
    node_10.setAttribute('class', 'd-flex aos-init aos-animate');
    node_10.setAttribute('data-aos', 'fade-up');
    node_10.setAttribute('data-aos-delay', '200');
    node_5.appendChild(node_10);

    var node_11 = document.createElement('A');
    node_11.setAttribute('href', 'https://www.youtube.com/watch?v=LXb3EKWsInQ');
    node_11.setAttribute('class', 'glightbox btn-watch-video d-flex align-items-center m-auto');
    node_10.appendChild(node_11);

    var node_12 = document.createElement('I');
    node_12.setAttribute('class', 'bi bi-play-circle');
    node_11.appendChild(node_12);

    var node_13 = document.createElement('SPAN');
    node_11.appendChild(node_13);

    var node_14 = document.createTextNode((new String("Ver video")));
    node_13.appendChild(node_14);

    var node_15 = document.createElement('DIV');
    node_15.setAttribute('class', 'col-lg-5   text-lg-start');
    node_4.appendChild(node_15);

    var node_16 = document.createElement('IMG');
    node_16.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_QQ6A0199-1.jpg');
    node_16.setAttribute('class', 'img-fluid margen2 aos-init aos-animate');
    node_16.setAttribute('alt', '');
    node_16.setAttribute('data-aos', 'zoom-out');
    node_16.setAttribute('data-aos-delay', '300');
    node_15.appendChild(node_16);

    var node_17 = document.createElement('MAIN');
    node_17.setAttribute('id', 'main');
    node_1.appendChild(node_17);

    var node_18 = document.createElement('SECTION');
    node_18.setAttribute('id', 'about');
    node_18.setAttribute('class', 'about');
    node_17.appendChild(node_18);

    var node_19 = document.createElement('DIV');
    node_19.setAttribute('class', 'container aos-init aos-animate');
    node_19.setAttribute('data-aos', 'fade-up');
    node_18.appendChild(node_19);

    var node_20 = document.createElement('DIV');
    node_20.setAttribute('class', 'section-header');
    node_19.appendChild(node_20);

    var node_21 = document.createElement('P');
    node_20.appendChild(node_21);

    var node_22 = document.createElement('SPAN');
    node_21.appendChild(node_22);

    var node_23 = document.createTextNode((new String("Descripción")));
    node_22.appendChild(node_23);

    var node_24 = document.createElement('DIV');
    node_24.setAttribute('class', 'row gy-4 aplicar-borde margen granate');
    node_19.appendChild(node_24);

    var node_25 = document.createElement('DIV');
    node_25.setAttribute('class', 'col-lg-7 position-relative about-img margen aos-init aos-animate');
    node_25.setAttribute('style', 'background-image: url(assets/img/about.jpg) ;');
    node_25.setAttribute('data-aos', 'fade-up');
    node_25.setAttribute('data-aos-delay', '150');
    node_24.appendChild(node_25);

    var node_26 = document.createElement('DIV');
    node_26.setAttribute('class', 'call-us position-absolute margen aplicar-borde granate');
    node_25.appendChild(node_26);

    var node_27 = document.createElement('H4');
    node_26.appendChild(node_27);

    var node_28 = document.createTextNode((new String("Teléfono")));
    node_27.appendChild(node_28);

    var node_29 = document.createElement('P');
    node_26.appendChild(node_29);

    var node_30 = document.createTextNode((new String("971533889")));
    node_29.appendChild(node_30);

    var node_31 = document.createElement('DIV');
    node_31.setAttribute('class', 'col-lg-5 d-flex align-items-end aos-init aos-animate');
    node_31.setAttribute('data-aos', 'fade-up');
    node_31.setAttribute('data-aos-delay', '300');
    node_24.appendChild(node_31);

    var node_32 = document.createElement('DIV');
    node_32.setAttribute('class', 'content ps-0 ps-lg-5');
    node_31.appendChild(node_32);

    var node_33 = document.createElement('P');
    node_33.setAttribute('class', 'fst-italic');
    node_32.appendChild(node_33);

    var node_34 = document.createTextNode((new String("\\n                                El proyecto nació a partir de la idea de un grupo de personas aficionadas al vino, el\\n                                cual se materializó en junio de 2001,\\n                                constituyendo la sociedad Vinyes Mortitx S.A. y la compra de una parte de la finca de\\n                                Mortitx, con un objetivo principal:\\n                                la elaboración de vinos de calidad, donde se manifiesten las peculiaridades y carácter\\n                                propio de la tierra de donde proceden. Actualmente esta sociedad está formada por 53\\n                                socios.\\n                            ")));
    node_33.appendChild(node_34);

    var node_35 = document.createElement('DIV');
    node_35.setAttribute('class', 'position-relative mt-4 margen');
    node_32.appendChild(node_35);

    var node_36 = document.createElement('IMG');
    node_36.setAttribute('src', 'assets/img/about-2.jpg');
    node_36.setAttribute('class', 'img-fluid');
    node_36.setAttribute('alt', '');
    node_35.appendChild(node_36);

    var node_37 = document.createElement('A');
    node_37.setAttribute('href', 'https://www.youtube.com/watch?v=LXb3EKWsInQ');
    node_37.setAttribute('class', 'glightbox play-btn');
    node_35.appendChild(node_37);

    var node_38 = document.createElement('SECTION');
    node_38.setAttribute('id', 'weather');
    node_38.setAttribute('class', 'why-us section-bg');
    node_17.appendChild(node_38);

    var node_39 = document.createElement('DIV');
    node_39.setAttribute('class', 'container aos-init aos-animate');
    node_39.setAttribute('data-aos', 'fade-up');
    node_38.appendChild(node_39);

    var node_40 = document.createElement('DIV');
    node_40.setAttribute('class', 'row');
    node_39.appendChild(node_40);

    var node_41 = document.createElement('DIV');
    node_41.setAttribute('class', 'section-header');
    node_40.appendChild(node_41);

    var node_42 = document.createElement('P');
    node_41.appendChild(node_42);

    var node_43 = document.createElement('SPAN');
    node_42.appendChild(node_43);

    var node_44 = document.createTextNode((new String("El tiempo")));
    node_43.appendChild(node_44);

    var node_45 = document.createElement('DIV');
    node_45.setAttribute('class', 'col-lg-11 d-flex align-items-center margen aplicar-borde granate');
    node_40.appendChild(node_45);

    var node_46 = document.createElement('DIV');
    node_46.setAttribute('class', 'row gy-2 ');
    node_45.appendChild(node_46);

    var node_47 = document.createElement('DIV');
    node_47.setAttribute('class', 'col-xl-3 margen aos-init aos-animate');
    node_47.setAttribute('data-aos', 'fade-up');
    node_47.setAttribute('data-aos-delay', '200');
    node_46.appendChild(node_47);

    var node_48 = document.createElement('DIV');
    node_48.setAttribute('class', 'icon-box d-flex flex-column justify-content-center align-items-center');
    node_47.appendChild(node_48);

    var node_49 = document.createElement('H4');
    node_48.appendChild(node_49);

    var node_50 = document.createTextNode((new String("Lunes")));
    node_49.appendChild(node_50);

    var node_51 = document.createElement('I');
    node_51.setAttribute('class', 'bi bi-cloud-sun');
    node_51.setAttribute('style', 'color: #511f1f;');
    node_48.appendChild(node_51);

    var node_52 = document.createElement('P');
    node_48.appendChild(node_52);

    var node_53 = document.createTextNode((new String("17ºC / 14ºC")));
    node_52.appendChild(node_53);

    var node_54 = document.createElement('DIV');
    node_54.setAttribute('class', 'col-xl-3 margen aos-init aos-animate');
    node_54.setAttribute('data-aos', 'fade-up');
    node_54.setAttribute('data-aos-delay', '200');
    node_46.appendChild(node_54);

    var node_55 = document.createElement('DIV');
    node_55.setAttribute('class', 'icon-box d-flex flex-column justify-content-center align-items-center');
    node_54.appendChild(node_55);

    var node_56 = document.createElement('H4');
    node_55.appendChild(node_56);

    var node_57 = document.createTextNode((new String("Martes")));
    node_56.appendChild(node_57);

    var node_58 = document.createElement('I');
    node_58.setAttribute('class', 'bi bi-cloud-sun');
    node_58.setAttribute('style', 'color: #511f1f;');
    node_55.appendChild(node_58);

    var node_59 = document.createElement('P');
    node_55.appendChild(node_59);

    var node_60 = document.createTextNode((new String("17ºC / 14ºC")));
    node_59.appendChild(node_60);

    var node_61 = document.createElement('DIV');
    node_61.setAttribute('class', 'col-xl-3 margen aos-init aos-animate');
    node_61.setAttribute('data-aos', 'fade-up');
    node_61.setAttribute('data-aos-delay', '200');
    node_46.appendChild(node_61);

    var node_62 = document.createElement('DIV');
    node_62.setAttribute('class', 'icon-box d-flex flex-column justify-content-center align-items-center');
    node_61.appendChild(node_62);

    var node_63 = document.createElement('H4');
    node_62.appendChild(node_63);

    var node_64 = document.createTextNode((new String("Miercoles")));
    node_63.appendChild(node_64);

    var node_65 = document.createElement('I');
    node_65.setAttribute('class', 'bi bi-cloud-sun');
    node_65.setAttribute('style', 'color: #511f1f;');
    node_62.appendChild(node_65);

    var node_66 = document.createElement('P');
    node_62.appendChild(node_66);

    var node_67 = document.createTextNode((new String("17ºC / 14ºC")));
    node_66.appendChild(node_67);

    var node_68 = document.createElement('DIV');
    node_68.setAttribute('class', 'col-xl-3 margen aos-init aos-animate');
    node_68.setAttribute('data-aos', 'fade-up');
    node_68.setAttribute('data-aos-delay', '200');
    node_46.appendChild(node_68);

    var node_69 = document.createElement('DIV');
    node_69.setAttribute('class', 'icon-box d-flex flex-column justify-content-center align-items-center');
    node_68.appendChild(node_69);

    var node_70 = document.createElement('H4');
    node_69.appendChild(node_70);

    var node_71 = document.createTextNode((new String("Jueves")));
    node_70.appendChild(node_71);

    var node_72 = document.createElement('I');
    node_72.setAttribute('class', 'bi bi-cloud-sun');
    node_72.setAttribute('style', 'color: #511f1f;');
    node_69.appendChild(node_72);

    var node_73 = document.createElement('P');
    node_69.appendChild(node_73);

    var node_74 = document.createTextNode((new String("17ºC / 14ºC")));
    node_73.appendChild(node_74);

    var node_75 = document.createElement('DIV');
    node_75.setAttribute('class', 'col-xl-3 margen aos-init aos-animate');
    node_75.setAttribute('data-aos', 'fade-up');
    node_75.setAttribute('data-aos-delay', '200');
    node_46.appendChild(node_75);

    var node_76 = document.createElement('DIV');
    node_76.setAttribute('class', 'icon-box d-flex flex-column justify-content-center align-items-center');
    node_75.appendChild(node_76);

    var node_77 = document.createElement('H4');
    node_76.appendChild(node_77);

    var node_78 = document.createTextNode((new String("Viernes")));
    node_77.appendChild(node_78);

    var node_79 = document.createElement('I');
    node_79.setAttribute('class', 'bi bi-cloud-sun');
    node_79.setAttribute('style', 'color: #511f1f;');
    node_76.appendChild(node_79);

    var node_80 = document.createElement('P');
    node_76.appendChild(node_80);

    var node_81 = document.createTextNode((new String("17ºC / 14ºC")));
    node_80.appendChild(node_81);

    var node_82 = document.createElement('DIV');
    node_82.setAttribute('class', 'col-xl-3 margen aos-init aos-animate');
    node_82.setAttribute('data-aos', 'fade-up');
    node_82.setAttribute('data-aos-delay', '200');
    node_46.appendChild(node_82);

    var node_83 = document.createElement('DIV');
    node_83.setAttribute('class', 'icon-box d-flex flex-column justify-content-center align-items-center');
    node_82.appendChild(node_83);

    var node_84 = document.createElement('H4');
    node_83.appendChild(node_84);

    var node_85 = document.createTextNode((new String("Sábado")));
    node_84.appendChild(node_85);

    var node_86 = document.createElement('I');
    node_86.setAttribute('class', 'bi bi-cloud-sun');
    node_86.setAttribute('style', 'color: #511f1f;');
    node_83.appendChild(node_86);

    var node_87 = document.createElement('P');
    node_83.appendChild(node_87);

    var node_88 = document.createTextNode((new String("17ºC / 14ºC")));
    node_87.appendChild(node_88);

    var node_89 = document.createElement('DIV');
    node_89.setAttribute('class', 'col-xl-3 margen aos-init aos-animate');
    node_89.setAttribute('data-aos', 'fade-up');
    node_89.setAttribute('data-aos-delay', '200');
    node_46.appendChild(node_89);

    var node_90 = document.createElement('DIV');
    node_90.setAttribute('class', 'icon-box d-flex flex-column justify-content-center align-items-center');
    node_89.appendChild(node_90);

    var node_91 = document.createElement('H4');
    node_90.appendChild(node_91);

    var node_92 = document.createTextNode((new String("Domingo")));
    node_91.appendChild(node_92);

    var node_93 = document.createElement('I');
    node_93.setAttribute('class', 'bi bi-cloud-sun');
    node_93.setAttribute('style', 'color: #511f1f;');
    node_90.appendChild(node_93);

    var node_94 = document.createElement('P');
    node_90.appendChild(node_94);

    var node_95 = document.createTextNode((new String("17ºC / 14ºC")));
    node_94.appendChild(node_95);

    var node_96 = document.createElement('SECTION');
    node_96.setAttribute('id', 'menu');
    node_96.setAttribute('class', 'menu');
    node_17.appendChild(node_96);

    var node_97 = document.createElement('DIV');
    node_97.setAttribute('class', 'container aos-init aos-animate');
    node_97.setAttribute('data-aos', 'fade-up');
    node_96.appendChild(node_97);

    var node_98 = document.createElement('DIV');
    node_98.setAttribute('class', 'section-header');
    node_97.appendChild(node_98);

    var node_99 = document.createElement('H2');
    node_98.appendChild(node_99);

    var node_100 = document.createTextNode((new String("Vinos")));
    node_99.appendChild(node_100);

    var node_101 = document.createElement('P');
    node_98.appendChild(node_101);

    var node_102 = document.createElement('SPAN');
    node_101.appendChild(node_102);

    var node_103 = document.createTextNode((new String("tu vino favorito")));
    node_102.appendChild(node_103);

    var node_104 = document.createElement('UL');
    node_104.setAttribute('class', 'nav nav-tabs d-flex justify-content-center aos-init aos-animate');
    node_104.setAttribute('data-aos', 'fade-up');
    node_104.setAttribute('data-aos-delay', '200');
    node_104.setAttribute('role', 'tablist');
    node_97.appendChild(node_104);

    var node_105 = document.createElement('LI');
    node_105.setAttribute('class', 'nav-item');
    node_105.setAttribute('role', 'presentation');
    node_104.appendChild(node_105);

    var node_106 = document.createElement('A');
    node_106.setAttribute('class', 'nav-link active show');
    node_106.setAttribute('data-bs-toggle', 'tab');
    node_106.setAttribute('data-bs-target', '#menu-starters');
    node_106.setAttribute('aria-selected', 'true');
    node_106.setAttribute('role', 'tab');
    node_105.appendChild(node_106);

    var node_107 = document.createElement('H4');
    node_106.appendChild(node_107);

    var node_108 = document.createTextNode((new String("Tintos")));
    node_107.appendChild(node_108);

    var node_109 = document.createElement('LI');
    node_109.setAttribute('class', 'nav-item');
    node_109.setAttribute('role', 'presentation');
    node_104.appendChild(node_109);

    var node_110 = document.createElement('A');
    node_110.setAttribute('class', 'nav-link');
    node_110.setAttribute('data-bs-toggle', 'tab');
    node_110.setAttribute('data-bs-target', '#menu-breakfast');
    node_110.setAttribute('aria-selected', 'false');
    node_110.setAttribute('tabindex', '-1');
    node_110.setAttribute('role', 'tab');
    node_109.appendChild(node_110);

    var node_111 = document.createElement('H4');
    node_110.appendChild(node_111);

    var node_112 = document.createTextNode((new String("Blancos")));
    node_111.appendChild(node_112);

    var node_113 = document.createElement('LI');
    node_113.setAttribute('class', 'nav-item');
    node_113.setAttribute('role', 'presentation');
    node_104.appendChild(node_113);

    var node_114 = document.createElement('A');
    node_114.setAttribute('class', 'nav-link');
    node_114.setAttribute('data-bs-toggle', 'tab');
    node_114.setAttribute('data-bs-target', '#menu-lunch');
    node_114.setAttribute('aria-selected', 'false');
    node_114.setAttribute('tabindex', '-1');
    node_114.setAttribute('role', 'tab');
    node_113.appendChild(node_114);

    var node_115 = document.createElement('H4');
    node_114.appendChild(node_115);

    var node_116 = document.createTextNode((new String("Rosados")));
    node_115.appendChild(node_116);

    var node_117 = document.createElement('DIV');
    node_117.setAttribute('class', 'tab-content aos-init aos-animate');
    node_117.setAttribute('data-aos', 'fade-up');
    node_117.setAttribute('data-aos-delay', '300');
    node_97.appendChild(node_117);

    var node_118 = document.createElement('DIV');
    node_118.setAttribute('class', 'tab-pane fade active show');
    node_118.setAttribute('id', 'menu-starters');
    node_118.setAttribute('role', 'tabpanel');
    node_117.appendChild(node_118);

    var node_119 = document.createElement('DIV');
    node_119.setAttribute('class', 'tab-header text-center');
    node_118.appendChild(node_119);

    var node_120 = document.createElement('H3');
    node_119.appendChild(node_120);

    var node_121 = document.createTextNode((new String("Tintos")));
    node_120.appendChild(node_121);

    var node_122 = document.createElement('DIV');
    node_122.setAttribute('class', 'row gy-5');
    node_118.appendChild(node_122);

    var node_123 = document.createElement('DIV');
    node_123.setAttribute('class', 'col-lg-4 menu-item');
    node_122.appendChild(node_123);

    var node_124 = document.createElement('A');
    node_124.setAttribute('href', 'http://www.vinyesmortitx.com/img_blog/1584635839.jpg');
    node_124.setAttribute('class', 'glightbox');
    node_123.appendChild(node_124);

    var node_125 = document.createElement('IMG');
    node_125.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/1584635839.jpg');
    node_125.setAttribute('class', 'menu-img img-fluid');
    node_125.setAttribute('alt', '');
    node_124.appendChild(node_125);

    var node_126 = document.createElement('H4');
    node_123.appendChild(node_126);

    var node_127 = document.createTextNode((new String("Mortitx Tinto 2019")));
    node_126.appendChild(node_127);

    var node_128 = document.createElement('P');
    node_128.setAttribute('class', 'ingredients');
    node_123.appendChild(node_128);

    var node_129 = document.createElement('P');
    node_129.setAttribute('class', 'price');
    node_123.appendChild(node_129);

    var node_130 = document.createTextNode((new String("\\n                                    12.18EUR\\n                                ")));
    node_129.appendChild(node_130);

    var node_131 = document.createElement('DIV');
    node_131.setAttribute('class', 'col-lg-4 menu-item');
    node_122.appendChild(node_131);

    var node_132 = document.createElement('A');
    node_132.setAttribute('href', 'http://www.vinyesmortitx.com/img_blog/1584632514.jpg');
    node_132.setAttribute('class', 'glightbox');
    node_131.appendChild(node_132);

    var node_133 = document.createElement('IMG');
    node_133.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/1584632514.jpg');
    node_133.setAttribute('class', 'menu-img img-fluid');
    node_133.setAttribute('alt', '');
    node_132.appendChild(node_133);

    var node_134 = document.createElement('H4');
    node_131.appendChild(node_134);

    var node_135 = document.createTextNode((new String("Rodal Pla 2017")));
    node_134.appendChild(node_135);

    var node_136 = document.createElement('P');
    node_136.setAttribute('class', 'ingredients');
    node_131.appendChild(node_136);

    var node_137 = document.createElement('P');
    node_137.setAttribute('class', 'price');
    node_131.appendChild(node_137);

    var node_138 = document.createTextNode((new String("\\n                                    15.98EUR\\n                                ")));
    node_137.appendChild(node_138);

    var node_139 = document.createElement('DIV');
    node_139.setAttribute('class', 'col-lg-4 menu-item');
    node_122.appendChild(node_139);

    var node_140 = document.createElement('A');
    node_140.setAttribute('href', 'http://www.vinyesmortitx.com/img_blog/ART_9u-negre.png');
    node_140.setAttribute('class', 'glightbox');
    node_139.appendChild(node_140);

    var node_141 = document.createElement('IMG');
    node_141.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/ART_9u-negre.png');
    node_141.setAttribute('class', 'menu-img img-fluid');
    node_141.setAttribute('alt', '');
    node_140.appendChild(node_141);

    var node_142 = document.createElement('H4');
    node_139.appendChild(node_142);

    var node_143 = document.createTextNode((new String("L\'u negre 2017")));
    node_142.appendChild(node_143);

    var node_144 = document.createElement('P');
    node_144.setAttribute('class', 'ingredients');
    node_139.appendChild(node_144);

    var node_145 = document.createElement('P');
    node_145.setAttribute('class', 'price');
    node_139.appendChild(node_145);

    var node_146 = document.createTextNode((new String("\\n                                    62.90EUR\\n                                ")));
    node_145.appendChild(node_146);

    var node_147 = document.createElement('DIV');
    node_147.setAttribute('class', 'tab-pane fade');
    node_147.setAttribute('id', 'menu-breakfast');
    node_147.setAttribute('role', 'tabpanel');
    node_117.appendChild(node_147);

    var node_148 = document.createElement('DIV');
    node_148.setAttribute('class', 'tab-header text-center');
    node_147.appendChild(node_148);

    var node_149 = document.createElement('H3');
    node_148.appendChild(node_149);

    var node_150 = document.createTextNode((new String("Blancos")));
    node_149.appendChild(node_150);

    var node_151 = document.createElement('DIV');
    node_151.setAttribute('class', 'row gy-5');
    node_147.appendChild(node_151);

    var node_152 = document.createElement('DIV');
    node_152.setAttribute('class', 'col-lg-4 menu-item');
    node_151.appendChild(node_152);

    var node_153 = document.createElement('A');
    node_153.setAttribute('href', 'assets/img/menu/menu-item-1.png');
    node_153.setAttribute('class', 'glightbox');
    node_152.appendChild(node_153);

    var node_154 = document.createElement('IMG');
    node_154.setAttribute('src', 'assets/img/menu/menu-item-1.png');
    node_154.setAttribute('class', 'menu-img img-fluid');
    node_154.setAttribute('alt', '');
    node_153.appendChild(node_154);

    var node_155 = document.createElement('H4');
    node_152.appendChild(node_155);

    var node_156 = document.createTextNode((new String("Magnam Tiste")));
    node_155.appendChild(node_156);

    var node_157 = document.createElement('P');
    node_157.setAttribute('class', 'ingredients');
    node_152.appendChild(node_157);

    var node_158 = document.createTextNode((new String("\\n                                    Lorem, deren, trataro, filede, nerada\\n                                ")));
    node_157.appendChild(node_158);

    var node_159 = document.createElement('P');
    node_159.setAttribute('class', 'price');
    node_152.appendChild(node_159);

    var node_160 = document.createTextNode((new String("\\n                                    $5.95\\n                                ")));
    node_159.appendChild(node_160);

    var node_161 = document.createElement('DIV');
    node_161.setAttribute('class', 'tab-pane fade');
    node_161.setAttribute('id', 'menu-lunch');
    node_161.setAttribute('role', 'tabpanel');
    node_117.appendChild(node_161);

    var node_162 = document.createElement('DIV');
    node_162.setAttribute('class', 'tab-header text-center');
    node_161.appendChild(node_162);

    var node_163 = document.createElement('H3');
    node_162.appendChild(node_163);

    var node_164 = document.createTextNode((new String("Rosados")));
    node_163.appendChild(node_164);

    var node_165 = document.createElement('DIV');
    node_165.setAttribute('class', 'row gy-5');
    node_161.appendChild(node_165);

    var node_166 = document.createElement('DIV');
    node_166.setAttribute('class', 'col-lg-4 menu-item');
    node_165.appendChild(node_166);

    var node_167 = document.createElement('A');
    node_167.setAttribute('href', 'assets/img/menu/menu-item-1.png');
    node_167.setAttribute('class', 'glightbox');
    node_166.appendChild(node_167);

    var node_168 = document.createElement('IMG');
    node_168.setAttribute('src', 'assets/img/menu/menu-item-1.png');
    node_168.setAttribute('class', 'menu-img img-fluid');
    node_168.setAttribute('alt', '');
    node_167.appendChild(node_168);

    var node_169 = document.createElement('H4');
    node_166.appendChild(node_169);

    var node_170 = document.createTextNode((new String("Magnam Tiste")));
    node_169.appendChild(node_170);

    var node_171 = document.createElement('P');
    node_171.setAttribute('class', 'ingredients');
    node_166.appendChild(node_171);

    var node_172 = document.createTextNode((new String("\\n                                    Lorem, deren, trataro, filede, nerada\\n                                ")));
    node_171.appendChild(node_172);

    var node_173 = document.createElement('P');
    node_173.setAttribute('class', 'price');
    node_166.appendChild(node_173);

    var node_174 = document.createTextNode((new String("\\n                                    $5.95\\n                                ")));
    node_173.appendChild(node_174);

    var node_175 = document.createElement('SECTION');
    node_175.setAttribute('id', 'testimonials');
    node_175.setAttribute('class', 'testimonials section-bg');
    node_17.appendChild(node_175);

    var node_176 = document.createElement('DIV');
    node_176.setAttribute('class', 'container aplicar-borde margen granate aos-init aos-animate');
    node_176.setAttribute('data-aos', 'fade-up');
    node_175.appendChild(node_176);

    var node_177 = document.createElement('DIV');
    node_177.setAttribute('class', 'section-header');
    node_176.appendChild(node_177);

    var node_178 = document.createElement('P');
    node_177.appendChild(node_178);

    var node_179 = document.createElement('SPAN');
    node_178.appendChild(node_179);

    var node_180 = document.createTextNode((new String("Valoraciones")));
    node_179.appendChild(node_180);

    var node_181 = document.createElement('DIV');
    node_181.setAttribute('class', 'slides-1 swiper blanco margen swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden aos-init aos-animate');
    node_181.setAttribute('data-aos', 'fade-up');
    node_181.setAttribute('data-aos-delay', '100');
    node_176.appendChild(node_181);

    var node_182 = document.createElement('DIV');
    node_182.setAttribute('class', 'swiper-wrapper');
    node_182.setAttribute('id', 'swiper-wrapper-4856f01d049f5c8d');
    node_182.setAttribute('aria-live', 'off');
    node_182.setAttribute('style', 'transition-duration: 0ms; transform: translate3d(-2016px, 0px, 0px);');
    node_181.appendChild(node_182);

    var node_183 = document.createElement('DIV');
    node_183.setAttribute('class', 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev');
    node_183.setAttribute('data-swiper-slide-index', '0');
    node_183.setAttribute('role', 'group');
    node_183.setAttribute('aria-label', '1 / 2');
    node_182.appendChild(node_183);

    var node_184 = document.createElement('DIV');
    node_184.setAttribute('class', 'testimonial-item');
    node_183.appendChild(node_184);

    var node_185 = document.createElement('DIV');
    node_185.setAttribute('class', 'row gy-4 justify-content-center');
    node_184.appendChild(node_185);

    var node_186 = document.createElement('DIV');
    node_186.setAttribute('class', 'col-lg-6');
    node_185.appendChild(node_186);

    var node_187 = document.createElement('DIV');
    node_187.setAttribute('class', 'testimonial-content');
    node_186.appendChild(node_187);

    var node_188 = document.createElement('P');
    node_187.appendChild(node_188);

    var node_189 = document.createElement('I');
    node_189.setAttribute('class', 'bi bi-quote quote-icon-left');
    node_188.appendChild(node_189);

    var node_190 = document.createTextNode((new String("\\n                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum\\n                                                suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh\\n                                                et. Maecen aliquam, risus at semper.\\n                                                ")));
    node_188.appendChild(node_190);

    var node_191 = document.createElement('I');
    node_191.setAttribute('class', 'bi bi-quote quote-icon-right');
    node_188.appendChild(node_191);

    var node_192 = document.createElement('H3');
    node_187.appendChild(node_192);

    var node_193 = document.createTextNode((new String("Saul Goodman")));
    node_192.appendChild(node_193);

    var node_194 = document.createElement('H4');
    node_187.appendChild(node_194);

    var node_195 = document.createTextNode((new String("Ceo & Founder")));
    node_194.appendChild(node_195);

    var node_196 = document.createElement('DIV');
    node_196.setAttribute('class', 'stars');
    node_187.appendChild(node_196);

    var node_197 = document.createElement('I');
    node_197.setAttribute('class', 'bi bi-star-fill');
    node_196.appendChild(node_197);

    var node_198 = document.createElement('I');
    node_198.setAttribute('class', 'bi bi-star-fill');
    node_196.appendChild(node_198);

    var node_199 = document.createElement('I');
    node_199.setAttribute('class', 'bi bi-star-fill');
    node_196.appendChild(node_199);

    var node_200 = document.createElement('I');
    node_200.setAttribute('class', 'bi bi-star-fill');
    node_196.appendChild(node_200);

    var node_201 = document.createElement('I');
    node_201.setAttribute('class', 'bi bi-star-fill');
    node_196.appendChild(node_201);

    var node_202 = document.createElement('DIV');
    node_202.setAttribute('class', 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active');
    node_202.setAttribute('data-swiper-slide-index', '1');
    node_202.setAttribute('role', 'group');
    node_202.setAttribute('aria-label', '2 / 2');
    node_182.appendChild(node_202);

    var node_203 = document.createElement('DIV');
    node_203.setAttribute('class', 'testimonial-item');
    node_202.appendChild(node_203);

    var node_204 = document.createElement('DIV');
    node_204.setAttribute('class', 'row gy-4 justify-content-center');
    node_203.appendChild(node_204);

    var node_205 = document.createElement('DIV');
    node_205.setAttribute('class', 'col-lg-6');
    node_204.appendChild(node_205);

    var node_206 = document.createElement('DIV');
    node_206.setAttribute('class', 'testimonial-content');
    node_205.appendChild(node_206);

    var node_207 = document.createElement('P');
    node_206.appendChild(node_207);

    var node_208 = document.createElement('I');
    node_208.setAttribute('class', 'bi bi-quote quote-icon-left');
    node_207.appendChild(node_208);

    var node_209 = document.createTextNode((new String("\\n                                                Export tempor illum tamen malis malis eram quae irure esse labore quem\\n                                                cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua\\n                                                noster fugiat irure amet legam anim culpa.\\n                                                ")));
    node_207.appendChild(node_209);

    var node_210 = document.createElement('I');
    node_210.setAttribute('class', 'bi bi-quote quote-icon-right');
    node_207.appendChild(node_210);

    var node_211 = document.createElement('H3');
    node_206.appendChild(node_211);

    var node_212 = document.createTextNode((new String("Sara Wilsson")));
    node_211.appendChild(node_212);

    var node_213 = document.createElement('H4');
    node_206.appendChild(node_213);

    var node_214 = document.createTextNode((new String("Designer")));
    node_213.appendChild(node_214);

    var node_215 = document.createElement('DIV');
    node_215.setAttribute('class', 'stars');
    node_206.appendChild(node_215);

    var node_216 = document.createElement('I');
    node_216.setAttribute('class', 'bi bi-star-fill');
    node_215.appendChild(node_216);

    var node_217 = document.createElement('I');
    node_217.setAttribute('class', 'bi bi-star-fill');
    node_215.appendChild(node_217);

    var node_218 = document.createElement('I');
    node_218.setAttribute('class', 'bi bi-star-fill');
    node_215.appendChild(node_218);

    var node_219 = document.createElement('I');
    node_219.setAttribute('class', 'bi bi-star-fill');
    node_215.appendChild(node_219);

    var node_220 = document.createElement('I');
    node_220.setAttribute('class', 'bi bi-star-fill');
    node_215.appendChild(node_220);

    var node_221 = document.createElement('DIV');
    node_221.setAttribute('class', 'swiper-slide swiper-slide-prev swiper-slide-duplicate-next');
    node_221.setAttribute('data-swiper-slide-index', '0');
    node_221.setAttribute('role', 'group');
    node_221.setAttribute('aria-label', '1 / 2');
    node_182.appendChild(node_221);

    var node_222 = document.createElement('DIV');
    node_222.setAttribute('class', 'testimonial-item');
    node_221.appendChild(node_222);

    var node_223 = document.createElement('DIV');
    node_223.setAttribute('class', 'row gy-4 justify-content-center');
    node_222.appendChild(node_223);

    var node_224 = document.createElement('DIV');
    node_224.setAttribute('class', 'col-lg-6');
    node_223.appendChild(node_224);

    var node_225 = document.createElement('DIV');
    node_225.setAttribute('class', 'testimonial-content');
    node_224.appendChild(node_225);

    var node_226 = document.createElement('P');
    node_225.appendChild(node_226);

    var node_227 = document.createElement('I');
    node_227.setAttribute('class', 'bi bi-quote quote-icon-left');
    node_226.appendChild(node_227);

    var node_228 = document.createTextNode((new String("\\n                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum\\n                                                suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh\\n                                                et. Maecen aliquam, risus at semper.\\n                                                ")));
    node_226.appendChild(node_228);

    var node_229 = document.createElement('I');
    node_229.setAttribute('class', 'bi bi-quote quote-icon-right');
    node_226.appendChild(node_229);

    var node_230 = document.createElement('H3');
    node_225.appendChild(node_230);

    var node_231 = document.createTextNode((new String("Saul Goodman")));
    node_230.appendChild(node_231);

    var node_232 = document.createElement('H4');
    node_225.appendChild(node_232);

    var node_233 = document.createTextNode((new String("Ceo & Founder")));
    node_232.appendChild(node_233);

    var node_234 = document.createElement('DIV');
    node_234.setAttribute('class', 'stars');
    node_225.appendChild(node_234);

    var node_235 = document.createElement('I');
    node_235.setAttribute('class', 'bi bi-star-fill');
    node_234.appendChild(node_235);

    var node_236 = document.createElement('I');
    node_236.setAttribute('class', 'bi bi-star-fill');
    node_234.appendChild(node_236);

    var node_237 = document.createElement('I');
    node_237.setAttribute('class', 'bi bi-star-fill');
    node_234.appendChild(node_237);

    var node_238 = document.createElement('I');
    node_238.setAttribute('class', 'bi bi-star-fill');
    node_234.appendChild(node_238);

    var node_239 = document.createElement('I');
    node_239.setAttribute('class', 'bi bi-star-fill');
    node_234.appendChild(node_239);

    var node_240 = document.createElement('DIV');
    node_240.setAttribute('class', 'swiper-slide swiper-slide-active');
    node_240.setAttribute('data-swiper-slide-index', '1');
    node_240.setAttribute('role', 'group');
    node_240.setAttribute('aria-label', '2 / 2');
    node_182.appendChild(node_240);

    var node_241 = document.createElement('DIV');
    node_241.setAttribute('class', 'testimonial-item');
    node_240.appendChild(node_241);

    var node_242 = document.createElement('DIV');
    node_242.setAttribute('class', 'row gy-4 justify-content-center');
    node_241.appendChild(node_242);

    var node_243 = document.createElement('DIV');
    node_243.setAttribute('class', 'col-lg-6');
    node_242.appendChild(node_243);

    var node_244 = document.createElement('DIV');
    node_244.setAttribute('class', 'testimonial-content');
    node_243.appendChild(node_244);

    var node_245 = document.createElement('P');
    node_244.appendChild(node_245);

    var node_246 = document.createElement('I');
    node_246.setAttribute('class', 'bi bi-quote quote-icon-left');
    node_245.appendChild(node_246);

    var node_247 = document.createTextNode((new String("\\n                                                Export tempor illum tamen malis malis eram quae irure esse labore quem\\n                                                cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua\\n                                                noster fugiat irure amet legam anim culpa.\\n                                                ")));
    node_245.appendChild(node_247);

    var node_248 = document.createElement('I');
    node_248.setAttribute('class', 'bi bi-quote quote-icon-right');
    node_245.appendChild(node_248);

    var node_249 = document.createElement('H3');
    node_244.appendChild(node_249);

    var node_250 = document.createTextNode((new String("Sara Wilsson")));
    node_249.appendChild(node_250);

    var node_251 = document.createElement('H4');
    node_244.appendChild(node_251);

    var node_252 = document.createTextNode((new String("Designer")));
    node_251.appendChild(node_252);

    var node_253 = document.createElement('DIV');
    node_253.setAttribute('class', 'stars');
    node_244.appendChild(node_253);

    var node_254 = document.createElement('I');
    node_254.setAttribute('class', 'bi bi-star-fill');
    node_253.appendChild(node_254);

    var node_255 = document.createElement('I');
    node_255.setAttribute('class', 'bi bi-star-fill');
    node_253.appendChild(node_255);

    var node_256 = document.createElement('I');
    node_256.setAttribute('class', 'bi bi-star-fill');
    node_253.appendChild(node_256);

    var node_257 = document.createElement('I');
    node_257.setAttribute('class', 'bi bi-star-fill');
    node_253.appendChild(node_257);

    var node_258 = document.createElement('I');
    node_258.setAttribute('class', 'bi bi-star-fill');
    node_253.appendChild(node_258);

    var node_259 = document.createElement('DIV');
    node_259.setAttribute('class', 'swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev');
    node_259.setAttribute('data-swiper-slide-index', '0');
    node_259.setAttribute('role', 'group');
    node_259.setAttribute('aria-label', '1 / 2');
    node_182.appendChild(node_259);

    var node_260 = document.createElement('DIV');
    node_260.setAttribute('class', 'testimonial-item');
    node_259.appendChild(node_260);

    var node_261 = document.createElement('DIV');
    node_261.setAttribute('class', 'row gy-4 justify-content-center');
    node_260.appendChild(node_261);

    var node_262 = document.createElement('DIV');
    node_262.setAttribute('class', 'col-lg-6');
    node_261.appendChild(node_262);

    var node_263 = document.createElement('DIV');
    node_263.setAttribute('class', 'testimonial-content');
    node_262.appendChild(node_263);

    var node_264 = document.createElement('P');
    node_263.appendChild(node_264);

    var node_265 = document.createElement('I');
    node_265.setAttribute('class', 'bi bi-quote quote-icon-left');
    node_264.appendChild(node_265);

    var node_266 = document.createTextNode((new String("\\n                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum\\n                                                suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh\\n                                                et. Maecen aliquam, risus at semper.\\n                                                ")));
    node_264.appendChild(node_266);

    var node_267 = document.createElement('I');
    node_267.setAttribute('class', 'bi bi-quote quote-icon-right');
    node_264.appendChild(node_267);

    var node_268 = document.createElement('H3');
    node_263.appendChild(node_268);

    var node_269 = document.createTextNode((new String("Saul Goodman")));
    node_268.appendChild(node_269);

    var node_270 = document.createElement('H4');
    node_263.appendChild(node_270);

    var node_271 = document.createTextNode((new String("Ceo & Founder")));
    node_270.appendChild(node_271);

    var node_272 = document.createElement('DIV');
    node_272.setAttribute('class', 'stars');
    node_263.appendChild(node_272);

    var node_273 = document.createElement('I');
    node_273.setAttribute('class', 'bi bi-star-fill');
    node_272.appendChild(node_273);

    var node_274 = document.createElement('I');
    node_274.setAttribute('class', 'bi bi-star-fill');
    node_272.appendChild(node_274);

    var node_275 = document.createElement('I');
    node_275.setAttribute('class', 'bi bi-star-fill');
    node_272.appendChild(node_275);

    var node_276 = document.createElement('I');
    node_276.setAttribute('class', 'bi bi-star-fill');
    node_272.appendChild(node_276);

    var node_277 = document.createElement('I');
    node_277.setAttribute('class', 'bi bi-star-fill');
    node_272.appendChild(node_277);

    var node_278 = document.createElement('DIV');
    node_278.setAttribute('class', 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active');
    node_278.setAttribute('data-swiper-slide-index', '1');
    node_278.setAttribute('role', 'group');
    node_278.setAttribute('aria-label', '2 / 2');
    node_182.appendChild(node_278);

    var node_279 = document.createElement('DIV');
    node_279.setAttribute('class', 'testimonial-item');
    node_278.appendChild(node_279);

    var node_280 = document.createElement('DIV');
    node_280.setAttribute('class', 'row gy-4 justify-content-center');
    node_279.appendChild(node_280);

    var node_281 = document.createElement('DIV');
    node_281.setAttribute('class', 'col-lg-6');
    node_280.appendChild(node_281);

    var node_282 = document.createElement('DIV');
    node_282.setAttribute('class', 'testimonial-content');
    node_281.appendChild(node_282);

    var node_283 = document.createElement('P');
    node_282.appendChild(node_283);

    var node_284 = document.createElement('I');
    node_284.setAttribute('class', 'bi bi-quote quote-icon-left');
    node_283.appendChild(node_284);

    var node_285 = document.createTextNode((new String("\\n                                                Export tempor illum tamen malis malis eram quae irure esse labore quem\\n                                                cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua\\n                                                noster fugiat irure amet legam anim culpa.\\n                                                ")));
    node_283.appendChild(node_285);

    var node_286 = document.createElement('I');
    node_286.setAttribute('class', 'bi bi-quote quote-icon-right');
    node_283.appendChild(node_286);

    var node_287 = document.createElement('H3');
    node_282.appendChild(node_287);

    var node_288 = document.createTextNode((new String("Sara Wilsson")));
    node_287.appendChild(node_288);

    var node_289 = document.createElement('H4');
    node_282.appendChild(node_289);

    var node_290 = document.createTextNode((new String("Designer")));
    node_289.appendChild(node_290);

    var node_291 = document.createElement('DIV');
    node_291.setAttribute('class', 'stars');
    node_282.appendChild(node_291);

    var node_292 = document.createElement('I');
    node_292.setAttribute('class', 'bi bi-star-fill');
    node_291.appendChild(node_292);

    var node_293 = document.createElement('I');
    node_293.setAttribute('class', 'bi bi-star-fill');
    node_291.appendChild(node_293);

    var node_294 = document.createElement('I');
    node_294.setAttribute('class', 'bi bi-star-fill');
    node_291.appendChild(node_294);

    var node_295 = document.createElement('I');
    node_295.setAttribute('class', 'bi bi-star-fill');
    node_291.appendChild(node_295);

    var node_296 = document.createElement('I');
    node_296.setAttribute('class', 'bi bi-star-fill');
    node_291.appendChild(node_296);

    var node_297 = document.createElement('DIV');
    node_297.setAttribute('class', 'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal');
    node_181.appendChild(node_297);

    var node_298 = document.createElement('SPAN');
    node_298.setAttribute('class', 'swiper-pagination-bullet');
    node_298.setAttribute('tabindex', '0');
    node_298.setAttribute('role', 'button');
    node_298.setAttribute('aria-label', 'Go to slide 1');
    node_297.appendChild(node_298);

    var node_299 = document.createElement('SPAN');
    node_299.setAttribute('class', 'swiper-pagination-bullet swiper-pagination-bullet-active');
    node_299.setAttribute('tabindex', '0');
    node_299.setAttribute('role', 'button');
    node_299.setAttribute('aria-label', 'Go to slide 2');
    node_299.setAttribute('aria-current', 'true');
    node_297.appendChild(node_299);

    var node_300 = document.createElement('SPAN');
    node_300.setAttribute('class', 'swiper-notification');
    node_300.setAttribute('aria-live', 'assertive');
    node_300.setAttribute('aria-atomic', 'true');
    node_181.appendChild(node_300);

    var node_301 = document.createElement('SECTION');
    node_301.setAttribute('id', 'events');
    node_301.setAttribute('class', 'events');
    node_17.appendChild(node_301);

    var node_302 = document.createElement('DIV');
    node_302.setAttribute('class', 'container-fluid aos-init aos-animate');
    node_302.setAttribute('data-aos', 'fade-up');
    node_301.appendChild(node_302);

    var node_303 = document.createElement('DIV');
    node_303.setAttribute('class', 'section-header');
    node_302.appendChild(node_303);

    var node_304 = document.createElement('H2');
    node_303.appendChild(node_304);

    var node_305 = document.createTextNode((new String("Events")));
    node_304.appendChild(node_305);

    var node_306 = document.createElement('P');
    node_303.appendChild(node_306);

    var node_307 = document.createElement('SPAN');
    node_306.appendChild(node_307);

    var node_308 = document.createTextNode((new String("Your Moments")));
    node_307.appendChild(node_308);

    var node_309 = document.createTextNode((new String(" In Our Restaurant")));
    node_306.appendChild(node_309);

    var node_310 = document.createElement('DIV');
    node_310.setAttribute('class', 'slides-3 swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden aos-init aos-animate');
    node_310.setAttribute('data-aos', 'fade-up');
    node_310.setAttribute('data-aos-delay', '100');
    node_302.appendChild(node_310);

    var node_311 = document.createElement('DIV');
    node_311.setAttribute('class', 'swiper-wrapper');
    node_311.setAttribute('id', 'swiper-wrapper-1abf77f553a19349');
    node_311.setAttribute('aria-live', 'off');
    node_311.setAttribute('style', 'transition-duration: 0ms; transform: translate3d(-3924px, 0px, 0px);');
    node_310.appendChild(node_311);

    var node_312 = document.createElement('DIV');
    node_312.setAttribute('class', 'swiper-slide event-item d-flex flex-column justify-content-end swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev');
    node_312.setAttribute('style', 'background-image: url(\"assets/img/events-3.jpg\"); width: 941px; margin-right: 40px;');
    node_312.setAttribute('role', 'group');
    node_312.setAttribute('aria-label', '3 / 3');
    node_312.setAttribute('data-swiper-slide-index', '2');
    node_311.appendChild(node_312);

    var node_313 = document.createElement('H3');
    node_312.appendChild(node_313);

    var node_314 = document.createTextNode((new String("Birthday Parties")));
    node_313.appendChild(node_314);

    var node_315 = document.createElement('DIV');
    node_315.setAttribute('class', 'price align-self-start');
    node_312.appendChild(node_315);

    var node_316 = document.createTextNode((new String("$499")));
    node_315.appendChild(node_316);

    var node_317 = document.createElement('P');
    node_317.setAttribute('class', 'description');
    node_312.appendChild(node_317);

    var node_318 = document.createElement('DIV');
    node_318.setAttribute('class', 'swiper-slide event-item d-flex flex-column justify-content-end swiper-slide-duplicate-active');
    node_318.setAttribute('style', 'background-image: url(\"assets/img/events-1.jpg\"); width: 941px; margin-right: 40px;');
    node_318.setAttribute('role', 'group');
    node_318.setAttribute('aria-label', '1 / 3');
    node_318.setAttribute('data-swiper-slide-index', '0');
    node_311.appendChild(node_318);

    var node_319 = document.createElement('H3');
    node_318.appendChild(node_319);

    var node_320 = document.createTextNode((new String("Custom Parties")));
    node_319.appendChild(node_320);

    var node_321 = document.createElement('DIV');
    node_321.setAttribute('class', 'price align-self-start');
    node_318.appendChild(node_321);

    var node_322 = document.createTextNode((new String("$99")));
    node_321.appendChild(node_322);

    var node_323 = document.createElement('P');
    node_323.setAttribute('class', 'description');
    node_318.appendChild(node_323);

    var node_324 = document.createTextNode((new String("\\n                                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis\\n                                facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.\\n                            ")));
    node_323.appendChild(node_324);

    var node_325 = document.createElement('DIV');
    node_325.setAttribute('class', 'swiper-slide event-item d-flex flex-column justify-content-end');
    node_325.setAttribute('style', 'background-image: url(\"assets/img/events-2.jpg\"); width: 941px; margin-right: 40px;');
    node_325.setAttribute('role', 'group');
    node_325.setAttribute('aria-label', '2 / 3');
    node_325.setAttribute('data-swiper-slide-index', '1');
    node_311.appendChild(node_325);

    var node_326 = document.createElement('H3');
    node_325.appendChild(node_326);

    var node_327 = document.createTextNode((new String("Private Parties")));
    node_326.appendChild(node_327);

    var node_328 = document.createElement('DIV');
    node_328.setAttribute('class', 'price align-self-start');
    node_325.appendChild(node_328);

    var node_329 = document.createTextNode((new String("$289")));
    node_328.appendChild(node_329);

    var node_330 = document.createElement('P');
    node_330.setAttribute('class', 'description');
    node_325.appendChild(node_330);

    var node_331 = document.createTextNode((new String("\\n                                In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo\\n                                vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.\\n                            ")));
    node_330.appendChild(node_331);

    var node_332 = document.createElement('DIV');
    node_332.setAttribute('class', 'swiper-slide event-item d-flex flex-column justify-content-end swiper-slide-prev swiper-slide-duplicate-next');
    node_332.setAttribute('style', 'background-image: url(\"assets/img/events-3.jpg\"); width: 941px; margin-right: 40px;');
    node_332.setAttribute('role', 'group');
    node_332.setAttribute('aria-label', '3 / 3');
    node_332.setAttribute('data-swiper-slide-index', '2');
    node_311.appendChild(node_332);

    var node_333 = document.createElement('H3');
    node_332.appendChild(node_333);

    var node_334 = document.createTextNode((new String("Birthday Parties")));
    node_333.appendChild(node_334);

    var node_335 = document.createElement('DIV');
    node_335.setAttribute('class', 'price align-self-start');
    node_332.appendChild(node_335);

    var node_336 = document.createTextNode((new String("$499")));
    node_335.appendChild(node_336);

    var node_337 = document.createElement('P');
    node_337.setAttribute('class', 'description');
    node_332.appendChild(node_337);

    var node_338 = document.createElement('DIV');
    node_338.setAttribute('class', 'swiper-slide event-item d-flex flex-column justify-content-end swiper-slide-duplicate swiper-slide-active');
    node_338.setAttribute('style', 'background-image: url(\"assets/img/events-1.jpg\"); width: 941px; margin-right: 40px;');
    node_338.setAttribute('role', 'group');
    node_338.setAttribute('aria-label', '1 / 3');
    node_338.setAttribute('data-swiper-slide-index', '0');
    node_311.appendChild(node_338);

    var node_339 = document.createElement('H3');
    node_338.appendChild(node_339);

    var node_340 = document.createTextNode((new String("Custom Parties")));
    node_339.appendChild(node_340);

    var node_341 = document.createElement('DIV');
    node_341.setAttribute('class', 'price align-self-start');
    node_338.appendChild(node_341);

    var node_342 = document.createTextNode((new String("$99")));
    node_341.appendChild(node_342);

    var node_343 = document.createElement('P');
    node_343.setAttribute('class', 'description');
    node_338.appendChild(node_343);

    var node_344 = document.createTextNode((new String("\\n                                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis\\n                                facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.\\n                            ")));
    node_343.appendChild(node_344);

    var node_345 = document.createElement('DIV');
    node_345.setAttribute('class', 'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal');
    node_310.appendChild(node_345);

    var node_346 = document.createElement('SPAN');
    node_346.setAttribute('class', 'swiper-pagination-bullet swiper-pagination-bullet-active');
    node_346.setAttribute('tabindex', '0');
    node_346.setAttribute('role', 'button');
    node_346.setAttribute('aria-label', 'Go to slide 1');
    node_346.setAttribute('aria-current', 'true');
    node_345.appendChild(node_346);

    var node_347 = document.createElement('SPAN');
    node_347.setAttribute('class', 'swiper-pagination-bullet');
    node_347.setAttribute('tabindex', '0');
    node_347.setAttribute('role', 'button');
    node_347.setAttribute('aria-label', 'Go to slide 2');
    node_345.appendChild(node_347);

    var node_348 = document.createElement('SPAN');
    node_348.setAttribute('class', 'swiper-pagination-bullet');
    node_348.setAttribute('tabindex', '0');
    node_348.setAttribute('role', 'button');
    node_348.setAttribute('aria-label', 'Go to slide 3');
    node_345.appendChild(node_348);

    var node_349 = document.createElement('SPAN');
    node_349.setAttribute('class', 'swiper-notification');
    node_349.setAttribute('aria-live', 'assertive');
    node_349.setAttribute('aria-atomic', 'true');
    node_310.appendChild(node_349);

    var node_350 = document.createElement('SECTION');
    node_350.setAttribute('id', 'gallery');
    node_350.setAttribute('class', 'gallery section-bg');
    node_17.appendChild(node_350);

    var node_351 = document.createElement('DIV');
    node_351.setAttribute('class', 'container aos-init');
    node_351.setAttribute('data-aos', 'fade-up');
    node_350.appendChild(node_351);

    var node_352 = document.createElement('DIV');
    node_352.setAttribute('class', 'section-header');
    node_351.appendChild(node_352);

    var node_353 = document.createElement('H2');
    node_352.appendChild(node_353);

    var node_354 = document.createTextNode((new String("gallery")));
    node_353.appendChild(node_354);

    var node_355 = document.createElement('P');
    node_352.appendChild(node_355);

    var node_356 = document.createElement('SPAN');
    node_355.appendChild(node_356);

    var node_357 = document.createTextNode((new String("Our Gallery")));
    node_356.appendChild(node_357);


    var nd_1 = document.createElement('DIV');
    nd_1.setAttribute('class', 'container-gallery');

    var nd_2 = document.createElement('DIV');
    nd_2.setAttribute('class', 'popup popup-1');
    nd_1.appendChild(nd_2);

    var nd_3 = document.createElement('IMG');
    nd_3.setAttribute('class', 'img-fluid');
    nd_3.setAttribute('alt', 'Pop Up Gallety');
    nd_3.setAttribute('src', 'http://www.prepbootstrap.com/Content/images/template/design/design1.jpg');
    nd_2.appendChild(nd_3);

    var nd_4 = document.createElement('DIV');
    nd_4.setAttribute('class', 'popup popup-2');
    nd_1.appendChild(nd_4);

    var nd_5 = document.createElement('IMG');
    nd_5.setAttribute('class', 'img-fluid');
    nd_5.setAttribute('alt', 'Pop Up Gallety');
    nd_5.setAttribute('src', 'http://www.prepbootstrap.com/Content/images/template/design/design2.jpg');
    nd_4.appendChild(nd_5);

    var nd_6 = document.createElement('DIV');
    nd_6.setAttribute('class', 'popup popup-3');
    nd_1.appendChild(nd_6);

    var nd_7 = document.createElement('IMG');
    nd_7.setAttribute('class', 'img-fluid');
    nd_7.setAttribute('alt', 'Pop Up Gallety');
    nd_7.setAttribute('src', 'http://www.prepbootstrap.com/Content/images/template/design/design3.jpg');
    nd_6.appendChild(nd_7);

    var nd_8 = document.createElement('DIV');
    nd_8.setAttribute('class', 'popup popup-4');
    nd_1.appendChild(nd_8);

    var nd_9 = document.createElement('IMG');
    nd_9.setAttribute('class', 'img-fluid');
    nd_9.setAttribute('alt', 'Pop Up Gallety');
    nd_9.setAttribute('src', 'http://www.prepbootstrap.com/Content/images/template/design/design4.jpg');
    nd_8.appendChild(nd_9);

    var nd_10 = document.createElement('DIV');
    nd_10.setAttribute('class', 'popup popup-5');
    nd_1.appendChild(nd_10);

    var nd_11 = document.createElement('IMG');
    nd_11.setAttribute('class', 'img-fluid');
    nd_11.setAttribute('alt', 'Pop Up Gallety');
    nd_11.setAttribute('src', 'http://www.prepbootstrap.com/Content/images/template/design/design5.jpg');
    nd_10.appendChild(nd_11);
    node_351.appendChild(nd_1);

    var node_412 = document.createElement('SECTION');
    node_412.setAttribute('id', 'contact');
    node_412.setAttribute('class', 'contact');
    node_17.appendChild(node_412);

    var node_413 = document.createElement('DIV');
    node_413.setAttribute('class', 'container aos-init');
    node_413.setAttribute('data-aos', 'fade-up');
    node_412.appendChild(node_413);

    var node_414 = document.createElement('DIV');
    node_414.setAttribute('class', 'section-header');
    node_413.appendChild(node_414);

    var node_415 = document.createElement('H2');
    node_414.appendChild(node_415);

    var node_416 = document.createTextNode((new String("Contact")));
    node_415.appendChild(node_416);

    var node_417 = document.createElement('P');
    node_414.appendChild(node_417);

    var node_418 = document.createElement('SPAN');
    node_417.appendChild(node_418);

    var node_419 = document.createTextNode((new String("Contact Us")));
    node_418.appendChild(node_419);

    var node_420 = document.createElement('DIV');
    node_420.setAttribute('class', 'mb-3');
    node_413.appendChild(node_420);

    var node_421 = document.createElement('IFRAME');
    node_421.setAttribute('style', 'border:0; width: 100%; height: 350px;');
    node_421.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621');
    node_421.setAttribute('frameborder', '0');
    node_421.setAttribute('allowfullscreen', '');
    node_420.appendChild(node_421);

    var node_422 = document.createElement('DIV');
    node_422.setAttribute('class', 'row gy-4');
    node_413.appendChild(node_422);

    var node_423 = document.createElement('DIV');
    node_423.setAttribute('class', 'col-md-6');
    node_422.appendChild(node_423);

    var node_424 = document.createElement('DIV');
    node_424.setAttribute('class', 'info-item  d-flex align-items-center');
    node_423.appendChild(node_424);

    var node_425 = document.createElement('I');
    node_425.setAttribute('class', 'icon bi bi-map flex-shrink-0');
    node_424.appendChild(node_425);

    var node_426 = document.createElement('DIV');
    node_424.appendChild(node_426);

    var node_427 = document.createElement('H3');
    node_426.appendChild(node_427);

    var node_428 = document.createTextNode((new String("Our Address")));
    node_427.appendChild(node_428);

    var node_429 = document.createElement('P');
    node_426.appendChild(node_429);

    var node_430 = document.createTextNode((new String("A108 Adam Street, New York, NY 535022")));
    node_429.appendChild(node_430);

    var node_431 = document.createElement('DIV');
    node_431.setAttribute('class', 'col-md-6');
    node_422.appendChild(node_431);

    var node_432 = document.createElement('DIV');
    node_432.setAttribute('class', 'info-item d-flex align-items-center');
    node_431.appendChild(node_432);

    var node_433 = document.createElement('I');
    node_433.setAttribute('class', 'icon bi bi-envelope flex-shrink-0');
    node_432.appendChild(node_433);

    var node_434 = document.createElement('DIV');
    node_432.appendChild(node_434);

    var node_435 = document.createElement('H3');
    node_434.appendChild(node_435);

    var node_436 = document.createTextNode((new String("Email Us")));
    node_435.appendChild(node_436);

    var node_437 = document.createElement('P');
    node_434.appendChild(node_437);

    var node_438 = document.createTextNode((new String("contact@example.com")));
    node_437.appendChild(node_438);

    var node_439 = document.createElement('DIV');
    node_439.setAttribute('class', 'col-md-6');
    node_422.appendChild(node_439);

    var node_440 = document.createElement('DIV');
    node_440.setAttribute('class', 'info-item  d-flex align-items-center');
    node_439.appendChild(node_440);

    var node_441 = document.createElement('I');
    node_441.setAttribute('class', 'icon bi bi-telephone flex-shrink-0');
    node_440.appendChild(node_441);

    var node_442 = document.createElement('DIV');
    node_440.appendChild(node_442);

    var node_443 = document.createElement('H3');
    node_442.appendChild(node_443);

    var node_444 = document.createTextNode((new String("Call Us")));
    node_443.appendChild(node_444);

    var node_445 = document.createElement('P');
    node_442.appendChild(node_445);

    var node_446 = document.createTextNode((new String("+1 5589 55488 55")));
    node_445.appendChild(node_446);

    var node_447 = document.createElement('DIV');
    node_447.setAttribute('class', 'col-md-6');
    node_422.appendChild(node_447);

    var node_448 = document.createElement('DIV');
    node_448.setAttribute('class', 'info-item  d-flex align-items-center');
    node_447.appendChild(node_448);

    var node_449 = document.createElement('I');
    node_449.setAttribute('class', 'icon bi bi-share flex-shrink-0');
    node_448.appendChild(node_449);

    var node_450 = document.createElement('DIV');
    node_448.appendChild(node_450);

    var node_451 = document.createElement('H3');
    node_450.appendChild(node_451);

    var node_452 = document.createTextNode((new String("Opening Hours")));
    node_451.appendChild(node_452);

    var node_453 = document.createElement('DIV');
    node_450.appendChild(node_453);

    var node_454 = document.createElement('STRONG');
    node_453.appendChild(node_454);

    var node_455 = document.createElement('STRONG');
    node_453.appendChild(node_455);

    var node_456 = document.createTextNode((new String(" Closed\\n                                ")));
    node_453.appendChild(node_456);

}
function paginaProducto() {
    const dad = document.getElementById('seccion');

    const container = document.createElement("div");
    container.className = "container margen granate aplicar-borde";

    const col = document.createElement("div");
    col.className = "col bg-white aplicar-borde margen";

    const productContent = document.createElement("div");
    productContent.className = "product-content product-wrap clearfix product-deatil";

    const row = document.createElement("div");
    row.className = "row";

    const imageCol = document.createElement("div");
    imageCol.className = "col-md-5 col-sm-12 col-xs-12";

    const productImage = document.createElement("div");
    productImage.className = "product-image";

    const carousel = document.createElement("div");
    carousel.id = "carouselExampleControls";
    carousel.className = "carousel slide";
    carousel.setAttribute("data-bs-ride", "carousel");

    const carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";

    const carouselItem1 = document.createElement("div");
    carouselItem1.className = "carousel-item active";

    const img1 = document.createElement("img");
    img1.src = "img/carousel1.jpg";
    img1.className = "d-block w-100";
    img1.alt = "...";

    carouselItem1.appendChild(img1);

    const carouselItem2 = document.createElement("div");
    carouselItem2.className = "carousel-item";

    const img2 = document.createElement("img");
    img2.src = "img/carousel.jpg";
    img2.className = "d-block w-100";
    img2.alt = "...";

    carouselItem2.appendChild(img2);

    const carouselItem3 = document.createElement("div");
    carouselItem3.className = "carousel-item";

    const img3 = document.createElement("img");
    img3.src = "img/carousel0.jpg";
    img3.className = "d-block w-100";
    img3.alt = "...";

    carouselItem3.appendChild(img3);

    carouselInner.appendChild(carouselItem1);
    carouselInner.appendChild(carouselItem2);
    carouselInner.appendChild(carouselItem3);

    const carouselPrevBtn = document.createElement("button");
    carouselPrevBtn.className = "carousel-control-prev";
    carouselPrevBtn.type = "button";
    carouselPrevBtn.setAttribute("data-bs-target", "#carouselExampleControls");
    carouselPrevBtn.setAttribute("data-bs-slide", "prev");

    const carouselPrevIcon = document.createElement("span");
    carouselPrevIcon.className = "carousel-control-prev-icon";
    carouselPrevIcon.setAttribute("aria-hidden", "true");

    const carouselPrevSpan = document.createElement("span");
    carouselPrevSpan.className = "visually-hidden";
    carouselPrevSpan.innerHTML = "Previous";

    carouselPrevBtn.appendChild(carouselPrevIcon);
    carouselPrevBtn.appendChild(carouselPrevSpan);

    const carouselNextBtn = document.createElement("button");
    carouselNextBtn.className = "carousel-control-next";
    carouselNextBtn.type = "button";
    carouselNextBtn.setAttribute("data-bs-target", "#carouselExampleControls");
    carouselNextBtn.setAttribute("data-bs-slide", "next");

    const carouselNextIcon = document.createElement("span");
    carouselNextIcon.className = "carousel-control-next-icon";
    carouselNextIcon.setAttribute("aria-hidden", "true");

    const carouselNextSpan = document.createElement("span");
    carouselNextSpan.className = "visually-hidden";
    carouselNextSpan.innerHTML = "Next";

    carouselNextBtn.appendChild(carouselNextIcon);
    carouselNextBtn.appendChild(carouselPrevSpan);

    carousel.appendChild(carouselInner);
    carousel.appendChild(carouselPrevBtn);
    carousel.appendChild(carouselNextBtn);

    productImage.appendChild(carousel);

    const hr1 = document.createElement("hr");

    const img4 = document.createElement("img");
    img4.src = "img/tiempo.png";

    const hr2 = document.createElement("hr");

    const img5 = document.createElement("img");
    img5.src = "img/restaurante.png";

    const hr7 = document.createElement("hr");

    const img6 = document.createElement("img");
    img6.src = "img/supermercado.png";

    const hr8 = document.createElement("hr");

    imageCol.appendChild(productImage);
    imageCol.appendChild(hr1);
    imageCol.appendChild(img4);
    imageCol.appendChild(hr2);
    imageCol.appendChild(img5);
    imageCol.appendChild(hr7);
    imageCol.appendChild(img6);
    imageCol.appendChild(hr8);


    const detailsCol = document.createElement("div");
    detailsCol.className = "col-md-6 col-md-offset-1 col-sm-12 col-xs-12";

    const name = document.createElement("h2");
    name.className = "name";
    name.innerText = "Mortitx";

    const brandName = document.createElement("br");


    const star1 = document.createElement("i");
    star1.className = "fa fa-star fa-2x text-primary";

    const star2 = document.createElement("i");
    star2.className = "fa fa-star fa-2x text-primary";

    const star3 = document.createElement("i");
    star3.className = "fa fa-star fa-2x text-primary";

    const star4 = document.createElement("i");
    star4.className = "fa fa-star fa-2x text-primary";

    const star5 = document.createElement("i");
    star5.className = "fa fa-star fa-2x text-muted";

    const span1 = document.createElement('span');
    span1.className = "fa fa-2x";

    const g = document.createElement('h5');
    g.innerText = "(109) Votes";

    span1.appendChild(g);

    const ref = document.createElement('a');
    ref.href = "javascript:gestorVisionado(4)";
    ref.innerText = "109 customer reviews";

    name.appendChild(brandName);
    name.appendChild(star1);
    name.appendChild(star2);
    name.appendChild(star3);
    name.appendChild(star4);
    name.appendChild(star5);
    name.appendChild(span1);
    name.appendChild(ref);

    const hr3 = document.createElement('hr');
    const fila = document.createElement('div');
    fila.className = "row";

    const colu = document.createElement('div');
    colu.className = "col";

    const im = document.createElement('img');
    im.className = "margen";
    im.setAttribute('src', 'http://www.vinyesmortitx.com/img/logo-mo-vinyes-mortitx.png');
    im.width = 150;
    im.width = 65;

    const colsm = document.createElement('div');
    colsm.className = 'col-sm';

    const dx = document.createElement('dl');

    const dt1 = document.createElement('dt');
    dt1.innerText = 'Horario: ';

    const icono1 = document.createElement('i');
    icono1.className = "fa-solid fa-clock";

    dt1.appendChild(icono1);

    const ddx = document.createElement('dd');
    ddx.innerText = 'Mo,Tu,We,Th,Fr 08:00-16:00';

    const dt2 = document.createElement('dt');
    dt2.innerText = 'Teléfono: ';

    const icono2 = document.createElement('i');
    icono2.className = "fa-solid fa-phone";

    dt2.appendChild(icono2);

    const ddx2 = document.createElement('dd');
    ddx2.innerText = '971533889';


    dx.appendChild(dt1);
    dx.appendChild(ddx);
    dx.appendChild(dt2);
    dx.appendChild(ddx2);

    colsm.appendChild(dx);

    colu.appendChild(im);
    colu.appendChild(colsm);

    const colsm1 = document.createElement('div');
    colsm1.className = 'col-sm';

    const dxx = document.createElement('dl');

    const dt1x = document.createElement('dt');
    dt1x.innerText = 'Email: ';

    const icono1x = document.createElement('i');
    icono1x.className = "fa-solid fa-envelope";

    dt1x.appendChild(icono1x);

    const ddxx = document.createElement('dd');
    const ref1x = document.createElement('a');
    ref1x.href = 'info@vinyesmortitx.com';
    ref1x.innerText = 'info@vinyesmortitx.com';
    ref1x.className = 'text-navy';

    ddxx.appendChild(ref1x);

    const dt2x = document.createElement('dt');
    dt2x.innerText = 'Web: ';

    const icono2x = document.createElement('i');
    icono2x.className = "fa-solid fa-at";

    dt2x.appendChild(icono2x);

    const ddx2x = document.createElement('dd');
    const ref2x = document.createElement('a');
    ref2x.href = 'http://www.vinyesmortitx.com';
    ref2x.innerText = 'http://www.vinyesmortitx.com';
    ref2x.className = 'text-navy';

    ddx2x.appendChild(ref2x);
    const dt3x = document.createElement('dt');
    dt3x.innerText = 'Dirección: ';

    const icono3x = document.createElement('i');
    icono3x.className = "fa-solid fa-location-dot";

    dt3x.appendChild(icono3x);

    const ddx3x = document.createElement('dd');
    ddx3x.innerText = 'Ctra. Pollença - Lluc- Km 10,9';

    const ddx4x = document.createElement('dd');
    ddx4x.innerText = 'Mallorca, Escorca, 07470';

    dxx.appendChild(dt1x);
    dxx.appendChild(ddxx);
    dxx.appendChild(dt2x);
    dxx.appendChild(ddx2x);
    dxx.appendChild(dt3x);
    dxx.appendChild(ddx3x);
    dxx.appendChild(ddx4x);

    colsm1.appendChild(dxx);

    fila.appendChild(colu);
    fila.appendChild(colsm1);

    const hr4 = document.createElement('hr');

    const div = document.createElement('div');
    div.classList.add('p-5', 'rounded', 'shadow', 'mb-5');

    // create tabs
    const ul = document.createElement('ul');
    ul.id = 'myTab';
    ul.role = 'tablist';
    ul.classList.add('nav', 'nav-tabs', 'nav-pills', 'flex-column', 'flex-sm-row', 'text-center', 'bg-light', 'border-0', 'rounded-nav');

    // create tab items
    const liDesc = document.createElement('li');
    liDesc.classList.add('nav-item', 'flex-sm-fill', 'granate');
    const aDesc = document.createElement('a');
    aDesc.id = 'desc-tab';
    aDesc.dataset.toggle = 'tab';
    aDesc.role = 'tab';
    aDesc.setAttribute('aria-controls', 'home');
    aDesc.setAttribute('aria-selected', 'true');
    aDesc.classList.add('nav-link', 'bg-danger', 'border-0', 'text-uppercase', 'font-weight-bold', 'active');
    aDesc.textContent = 'Descripción';
    liDesc.appendChild(aDesc);

    const liOpinion = document.createElement('li');
    liOpinion.classList.add('nav-item', 'flex-sm-fill', 'granate');
    const aOpinion = document.createElement('a');
    aOpinion.id = 'opinion-tab';
    aOpinion.dataset.toggle = 'tab';
    aOpinion.role = 'tab';
    aOpinion.setAttribute('aria-controls', 'profile');
    aOpinion.setAttribute('aria-selected', 'false');
    aOpinion.classList.add('nav-link', 'border-0', 'text-uppercase', 'font-weight-bold');
    aOpinion.textContent = 'Opiniones';
    liOpinion.appendChild(aOpinion);

    const liVideo = document.createElement('li');
    liVideo.classList.add('nav-item', 'flex-sm-fill', 'granate');
    const aVideo = document.createElement('a');
    aVideo.id = 'video-tab';
    aVideo.dataset.toggle = 'tab';
    aVideo.role = 'tab';
    aVideo.setAttribute('aria-controls', 'contact');
    aVideo.setAttribute('aria-selected', 'false');
    aVideo.classList.add('nav-link', 'border-0', 'text-uppercase', 'font-weight-bold');
    aVideo.textContent = 'Videos';
    liVideo.appendChild(aVideo);

    ul.appendChild(liDesc);
    ul.appendChild(liOpinion);
    ul.appendChild(liVideo);

    // create tab content
    const divTabContent = document.createElement('div');
    divTabContent.id = 'myTabContent';
    divTabContent.classList.add('tab-content', 'margen');

    descripcionProducto(divTabContent);

    // append tabs and tab content to the main div
    div.appendChild(ul);
    div.appendChild(divTabContent);

    const hr5 = document.createElement('hr');

    detailsCol.appendChild(name);
    detailsCol.appendChild(hr3);
    detailsCol.appendChild(fila);
    detailsCol.appendChild(hr4);
    detailsCol.appendChild(div);
    detailsCol.appendChild(hr5);

    row.appendChild(imageCol);
    row.appendChild(detailsCol);

    productContent.appendChild(row);

    vinoslist(productContent);

    col.appendChild(productContent);
    container.appendChild(col);
    dad.appendChild(container);
}

function filtrado2() {
    const dad = document.getElementById("seccion");
    // Crear el elemento contenedor y añadir las clases necesarias
    const containerMain = document.createElement('div');
    containerMain.classList.add('container', 'granate', 'aplicar-borde');

    const container = document.createElement("div");
    container.classList.add("container");

    const row = document.createElement("div");
    row.classList.add("row", "justify-content-center", "margen");

    const title = document.createElement("h3");
    title.classList.add("card-title", "margen");
    //title.textContent = " ";

    const form = document.createElement("form");
    form.classList.add("form-inline");

    const locationFormGroup = document.createElement("div");
    locationFormGroup.classList.add("form-group", "mx-3");

    const locationLabel = document.createElement("label");
    locationLabel.setAttribute("for", "location-filter");
    locationLabel.classList.add("sr-only");
    locationLabel.textContent = "Ubicación:";

    const locationInput = document.createElement("input");
    locationInput.setAttribute("type", "text");
    locationInput.setAttribute("id", "location-filter");
    locationInput.setAttribute("name", "location");
    locationInput.classList.add("form-control", "mr-3", "margen");
    locationInput.setAttribute("placeholder", "Ingrese una ubicación");

    locationFormGroup.appendChild(locationLabel);
    locationFormGroup.appendChild(locationInput);

    const ratingFormGroup = document.createElement("div");
    ratingFormGroup.classList.add("form-group", "margen", "mx-3");

    const ratingLabel = document.createElement("label");
    ratingLabel.setAttribute("for", "rating-filter");
    ratingLabel.classList.add("sr-only");
    ratingLabel.textContent = "Valoración:";

    const ratingSelect = document.createElement("select");
    ratingSelect.setAttribute("id", "rating-filter");
    ratingSelect.setAttribute("name", "rating");
    ratingSelect.classList.add("form-select", "margen", "mr-3");

    const option0 = document.createElement("option");
    option0.setAttribute("value", "0");
    option0.textContent = "Seleccione una valoración";

    const option1 = document.createElement("option");
    option1.setAttribute("value", "1");
    option1.textContent = "1 estrella";

    const option2 = document.createElement("option");
    option2.setAttribute("value", "2");
    option2.textContent = "2 estrellas";

    const option3 = document.createElement("option");
    option3.setAttribute("value", "3");
    option3.textContent = "3 estrellas";

    const option4 = document.createElement("option");
    option4.setAttribute("value", "4");
    option4.textContent = "4 estrellas";

    const option5 = document.createElement("option");
    option5.setAttribute("value", "5");
    option5.textContent = "5 estrellas";

    ratingSelect.appendChild(option0);
    ratingSelect.appendChild(option1);
    ratingSelect.appendChild(option2);
    ratingSelect.appendChild(option3);
    ratingSelect.appendChild(option4);
    ratingSelect.appendChild(option5);

    ratingFormGroup.appendChild(ratingLabel);
    ratingFormGroup.appendChild(ratingSelect);

    const timeFormGroup = document.createElement("div");
    timeFormGroup.classList.add("form-group", "margen", "mx-3");

    const timeLabel = document.createElement("label");
    timeLabel.setAttribute("for", "time-filter");
    timeLabel.classList.add("sr-only");
    timeLabel.textContent = "Horario de apertura:";

    const timeInputGroup = document.createElement("div");
    timeInputGroup.classList.add("input-group");

    const openingTimeInput = document.createElement("input");
    openingTimeInput.setAttribute("type", "time");
    openingTimeInput.setAttribute("id", "time-filter");
    openingTimeInput.setAttribute("name", "opening-time");
    openingTimeInput.classList.add("form-control", "mr-2");

    const toLabel = document.createElement("span");
    toLabel.classList.add("input-group-text");
    toLabel.textContent = "a";

    const closingTimeInput = document.createElement("input");
    closingTimeInput.setAttribute("type", "time");
    closingTimeInput.setAttribute("id", "time-filter");
    closingTimeInput.setAttribute("name", "closing-time");
    closingTimeInput.classList.add("form-control", "ml-2");

    timeInputGroup.appendChild(openingTimeInput);
    timeInputGroup.appendChild(toLabel);
    timeInputGroup.appendChild(closingTimeInput);

    timeFormGroup.appendChild(timeLabel);
    timeFormGroup.appendChild(timeInputGroup);

    const weekFormGroup = document.createElement("div");
    weekFormGroup.classList.add("form-group", "margen", "mx-3");

    const weekLabel = document.createElement("label");
    weekLabel.setAttribute("for", "rating-filter");
    weekLabel.classList.add("sr-only");
    weekLabel.textContent = "Días de la semana:";

    const weekSelect = document.createElement("select");
    weekSelect.setAttribute("id", "rating-filter");
    weekSelect.setAttribute("name", "rating");
    weekSelect.classList.add("form-select", "mr-3");

    const option0w = document.createElement("option");
    option0w.setAttribute("value", "0");
    option0w.textContent = "Seleccione los días";

    const option1w = document.createElement("option");
    option1w.setAttribute("value", "lunes");
    option1w.textContent = "Lunes";

    const option2w = document.createElement("option");
    option2w.setAttribute("value", "martes");
    option2w.textContent = "Martes";

    const option3w = document.createElement("option");
    option3w.setAttribute("value", "miercoles");
    option3w.textContent = "Miercoles";

    const option4w = document.createElement("option");
    option4w.setAttribute("value", "jueves");
    option4w.textContent = "Jueves";

    const option5w = document.createElement("option");
    option5w.setAttribute("value", "viernes");
    option5w.textContent = "Viernes";

    const option6w = document.createElement("option");
    option6w.setAttribute("value", "sabado");
    option6w.textContent = "Sabado";

    const option7w = document.createElement("option");
    option7w.setAttribute("value", "domingo");
    option7w.textContent = "Domingo";

    weekSelect.appendChild(option0w);
    weekSelect.appendChild(option1w);
    weekSelect.appendChild(option2w);
    weekSelect.appendChild(option3w);
    weekSelect.appendChild(option4w);
    weekSelect.appendChild(option5w);
    weekSelect.appendChild(option6w);
    weekSelect.appendChild(option7w);

    weekFormGroup.appendChild(weekLabel);
    weekFormGroup.appendChild(weekSelect);

    const f = document.createElement('div');
    f.className = 'row';

    const f1 = document.createElement('div');
    f1.className = 'col-sm';

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.className = "btn btn-primary mx-3";
    submit.textContent = "Buscar";

    f1.appendChild(submit);
    f.appendChild(f1);

    const f2 = document.createElement('div');
    f2.className = 'col-sm';

    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('form-check');

    const checkboxInput = document.createElement('input');
    checkboxInput.classList.add('form-check-input');
    checkboxInput.type = 'checkbox';
    checkboxInput.value = '';
    checkboxInput.id = 'flexCheckChecked';
    checkboxInput.checked = true;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('form-check-label');
    checkboxLabel.setAttribute('for', 'flexCheckChecked');
    checkboxLabel.textContent = 'Favoritos';

    checkboxDiv.appendChild(checkboxInput);
    checkboxDiv.appendChild(checkboxLabel);

    f2.appendChild(checkboxDiv);
    f.appendChild(f2);

    const f3 = document.createElement('div');
    f3.className = 'col-sm';

    const checkboxDiv2 = document.createElement('div');
    checkboxDiv2.classList.add('form-check');

    const checkboxInput2 = document.createElement('input');
    checkboxInput2.classList.add('form-check-input');
    checkboxInput2.type = 'checkbox';
    checkboxInput2.value = '';
    checkboxInput2.id = 'flexCheckChecked';
    checkboxInput2.checked = true;

    const checkboxLabel2 = document.createElement('label');
    checkboxLabel2.classList.add('form-check-label');
    checkboxLabel2.setAttribute('for', 'flexCheckChecked');
    checkboxLabel2.textContent = 'Abierto';

    checkboxDiv2.appendChild(checkboxInput2);
    checkboxDiv2.appendChild(checkboxLabel2);

    f3.appendChild(checkboxDiv2);
    f.appendChild(f3);

    form.appendChild(locationFormGroup);
    form.appendChild(ratingFormGroup);
    form.appendChild(timeFormGroup);
    form.appendChild(weekFormGroup);
    form.appendChild(f);
    title.appendChild(form);
    row.appendChild(title);
    container.appendChild(row);
    containerMain.appendChild(container);
    dad.appendChild(containerMain);

}

function activarBotonesPrincipal() {
    const desc = document.getElementById('desc-tab');
    const op = document.getElementById('opinion-tab');
    const vid = document.getElementById('video-tab');

    desc.href = "javascript:changeOpcionProducto(0)";
    op.href = "javascript:changeOpcionProducto(1)";
    vid.href = "javascript:changeOpcionProducto(2)";
}

function changeOpcionProducto(opcion) {
    const dad = document.getElementById('myTabContent');
    if (dad.hasChildNodes()) {
        while (dad.childNodes.length >= 1) {
            dad.removeChild(dad.firstChild);
        }
    }
    switch (opcionActiva) {
        case 0:
            const activo = document.getElementById('desc-tab');
            activo.className = "nav-link border-0 text-uppercase font-weight-bold";
            activo.setAttribute('aria-selected', 'false');
            break;
        case 1:
            const activo1 = document.getElementById('opinion-tab');
            activo1.className = "nav-link border-0 text-uppercase font-weight-bold";
            activo1.setAttribute('aria-selected', 'false');
            break;
        case 2:
            const activo2 = document.getElementById('video-tab');
            activo2.className = "nav-link border-0 text-uppercase font-weight-bold";
            activo2.setAttribute('aria-selected', 'false');
            break;
    }
    switch (opcion) {
        case 0:
            const activo = document.getElementById('desc-tab');
            activo.className = "nav-link bg-danger border-0 text-uppercase font-weight-bold active";
            activo.setAttribute('aria-selected', 'true');
            descripcionProducto(dad);
            break;
        case 1:
            const activo1 = document.getElementById('opinion-tab');
            activo1.className = "nav-link bg-danger border-0 text-uppercase font-weight-bold active";
            activo1.setAttribute('aria-selected', 'true');
            opinionProducto(dad);
            break;
        case 2:
            const activo2 = document.getElementById('video-tab');
            activo2.className = "nav-link bg-danger border-0 text-uppercase font-weight-bold active";
            activo2.setAttribute('aria-selected', 'true');
            videoProducto(dad);
            break;
    }
    opcionActiva = opcion;
}

function botonesNav() {
    const b = document.getElementById("busqueda");
    b.href = "javascript:gestorVisionado(0)";

    const icono = document.getElementById("icono");
    icono.onclick = function () {
        paginaPrincipal();
    };

}

function paginaPrincipal() {
    const h = document.getElementById("header");
    var seccion = document.getElementById("seccion");


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

function crearCarouselPrincipal() {
    var divClasses = ["container px-1", "row gx-5 align-items-center justify-content-center",
        "col-lg-8 col-xl-7 col-xxl-6", "my-5 text-center text-xl-start"];
    var dad = document.getElementById("primer");
    for (var i = 0; i < divClasses.length; i++) {
        var div = document.createElement("div");
        div.className = divClasses[i];
        if (i == 1) {
            div.setAttribute("id", "pointer");
        }
        dad.appendChild(div);
        dad = div;
    }
    var h1 = document.createElement("h1");
    h1.className = "display-5 fw-bolder text-white mb-2";
    var txt = document.createTextNode("A Bootstrap 5 template for modern businesses");
    h1.appendChild(txt);
    dad.appendChild(h1);
    var div = document.createElement("div");
    div.className = "d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start";
    dad.appendChild(div);
    createCarousel(document.getElementById("pointer"));
}

function createCarousel(dad) {

    const carousel = document.createElement('div');
    carousel.setAttribute('id', 'carouselExampleDark');
    carousel.setAttribute('class', 'carousel carousel-dark slide');
    dad.appendChild(carousel);
    const indicators = document.createElement('div');
    indicators.setAttribute('class', 'carousel-indicators');

    const indicator1 = document.createElement('button');
    indicator1.setAttribute('type', 'button');
    indicator1.setAttribute('data-bs-target', '#carouselExampleDark');
    indicator1.setAttribute('data-bs-slide-to', '0');
    indicator1.setAttribute('class', 'active');
    indicator1.setAttribute('aria-current', 'true');
    indicator1.setAttribute('aria-label', 'Slide 1');

    const indicator2 = document.createElement('button');
    indicator2.setAttribute('type', 'button');
    indicator2.setAttribute('data-bs-target', '#carouselExampleDark');
    indicator2.setAttribute('data-bs-slide-to', '1');
    indicator2.setAttribute('aria-label', 'Slide 2');

    const indicator3 = document.createElement('button');
    indicator3.setAttribute('type', 'button');
    indicator3.setAttribute('data-bs-target', '#carouselExampleDark');
    indicator3.setAttribute('data-bs-slide-to', '2');
    indicator3.setAttribute('aria-label', 'Slide 3');

    indicators.appendChild(indicator1);
    indicators.appendChild(indicator2);
    indicators.appendChild(indicator3);

    carousel.appendChild(indicators);

    const inner = document.createElement('div');
    inner.setAttribute('class', 'carousel-inner');

    const item1 = document.createElement('div');
    item1.setAttribute('class', 'carousel-item active');
    item1.setAttribute('data-bs-interval', '10000');

    const ratio1 = document.createElement('div');
    ratio1.setAttribute('class', 'ratio ratio-21x9');

    const img1 = document.createElement('img');
    img1.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_1234231_569643109759057_294746408_n.jpg');
    img1.setAttribute('class', 'd-block w-100');
    img1.setAttribute('alt', '...');

    const caption1 = document.createElement('div');
    caption1.setAttribute('class', 'carousel-caption d-none d-md-block');

    const caption1Title = document.createElement('h5');
    caption1Title.innerHTML = 'First slide label';

    const caption1Text = document.createElement('p');
    caption1Text.innerHTML = 'Some representative placeholder content for the first slide.';

    caption1.appendChild(caption1Title);
    caption1.appendChild(caption1Text);

    ratio1.appendChild(img1);

    item1.appendChild(ratio1);
    item1.appendChild(caption1);

    const item2 = document.createElement('div');
    item2.setAttribute('class', 'carousel-item');
    item2.setAttribute('data-bs-interval', '2000');

    const ratio2 = document.createElement('div');
    ratio2.setAttribute('class', 'ratio ratio-21x9');

    const img2 = document.createElement('img');
    img2.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_1376994_597700826953285_1533645700_n.jpg');
    img2.setAttribute('class', 'd-block w-100');
    img2.setAttribute('alt', '...');

    const caption2 = document.createElement('div');
    caption2.setAttribute('class', 'carousel-caption d-none d-md-block');

    const caption2Title = document.createElement('h5');
    caption2Title.innerHTML = 'Second slide label';

    const caption2Text = document.createElement('p');
    caption2Text.innerHTML = 'Some representative placeholder content for the second slide.';

    caption2.appendChild(caption2Title);
    caption2.appendChild(caption2Text);

    ratio2.appendChild(img2);

    item2.appendChild(ratio2);
    item2.appendChild(caption2);

    const item3 = document.createElement('div');
    item3.setAttribute('class', 'carousel-item');
    item3.setAttribute('data-bs-interval', '2000');

    const ratio3 = document.createElement('div');
    ratio3.setAttribute('class', 'ratio ratio-21x9');

    const img3 = document.createElement('img');
    img3.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_1383991_597701483619886_1555644589_n.jpg');
    img3.setAttribute('class', 'd-block w-100');
    img3.setAttribute('alt', '...');

    const caption3 = document.createElement('div');
    caption3.setAttribute('class', 'carousel-caption d-none d-md-block');

    const caption3Title = document.createElement('h5');
    caption3Title.innerHTML = 'Third slide label';

    const caption3Text = document.createElement('p');
    caption3Text.innerHTML = 'Some representative placeholder content for the third slide.';

    caption3.appendChild(caption3Title);
    caption3.appendChild(caption3Text);

    ratio3.appendChild(img3);

    item3.appendChild(ratio3);
    item3.appendChild(caption3);

    inner.appendChild(item1);
    inner.appendChild(item2);
    inner.appendChild(item3);

    carousel.appendChild(inner);

    const prevBtn = document.createElement("button");
    prevBtn.classList.add("carousel-control-prev");
    prevBtn.setAttribute("type", "button");
    prevBtn.setAttribute("data-bs-target", "#carouselExampleDark");
    prevBtn.setAttribute("data-bs-slide", "prev");

    const prevIcon = document.createElement("span");
    prevIcon.classList.add("carousel-control-prev-icon");
    prevIcon.setAttribute("aria-hidden", "true");
    prevBtn.appendChild(prevIcon);

    const prevText = document.createElement("span");
    prevText.classList.add("visually-hidden");
    prevText.innerText = "Previous";
    prevBtn.appendChild(prevText);

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("carousel-control-next");
    nextBtn.setAttribute("type", "button");
    nextBtn.setAttribute("data-bs-target", "#carouselExampleDark");
    nextBtn.setAttribute("data-bs-slide", "next");

    const nextIcon = document.createElement("span");
    nextIcon.classList.add("carousel-control-next-icon");
    nextIcon.setAttribute("aria-hidden", "true");
    nextBtn.appendChild(nextIcon);

    const nextText = document.createElement("span");
    nextText.classList.add("visually-hidden");
    nextText.innerText = "Next";
    nextBtn.appendChild(nextText);

    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);
}

function listadoCardXL() {
    const dad = document.getElementById("seccion");
    const container1 = document.createElement("div");
    container1.className = "container granate aplicar-borde margen";

    const row = document.createElement("div");
    row.className = "row";

    const containerIcons = document.createElement('div');
    containerIcons.className = 'container';

    const icon1 = document.createElement('i');
    icon1.className = "fa-solid fa-map-location iconosVisionado";
    icon1.onclick = function () {
        gestorVisionado(2);
    };

    const icon2 = document.createElement('i');
    icon2.className = "fa-solid fa-table-cells iconosVisionado";
    icon2.onclick = function () {
        gestorVisionado(0);
    };

    const icon3 = document.createElement('i');
    icon3.className = "fa-solid fa-list iconosVisionado";
    icon3.onclick = function () {
        gestorVisionado(1);
    };

    containerIcons.appendChild(icon1);
    containerIcons.appendChild(icon2);
    containerIcons.appendChild(icon3);

    row.appendChild(containerIcons);

    container1.append(row);

    dad.appendChild(container1);


    const col = document.createElement('div');
    col.className = 'col margen';

    for (let i = 0; i < 3; i++) {
        const container = document.createElement('div');
        container.classList.add('container', 'bg-white', 'aplicar-borde', 'margen');

        const fila = document.createElement('div');
        fila.classList.add('row');

        const col1 = document.createElement('div');
        col1.classList.add('col-sm');
        //meter carousel
        const carousel = document.createElement('div');
        carousel.setAttribute('id', 'carouselExamplex' + i);
        carousel.classList.add('carousel', 'slide', 'margen');
        carousel.setAttribute('data-bs-ride', 'carousel');

        const carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel-inner', 'redimension2');

        const carouselItem1 = document.createElement('div');
        carouselItem1.classList.add('carousel-item', 'active');

        const img1 = document.createElement('img');
        img1.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_QQ6A0199-1.jpg');
        img1.classList.add('d-block', 'w-100');
        carouselItem1.appendChild(img1);

        const carouselItem2 = document.createElement('div');
        carouselItem2.classList.add('carousel-item');

        const img2 = document.createElement('img');
        img2.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_20140228_172220.jpg');
        img2.classList.add('d-block', 'w-100');
        carouselItem2.appendChild(img2);

        const carouselItem3 = document.createElement('div');
        carouselItem3.classList.add('carousel-item');

        const img3 = document.createElement('img');
        img3.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_P1090717.jpg');
        img3.classList.add('d-block', 'w-100');
        carouselItem3.appendChild(img3);

        carouselInner.appendChild(carouselItem1);
        carouselInner.appendChild(carouselItem2);
        carouselInner.appendChild(carouselItem3);

        const prevButton = document.createElement('button');
        prevButton.setAttribute('type', 'button');
        prevButton.setAttribute('data-bs-target', '#carouselExamplex' + i);
        prevButton.setAttribute('data-bs-slide', 'prev');
        prevButton.classList.add('carousel-control-prev');

        const prevIcon = document.createElement('span');
        prevIcon.classList.add('carousel-control-prev-icon');
        prevIcon.setAttribute('aria-hidden', 'true');
        prevButton.appendChild(prevIcon);

        const prevText = document.createElement('span');
        prevText.classList.add('visually-hidden');
        prevText.innerText = 'Previous';
        prevButton.appendChild(prevText);

        const nextButton = document.createElement('button');
        nextButton.setAttribute('type', 'button');
        nextButton.setAttribute('data-bs-target', '#carouselExamplex' + i);
        nextButton.setAttribute('data-bs-slide', 'next');
        nextButton.classList.add('carousel-control-next');

        const nextIcon = document.createElement('span');
        nextIcon.classList.add('carousel-control-next-icon');
        nextIcon.setAttribute('aria-hidden', 'true');
        nextButton.appendChild(nextIcon);

        const nextText = document.createElement('span');
        nextText.classList.add('visually-hidden');
        nextText.innerText = 'Next';
        nextButton.appendChild(nextText);

        carousel.appendChild(carouselInner);
        carousel.appendChild(prevButton);
        carousel.appendChild(nextButton);

        col1.appendChild(carousel);
        //end carousel
        const col2 = document.createElement('div');
        col2.classList.add('col-sm');
        //desc
        const row2 = document.createElement('div');
        row2.classList.add('row');

        const col4 = document.createElement('div');
        col4.classList.add('col');

        const logoimg = document.createElement('img');
        logoimg.classList.add('margen');
        logoimg.setAttribute('src', 'http://www.vinyesmortitx.com/img/logo-mo-vinyes-mortitx.png');
        logoimg.setAttribute('width', '150');
        logoimg.setAttribute('height', '65');

        const dl = document.createElement('dl');

        const dt1 = document.createElement('dt');
        dt1.textContent = 'Horario: ';
        const dd1 = document.createElement('dd');
        dd1.textContent = 'Mo,Tu,We,Th,Fr 08:00-16:00';

        const dt2 = document.createElement('dt');
        dt2.textContent = 'Teléfono: ';
        const dd2 = document.createElement('dd');
        dd2.textContent = '971533889';

        const dt3 = document.createElement('dt');
        dt3.textContent = 'Email: ';
        const dd3 = document.createElement('dd');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.classList.add('text-navy');
        a.textContent = 'info@vinyesmortitx.com';
        dd3.appendChild(a);

        const dt4 = document.createElement('dt');
        dt4.textContent = 'Web: ';
        const dd4 = document.createElement('dd');
        const a2 = document.createElement('a');
        a2.setAttribute('href', 'http://www.vinyesmortitx.com');
        a2.classList.add('text-navy');
        a2.textContent = 'http://www.vinyesmortitx.com';
        dd4.appendChild(a2);

        const dt5 = document.createElement('dt');
        dt5.textContent = 'Dirección: ';
        const br = document.createElement('br');
        const dd5_1 = document.createElement('dd');
        dd5_1.textContent = 'Ctra. Pollença - Lluc- Km 10,9';
        const dd5_2 = document.createElement('dd');
        dd5_2.textContent = 'Mallorca, Escorca, 07315';

        dl.appendChild(dt1);
        const iconHorario = document.createElement('i');
        iconHorario.className = "fa-solid fa-clock";
        dt1.appendChild(iconHorario);
        dl.appendChild(dd1);
        dl.appendChild(dt2);
        const iconPhone = document.createElement('i');
        iconPhone.className = "fa-solid fa-phone";
        dt2.appendChild(iconPhone);
        dl.appendChild(dd2);
        dl.appendChild(dt3);
        const iconEmail = document.createElement('i');
        iconEmail.className = "fa-solid fa-envelope";
        dt3.appendChild(iconEmail);
        dl.appendChild(dd3);
        dl.appendChild(dt4);
        const iconWeb = document.createElement('i');
        iconWeb.className = "fa-solid fa-at";
        dt4.appendChild(iconWeb);
        dl.appendChild(dd4);
        dl.appendChild(dt5);
        const iconDir = document.createElement('i');
        iconDir.className = "fa-solid fa-location-dot";
        dt5.appendChild(iconDir);
        dl.appendChild(br);
        dl.appendChild(dd5_1);
        dl.appendChild(dd5_2);

        const div1 = document.createElement('div');
        div1.classList.add('col-sm');
        div1.appendChild(dl);

        const div2 = document.createElement('div');
        div2.classList.add('col-sm');
        div2.appendChild(div1);

        col4.appendChild(logoimg);
        col4.appendChild(div2);

        const colSmDiv = document.createElement('div');
        colSmDiv.className = 'col-sm';

        const containerDiv = document.createElement('div');
        containerDiv.className = 'container margen';

        const customScrollbarDiv = document.createElement('div');
        customScrollbarDiv.className = 'custom-scrollbar-css';

        const italicPara = document.createElement('p');
        italicPara.className = 'font-italic';
        italicPara.textContent = 'El proyecto nació a partir de la idea de un grupo de personas aficionadas al vino, el cual se materializó en junio de 2001, constituyendo la sociedad Vinyes Mortitx S.A. y la compra de una parte de la finca de Mortitx, con un objetivo principal: la elaboración de vinos de calidad, donde se manifiesten las peculiaridades y carácter propio de la tierra de donde proceden. Actualmente esta sociedad está formada por 53 socios.';

        customScrollbarDiv.appendChild(italicPara);
        containerDiv.appendChild(customScrollbarDiv);
        colSmDiv.appendChild(containerDiv);

        const moreInfoButton = document.createElement('button');
        moreInfoButton.className = 'add-to-cart margen';
        moreInfoButton.textContent = 'Más información';
        moreInfoButton.onclick = function () {
            gestorVisionado(3);
        };

        const boton2 = document.createElement('button');
        boton2.classList.add('like', 'btn', 'btn-default', 'margen');
        boton2.type = 'button';

        const spanboton = document.createElement('span');
        spanboton.classList.add('fa', 'fa-heart');

        boton2.appendChild(spanboton);

        colSmDiv.appendChild(moreInfoButton);
        colSmDiv.appendChild(boton2);

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
    row.appendChild(col);


}

function listadoCard() {
    const dad = document.getElementById("seccion");
    const container1 = document.createElement("div");
    container1.className = "container granate aplicar-borde margen";

    const row = document.createElement("div");
    row.className = "row";

    const containerIcons = document.createElement('div');
    containerIcons.className = 'container';

    const icon1 = document.createElement('i');
    icon1.className = "fa-solid fa-map-location iconosVisionado";
    icon1.onclick = function () {
        gestorVisionado(2);
    };

    const icon2 = document.createElement('i');
    icon2.className = "fa-solid fa-table-cells iconosVisionado";
    icon2.onclick = function () {
        gestorVisionado(0);
    };

    const icon3 = document.createElement('i');
    icon3.className = "fa-solid fa-list iconosVisionado";
    icon3.onclick = function () {
        gestorVisionado(1);
    };

    containerIcons.appendChild(icon1);
    containerIcons.appendChild(icon2);
    containerIcons.appendChild(icon3);

    row.appendChild(containerIcons);

    const rowCard = document.createElement('div');
    rowCard.className = "row ";

    const imgs = ["http://www.vinyesmortitx.com/img/logo-mo-vinyes-mortitx.png", "img/virei.png", "https://bodegaribas.com/wp-content/uploads/2021/07/logofooter.png",
        "https://www.canvidalet.com/wp-content/uploads/2018/05/logo-cv-04-300x150.png", "https://www.sonprim.com/wp-content/uploads/2022/03/logo_navegador_completo-removebg-preview.png"];

    const textIcon = ["Mortitx", "Virei", "Ribas", "Ca'n Vidalet", "Son Prim"];

    for (let i = 0; i < 5; i++) {


        const colCard = document.createElement('div');
        colCard.className = "col-lg-3 margen";

        const card = document.createElement('div');
        card.className = "card rounded shadow-sm border-0";

        const cardBody = document.createElement('div');
        cardBody.className = "card-body p-0";

        const imgCard = document.createElement('img');
        imgCard.className = "img-fluid d-block mx-auto mb-3 redi";
        imgCard.setAttribute('src', imgs[0]);

        const h5 = document.createElement('h5');
        h5.innerText = textIcon[0];

        const desc = document.createElement('p');
        desc.className = "small text-muted font-italic";
        desc.innerText = "Ctra. Pollença - Lluc- Km 10,9, Mallorca, Escorca, 07315";

        const open = document.createElement('p');
        open.className = "small text-muted font-italic";
        open.innerText = "Abierto ahora";

        const starsOut = document.createElement('div');
        starsOut.className = "stars-outer";

        const starsIn = document.createElement('div');
        starsIn.className = "stars-inner";

        starsOut.appendChild(starsIn);

        const boton2 = document.createElement('button');
        boton2.classList.add('like', 'btn', 'btn-default', 'margen');
        boton2.type = 'button';

        const spanboton = document.createElement('span');
        spanboton.classList.add('fa', 'fa-heart');

        boton2.appendChild(spanboton);

        const button = document.createElement('button');
        button.className = "add-to-cart margen";
        button.innerText = "Más información";
        button.onclick = function () {
            gestorVisionado(3);
        };

        cardBody.appendChild(imgCard);
        cardBody.appendChild(h5);
        cardBody.appendChild(desc);
        cardBody.appendChild(open);
        cardBody.appendChild(starsOut);
        cardBody.appendChild(boton2);
        cardBody.appendChild(button);

        card.appendChild(cardBody);

        colCard.appendChild(card);

        rowCard.appendChild(colCard);
    }

    row.appendChild(rowCard);

    container1.appendChild(row);

    dad.appendChild(container1);
}

function listadoMap() {
    const dad = document.getElementById('seccion');
    const container = document.createElement('div');
    container.classList.add('container', 'granate', 'aplicar-borde', 'margen');

    const row = document.createElement('div');
    row.classList.add('row');

    const containerIcons = document.createElement('div');
    containerIcons.className = 'container';

    const icon1 = document.createElement('i');
    icon1.className = "fa-solid fa-map-location iconosVisionado";
    icon1.onclick = function () {
        gestorVisionado(2);
    };

    const icon2 = document.createElement('i');
    icon2.className = "fa-solid fa-table-cells iconosVisionado";
    icon2.onclick = function () {
        gestorVisionado(0);
    };

    const icon3 = document.createElement('i');
    icon3.className = "fa-solid fa-list iconosVisionado";
    icon3.onclick = function () {
        gestorVisionado(1);
    };

    containerIcons.appendChild(icon1);
    containerIcons.appendChild(icon2);
    containerIcons.appendChild(icon3);

    row.appendChild(containerIcons);

    const col1 = document.createElement('div');
    col1.classList.add('col-auto');

    const img = document.createElement('img');
    img.classList.add('margen');
    img.setAttribute('src', '/img/maps.png');
    col1.appendChild(img);

    const col2 = document.createElement('div');
    col2.classList.add('col-sm');

    const col3 = document.createElement('div');
    col3.classList.add('col-lg-auto', 'bg-white', 'aplicar-borde', 'margen');

    const colLabel = document.createElement('div');
    colLabel.classList.add('col-form-label');

    const container2 = document.createElement('div');
    container2.classList.add('container', 'margen');

    const carousel = document.createElement('div');
    carousel.setAttribute('id', 'carouselExamplex');
    carousel.classList.add('carousel', 'slide', 'margen');
    carousel.setAttribute('data-bs-ride', 'carousel');

    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner', 'redimension');

    const carouselItem1 = document.createElement('div');
    carouselItem1.classList.add('carousel-item', 'active');

    const img1 = document.createElement('img');
    img1.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_QQ6A0199-1.jpg');
    img1.classList.add('d-block', 'w-100');
    carouselItem1.appendChild(img1);

    const carouselItem2 = document.createElement('div');
    carouselItem2.classList.add('carousel-item');

    const img2 = document.createElement('img');
    img2.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_20140228_172220.jpg');
    img2.classList.add('d-block', 'w-100');
    carouselItem2.appendChild(img2);

    const carouselItem3 = document.createElement('div');
    carouselItem3.classList.add('carousel-item');

    const img3 = document.createElement('img');
    img3.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_P1090717.jpg');
    img3.classList.add('d-block', 'w-100');
    carouselItem3.appendChild(img3);

    carouselInner.appendChild(carouselItem1);
    carouselInner.appendChild(carouselItem2);
    carouselInner.appendChild(carouselItem3);

    const prevButton = document.createElement('button');
    prevButton.setAttribute('type', 'button');
    prevButton.setAttribute('data-bs-target', '#carouselExamplex');
    prevButton.setAttribute('data-bs-slide', 'prev');
    prevButton.classList.add('carousel-control-prev');

    const prevIcon = document.createElement('span');
    prevIcon.classList.add('carousel-control-prev-icon');
    prevIcon.setAttribute('aria-hidden', 'true');
    prevButton.appendChild(prevIcon);

    const prevText = document.createElement('span');
    prevText.classList.add('visually-hidden');
    prevText.innerText = 'Previous';
    prevButton.appendChild(prevText);

    const nextButton = document.createElement('button');
    nextButton.setAttribute('type', 'button');
    nextButton.setAttribute('data-bs-target', '#carouselExamplex');
    nextButton.setAttribute('data-bs-slide', 'next');
    nextButton.classList.add('carousel-control-next');

    const nextIcon = document.createElement('span');
    nextIcon.classList.add('carousel-control-next-icon');
    nextIcon.setAttribute('aria-hidden', 'true');
    nextButton.appendChild(nextIcon);

    const nextText = document.createElement('span');
    nextText.classList.add('visually-hidden');
    nextText.innerText = 'Next';
    nextButton.appendChild(nextText);

    carousel.appendChild(carouselInner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    const row2 = document.createElement('div');
    row2.classList.add('row');

    const col4 = document.createElement('div');
    col4.classList.add('col');

    const logoimg = document.createElement('img');
    logoimg.classList.add('margen');
    logoimg.setAttribute('src', 'http://www.vinyesmortitx.com/img/logo-mo-vinyes-mortitx.png');
    logoimg.setAttribute('width', '150');
    logoimg.setAttribute('height', '65');

    const dl = document.createElement('dl');

    const dt1 = document.createElement('dt');
    dt1.textContent = 'Horario: ';
    const dd1 = document.createElement('dd');
    dd1.textContent = 'Mo,Tu,We,Th,Fr 08:00-16:00';

    const dt2 = document.createElement('dt');
    dt2.textContent = 'Teléfono: ';
    const dd2 = document.createElement('dd');
    dd2.textContent = '971533889';

    const dt3 = document.createElement('dt');
    dt3.textContent = 'Email: ';
    const dd3 = document.createElement('dd');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('text-navy');
    a.textContent = 'info@vinyesmortitx.com';
    dd3.appendChild(a);

    const dt4 = document.createElement('dt');
    dt4.textContent = 'Web: ';
    const dd4 = document.createElement('dd');
    const a2 = document.createElement('a');
    a2.setAttribute('href', 'http://www.vinyesmortitx.com');
    a2.classList.add('text-navy');
    a2.textContent = 'http://www.vinyesmortitx.com';
    dd4.appendChild(a2);

    const dt5 = document.createElement('dt');
    dt5.textContent = 'Dirección: ';
    const br = document.createElement('br');
    const dd5_1 = document.createElement('dd');
    dd5_1.textContent = 'Ctra. Pollença - Lluc- Km 10,9';
    const dd5_2 = document.createElement('dd');
    dd5_2.textContent = 'Mallorca, Escorca, 07315';

    dl.appendChild(dt1);
    const iconHorario = document.createElement('i');
    iconHorario.className = "fa-solid fa-clock";
    dt1.appendChild(iconHorario);
    dl.appendChild(dd1);
    dl.appendChild(dt2);
    const iconPhone = document.createElement('i');
    iconPhone.className = "fa-solid fa-phone";
    dt2.appendChild(iconPhone);
    dl.appendChild(dd2);
    dl.appendChild(dt3);
    const iconEmail = document.createElement('i');
    iconEmail.className = "fa-solid fa-envelope";
    dt3.appendChild(iconEmail);
    dl.appendChild(dd3);
    dl.appendChild(dt4);
    const iconWeb = document.createElement('i');
    iconWeb.className = "fa-solid fa-at";
    dt4.appendChild(iconWeb);
    dl.appendChild(dd4);
    dl.appendChild(dt5);
    const iconDir = document.createElement('i');
    iconDir.className = "fa-solid fa-location-dot";
    dt5.appendChild(iconDir);
    dl.appendChild(br);
    dl.appendChild(dd5_1);
    dl.appendChild(dd5_2);

    const div1 = document.createElement('div');
    div1.classList.add('col-sm');
    div1.appendChild(dl);

    const div2 = document.createElement('div');
    div2.classList.add('col-sm');
    div2.appendChild(div1);

    col4.appendChild(logoimg);
    col4.appendChild(div2);

    const colSmDiv = document.createElement('div');
    colSmDiv.className = 'col-sm';

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container margen';

    const customScrollbarDiv = document.createElement('div');
    customScrollbarDiv.className = 'custom-scrollbar-css';

    const italicPara = document.createElement('p');
    italicPara.className = 'font-italic';
    italicPara.textContent = 'El proyecto nació a partir de la idea de un grupo de personas aficionadas al vino, el cual se materializó en junio de 2001, constituyendo la sociedad Vinyes Mortitx S.A. y la compra de una parte de la finca de Mortitx, con un objetivo principal: la elaboración de vinos de calidad, donde se manifiesten las peculiaridades y carácter propio de la tierra de donde proceden. Actualmente esta sociedad está formada por 53 socios.';

    customScrollbarDiv.appendChild(italicPara);
    containerDiv.appendChild(customScrollbarDiv);
    colSmDiv.appendChild(containerDiv);

    const moreInfoButton = document.createElement('button');
    moreInfoButton.className = 'add-to-cart margen';
    moreInfoButton.textContent = 'Más información';
    moreInfoButton.onclick = function () {
        gestorVisionado(3);
    };

    const boton2 = document.createElement('button');
    boton2.classList.add('like', 'btn', 'btn-default', 'margen');
    boton2.type = 'button';

    const spanboton = document.createElement('span');
    spanboton.classList.add('fa', 'fa-heart');

    boton2.appendChild(spanboton);

    colSmDiv.appendChild(moreInfoButton);
    colSmDiv.appendChild(boton2);

    row2.appendChild(col4);
    row2.appendChild(colSmDiv);

    container2.appendChild(carousel);
    container2.appendChild(row2);

    colLabel.appendChild(container2);

    col3.appendChild(colLabel);

    col2.appendChild(col3);

    row.appendChild(col1);
    row.appendChild(col2);

    container.appendChild(row);

    dad.appendChild(container);
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

function gestorVisionado(vision) {
    var seccion = document.getElementById("seccion");
    var car = document.getElementById("carouselPrincipal");

    if (hasNode(seccion, car)) {
        carrusel = car;
        seccion.removeChild(car);
    }


    if (seccion.hasChildNodes()) {
        while (seccion.childNodes.length >= 1) {
            seccion.removeChild(seccion.firstChild);
        }
    }
    if (vision >= 3) {

        if (vision == 3) {
            paginaProducto2();
            //activarBotonesPrincipal();
        }
        if (vision == 4) {
            listaComentarios(seccion);
        }
        if (vision == 5) {
            formComentario(seccion);
        }

    } else {
        filtrado2();
        switch (vision) {
            case 1: listadoCardXL();
                break;
            case 0: listadoCard();
                break;
            case 2: listadoMap();
                break;
        }
    }

}

(function () {
    /* Rounded Dots Dark */
    $("#content-1").mCustomScrollbar({
        theme: "rounded-dots-dark"
    });

    /* Rounded Dark */
    $("#content-2").mCustomScrollbar({
        theme: "rounded-dark"
    });

    /* Inset Dark */
    $("#content-3").mCustomScrollbar({
        theme: "inset-3-dark"
    });

    /* 3d Dark */
    $("#content-4").mCustomScrollbar({
        theme: "3d-dark"
    });

    /* Dark Thin */
    $("#content-5").mCustomScrollbar({
        theme: "dark-thin"
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'slideOutUp',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

function formComentario(dad) {
    const container = document.createElement('div');
    container.classList.add('container', 'granate', 'aplicar-borde', 'margen');

    const row = document.createElement('div');
    row.classList.add('row', 'centro');
    container.appendChild(row);

    const form = document.createElement('form');
    form.id = 'Highlighted-form';
    form.classList.add('col-sm-6', 'col-sm-offset-3');
    form.setAttribute('novalidate', '');
    row.appendChild(form);

    const nameGroup = document.createElement('div');
    nameGroup.classList.add('form-group');
    form.appendChild(nameGroup);

    const nameLabel = document.createElement('label');
    nameLabel.classList.add('control-label');
    nameLabel.setAttribute('for', 'contact-name');
    nameLabel.textContent = 'Nombre';
    nameGroup.appendChild(nameLabel);

    const nameControls = document.createElement('div');
    nameControls.classList.add('controls');
    nameGroup.appendChild(nameControls);

    const nameInput = document.createElement('input');
    nameInput.id = 'contact-name';
    nameInput.name = 'contactName';
    nameInput.classList.add('form-control', 'requiredField', 'Highlighted-label');
    nameInput.setAttribute('placeholder', 'Nombre');
    nameInput.setAttribute('data-new-placeholder', 'Nombre');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('data-error-empty', 'Please enter your name');
    nameControls.appendChild(nameInput);

    const nameIcon = document.createElement('i');
    nameIcon.classList.add('fa', 'fa-user');
    nameControls.appendChild(nameIcon);

    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');
    form.appendChild(emailGroup);

    const emailLabel = document.createElement('label');
    emailLabel.classList.add('control-label');
    emailLabel.setAttribute('for', 'contact-mail');
    emailLabel.textContent = 'Localidad';
    emailGroup.appendChild(emailLabel);

    const emailControls = document.createElement('div');
    emailControls.classList.add('controls');
    emailGroup.appendChild(emailControls);

    const emailInput = document.createElement('input');
    emailInput.id = 'contact-mail';
    emailInput.name = 'localidad';
    emailInput.classList.add('form-control', 'requiredField', 'Highlighted-label');
    emailInput.setAttribute('placeholder', 'Localidad');
    emailInput.setAttribute('data-new-placeholder', 'Localidad');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('data-error-empty', 'Please enter your email');
    emailInput.setAttribute('data-error-invalid', 'Invalid email address');
    emailControls.appendChild(emailInput);

    const emailIcon = document.createElement('i');
    emailIcon.classList.add('fa', 'fa-envelope');
    emailControls.appendChild(emailIcon);

    const messageGroup = document.createElement('div');
    messageGroup.classList.add('form-group');
    form.appendChild(messageGroup);

    const messageLabel = document.createElement('label');
    messageLabel.classList.add('control-label');
    messageLabel.setAttribute('for', 'contact-message');
    messageLabel.textContent = 'Opinión';
    messageGroup.appendChild(messageLabel);

    const messageControls = document.createElement('div');
    messageControls.classList.add('controls');
    messageGroup.appendChild(messageControls);

    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'contact-message';
    messageTextarea.name = 'comments';
    messageTextarea.classList.add('form-control', 'requiredField', 'Highlighted-label');
    messageTextarea.setAttribute('placeholder', 'Opinión');
    messageTextarea.setAttribute('data-new-placeholder', 'Opinión');
    messageTextarea.setAttribute('rows', '6');
    messageTextarea.setAttribute('data-error-empty', 'Please enter your message');
    messageControls.appendChild(messageTextarea);

    const messageIcon = document.createElement('i');
    messageIcon.classList.add('fa', 'fa-comment');
    messageControls.appendChild(messageIcon);

    const submitButton = document.createElement('button');
    submitButton.name = 'submit';
    submitButton.type = 'submit';
    submitButton.innerText = 'Enviar';
    submitButton.className = 'margen';
    submitButton.classList.add('btn', 'btn-info', 'btn-block');
    form.appendChild(submitButton);
    dad.appendChild(container);
}

function listaComentarios(dad) {
    const container = document.createElement('div');
    container.className = 'container granate aplicar-borde margen';

    const reviews = document.createElement('div');
    reviews.setAttribute('id', 'reviews');
    reviews.className = ' col review-section bg-white aplicar-borde margen';

    const div = document.createElement('div');
    div.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'mb-4');

    const h4 = document.createElement('h4');
    h4.classList.add('m-0');
    h4.textContent = '37 Valoraciones';
    div.appendChild(h4);

    const select = document.createElement('select');
    select.classList.add('custom-select', 'custom-select-sm', 'border-0', 'shadow-sm', 'ml-2', 'select2-hidden-accessible');
    select.setAttribute('data-select2-id', '1');
    select.setAttribute('tabindex', '-1');
    select.setAttribute('aria-hidden', 'true');
    div.appendChild(select);

    const option1 = document.createElement('option');
    option1.setAttribute('data-select2-id', '3');
    option1.textContent = 'Más relevantes';
    select.appendChild(option1);

    const option2 = document.createElement('option');
    option2.textContent = 'Más recientes';
    select.appendChild(option2);

    const span1 = document.createElement('span');
    span1.classList.add('select2', 'select2-container', 'select2-container--default');
    span1.setAttribute('dir', 'ltr');
    span1.setAttribute('data-select2-id', '2');
    span1.style.width = '188px';
    div.appendChild(span1);

    const span2 = document.createElement('span');
    span2.classList.add('selection');
    span1.appendChild(span2);

    const span3 = document.createElement('span');
    span3.classList.add('select2-selection', 'select2-selection--single');
    span3.setAttribute('role', 'combobox');
    span3.setAttribute('aria-haspopup', 'true');
    span3.setAttribute('aria-expanded', 'false');
    span3.setAttribute('tabindex', '0');
    span3.setAttribute('aria-labelledby', 'select2-qd66-container');
    span2.appendChild(span3);

    const span4 = document.createElement('span');
    span4.classList.add('select2-selection__rendered');
    span4.setAttribute('id', 'select2-qd66-container');
    span4.setAttribute('role', 'textbox');
    span4.setAttribute('aria-readonly', 'true');
    span4.setAttribute('title', 'Más relevantes');
    span4.textContent = 'Más Relevantes';
    span3.appendChild(span4);

    const span5 = document.createElement('span');
    span5.classList.add('select2-selection__arrow');
    span5.setAttribute('role', 'presentation');
    span3.appendChild(span5);

    const b = document.createElement('b');
    b.setAttribute('role', 'presentation');
    span5.appendChild(b);

    const span6 = document.createElement('span');
    span6.classList.add('dropdown-wrapper');
    span6.setAttribute('aria-hidden', 'true');
    span1.appendChild(span6);

    const divRow = document.createElement("div");
    divRow.classList.add("row", "aplicar-borde", "margen");

    const divCol = document.createElement("div");
    divCol.classList.add("col-md-6");

    const table = document.createElement("table");
    table.classList.add("stars-counters");

    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");

    const td1 = document.createElement("td");

    const span1x = document.createElement("span");

    const button1 = document.createElement("button");
    button1.classList.add("fit-button", "fit-button-color-blue", "fit-button-fill-ghost", "fit-button-size-medium", "stars-filter");
    button1.textContent = "5 Stars";

    span1x.appendChild(button1);
    td1.appendChild(span1x);

    const td2 = document.createElement("td");
    td2.classList.add("progress-bar-container");

    const div1 = document.createElement("div");
    div1.classList.add("fit-progressbar", "fit-progressbar-bar", "star-progress-bar");

    const div2 = document.createElement("div");
    div2.classList.add("fit-progressbar-background");

    const span2x = document.createElement("span");
    span2x.classList.add("progress-fill");
    span2x.style.width = "97.2973%";

    div2.appendChild(span2x);
    div1.appendChild(div2);
    td2.appendChild(div1);

    const td3 = document.createElement("td");
    td3.classList.add("star-num");
    td3.textContent = "(36)";

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);

    const tr2 = document.createElement("tr");

    const td4 = document.createElement("td");

    const span3x = document.createElement("span");

    const button2 = document.createElement("button");
    button2.classList.add("fit-button", "fit-button-color-blue", "fit-button-fill-ghost", "fit-button-size-medium", "stars-filter");
    button2.textContent = "4 Stars";

    span3x.appendChild(button2);
    td4.appendChild(span3x);

    const td5 = document.createElement("td");
    td5.classList.add("progress-bar-container");

    const div3 = document.createElement("div");
    div3.classList.add("fit-progressbar", "fit-progressbar-bar", "star-progress-bar");

    const div4 = document.createElement("div");
    div4.classList.add("fit-progressbar-background");

    const span4x = document.createElement("span");
    span4x.classList.add("progress-fill");
    span4x.style.width = "2.2973%";

    div4.appendChild(span4x);
    div3.appendChild(div4);
    td5.appendChild(div3);

    const td6 = document.createElement("td");
    td6.classList.add("star-num");
    td6.textContent = "(2)";

    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);

    const tr3 = document.createElement("tr");

    const td7 = document.createElement("td");

    const span5x = document.createElement("span");

    const button3 = document.createElement("button");
    button3.classList.add("fit-button", "fit-button-color-blue", "fit-button-fill-ghost", "fit-button-size-medium", "stars-filter");
    button3.textContent = "3 Stars";

    span5x.appendChild(button3);
    td7.appendChild(span5x);

    const td8 = document.createElement("td");
    td8.classList.add("progress-bar-container");

    const div5 = document.createElement("div");
    div5.classList.add("fit-progressbar", "fit-progressbar-bar", "star-progress-bar");

    const div6 = document.createElement("div");
    div6.classList.add("fit-progressbar-background");

    const span6x = document.createElement("span");
    span6x.classList.add("progress-fill");
    span6x.style.width = "0";

    div6.appendChild(span6x);
    div5.appendChild(div6);
    td8.appendChild(div5);

    const td9 = document.createElement("td");
    td9.classList.add('star-num');
    td9.textContent = '(0)';

    tr3.appendChild(td7);
    tr3.appendChild(td8);
    tr3.appendChild(td9);

    const tr4 = document.createElement("tr");

    const td10 = document.createElement("td");

    const span7x = document.createElement("span");

    const button4 = document.createElement("button");
    button4.classList.add("fit-button", "fit-button-color-blue", "fit-button-fill-ghost", "fit-button-size-medium", "stars-filter");
    button4.textContent = "2 Stars";

    span7x.appendChild(button4);
    td10.appendChild(span7x);

    const td11 = document.createElement("td");
    td11.classList.add("progress-bar-container");

    const div7 = document.createElement("div");
    div7.classList.add("fit-progressbar", "fit-progressbar-bar", "star-progress-bar");

    const div8 = document.createElement("div");
    div8.classList.add("fit-progressbar-background");

    const span8x = document.createElement("span");
    span8x.classList.add("progress-fill");
    span8x.style.width = "0";

    div8.appendChild(span8x);
    div7.appendChild(div8);
    td11.appendChild(div7);

    const td12 = document.createElement("td");
    td12.classList.add('star-num');
    td12.textContent = '(0)';

    tr4.appendChild(td10);
    tr4.appendChild(td11);
    tr4.appendChild(td12);

    const tr5 = document.createElement("tr");

    const td13 = document.createElement("td");

    const span9x = document.createElement("span");

    const button5 = document.createElement("button");
    button5.classList.add("fit-button", "fit-button-color-blue", "fit-button-fill-ghost", "fit-button-size-medium", "stars-filter");
    button5.textContent = "1 Stars";

    span9x.appendChild(button5);
    td13.appendChild(span9x);

    const td14 = document.createElement("td");
    td14.classList.add("progress-bar-container");

    const div9 = document.createElement("div");
    div9.classList.add("fit-progressbar", "fit-progressbar-bar", "star-progress-bar");

    const div10 = document.createElement("div");
    div10.classList.add("fit-progressbar-background");

    const span10x = document.createElement("span");
    span10x.classList.add("progress-fill");
    span10x.style.width = "0";

    div10.appendChild(span9x);
    div9.appendChild(div10);
    td13.appendChild(div9);

    const td15 = document.createElement("td");
    td15.classList.add('star-num');
    td15.textContent = '(0)';

    tr5.appendChild(td13);
    tr5.appendChild(td14);
    tr5.appendChild(td15);

    tbody.appendChild(tr1);
    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);
    tbody.appendChild(tr5);

    table.appendChild(tbody);
    divCol.appendChild(table);

    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-6');

    const rankingDiv = document.createElement('div');
    rankingDiv.classList.add('ranking');

    const heading = document.createElement('h6');
    heading.classList.add('text-display-7');
    heading.textContent = 'Ranking';

    const ul = document.createElement('ul');

    const li1 = document.createElement('li');
    li1.textContent = 'Nivel de comunicación del vendedor';

    const span1xx = document.createElement('span');
    span1xx.textContent = '5';

    const star1 = document.createElement('span');
    star1.classList.add('review-star', 'rate-10', 'show-one');

    span1xx.appendChild(star1);
    li1.appendChild(span1xx);
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = 'Recomiendalo a un amigo';

    const span2xx = document.createElement('span');
    span2xx.textContent = '5';

    const star2 = document.createElement('span');
    star2.classList.add('review-star', 'rate-10', 'show-one');

    span2xx.appendChild(star2);
    li2.appendChild(span2xx);
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.textContent = 'Servicie';

    const span3xx = document.createElement('span');
    span3xx.textContent = '4.9';

    const star3 = document.createElement('span');
    star3.classList.add('review-star', 'rate-10', 'show-one');

    span3xx.appendChild(star3);
    li3.appendChild(span3xx);
    ul.appendChild(li3);

    rankingDiv.appendChild(heading);
    rankingDiv.appendChild(ul);

    const opinionBtn = document.createElement('button');
    opinionBtn.classList.add('btn', 'btn-danger');
    opinionBtn.textContent = 'Pon tu opinión';
    opinionBtn.onclick = function () {
        gestorVisionado(5);
    }

    colDiv.appendChild(rankingDiv);
    colDiv.appendChild(opinionBtn);

    divRow.appendChild(divCol);
    divRow.appendChild(colDiv);

    reviews.appendChild(div);
    reviews.appendChild(divRow);



    const reviewList = document.createElement("div");
    reviewList.classList.add("review-list", "aplicar-borde", "margen", "bg-white");

    const ulx = document.createElement("ul");

    for (let i = 0; i < 4; i++) {

        const li = document.createElement("li");

        const dFlexDiv = document.createElement("div");
        dFlexDiv.classList.add("d-flex");

        const leftDiv = document.createElement("div");
        leftDiv.classList.add("left");

        const profilePict = document.createElement("span");

        const profilePictImg = document.createElement("img");
        profilePictImg.setAttribute("src", "https://bootdey.com/img/Content/avatar/avatar1.png");
        profilePictImg.classList.add("profile-pict-img", "img-fluid");
        profilePictImg.setAttribute("alt", "");

        profilePict.appendChild(profilePictImg);
        leftDiv.appendChild(profilePict);

        const rightDiv = document.createElement("div");
        rightDiv.classList.add("right");

        const h4x = document.createElement("h4");
        const gigRating = document.createElement("span");
        gigRating.classList.add("gig-rating", "text-body-2");
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 1792 1792");
        svg.setAttribute("width", "15");
        svg.setAttribute("height", "15");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "currentColor");
        path.setAttribute("d", "M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z");
        svg.appendChild(path);
        gigRating.appendChild(svg);
        gigRating.appendChild(document.createTextNode("5.0"));
        h4x.appendChild(document.createTextNode("Askbootstrap"));
        h4x.appendChild(gigRating);

        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country", "d-flex", "align-items-center");
        const countrySpan = document.createElement("span");
        const countryFlagImg = document.createElement("img");
        countryFlagImg.setAttribute("src", "https://bootdey.com/img/Content/avatar/avatar6.png");
        countryFlagImg.classList.add("country-flag", "img-fluid");
        countrySpan.appendChild(countryFlagImg);
        const countryNameDiv = document.createElement("div");
        countryNameDiv.classList.add("country-name", "font-accent");
        countryNameDiv.appendChild(document.createTextNode("India"));
        countryDiv.appendChild(countrySpan);
        countryDiv.appendChild(countryNameDiv);

        const reviewDescription = document.createElement("div");
        reviewDescription.classList.add("review-description");
        const p = document.createElement("p");
        p.appendChild(document.createTextNode("The process was smooth, after providing the required info, Pragyesh sent me an outstanding packet of wireframes. Thank you a lot!"));
        reviewDescription.appendChild(p);

        const publishSpan = document.createElement("span");
        publishSpan.classList.add("publish", "py-3", "d-inline-block", "w-100");
        publishSpan.appendChild(document.createTextNode("Published 4 weeks ago"));

        rightDiv.appendChild(h4x);
        rightDiv.appendChild(countryDiv);
        rightDiv.appendChild(reviewDescription);
        rightDiv.appendChild(publishSpan);

        dFlexDiv.appendChild(leftDiv);
        dFlexDiv.appendChild(rightDiv);

        li.appendChild(dFlexDiv);

        const hhr = document.createElement('hr');

        ulx.appendChild(li);
        ulx.appendChild(hhr);
    }

    reviewList.appendChild(ulx);

    container.appendChild(reviews);
    container.appendChild(reviewList);

    dad.appendChild(container);

}

function vinoslist(dad) {
    const div = document.createElement('div');
    div.classList.add('col-sm', 'p-5', 'bg-white', 'rounded', 'shadow', 'mb-5');

    const ul = document.createElement('ul');
    ul.setAttribute('id', 'myTab1');
    ul.setAttribute('role', 'tablist');
    ul.classList.add('nav', 'nav-tabs', 'nav-pills', 'flex-column', 'flex-sm-row', 'text-center', 'bg-light', 'border-0', 'rounded-nav');

    const li1 = document.createElement('li');
    li1.classList.add('nav-item', 'flex-sm-fill');
    const a1 = document.createElement('a');
    a1.setAttribute('id', 'tinto-tab');
    a1.setAttribute('data-toggle', 'tab');
    a1.setAttribute('role', 'tab');
    a1.setAttribute('aria-controls', 'home');
    a1.setAttribute('aria-selected', 'true');
    a1.classList.add('nav-link', 'bg-danger', 'border-0', 'text-uppercase', 'font-weight-bold', 'active');
    a1.setAttribute('href', '');
    a1.innerText = 'Tinto';
    li1.appendChild(a1);

    const li2 = document.createElement('li');
    li2.classList.add('nav-item', 'flex-sm-fill');
    const a2 = document.createElement('a');
    a2.setAttribute('id', 'blanco-tab');
    a2.setAttribute('data-toggle', 'tab');
    a2.setAttribute('role', 'tab');
    a2.setAttribute('aria-controls', 'profile');
    a2.setAttribute('aria-selected', 'false');
    a2.classList.add('nav-link', 'bg-danger', 'border-0', 'text-uppercase', 'font-weight-bold');
    a2.setAttribute('href', '');
    a2.innerText = 'Blanco';
    li2.appendChild(a2);

    const li3 = document.createElement('li');
    li3.classList.add('nav-item', 'flex-sm-fill');
    const a3 = document.createElement('a');
    a3.setAttribute('id', 'rosado-tab');
    a3.setAttribute('data-toggle', 'tab');
    a3.setAttribute('role', 'tab');
    a3.setAttribute('aria-controls', 'contact');
    a3.setAttribute('aria-selected', 'false');
    a3.classList.add('nav-link', 'bg-danger', 'border-0', 'text-uppercase', 'font-weight-bold');
    a3.setAttribute('href', '');
    a3.innerText = 'Rosado';
    li3.appendChild(a3);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    const div1 = document.createElement('div');
    div1.setAttribute('id', 'myTabContent1');
    div1.classList.add('container', 'tab-content', 'margen');

    const row = document.createElement('div');
    row.classList.add('row');

    const fotos = ["http://www.vinyesmortitx.com/img_blog/1584635839.jpg", "http://www.vinyesmortitx.com/img_blog/1584632514.jpg", "http://www.vinyesmortitx.com/img_blog/ART_9u-negre.png"];
    const nombre = ["Tinto 2019", "Rodal Pla 2017", "L'U negre 2017"];
    const precios = ["12.18 EUR", "15.98 EUR", "62.90 EUR"]

    for (let i = 0; i < 3; i++) {

        const col = document.createElement('div');
        col.classList.add('col-lg-3', 'margen', 'productbox');

        const img = document.createElement('img');
        img.setAttribute('src', fotos[i]);
        img.classList.add('img-responsive');
        img.height = 500;
        img.width = 150;

        const div2 = document.createElement('div');
        div2.classList.add('producttitle');
        div2.innerText = nombre[i];

        const div3 = document.createElement('div');
        div3.classList.add('productprice');


        const div5 = document.createElement('div');
        div5.classList.add('pricetext');
        div5.innerText = precios[i];

        div3.appendChild(div5);

        col.appendChild(img);
        col.appendChild(div2);
        col.appendChild(div3);

        row.appendChild(col);
    }

    div1.appendChild(row);

    div.appendChild(ul);
    div.appendChild(div1);
    dad.appendChild(div);
}

