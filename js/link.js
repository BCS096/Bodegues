window.onload = function () {
    var aux = document.getElementById("prueba");
    aux.href = "javascript:initButtons()";
    crearCarouselPrincipal();
    filtrado();
    listadoCard();
}

function initButtons() {

    //<li class="nav-item">
    //<a class="nav-link active" aria-current="page" href="#">Home</a>
    //</li>
    var listNav = document.getElementById("listNav");
    var elem = document.createElement("li");
    var txt = document.createTextNode("Fotos");
    elem.className = "nav-item";
    var child = document.createElement("a");
    child.className = "nav-link";
    child.ariaCurrent = "page";
    child.style.color = "#4D141C";
    child.appendChild(txt);
    elem.appendChild(child);
    listNav.appendChild(elem);

    elem = document.createElement("li");
    txt = document.createTextNode("Videos");
    elem.className = "nav-item";
    child = document.createElement("a");
    child.className = "nav-link";
    child.style.color = "#4D141C";
    child.appendChild(txt);
    elem.appendChild(child);
    listNav.appendChild(elem);

    elem = document.createElement("li");
    txt = document.createTextNode("Información");
    elem.className = "nav-item";
    child = document.createElement("a");
    child.className = "nav-link";
    child.style.color = "#4D141C";
    child.appendChild(txt);
    elem.appendChild(child);
    listNav.appendChild(elem);
}

