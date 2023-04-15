var carrusel = null;

window.onload = function () {
    botonesNav(0);
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
    node_5.setAttribute('class', 'col-sm order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start m-auto');
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
    node_15.setAttribute('class', 'col-sm margen  text-lg-start');
    node_4.appendChild(node_15);

    var node_16 = document.createElement('IMG');
    node_16.setAttribute('src', 'http://www.vinyesmortitx.com/img_blog/21_QQ6A0199-1.jpg');
    node_16.setAttribute('class', 'img-fluid margen2 aos-init aos-animate');
    node_16.setAttribute('alt', '');
    node_16.setAttribute('data-aos', 'zoom-out');
    node_16.setAttribute('data-aos-delay', '300');
    node_15.appendChild(node_16);

    var aux = document.createElement('div');
    aux.setAttribute('class','col-sm margen   text-lg-start');
    node_4.appendChild(aux);

    var aux1 = document.createElement('img');
    aux1.setAttribute('src',"http://www.vinyesmortitx.com/img/logo-mo-vinyes-mortitx.png");
    aux1.setAttribute('class', 'img-fluid margen2 aos-init aos-animate');
    aux1.setAttribute('data-aos', 'zoom-out');
    aux1.setAttribute('data-aos-delay', '300');
    aux.appendChild(aux1);



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

    var node_34 = document.createTextNode((new String("\nEl proyecto nació a partir de la idea de un grupo de personas aficionadas al vino, el cual se materializó en junio de 2001, constituyendo la sociedad Vinyes Mortitx S.A. y la compra de una parte de la finca de Mortitx, con un objetivo principal: la elaboración de vinos de calidad, donde se manifiesten las peculiaridades y carácter propio de la tierra de donde proceden. Actualmente esta sociedad está formada por 53 socios.\n ")));
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

    var node_130 = document.createTextNode((new String("12.18EUR")));
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

    var node_138 = document.createTextNode((new String("15.98EUR")));
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

    var node_146 = document.createTextNode((new String("62.90EUR")));
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

    var node_158 = document.createTextNode((new String("Lorem, deren, trataro, filede, nerada")));
    node_157.appendChild(node_158);

    var node_159 = document.createElement('P');
    node_159.setAttribute('class', 'price');
    node_152.appendChild(node_159);

    var node_160 = document.createTextNode((new String("$5.95")));
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

    var node_172 = document.createTextNode((new String("Lorem, deren, trataro, filede, nerada")));
    node_171.appendChild(node_172);

    var node_173 = document.createElement('P');
    node_173.setAttribute('class', 'price');
    node_166.appendChild(node_173);

    var node_174 = document.createTextNode((new String("$5.95")));
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

    var node_190 = document.createTextNode((new String("Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh")));

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

    var node_209 = document.createTextNode((new String("Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\n                                                ")));
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

    var node_228 = document.createTextNode((new String("Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\n                                                ")));
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

    var node_247 = document.createTextNode((new String("Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\n                                                ")));
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

    var node_266 = document.createTextNode((new String("Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\n                                                ")));
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

    var node_285 = document.createTextNode((new String(" Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\n                                                ")));
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

    var node_324 = document.createTextNode((new String("Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.                        ")));
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

    var node_331 = document.createTextNode((new String("In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.\n                            ")));
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

    var node_344 = document.createTextNode((new String("Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.\n                            ")));
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

    var node_417 = document.createElement('P');
    node_414.appendChild(node_417);

    var node_418 = document.createElement('SPAN');
    node_417.appendChild(node_418);

    var node_419 = document.createTextNode((new String("Contacto")));
    node_418.appendChild(node_419);

    var node_420 = document.createElement('DIV');
    node_420.setAttribute('class', 'mb-3');
    node_413.appendChild(node_420);

    var node_421 = document.createElement('IFRAME');
    node_421.setAttribute('style', 'border:0; width: 100%; height: 350px;');
    node_421.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6124.477589966659!2d2.913765460252749!3d39.86888869177018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297d6a0a43e5afd%3A0x1dccff5305e308a0!2sVinyes%20Mortitx!5e0!3m2!1ses!2ses!4v1681571881672!5m2!1ses!2ses");
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

    var node_428 = document.createTextNode((new String("Dirección")));
    node_427.appendChild(node_428);

    var node_429 = document.createElement('P');
    node_426.appendChild(node_429);

    var node_430 = document.createTextNode((new String("Ctra. Pollença - Lluc- Km 10,9 07315 Escorca, Mallorca")));
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

    var node_436 = document.createTextNode((new String("Email")));
    node_435.appendChild(node_436);

    var node_437 = document.createElement('P');
    node_434.appendChild(node_437);

    var node_438 = document.createTextNode((new String("info@vinyesmortitx.com")));
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

    var node_444 = document.createTextNode((new String("Teléfono")));
    node_443.appendChild(node_444);

    var node_445 = document.createElement('P');
    node_442.appendChild(node_445);

    var node_446 = document.createTextNode((new String("971533889")));
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

    var node_452 = document.createTextNode((new String("Horario")));
    node_451.appendChild(node_452);

    var node_453 = document.createElement('DIV');
    node_450.appendChild(node_453);

    var node_454 = document.createElement('STRONG');
    node_453.appendChild(node_454);

    var node_455 = document.createElement('STRONG');
    node_453.appendChild(node_455);

    var node_456 = document.createTextNode((new String("Mo,Tu,We,Th,Fr 08:00-16:00")));
    node_453.appendChild(node_456);

    var node_457 = document.createElement('DIV');
    node_457.setAttribute('class', 'col-md-6');
    node_422.appendChild(node_457);

    var node_458 = document.createElement('DIV');
    node_458.setAttribute('class', 'info-item  d-flex align-items-center');
    node_457.appendChild(node_458);

    var node_459 = document.createElement('I');
    node_459.setAttribute('class', 'icon bi bi-globe flex-shrink-0');
    node_458.appendChild(node_459);

    var node_460 = document.createElement('DIV');
    node_458.appendChild(node_460);

    var node_461 = document.createElement('H3');
    node_460.appendChild(node_461);

    var node_462 = document.createTextNode((new String("Página Web")));
    node_461.appendChild(node_462);

    var node_463 = document.createElement('DIV');
    node_460.appendChild(node_463);

    var node_464 = document.createElement('STRONG');
    node_463.appendChild(node_464);

    var node_465 = document.createElement('STRONG');
    node_463.appendChild(node_465);

    var node_466 = document.createTextNode((new String("http://www.vinyesmortitx.com")));
    node_463.appendChild(node_466);


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



function botonesNav(navState) {
    var navAux = document.getElementById('ul-nav');
    if (document.getElementById('navbar').hasChildNodes()) {
        document.getElementById('navbar').removeChild(navAux); // borramos los botones
    }

    var ul = document.createElement('ul');
    ul.setAttribute('id','ul-nav');
    switch (navState) {
        case 0:
            var busqueda = document.createElement('li');
            var refb = document.createElement('a');
            refb.setAttribute('id', 'busqueda');
            refb.setAttribute('href', 'javascript:gestorVisionado(0)');
            refb.innerText = 'Búsqueda';
            busqueda.appendChild(refb);

            var ruta = document.createElement('li');
            var refr = document.createElement('a');
            refr.setAttribute('id', 'ruta');
            refr.setAttribute('href', '');
            refr.innerText = 'Hazme una ruta';
            ruta.appendChild(refr);

            var contacto = document.createElement('li');
            var refc = document.createElement('a');
            refc.setAttribute('id', 'contacto');
            refc.setAttribute('href', '');
            refc.innerText = 'Contacto';
            contacto.appendChild(refc);

            ul.appendChild(busqueda);
            ul.appendChild(ruta);
            ul.appendChild(contacto);
            break;
        case 1:

            var node_1 = document.createElement('LI');
            var node_2 = document.createElement('A');
            node_2.setAttribute('href', '#hero');
            node_1.appendChild(node_2);
            var node_3 = document.createTextNode((new String("Inicio")));
            node_2.appendChild(node_3);

            var node_4 = document.createElement('LI');
            var node_5 = document.createElement('A');
            node_5.setAttribute('href', '#about');
            node_4.appendChild(node_5);
            var node_6 = document.createTextNode((new String("Descripción")));
            node_5.appendChild(node_6);

            var node_7 = document.createElement('LI');
            var node_8 = document.createElement('A');
            node_8.setAttribute('href', '#weather');
            node_7.appendChild(node_8);
            var node_9 = document.createTextNode((new String("Tiempo")));
            node_8.appendChild(node_9);

            var node_10 = document.createElement('LI');
            var node_11 = document.createElement('A');
            node_11.setAttribute('href', '#menu');
            node_10.appendChild(node_11);
            var node_12 = document.createTextNode((new String("Vinos")));
            node_11.appendChild(node_12);

            var node_13 = document.createElement('LI');
            var node_14 = document.createElement('A');
            node_14.setAttribute('href', '#events');
            node_13.appendChild(node_14);
            var node_15 = document.createTextNode((new String("Events")));
            node_14.appendChild(node_15);

            var node_16 = document.createElement('LI');
            var node_17 = document.createElement('A');
            node_17.setAttribute('href', '#chefs');
            node_16.appendChild(node_17);
            var node_18 = document.createTextNode((new String("Chefs")));
            node_17.appendChild(node_18);

            var node_19 = document.createElement('LI');
            var node_20 = document.createElement('A');
            node_20.setAttribute('href', '#gallery');
            node_19.appendChild(node_20);
            var node_21 = document.createTextNode((new String("Fotos")));
            node_20.appendChild(node_21);

            var node_22 = document.createElement('LI');
            var node_23 = document.createElement('A');
            node_23.setAttribute('href', '#contact');
            node_22.appendChild(node_23);
            var node_24 = document.createTextNode((new String("Contacto")));
            node_23.appendChild(node_24);

            ul.appendChild(node_1);
            ul.appendChild(node_4);
            ul.appendChild(node_7);
            ul.appendChild(node_10);
            ul.appendChild(node_13);
            ul.appendChild(node_16);
            ul.appendChild(node_19);
            ul.appendChild(node_22);

            break;
    }
    document.getElementById('navbar').appendChild(ul);

    const icono = document.getElementById("icono");
    icono.onclick = function () {
        paginaPrincipal();
    };

}


function paginaPrincipal() {
    const h = document.getElementById("header");
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
            botonesNav(1);
            paginaProducto2();
        }
    } else {
        botonesNav(0);
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


