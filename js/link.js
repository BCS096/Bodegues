window.onload = function(){
    var aux = document.getElementById("prueba");
    aux.href = "javascript:initButtons()";
}

function initButtons(){

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
    child.style.color="#4D141C";
    child.appendChild(txt);
    elem.appendChild(child);
    listNav.appendChild(elem);

    elem = document.createElement("li");
    txt = document.createTextNode("Videos");
    elem.className = "nav-item";
    child = document.createElement("a");
    child.className = "nav-link";
    child.style.color="#4D141C";
    child.appendChild(txt);
    elem.appendChild(child);
    listNav.appendChild(elem);

    elem = document.createElement("li");
    txt = document.createTextNode("Información");
    elem.className = "nav-item";
    child = document.createElement("a");
    child.className = "nav-link";
    child.style.color="#4D141C";
    child.appendChild(txt);
    elem.appendChild(child);
    listNav.appendChild(elem);
}