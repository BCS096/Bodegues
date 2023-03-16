window.onload = function () {
    var aux = document.getElementById("prueba");
    aux.href = "javascript:initButtons()";
    crearCarouselPrincipal();
    filtrado();
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
    img1.setAttribute('src', 'img/fondo.jpg');
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
    img2.setAttribute('src', 'img/fondo.jpg');
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
    img3.setAttribute('src', 'img/fondo.jpg');
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
    const container1 = document.createElement("div");
    container1.className = "container granate aplicar-borde margen";

    const card1 = document.createElement("div");
    card1.className = "card-body";

    const containerCard = document.createElement("div");
    containerCard.className = "container granate aplicar-borde margen";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper row gris aplicar-borde";

    const preview = document.createElement("div");
    preview.className = "preview col-md-6 margen";

    const previewPic = document.createElement("div");
    previewPic.classList.add("preview-pic", "tab-content");

    const pic1 = document.createElement("div");
    pic1.classList.add("tab-pane", "active");
    pic1.id = "pic-1";
    const pic1Img = document.createElement("img");
    pic1Img.src = "http://placekitten.com/400/252";
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

    preview.appendChild(previewpic);


}