function crearCarouselPrincipal() {
    var divClasses = ["container px-1", "row gx-5 align-items-center justify-content-center",
        "col-lg-8 col-xl-7 col-xxl-6", "my-5 text-center text-xl-start"];
    var dad = document.getElementById("primer");
    console.log("hola");
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
    var p = document.createElement("p");
    p.className = "lead fw-normal text-white-50 mb-4";
    txt = document.createTextNode("Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!");
    p.appendChild(txt);
    dad.appendChild(p);
    var div = document.createElement("div");
    div.className = "d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start";
    dad.appendChild(div);
    var a = document.createElement("a");
    a.className = "btn btn-primary btn-lg px-4 me-sm-3";
    txt = document.createTextNode("Get Started");
    a.appendChild(txt);
    div.appendChild(a);
    a = document.createElement("a");
    a.className = "btn btn-outline-light btn-lg px-4";
    txt = document.createTextNode("Learn More");
    a.appendChild(txt);
    div.appendChild(a);
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

function filtrado() {
    const dad = document.getElementById("seccion");
    // Crear el elemento contenedor y añadir las clases necesarias
    const container = document.createElement('div');
    container.classList.add('container', 'granate', 'aplicar-borde');

    // Crear el formulario
    const form = document.createElement('form');

    // Crear la fila de columnas
    const row = document.createElement('div');
    row.classList.add('row');

    // Crear las columnas
    for (let i = 0; i < 6; i++) {
        const col = document.createElement('div');
        col.classList.add('col-md-4');

        // Crear el grupo de formulario y añadir las clases necesarias
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group', 'has-feedback', 'has-clear');

        // Crear la etiqueta y el campo de entrada
        const label = document.createElement('label');
        label.classList.add('letras');
        label.setAttribute('for', `exampleInput${i + 1}`);
        label.textContent = 'Name';

        const input = document.createElement('input');
        input.classList.add('form-control', 'no-rounded');
        input.setAttribute('type', 'text');
        input.setAttribute('id', `exampleInput${i + 1}`);
        input.setAttribute('placeholder', 'Enter text here');

        // Añadir el campo de entrada y la etiqueta al grupo de formulario
        formGroup.appendChild(label);
        formGroup.appendChild(input);

        // Crear el icono de borrado y añadir las clases necesarias
        const clearIcon = document.createElement('span');
        clearIcon.classList.add('form-control-clear', 'glyphicon', 'glyphicon-remove', 'form-control-feedback', 'hidden');

        // Añadir el icono de borrado al grupo de formulario
        formGroup.appendChild(clearIcon);

        // Añadir el grupo de formulario a la columna
        col.appendChild(formGroup);

        // Añadir la columna a la fila
        row.appendChild(col);
    }

    // Añadir la fila al formulario
    form.appendChild(row);

    // Crear la fila de botones
    const margen = document.createElement('div');
    margen.classList.add('margen');

    const buttonRow = document.createElement('div');
    buttonRow.classList.add('row', 'margen');

    const buttonCol = document.createElement('div');
    buttonCol.classList.add('col-md-12', 'margen');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary', 'pull-right');
    button.setAttribute('type', 'submit');
    button.textContent = 'Aplicar';

    // Añadir el botón a la columna y la columna a la fila de botones
    buttonCol.appendChild(button);
    buttonRow.appendChild(buttonCol);


    // Añadir la fila de botones al elemento de margen y el elemento de margen al formulario
    margen.appendChild(buttonRow);
    form.appendChild(margen);

    // Añadir el formulario al contenedor
    container.appendChild(form);

    dad.appendChild(container);

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

    for (let i = 0; i < 3; i++) {
        const card1 = document.createElement("div");
        card1.className = "card-body";

        const containerCard = document.createElement("div");
        containerCard.className = "container granate aplicar-borde margen";

        const wrapper = document.createElement("div");
        wrapper.className = "wrapper row gris aplicar-borde";

        const preview = document.createElement("div");
        preview.className = "preview col-md-6 margen";

        const previewPic = document.createElement("div");
        previewPic.classList.add("preview-pic", "tab-content", "margen");

        const pic1 = document.createElement("div");
        pic1.classList.add("tab-pane", "active");
        pic1.id = "pic-1";
        const pic1Img = document.createElement("img");
        pic1Img.setAttribute("src", "http://placekitten.com/400/252");
        pic1.appendChild(pic1Img);

        const pic2 = document.createElement("div");
        pic2.classList.add("tab-pane");
        pic2.id = "pic-2";
        const pic2Img = document.createElement("img");
        pic2Img.src = "http://placekitten.com/400/252";
        pic2.appendChild(pic2Img);

        const pic3 = document.createElement("div");
        pic3.classList.add("tab-pane");
        pic3.id = "pic-3";
        const pic3Img = document.createElement("img");
        pic3Img.src = "http://placekitten.com/400/252";
        pic3.appendChild(pic3Img);

        const pic4 = document.createElement("div");
        pic4.classList.add("tab-pane");
        pic4.id = "pic-4";
        const pic4Img = document.createElement("img");
        pic4Img.src = "http://placekitten.com/400/252";
        pic4.appendChild(pic4Img);

        const pic5 = document.createElement("div");
        pic5.classList.add("tab-pane");
        pic5.id = "pic-5";
        const pic5Img = document.createElement("img");
        pic5Img.src = "http://placekitten.com/400/252";
        pic5.appendChild(pic5Img);

        previewPic.appendChild(pic1);
        previewPic.appendChild(pic2);
        previewPic.appendChild(pic3);
        previewPic.appendChild(pic4);
        previewPic.appendChild(pic5);

        preview.appendChild(previewPic);

        const previewThumbnail = document.createElement("ul");
        previewThumbnail.classList.add("preview-thumbnail", "nav", "nav-tabs", "margen");

        const pic1Li = document.createElement("li");
        pic1Li.classList.add("active");
        const pic1Link = document.createElement("a");
        pic1Link.setAttribute("data-target", "#pic-1");
        pic1Link.setAttribute("data-toggle", "tab");
        const pic1Img1 = document.createElement("img");
        pic1Img1.src = "http://placekitten.com/200/126";
        pic1Link.appendChild(pic1Img1);
        pic1Li.appendChild(pic1Link);

        const pic2Li = document.createElement("li");
        const pic2Link = document.createElement("a");
        pic2Link.setAttribute("data-target", "#pic-2");
        pic2Link.setAttribute("data-toggle", "tab");
        const pic2Img1 = document.createElement("img");
        pic2Img1.src = "http://placekitten.com/200/126";
        pic2Link.appendChild(pic2Img1);
        pic2Li.appendChild(pic2Link);

        const pic3Li = document.createElement("li");
        const pic3Link = document.createElement("a");
        pic3Link.setAttribute("data-target", "#pic-3");
        pic3Link.setAttribute("data-toggle", "tab");
        const pic3Img1 = document.createElement("img");
        pic3Img1.src = "http://placekitten.com/200/126";
        pic3Link.appendChild(pic3Img1);
        pic3Li.appendChild(pic3Link);

        const pic4Li = document.createElement("li");
        const pic4Link = document.createElement("a");
        pic4Link.setAttribute("data-target", "#pic-4");
        pic4Link.setAttribute("data-toggle", "tab");
        const pic4Img1 = document.createElement("img");
        pic4Img1.src = "http://placekitten.com/200/126";
        pic4Link.appendChild(pic4Img1);
        pic4Li.appendChild(pic4Link);

        const pic5Li = document.createElement("li");
        const pic5Link = document.createElement("a");
        pic5Link.setAttribute("data-target", "#pic-5");
        pic5Link.setAttribute("data-toggle", "tab");
        const pic5Img1 = document.createElement("img");
        pic5Img1.src = "http://placekitten.com/200/126";
        pic5Link.appendChild(pic5Img1);
        pic5Li.appendChild(pic5Link);

        previewThumbnail.appendChild(pic1Li);
        previewThumbnail.appendChild(pic2Li);
        previewThumbnail.appendChild(pic3Li);
        previewThumbnail.appendChild(pic4Li);
        previewThumbnail.appendChild(pic5Li);

        preview.appendChild(previewPic);
        preview.appendChild(previewThumbnail);

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details', 'col-md-6', 'margen', 'divPadre');

        const titleH3 = document.createElement('h3');
        titleH3.classList.add('product-title', 'letras', 'divHijo');
        titleH3.textContent = "men's shoes fashion";
        detailsDiv.appendChild(titleH3);

        const ratingDiv = document.createElement('div');
        ratingDiv.classList.add('rating', 'divHijo');
        const starsDiv = document.createElement('div');
        starsDiv.classList.add('stars');
        const checkedStarSpan1 = document.createElement('span');
        checkedStarSpan1.classList.add('fa', 'fa-star', 'checked');
        const checkedStarSpan2 = document.createElement('span');
        checkedStarSpan2.classList.add('fa', 'fa-star', 'checked');
        const checkedStarSpan3 = document.createElement('span');
        checkedStarSpan3.classList.add('fa', 'fa-star', 'checked');
        const uncheckedStarSpan1 = document.createElement('span');
        uncheckedStarSpan1.classList.add('fa', 'fa-star');
        const uncheckedStarSpan2 = document.createElement('span');
        uncheckedStarSpan2.classList.add('fa', 'fa-star');
        starsDiv.appendChild(checkedStarSpan1);
        starsDiv.appendChild(checkedStarSpan2);
        starsDiv.appendChild(checkedStarSpan3);
        starsDiv.appendChild(uncheckedStarSpan1);
        starsDiv.appendChild(uncheckedStarSpan2);
        ratingDiv.appendChild(starsDiv);
        const reviewSpan = document.createElement('span');
        reviewSpan.classList.add('review-no', 'letras');
        reviewSpan.textContent = '41 reviews';
        ratingDiv.appendChild(reviewSpan);
        detailsDiv.appendChild(ratingDiv);

        const descriptionP = document.createElement('p');
        descriptionP.classList.add('product-description', 'letras', 'divHijo');
        descriptionP.textContent = 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.';
        detailsDiv.appendChild(descriptionP);

        const priceH4 = document.createElement('h4');
        priceH4.classList.add('price', 'letras', 'divHijo');
        priceH4.textContent = 'current price: ';
        const priceSpan = document.createElement('span');
        priceSpan.textContent = '$180';
        priceH4.appendChild(priceSpan);
        detailsDiv.appendChild(priceH4);

        const voteP = document.createElement('p');
        voteP.classList.add('vote', 'letras', 'divHijo');
        const strong1 = document.createElement('strong');
        strong1.textContent = '91%';
        voteP.appendChild(strong1);
        voteP.appendChild(document.createTextNode(' of buyers enjoyed this product! '));
        const strong2 = document.createElement('strong');
        strong2.textContent = '(87 votes)';
        voteP.appendChild(strong2);
        detailsDiv.appendChild(voteP);

        const sizesH5 = document.createElement('h5');
        sizesH5.classList.add('sizes', 'bi-layout-text-sidebar-reverse', 'letras', 'divHijo');
        sizesH5.textContent = 'sizes: ';
        const sizeSpan1 = document.createElement('span');
        sizeSpan1.classList.add('size', 'letras');
        sizeSpan1.setAttribute('data-toggle', 'tooltip');
        sizeSpan1.setAttribute('title', 'small');
        sizeSpan1.textContent = 's';
        const sizeSpan2 = document.createElement('span');
        sizeSpan2.classList.add('size', 'letras');
        sizeSpan2.setAttribute('data-toggle', 'tooltip');
        sizeSpan2.setAttribute('title', 'medium');
        sizeSpan2.textContent = 'm';
        const sizeSpan3 = document.createElement('span');
        sizeSpan3.classList.add('size', 'letras');
        sizeSpan3.setAttribute('data-toggle', 'tooltip');
        sizeSpan3.setAttribute('title', 'large');
        sizeSpan3.textContent = 'l';
        const sizeSpan4 = document.createElement('span');
        sizeSpan4.classList.add('size', 'letras');
        sizeSpan4.setAttribute('data-toggle', 'tooltip');
        sizeSpan4.setAttribute('title', 'large');
        sizeSpan4.textContent = 'xl';

        sizesH5.appendChild(sizeSpan1);
        sizesH5.appendChild(sizeSpan2);
        sizesH5.appendChild(sizeSpan3);
        sizesH5.appendChild(sizeSpan4);

        detailsDiv.appendChild(sizesH5);

        const sizesH51 = document.createElement('h5');
        sizesH51.classList.add('colors', 'letras', 'divHijo');
        sizesH51.textContent = 'colors:';

        const span1 = document.createElement('span');
        span1.classList.add('color', 'orange');
        span1.setAttribute('data-toggle', 'tooltip');
        span1.setAttribute('title', 'Not in store');

        const span2 = document.createElement('span');
        span2.classList.add('color', 'green');

        const span3 = document.createElement('span');
        span3.classList.add('color', 'blue');

        sizesH51.appendChild(span1);
        sizesH51.appendChild(span2);
        sizesH51.appendChild(span3);

        detailsDiv.appendChild(sizesH51);

        const finalDiv = document.createElement('div');
        finalDiv.classList.add('action', 'divHijo');

        const boton1 = document.createElement('button');
        boton1.classList.add('add-to-cart');
        boton1.type = 'button';
        boton1.textContent = 'add to cart';

        const boton2 = document.createElement('button');
        boton2.classList.add('like', 'btn', 'btn-default');
        boton2.type = 'button';

        const spanboton = document.createElement('span');
        spanboton.classList.add('fa', 'fa-heart');

        boton2.appendChild(spanboton);

        finalDiv.appendChild(boton1);
        finalDiv.appendChild(boton2);

        detailsDiv.appendChild(finalDiv);
        wrapper.appendChild(preview);
        wrapper.appendChild(detailsDiv);
        containerCard.appendChild(wrapper);
        card1.appendChild(containerCard);
        row.appendChild(card1);
    }

    container1.appendChild(row);
    dad.appendChild(container1);

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

    for (let i = 0; i < 5; i++) {


        const colCard = document.createElement('div');
        colCard.className = "col-lg-3 margen";

        const card = document.createElement('div');
        card.className = "card rounded shadow-sm border-0";

        const cardBody = document.createElement('div');
        cardBody.className = "card-body p-0";

        const imgCard = document.createElement('img');
        imgCard.className = "img-fluid d-block mx-auto mb-3";
        imgCard.setAttribute('src', 'https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg');

        const h5 = document.createElement('h5');
        h5.innerText = "Awesome Product";

        const desc = document.createElement('p');
        desc.className = "small text-muted font-italic";
        desc.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

        const starsOut = document.createElement('div');
        starsOut.className = "stars-outer";

        const starsIn = document.createElement('div');
        starsIn.className = "stars-inner";

        starsOut.appendChild(starsIn);

        const button = document.createElement('button');
        button.className = "add-to-cart margen";
        button.innerText = "Add to cart";

        cardBody.appendChild(imgCard);
        cardBody.appendChild(h5);
        cardBody.appendChild(desc);
        cardBody.appendChild(starsOut);
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
    container.classList.add('container', 'granate', 'aplicar-borde','margen');

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
    carouselInner.classList.add('carousel-inner','redimension');

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

    colSmDiv.appendChild(moreInfoButton);

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

function gestorVisionado(vision) {
    var seccion = document.getElementById("seccion");

    if (seccion.hasChildNodes()) {
        while (seccion.childNodes.length >= 1) {
            seccion.removeChild(seccion.firstChild);
        }
    }
    filtrado();
    switch (vision) {
        case 1: listadoCardXL();
            break;
        case 0: listadoCard();
            break;
        case 2: listadoMap();
            break;
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