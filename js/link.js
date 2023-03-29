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
    img1.src = "images.jpg";
    img1.className = "d-block w-100";
    img1.alt = "...";

    carouselItem1.appendChild(img1);

    const carouselItem2 = document.createElement("div");
    carouselItem2.className = "carousel-item";

    const img2 = document.createElement("img");
    img2.src = "images.jpg";
    img2.className = "d-block w-100";
    img2.alt = "...";

    carouselItem2.appendChild(img2);

    const carouselItem3 = document.createElement("div");
    carouselItem3.className = "carousel-item";

    const img3 = document.createElement("img");
    img3.src = "images.jpg";
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
    liDesc.classList.add('nav-item', 'flex-sm-fill','granate');
    const aDesc = document.createElement('a');
    aDesc.id = 'desc-tab';
    aDesc.dataset.toggle = 'tab';
    aDesc.role = 'tab';
    aDesc.setAttribute('aria-controls', 'home');
    aDesc.setAttribute('aria-selected', 'true');
    aDesc.classList.add('nav-link','bg-danger', 'border-0', 'text-uppercase', 'font-weight-bold', 'active');
    aDesc.textContent = 'Descripción';
    liDesc.appendChild(aDesc);

    const liOpinion = document.createElement('li');
    liOpinion.classList.add('nav-item', 'flex-sm-fill','granate');
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
    liVideo.classList.add('nav-item', 'flex-sm-fill','granate');
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
    if (carrusel != null) {
        h.appendChild(carrusel);
        carrusel = null;
    }

    if (seccion.hasChildNodes()) {
        while (seccion.childNodes.length >= 1) {
            seccion.removeChild(seccion.firstChild);
        }
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
    var h = document.getElementById("header");
    var car = document.getElementById("carouselPrincipal");

    if (hasNode(h, car)) {
        carrusel = car;
        h.removeChild(car);
    }


    if (seccion.hasChildNodes()) {
        while (seccion.childNodes.length >= 1) {
            seccion.removeChild(seccion.firstChild);
        }
    }
    if (vision >= 3) {

        if (vision == 3) {
            paginaProducto();
            activarBotonesPrincipal();
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
    h4.textContent = '37 Reviews';
    div.appendChild(h4);

    const select = document.createElement('select');
    select.classList.add('custom-select', 'custom-select-sm', 'border-0', 'shadow-sm', 'ml-2', 'select2-hidden-accessible');
    select.setAttribute('data-select2-id', '1');
    select.setAttribute('tabindex', '-1');
    select.setAttribute('aria-hidden', 'true');
    div.appendChild(select);

    const option1 = document.createElement('option');
    option1.setAttribute('data-select2-id', '3');
    option1.textContent = 'Most Relevant';
    select.appendChild(option1);

    const option2 = document.createElement('option');
    option2.textContent = 'Most Recent';
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
    span4.setAttribute('title', 'Most Relevant');
    span4.textContent = 'Most Relevant';
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
    heading.textContent = 'Rating Breakdown';

    const ul = document.createElement('ul');

    const li1 = document.createElement('li');
    li1.textContent = 'Seller communication level';

    const span1xx = document.createElement('span');
    span1xx.textContent = '5';

    const star1 = document.createElement('span');
    star1.classList.add('review-star', 'rate-10', 'show-one');

    span1xx.appendChild(star1);
    li1.appendChild(span1xx);
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = 'Recommend to a friend';

    const span2xx = document.createElement('span');
    span2xx.textContent = '5';

    const star2 = document.createElement('span');
    star2.classList.add('review-star', 'rate-10', 'show-one');

    span2xx.appendChild(star2);
    li2.appendChild(span2xx);
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.textContent = 'Service as described';

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
    a1.classList.add('nav-link','bg-danger', 'border-0', 'text-uppercase', 'font-weight-bold', 'active');
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
    a2.classList.add('nav-link','bg-danger', 'border-0', 'text-uppercase', 'font-weight-bold');
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
    a3.classList.add('nav-link','bg-danger', 'border-0', 'text-uppercase', 'font-weight-bold');
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

    const fotos = ["http://www.vinyesmortitx.com/img_blog/1584635839.jpg","http://www.vinyesmortitx.com/img_blog/1584632514.jpg","http://www.vinyesmortitx.com/img_blog/ART_9u-negre.png"];
    const nombre = ["Tinto 2019","Rodal Pla 2017","L'U negre 2017"];
    const precios = ["12.18 EUR","15.98 EUR","62.90 EUR"]

    for(let i=0;i<3;i++){

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