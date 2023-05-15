//Funcionalidades

//carga de JSON's
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

//Funcionalidades del tiempo
function weather(latitud, longitud) {
    const apiKey = "598a45ea6dd5cf5f91f03b503538d27e";
    const url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitud + "&lon=" + longitud + "&appid=" + apiKey + "&units=metric&lang=es";
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

function h12h(cadena) {
    return cadena.includes("12:00:00");
}

function iconoTiempo(id) {
    switch (id) {
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

//Funcionalidades de 'Está Abierto'
function estaAbierto(horario) {
    const semana = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    var fechaActual = new Date();
    var diaSemana = semana[fechaActual.getDay() - 1];
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();
    if (horario.includes(diaSemana)) {
        var horaApertura = obtenerHora(horario.split(' ')[1].split('-')[0]);
        var minutosApertura = obtenerMinutos(horario.split(' ')[1].split('-')[0]);
        var horaCierre = obtenerHora(horario.split(' ')[1].split('-')[1]);
        var minutosCierre = obtenerMinutos(horario.split(' ')[1].split('-')[1]);

        if (horaActual > horaApertura && horaActual < horaCierre) {
            return true;
        } else if (horaActual === horaApertura && minutosActual >= minutosApertura) {
            if (horaActual === horaCierre && minutosActual >= minutosCierre) {
                return false;
            }
            return true;
        } else if (horaActual === horaCierre && minutosActual <= minutosCierre) {
            if (horaActual === horaApertura && minutosActual < minutosApertura) {
                return false;
            }
            return true;
        }
    }
    return false;
}

function obtenerHora(hora) {
    return parseInt(hora.split(':')[0]);
}

function obtenerMinutos(hora) {
    return parseInt(hora.split(':')[1]);
}

//funcionalidades mapas

function initMap(latitud, longitud) {
    var map = L.map('map').setView([latitud, longitud], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    L.marker([latitud, longitud]).addTo(map);

    if (navigator.geolocation) {
        // El navegador soporta geolocalización
        navigator.geolocation.getCurrentPosition(function (position) {
            // Se obtiene la posición actual del usuario
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            L.marker([lat, lon]).addTo(map);
        }, function (error) {
            // Ocurrió un error al obtener la geolocalización
            console.error("Error al obtener la geolocalización: " + error.message);
        });
    } else {
        // El navegador no soporta geolocalización
        console.error("Geolocalización no soportada por este navegador");
    }

}

function initMap2() {
    var map = L.map('map').setView([39.639482525079316, 2.9700955197758736], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    for (let i = 0; i < json.itemListElement.length; i++) {
        var marcador = L.marker([json.itemListElement[i].geo.latitude, json.itemListElement[i].geo.longitude], { title: 'Bodegas ' + json.itemListElement[i].name }).addTo(map);
        marcador.on('click', function (e) {
            infoMapa(i);
        });
    }
}