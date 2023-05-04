var carrusel = null;
var json = null;


window.onload = function () {
    botonesNav(0);
    cargarJSON();
}

function paginaProducto2(pos) {
    //dias de la semana
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const fechaActual = new Date();
    const diaActual = diasSemana[fechaActual.getDay()];


    //cargar el tiempo
    var tiempo = weather(json.itemListElement[pos].geo.latitude, json.itemListElement[pos].geo.longitude);
    console.log(tiempo);
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
    //node_5.setAttribute('class', 'col-sm order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start m-auto');
    node_5.setAttribute('class', 'col-sm');
    node_5.setAttribute('style', "align-self: center");
    node_4.appendChild(node_5);

    var node_6 = document.createElement('H2');
    node_6.setAttribute('data-aos', 'fade-up');
    node_6.setAttribute('style', 'text-align-last: center');
    node_6.setAttribute('class', 'aos-init aos-animate');
    node_5.appendChild(node_6);

    var node_7 = document.createTextNode((new String("Bodegas")));
    node_6.appendChild(node_7);

    var node_8 = document.createElement('BR');
    node_6.appendChild(node_8);

    var node_9 = document.createTextNode((new String(json.itemListElement[pos].name)));
    node_6.appendChild(node_9);

    var node_10 = document.createElement('DIV');
    node_10.setAttribute('class', 'd-flex aos-init aos-animate');
    node_10.setAttribute('data-aos', 'fade-up');
    node_10.setAttribute('data-aos-delay', '200');
    node_5.appendChild(node_10);

    var node_11 = document.createElement('A');
    node_11.setAttribute('href', json.itemListElement[pos].subjectOf.video[0].contentUrl);
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

    const contImg = document.createElement('div');
    contImg.className = "caja margen";

    const contImg1 = document.createElement('div');
    contImg1.className = "box1 tamañoImgProductoMain";

    var node_16 = document.createElement('IMG');

    node_16.setAttribute('src', json.itemListElement[pos].image[json.itemListElement[pos].image.length - 1]);
    //node_16.setAttribute('class', 'im2 margen2 aos-init aos-animate');  
    node_16.setAttribute('alt', '');
    node_16.setAttribute('data-aos', 'zoom-out');
    node_16.setAttribute('data-aos-delay', '300');
    contImg1.appendChild(node_16);
    contImg.appendChild(contImg1);
    node_15.appendChild(contImg);

    var aux = document.createElement('div');
    aux.setAttribute('class', 'col-sm margen   text-lg-start');
    node_4.appendChild(aux);

    const contImg2 = document.createElement('div');
    contImg2.className = "caja margen";
    aux.appendChild(contImg2);

    const contImg3 = document.createElement('div');
    contImg3.className = "box1 tamañoImgProductoMain";
    contImg2.appendChild(contImg3);


    var aux1 = document.createElement('img');
    aux1.setAttribute('src', json.itemListElement[pos].logo);
    aux1.setAttribute('class', 'im aos-init aos-animate');
    aux1.setAttribute('data-aos', 'zoom-out');
    aux1.setAttribute('data-aos-delay', '300');
    aux1.setAttribute('style', 'height: auto');
    contImg3.appendChild(aux1);



    var node_17 = document.createElement('MAIN');
    node_17.setAttribute('id', 'main');
    node_1.appendChild(node_17);

    var node_18 = document.createElement('SECTION');
    node_18.setAttribute('id', 'about');
    node_18.setAttribute('class', 'about');
    node_17.setAttribute('style', 'background-image: url("http://www.vinyesmortitx.com/img_blog/21_QQ6A9827.jpg") ;)');
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
    node_25.setAttribute('style', 'background-image: url(' + json.itemListElement[pos].image[3] + ') ;');
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

    var node_30 = document.createTextNode(json.itemListElement[pos].telephone);
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

    var node_34 = document.createTextNode(json.itemListElement[pos].description);
    node_33.appendChild(node_34);

    var node_35 = document.createElement('DIV');
    node_35.setAttribute('class', 'position-relative mt-4 margen');
    node_32.appendChild(node_35);

    const contImg2x = document.createElement('div');
    contImg2x.className = "caja margen";

    const contImg3x = document.createElement('div');
    contImg3x.className = "box1 tamañoImgProductoDescripcion";

    var node_36 = document.createElement('IMG');
    node_36.setAttribute('src', json.itemListElement[pos].image[6]);
    node_36.setAttribute('class', 'img-fluid');
    node_36.setAttribute('alt', '');
    contImg3x.appendChild(node_36);
    contImg2x.appendChild(contImg3x);
    node_35.appendChild(contImg2x);

    var node_37 = document.createElement('A');
    node_37.setAttribute('href', json.itemListElement[pos].subjectOf.video[1].contentUrl);
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
    node_45.setAttribute('class', 'align-items-center margen aplicar-borde granate');
    node_40.appendChild(node_45);

    var node_46 = document.createElement('DIV');
    node_46.setAttribute('class', 'row gy-2 ');
    node_46.setAttribute('style','margin-top: auto');
    node_45.appendChild(node_46);
    var posTiempo = 0;
    var diaa = fechaActual.getDay();
    for(let i = 0;i < 5; i++){
        
        var node_47 = document.createElement('DIV');
        if(i != 0){
            node_47.setAttribute('class', 'col-xl-3 margen aos-init aos-animate');
        }else{
            node_47.setAttribute('class', 'margen aos-init aos-animate');
        }
        

        node_47.setAttribute('data-aos', 'fade-up');
        node_47.setAttribute('data-aos-delay', '200');
        node_46.appendChild(node_47);
    
        var node_48 = document.createElement('DIV');
        node_48.setAttribute('class', 'icon-box d-flex flex-column justify-content-center align-items-center');
        node_47.appendChild(node_48);
    
        var node_49 = document.createElement('H3');
        node_48.appendChild(node_49);


        console.log((diaa + i)% 7);
        var node_50 = document.createTextNode(new String(diasSemana[(diaa + i) % 7]));
        node_49.appendChild(node_50);

        var dia = document.createElement('h4');
        var aux = fechaActual;
        aux.setDate(fechaActual.getDate() + 1);
        dia.innerText = aux.getDate()+" / "+(aux.getMonth() + 1)+" / "+aux.getFullYear();
        node_48.appendChild(dia);

        var icon;
        if(i == 0){
            icon = tiempo.list[0].weather[0].icon;
            var month;
            var day;
            if(fechaActual.getMonth()+1 < 10){
                month = "0"+(fechaActual.getMonth()+1);
            }else{
                month = (fechaActual.getMonth()+1);
            }
            if(fechaActual.getDate() < 10){
                day = "0"+fechaActual.getDate();
            }else{
                day = fechaActual.getDate();
            }

            var hoy = fechaActual.getFullYear()+"-"+month+"-"+day;
            
        }else{
            while(!h12h(tiempo.list[posTiempo].dt_txt)){
                posTiempo++;
            }
            icon = tiempo.list[posTiempo].weather[0].icon;
        }

        var node_51 = document.createElement('I');
        node_51.setAttribute('class', iconoTiempo(icon));
        node_51.setAttribute('style', 'color: #511f1f;');
        node_48.appendChild(node_51);
        var node_52 = document.createElement('P');
        node_48.appendChild(node_52);
        var node_53 = document.createTextNode(Math.round(tiempo.list[posTiempo].main.temp_max)+" °C / "+Math.round(tiempo.list[posTiempo].main.temp_min)+" °C");
        node_52.appendChild(node_53);
        if(i == 0){
            while(tiempo.list[posTiempo].dt_txt.includes(hoy)){
                posTiempo++;
            }
        }else{
            posTiempo++;
        }
    }
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

    for (let i = 0; i < json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem.length; i++) {

        var node_123 = document.createElement('DIV');
        node_123.setAttribute('class', 'col-lg-4 menu-item');
        node_122.appendChild(node_123);

        var node_124 = document.createElement('A');
        node_124.setAttribute('href', json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].image);
        node_124.setAttribute('class', 'glightbox');
        node_123.appendChild(node_124);

        const contImg = document.createElement('div');
        contImg.className = "caja margen";

        const contImg1 = document.createElement('div');
        contImg1.className = "box1 tamañoImgProductoVinos";

        var node_125 = document.createElement('IMG');
        node_125.setAttribute('src', json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].image);
        node_125.setAttribute('class', 'menu-img img-fluid');
        node_125.setAttribute('alt', '');
        contImg1.appendChild(node_125);
        contImg.appendChild(contImg1);
        node_124.appendChild(contImg);

        var node_126 = document.createElement('H4');
        node_123.appendChild(node_126);

        var node_127 = document.createTextNode(json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].name);
        node_126.appendChild(node_127);

        var node_128 = document.createElement('P');
        node_128.setAttribute('class', 'ingredients');
        node_128.innerText = json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].description;
        node_123.appendChild(node_128);

        var node_129 = document.createElement('P');
        node_129.setAttribute('class', 'price');
        node_123.appendChild(node_129);

        var node_130 = document.createTextNode(json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].offers.price + " " + json.itemListElement[pos].hasMenu.hasMenuSection[0].hasMenuItem[i].offers.priceCurrency);
        node_129.appendChild(node_130);

    }

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

    for (let i = 0; i < json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem.length; i++) {

        var node_152 = document.createElement('DIV');
        node_152.setAttribute('class', 'col-lg-4 menu-item');
        node_151.appendChild(node_152);

        var node_153 = document.createElement('A');
        node_153.setAttribute('href', json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].image);
        node_153.setAttribute('class', 'glightbox');
        node_152.appendChild(node_153);

        const contImg = document.createElement('div');
        contImg.className = "caja margen";

        const contImg1 = document.createElement('div');
        contImg1.className = "box1 tamañoImgProductoVinos";

        var node_154 = document.createElement('IMG');
        node_154.setAttribute('src', json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].image);
        node_154.setAttribute('class', 'menu-img img-fluid');
        node_154.setAttribute('alt', '');
        contImg1.appendChild(node_154);
        contImg.appendChild(contImg1);
        node_153.appendChild(contImg);

        var node_155 = document.createElement('H4');
        node_152.appendChild(node_155);

        var node_156 = document.createTextNode(json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].name);
        node_155.appendChild(node_156);

        var node_157 = document.createElement('P');
        node_157.setAttribute('class', 'ingredients');
        node_152.appendChild(node_157);

        var node_158 = document.createTextNode(json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].description);
        node_157.appendChild(node_158);

        var node_159 = document.createElement('P');
        node_159.setAttribute('class', 'price');
        node_152.appendChild(node_159);

        var node_160 = document.createTextNode(json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].offers.price + " " + json.itemListElement[pos].hasMenu.hasMenuSection[1].hasMenuItem[i].offers.priceCurrency);
        node_159.appendChild(node_160);
    }

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

    for (let i = 0; i < json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem.length; i++) {

        var node_166 = document.createElement('DIV');
        node_166.setAttribute('class', 'col-lg-4 menu-item');
        node_165.appendChild(node_166);

        var node_167 = document.createElement('A');
        node_167.setAttribute('href', json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].image);
        node_167.setAttribute('class', 'glightbox');
        node_166.appendChild(node_167);

        const contImg = document.createElement('div');
        contImg.className = "caja margen";

        const contImg1 = document.createElement('div');
        contImg1.className = "box1 tamañoImgProductoVinos";

        var node_168 = document.createElement('IMG');
        node_168.setAttribute('src', json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].image);
        node_168.setAttribute('class', 'menu-img img-fluid');
        node_168.setAttribute('alt', '');
        contImg1.appendChild(node_168);
        contImg.appendChild(contImg1);
        node_167.appendChild(contImg);

        var node_169 = document.createElement('H4');
        node_166.appendChild(node_169);

        var node_170 = document.createTextNode(json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].name);
        node_169.appendChild(node_170);

        var node_171 = document.createElement('P');
        node_171.setAttribute('class', 'ingredients');
        node_166.appendChild(node_171);

        var node_172 = document.createTextNode(json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].description);
        node_171.appendChild(node_172);

        var node_173 = document.createElement('P');
        node_173.setAttribute('class', 'price');
        node_166.appendChild(node_173);

        var node_174 = document.createTextNode(json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].offers.price + " " + json.itemListElement[pos].hasMenu.hasMenuSection[2].hasMenuItem[i].offers.priceCurrency);
        node_173.appendChild(node_174);
    }

    var nodo_1 = document.createElement('SECTION');
    nodo_1.setAttribute('id', 'testimonials');
    nodo_1.setAttribute('class', 'testimonials section-bg');
    node_17.appendChild(nodo_1);

    var nodo_2 = document.createElement('DIV');
    nodo_2.setAttribute('class', 'container granate aplicar-borde margen');
    nodo_1.appendChild(nodo_2);

    var nodo_3 = document.createElement('DIV');
    nodo_3.setAttribute('class', 'row text-center');
    nodo_2.appendChild(nodo_3);

    var nodo_4 = document.createElement('DIV');
    nodo_4.setAttribute('class', 'col-12');
    nodo_3.appendChild(nodo_4);

    var nodo_5 = document.createElement('H1');
    nodo_5.setAttribute('class', 'display-3 fw-bold text-white');
    nodo_4.appendChild(nodo_5);

    var nodo_6 = document.createTextNode((new String("Testimonials")));
    nodo_5.appendChild(nodo_6);

    var nodo_7 = document.createElement('HR');
    nodo_7.setAttribute('class', 'bg-white mb-4 mt-0 d-inline-block mx-auto');
    nodo_7.setAttribute('style', 'width: 100px; height:3px;');
    nodo_4.appendChild(nodo_7);

    var nodo_8 = document.createElement('P');
    nodo_8.setAttribute('class', 'p-text text-white');
    nodo_4.appendChild(nodo_8);

    var nodo_9 = document.createTextNode((new String("What our clients are saying")));
    nodo_8.appendChild(nodo_9);

    var nodo_10 = document.createElement('DIV');
    nodo_10.setAttribute('class', 'row align-items-md-center text-white');
    nodo_2.appendChild(nodo_10);

    var nodo_11 = document.createElement('DIV');
    nodo_11.setAttribute('class', 'col-lg-12 col-md-12 col-sm-12');
    nodo_10.appendChild(nodo_11);

    var nodo_12 = document.createElement('DIV');
    nodo_12.setAttribute('id', 'carouselExampleCaptions');
    nodo_12.setAttribute('class', 'carousel slide');
    nodo_12.setAttribute('data-bs-ride', 'carousel');
    nodo_11.appendChild(nodo_12);

    var nodo_13 = document.createElement('DIV');
    nodo_13.setAttribute('class', 'carousel-inner');
    nodo_12.appendChild(nodo_13);

    var nodo_14 = document.createElement('DIV');
    nodo_14.setAttribute('class', 'carousel-item active');
    nodo_13.appendChild(nodo_14);

    var nodo_15 = document.createElement('DIV');
    nodo_15.setAttribute('class', 'row p-4');
    nodo_14.appendChild(nodo_15);

    var nodo_16 = document.createElement('DIV');
    nodo_16.setAttribute('class', 't-card');
    nodo_15.appendChild(nodo_16);

    var nodo_17 = document.createElement('I');
    nodo_17.setAttribute('class', 'fa fa-quote-left');
    nodo_17.setAttribute('aria-hidden', 'true');
    nodo_16.appendChild(nodo_17);

    var nodo_18 = document.createElement('P');
    nodo_18.setAttribute('class', 'lh-lg');
    nodo_16.appendChild(nodo_18);

    var nodo_19 = document.createElement('I');
    nodo_19.setAttribute('class', 'fa fa-quote-right');
    nodo_19.setAttribute('aria-hidden', 'true');
    nodo_16.appendChild(nodo_19);

    var nodo_20 = document.createElement('BR');
    nodo_16.appendChild(nodo_20);

    var nodo_21 = document.createElement('DIV');
    nodo_21.setAttribute('class', 'row');
    nodo_15.appendChild(nodo_21);

    var nodo_22 = document.createElement('DIV');
    nodo_22.setAttribute('class', 'col-sm-2 pt-3');
    nodo_21.appendChild(nodo_22);

    var nodo_23 = document.createElement('IMG');
    nodo_23.setAttribute('src', 'https://source.unsplash.com/300x300/?girl');
    nodo_23.setAttribute('class', 'rounded-circle img-responsive img-fluid');
    nodo_22.appendChild(nodo_23);

    var nodo_24 = document.createElement('DIV');
    nodo_24.setAttribute('class', 'col-sm-10');
    nodo_21.appendChild(nodo_24);

    var nodo_25 = document.createElement('DIV');
    nodo_25.setAttribute('class', 'arrow-down d-none d-lg-block');
    nodo_24.appendChild(nodo_25);

    var nodo_26 = document.createElement('H4');
    nodo_24.appendChild(nodo_26);

    var nodo_27 = document.createElement('STRONG');
    nodo_26.appendChild(nodo_27);

    var nodo_28 = document.createTextNode((new String("Sunaina Samuel")));
    nodo_27.appendChild(nodo_28);

    var nodo_29 = document.createElement('P');
    nodo_29.setAttribute('class', 'testimonial_subtitle');
    nodo_24.appendChild(nodo_29);

    var nodo_30 = document.createElement('SPAN');
    nodo_29.appendChild(nodo_30);

    var nodo_31 = document.createTextNode((new String("Associate Software Engineer")));
    nodo_30.appendChild(nodo_31);

    var nodo_32 = document.createElement('BR');
    nodo_29.appendChild(nodo_32);

    var nodo_33 = document.createElement('SPAN');
    nodo_29.appendChild(nodo_33);

    var nodo_34 = document.createTextNode((new String("CodeHim")));
    nodo_33.appendChild(nodo_34);

    var nodo_35 = document.createElement('DIV');
    nodo_35.setAttribute('class', 'carousel-item');
    nodo_13.appendChild(nodo_35);

    var nodo_36 = document.createElement('DIV');
    nodo_36.setAttribute('class', 'row p-4');
    nodo_35.appendChild(nodo_36);

    var nodo_37 = document.createElement('DIV');
    nodo_37.setAttribute('class', 't-card');
    nodo_36.appendChild(nodo_37);

    var nodo_38 = document.createElement('I');
    nodo_38.setAttribute('class', 'fa fa-quote-left');
    nodo_38.setAttribute('aria-hidden', 'true');
    nodo_37.appendChild(nodo_38);

    var nodo_39 = document.createElement('P');
    nodo_39.setAttribute('class', 'lh-lg');
    nodo_37.appendChild(nodo_39);

    var nodo_40 = document.createElement('I');
    nodo_40.setAttribute('class', 'fa fa-quote-right');
    nodo_40.setAttribute('aria-hidden', 'true');
    nodo_37.appendChild(nodo_40);

    var nodo_41 = document.createElement('BR');
    nodo_37.appendChild(nodo_41);

    var nodo_42 = document.createElement('DIV');
    nodo_42.setAttribute('class', 'row');
    nodo_36.appendChild(nodo_42);

    var nodo_43 = document.createElement('DIV');
    nodo_43.setAttribute('class', 'col-sm-2 pt-4');
    nodo_42.appendChild(nodo_43);

    var nodo_44 = document.createElement('IMG');
    nodo_44.setAttribute('src', 'https://source.unsplash.com/300x300/?man');
    nodo_44.setAttribute('class', 'rounded-circle img-responsive img-fluid');
    nodo_43.appendChild(nodo_44);

    var nodo_45 = document.createElement('DIV');
    nodo_45.setAttribute('class', 'col-sm-10');
    nodo_42.appendChild(nodo_45);

    var nodo_46 = document.createElement('DIV');
    nodo_46.setAttribute('class', 'arrow-down d-none d-lg-block');
    nodo_45.appendChild(nodo_46);

    var nodo_47 = document.createElement('H4');
    nodo_45.appendChild(nodo_47);

    var nodo_48 = document.createElement('STRONG');
    nodo_47.appendChild(nodo_48);

    var nodo_49 = document.createTextNode((new String("Esther Zawadi")));
    nodo_48.appendChild(nodo_49);

    var nodo_50 = document.createElement('P');
    nodo_50.setAttribute('class', 'testimonial_subtitle');
    nodo_45.appendChild(nodo_50);

    var nodo_51 = document.createElement('SPAN');
    nodo_50.appendChild(nodo_51);

    var nodo_52 = document.createTextNode((new String("\\n                digital strategist")));
    nodo_51.appendChild(nodo_52);

    var nodo_53 = document.createElement('BR');
    nodo_50.appendChild(nodo_53);

    var nodo_54 = document.createElement('SPAN');
    nodo_50.appendChild(nodo_54);

    var nodo_55 = document.createTextNode((new String("Vaxa digital")));
    nodo_54.appendChild(nodo_55);

    var nodo_56 = document.createElement('DIV');
    nodo_56.setAttribute('class', 'carousel-item');
    nodo_13.appendChild(nodo_56);

    var nodo_57 = document.createElement('DIV');
    nodo_57.setAttribute('class', 'row p-4');
    nodo_56.appendChild(nodo_57);

    var nodo_58 = document.createElement('DIV');
    nodo_58.setAttribute('class', 't-card');
    nodo_57.appendChild(nodo_58);

    var nodo_59 = document.createElement('I');
    nodo_59.setAttribute('class', 'fa fa-quote-left');
    nodo_59.setAttribute('aria-hidden', 'true');
    nodo_58.appendChild(nodo_59);

    var nodo_60 = document.createElement('P');
    nodo_60.setAttribute('class', 'lh-lg');
    nodo_58.appendChild(nodo_60);

    var nodo_61 = document.createElement('I');
    nodo_61.setAttribute('class', 'fa fa-quote-right');
    nodo_61.setAttribute('aria-hidden', 'true');
    nodo_58.appendChild(nodo_61);

    var nodo_62 = document.createElement('BR');
    nodo_58.appendChild(nodo_62);

    var nodo_63 = document.createElement('DIV');
    nodo_63.setAttribute('class', 'row text-lg-start');
    nodo_57.appendChild(nodo_63);

    var nodo_64 = document.createElement('DIV');
    nodo_64.setAttribute('class', 'col-sm-2 pt-4 align-items-center');
    nodo_63.appendChild(nodo_64);

    var nodo_65 = document.createElement('IMG');
    nodo_65.setAttribute('src', 'https://source.unsplash.com/300x300/?businessman');
    nodo_65.setAttribute('class', 'rounded-circle img-responsive img-fluid');
    nodo_64.appendChild(nodo_65);

    var nodo_66 = document.createElement('DIV');
    nodo_66.setAttribute('class', 'col-sm-10');
    nodo_63.appendChild(nodo_66);

    var nodo_67 = document.createElement('DIV');
    nodo_67.setAttribute('class', 'arrow-down d-none d-md-block');
    nodo_66.appendChild(nodo_67);

    var nodo_68 = document.createElement('H4');
    nodo_66.appendChild(nodo_68);

    var nodo_69 = document.createElement('STRONG');
    nodo_68.appendChild(nodo_69);

    var nodo_70 = document.createTextNode((new String("Patrick muriungi")));
    nodo_69.appendChild(nodo_70);

    var nodo_71 = document.createElement('P');
    nodo_71.setAttribute('class', 'testimonial_subtitle');
    nodo_66.appendChild(nodo_71);

    var nodo_72 = document.createElement('SPAN');
    nodo_71.appendChild(nodo_72);

    var nodo_73 = document.createTextNode((new String("Web Technologist")));
    nodo_72.appendChild(nodo_73);

    var nodo_74 = document.createElement('BR');
    nodo_71.appendChild(nodo_74);

    var nodo_75 = document.createElement('SPAN');
    nodo_71.appendChild(nodo_75);

    var nodo_76 = document.createTextNode((new String("Vaxa digital")));
    nodo_75.appendChild(nodo_76);

    var nodo_77 = document.createElement('DIV');
    nodo_77.setAttribute('class', 'controls push-right');
    nodo_11.appendChild(nodo_77);

    var nodo_78 = document.createElement('A');
    nodo_78.setAttribute('class', 'left fa fa-chevron-left text-white btn btn btn-outline-light');
    nodo_78.setAttribute('href', '#carouselExampleCaptions');
    nodo_78.setAttribute('data-bs-slide', 'prev');
    nodo_77.appendChild(nodo_78);

    var nodo_79 = document.createElement('A');
    nodo_79.setAttribute('class', 'right fa fa-chevron-right text-white btn btn btn-outline-light');
    nodo_79.setAttribute('href', '#carouselExampleCaptions');
    nodo_79.setAttribute('data-bs-slide', 'next');
    nodo_77.appendChild(nodo_79);


    var form_1 = document.createElement('DIV');
    form_1.setAttribute('class', 'tab-pane');
    form_1.setAttribute('id', 'add-comment');

    var form_2 = document.createElement('FORM');
    form_2.setAttribute('action', '#');
    form_2.setAttribute('method', 'post');
    form_2.setAttribute('class', 'form-horizontal');
    form_2.setAttribute('id', 'commentForm');
    form_2.setAttribute('role', 'form');
    form_1.appendChild(form_2);

    var form_3 = document.createElement('DIV');
    form_3.setAttribute('class', 'form-group');
    form_2.appendChild(form_3);

    var form_4 = document.createElement('LABEL');
    form_4.setAttribute('for', 'email');
    form_4.setAttribute('class', 'col-sm-2 control-label text-white');
    form_3.appendChild(form_4);

    var form_5 = document.createTextNode((new String("Name")));
    form_4.appendChild(form_5);

    var form_6 = document.createElement('DIV');
    form_6.setAttribute('class', 'col-sm-10');
    form_3.appendChild(form_6);

    var form_7 = document.createElement('TEXTAREA');
    form_7.setAttribute('class', 'form-control');
    form_7.setAttribute('name', 'addComment');
    form_7.setAttribute('id', 'addComment');
    form_7.setAttribute('rows', '5');
    form_6.appendChild(form_7);

    var form_8 = document.createElement('DIV');
    form_8.setAttribute('class', 'form-group');
    form_2.appendChild(form_8);

    var form_9 = document.createElement('LABEL');
    form_9.setAttribute('for', 'email');
    form_9.setAttribute('class', 'col-sm-2 control-label text-white');
    form_8.appendChild(form_9);

    var form_10 = document.createTextNode((new String("Comment")));
    form_9.appendChild(form_10);

    var form_11 = document.createElement('DIV');
    form_11.setAttribute('class', 'col-sm-10');
    form_8.appendChild(form_11);

    var form_12 = document.createElement('TEXTAREA');
    form_12.setAttribute('class', 'form-control');
    form_12.setAttribute('name', 'addComment');
    form_12.setAttribute('id', 'addComment');
    form_12.setAttribute('rows', '5');
    form_11.appendChild(form_12);

    var form_13 = document.createElement('DIV');
    form_13.setAttribute('class', 'form-group');
    form_2.appendChild(form_13);

    var form_14 = document.createElement('LABEL');
    form_14.setAttribute('for', 'uploadMedia');
    form_14.setAttribute('class', 'col-sm-2 control-label text-white');
    form_13.appendChild(form_14);

    var form_15 = document.createTextNode((new String("Upload media")));
    form_14.appendChild(form_15);

    var form_16 = document.createElement('DIV');
    form_16.setAttribute('class', 'col-sm-10');
    form_13.appendChild(form_16);

    var form_17 = document.createElement('DIV');
    form_17.setAttribute('class', 'input-group');
    form_16.appendChild(form_17);

    var form_18 = document.createElement('DIV');
    form_18.setAttribute('class', 'input-group-addon');
    form_17.appendChild(form_18);

    var form_19 = document.createElement('INPUT');
    form_19.setAttribute('type', 'text');
    form_19.setAttribute('class', 'form-control');
    form_19.setAttribute('name', 'uploadMedia');
    form_19.setAttribute('id', 'uploadMedia');
    form_17.appendChild(form_19);

    var form_20 = document.createElement('DIV');
    form_20.setAttribute('class', 'form-group');
    form_2.appendChild(form_20);

    var form_21 = document.createElement('DIV');
    form_21.setAttribute('class', 'col-sm-offset-2 col-sm-10');
    form_20.appendChild(form_21);

    var form_22 = document.createElement('BUTTON');
    form_22.setAttribute('class', 'btn btn-danger btn-circle text-uppercase margen ');
    form_22.setAttribute('type', 'submit');
    form_22.setAttribute('id', 'submitComment');
    form_21.appendChild(form_22);

    var form_23 = document.createElement('SPAN');
    form_23.setAttribute('class', 'glyphicon glyphicon-send');
    form_22.appendChild(form_23);

    var form_24 = document.createTextNode((new String(" Summit comment")));
    form_22.appendChild(form_24);

    nodo_2.appendChild(form_1);

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



    var gallery_1 = document.createElement('DIV');
    gallery_1.setAttribute('class', 'row text-center text-lg-start granate aplicar-borde margen');

    for (let i = 0; i < json.itemListElement[pos].image.length; i++) {

        var gallery_2 = document.createElement('DIV');
        gallery_2.setAttribute('class', 'col-lg-3 col-md-4 col-6');
        gallery_1.appendChild(gallery_2);

        var gallery_3 = document.createElement('A');
        gallery_3.setAttribute('class', 'd-block mb-4 h-100');
        gallery_2.appendChild(gallery_3);

        const contImgx = document.createElement('div');
        contImgx.className = "caja margen";

        const contImg1x = document.createElement('div');
        contImg1x.className = "box1 tamañoImgProductoMenu";

        var gallery_4 = document.createElement('IMG');
        //gallery_4.setAttribute('class', 'img-fluid img-thumbnail');
        gallery_4.setAttribute('src', json.itemListElement[pos].image[i]);
        gallery_4.setAttribute('alt', '');
        contImg1x.appendChild(gallery_4);
        contImgx.appendChild(contImg1x);
        gallery_3.appendChild(contImgx);

    }

    node_351.appendChild(gallery_1);

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

    //funcionamiento de la API de mapa

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

    var node_430 = document.createTextNode((new String(json.itemListElement[pos].address.streetAddress + " " + json.itemListElement[pos].address.postalCode + " " + json.itemListElement[pos].address.addressRegion + ", " + json.itemListElement[pos].address.addressLocality)));
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

    var node_438 = document.createTextNode(json.itemListElement[pos].email);
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

    var node_446 = document.createTextNode(json.itemListElement[pos].telephone);
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

    var node_456 = document.createTextNode(json.itemListElement[pos].openingHours);
    node_453.appendChild(node_456);

    var node_467 = document.createElement('DIV');
    node_467.setAttribute('class', 'col-md-6');
    node_422.appendChild(node_467);

    var node_468 = document.createElement('DIV');
    node_468.setAttribute('class', 'info-item  d-flex align-items-center');
    node_467.appendChild(node_468);

    var node_469 = document.createElement('I');
    node_469.setAttribute('class', 'icon <i fa-solid fa-utensils flex-shrink-0');
    node_468.appendChild(node_469);

    var node_470 = document.createElement('DIV');
    node_468.appendChild(node_470);

    var node_471 = document.createElement('H3');
    node_470.appendChild(node_471);

    var node_472 = document.createTextNode((new String("Restaurante cercano")));
    node_471.appendChild(node_472);

    var node_473 = document.createElement('DIV');
    node_470.appendChild(node_473);

    var node_474 = document.createElement('img');
    node_474.src = 'img/restaurante.png';
    node_474.className = "margen";
    node_473.appendChild(node_474);

    var node_475 = document.createElement('DIV');
    node_475.setAttribute('class', 'col-md-6');
    node_422.appendChild(node_475);

    var node_476 = document.createElement('DIV');
    node_476.setAttribute('class', 'info-item  d-flex align-items-center');
    node_475.appendChild(node_476);

    var node_477 = document.createElement('I');
    node_477.setAttribute('class', 'icon <i fa-solid fa-utensils flex-shrink-0');
    node_476.appendChild(node_477);

    var node_478 = document.createElement('DIV');
    node_476.appendChild(node_478);

    var node_479 = document.createElement('H3');
    node_478.appendChild(node_479);

    var node_480 = document.createTextNode((new String("Supermercado cercano")));
    node_479.appendChild(node_480);

    var node_481 = document.createElement('DIV');
    node_478.appendChild(node_481);

    var node_482 = document.createElement('img');
    node_482.src = 'img/supermercado.png';
    node_482.className = "margen";
    node_481.appendChild(node_482);

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

    var node_463 = document.createElement('a');
    node_460.appendChild(node_463);
    node_463.innerText = json.itemListElement[pos].url;
    node_463.setAttribute('href', json.itemListElement[pos].url);
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
    ul.setAttribute('id', 'ul-nav');
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

    for (let i = 0; i < json.itemListElement.length; i++) {
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
        img1.setAttribute('src', json.itemListElement[i].image[0]);
        img1.classList.add('d-block', 'w-100');
        carouselItem1.appendChild(img1);

        const carouselItem2 = document.createElement('div');
        carouselItem2.classList.add('carousel-item');

        const img2 = document.createElement('img');
        img2.setAttribute('src', json.itemListElement[i].image[1]);
        img2.classList.add('d-block', 'w-100');
        carouselItem2.appendChild(img2);

        const carouselItem3 = document.createElement('div');
        carouselItem3.classList.add('carousel-item');

        const img3 = document.createElement('img');
        img3.setAttribute('src', json.itemListElement[i].image[2]);
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

        const contImg = document.createElement('div');
        contImg.className = 'caja margen';

        const contImg1 = document.createElement('div');
        contImg1.className = 'box1 tamañoImgCard';

        const logoimg = document.createElement('img');
        logoimg.setAttribute('src', json.itemListElement[i].logo);

        const dl = document.createElement('dl');

        const dt1 = document.createElement('dt');
        dt1.textContent = 'Horario: ';
        const dd1 = document.createElement('dd');
        dd1.textContent = json.itemListElement[i].openingHours;

        const dt2 = document.createElement('dt');
        dt2.textContent = 'Teléfono: ';
        const dd2 = document.createElement('dd');
        dd2.textContent = json.itemListElement[i].telephone;

        const dt3 = document.createElement('dt');
        dt3.textContent = 'Email: ';
        const dd3 = document.createElement('dd');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.classList.add('text-navy');
        a.textContent = json.itemListElement[i].email;
        dd3.appendChild(a);

        const dt4 = document.createElement('dt');
        dt4.textContent = 'Web: ';
        const dd4 = document.createElement('dd');
        const a2 = document.createElement('a');
        a2.setAttribute('href', json.itemListElement[i].url);
        a2.classList.add('text-navy');
        a2.textContent = json.itemListElement[i].url;
        dd4.appendChild(a2);

        const dt5 = document.createElement('dt');
        dt5.textContent = 'Dirección: ';
        const br = document.createElement('br');
        const dd5_1 = document.createElement('dd');
        dd5_1.textContent = json.itemListElement[i].address.streetAddress;
        const dd5_2 = document.createElement('dd');
        dd5_2.textContent = json.itemListElement[i].address.addressLocality + " " + json.itemListElement[i].address.addressRegion + " " + json.itemListElement[i].address.postalCode;


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


        contImg1.appendChild(logoimg);
        contImg.appendChild(contImg1);
        col4.appendChild(contImg);
        col4.appendChild(div2);

        const colSmDiv = document.createElement('div');
        colSmDiv.className = 'col-sm';

        const containerDiv = document.createElement('div');
        containerDiv.className = 'container margen';

        const customScrollbarDiv = document.createElement('div');
        customScrollbarDiv.className = 'custom-scrollbar-css';

        const italicPara = document.createElement('p');
        italicPara.className = 'font-italic';
        italicPara.textContent = json.itemListElement[i].description

        customScrollbarDiv.appendChild(italicPara);
        containerDiv.appendChild(customScrollbarDiv);
        colSmDiv.appendChild(containerDiv);

        const moreInfoButton = document.createElement('button');
        moreInfoButton.className = 'add-to-cart margen';
        moreInfoButton.textContent = 'Más información';
        moreInfoButton.onclick = function () {
            gestorVisionado(3, i);
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


    for (let i = 0; i < json.itemListElement.length; i++) {


        const colCard = document.createElement('div');
        colCard.className = "col-lg-3 margen";

        const card = document.createElement('div');
        card.className = "card rounded shadow-sm border-0";

        const cardBody = document.createElement('div');
        cardBody.className = "card-body p-0";

        const contImg = document.createElement('div');
        contImg.className = "caja margen";

        const contImg1 = document.createElement('div');
        contImg1.className = "box1 tamañoImgCard";

        const imgCard = document.createElement('img');
        imgCard.className = "";
        imgCard.setAttribute('src', json.itemListElement[i].logo);

        const h5 = document.createElement('h5');
        h5.innerText = json.itemListElement[i].name

        const desc = document.createElement('p');
        desc.className = "small text-muted font-italic";
        desc.innerText = json.itemListElement[i].address.streetAddress + " " + json.itemListElement[i].address.postalCode + " " + json.itemListElement[i].address.addressRegion + ", " + json.itemListElement[i].address.addressLocality;


        //calcularlo
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
            gestorVisionado(3, i);
        };

        contImg1.appendChild(imgCard);
        contImg.appendChild(contImg1);
        cardBody.appendChild(contImg);
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

//funcion buscar a través del mapa
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

    const contImg = document.createElement('div');
    contImg.className = "caja margen";

    const contImg1 = document.createElement('div');
    contImg1.className = "box1 tamañoImgCard";

    const logoimg = document.createElement('img');
    logoimg.setAttribute('src', 'http://www.vinyesmortitx.com/img/logo-mo-vinyes-mortitx.png');

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


    contImg1.appendChild(logoimg);
    contImg.appendChild(contImg1);
    col4.appendChild(contImg);
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
        gestorVisionado(3, 0);
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

function gestorVisionado(vision, producto) {
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
            paginaProducto2(producto);
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

$(window).bind("load resize slid.bs.carousel", function () {
    var imageHeight = $(".active .holder").height();
    $(".controllers").height(imageHeight);
    console.log("Slid");
});

//Funcionalidades

function cargarJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "json/Bodegas.json", false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse(this.responseText);
            console.log(json);
        }
    };
    xmlhttp.send();
}


function weather(latitud, longitud) {
    const apiKey = "598a45ea6dd5cf5f91f03b503538d27e";
    const url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitud + "&lon=" + longitud + "&appid=" + apiKey+"&units=metric&lang=es";
    const request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
        return data;
    } else {
        console.error(`Error ${request.status}: ${request.statusText}`);
    }
}

function h12h(cadena){
    return cadena.includes("12:00:00");
}

function iconoTiempo(id){
    switch(id){
        case "01d":
        case "01n":
            return "bi bi-brightness-high-fill";
        case "02d":
        case "02n":
            return " bi bi-cloud-sun";
        case "03d":
        case "03n":
            return "bi bi-cloud";
        case "04d":
        case "04n":
            return "bi bi-clouds-fill";
        case "09d":
        case "09n":
            return "bi bi-cloud-drizzle-fill";
        case "10d":
        case "10n":
            return "fa-solid fa-cloud-sun-rain";
        case "11d":
        case "11n":
            return "bi bi-cloud-lightning-rain-fill";
        case "13d":
        case "13n":
            return "bi bi-snow";
        case "50d":
        case "50n":
            return "bi bi-wind";

    }
}