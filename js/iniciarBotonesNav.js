var listNav = document.getElementById("listNav");
var elem = document.createElement("li");
var txt = document.createTextNode("Features");
elem.class = "nav-item";
var child = document.createElement("a");
child.class = "nav-link";
child.appendChild(txt);
elem.appendChild(child);
listNav.appendChild(elem);

//<a class="nav-link" href="#">Features</a>