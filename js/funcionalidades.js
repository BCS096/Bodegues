//Funcionalidades

//carga de JSON's
function cargarJSON() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "json/Bodegas.json", false);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      json = JSON.parse(this.responseText);
    }
  };
  xmlhttp.send();
}

function cargarJSONSupermercado() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "json/supermercat.json", false);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      jsonS = JSON.parse(this.responseText);
    }
  };
  xmlhttp.send();
}

function cargarJSONRestaurante() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "json/restaurante.json", false);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      jsonR = JSON.parse(this.responseText);
    }
  };
  xmlhttp.send();
}

function cargarJSOComentarios() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "php/comentarios.json", false);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      jsonC = JSON.parse(this.responseText);
    }
  };
  xmlhttp.send();
}

//Funcionalidades del tiempo
function weather(latitud, longitud) {
  const apiKey = "598a45ea6dd5cf5f91f03b503538d27e";
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    latitud +
    "&lon=" +
    longitud +
    "&appid=" +
    apiKey +
    "&units=metric&lang=es";
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
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
      return "bi bi-cloud-rain-heavy-fill";
    case "10d":
    case "10n":
      return "bi bi-cloud-drizzle-fill";
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
    var horaApertura = obtenerHora(horario.split(" ")[1].split("-")[0]);
    var minutosApertura = obtenerMinutos(horario.split(" ")[1].split("-")[0]);
    var horaCierre = obtenerHora(horario.split(" ")[1].split("-")[1]);
    var minutosCierre = obtenerMinutos(horario.split(" ")[1].split("-")[1]);

    if (horaActual > horaApertura && horaActual < horaCierre) {
      return true;
    } else if (
      horaActual === horaApertura &&
      minutosActual >= minutosApertura
    ) {
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
  return parseInt(hora.split(":")[0]);
}

function obtenerMinutos(hora) {
  return parseInt(hora.split(":")[1]);
}

//funcionalidades mapas

function initMap(pos, latitud, longitud, supermercado, restaurante) {
  var map = L.map("map").setView([latitud, longitud], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  var endMarker = L.marker([latitud, longitud], {
    title: "Bodegas " + json.itemListElement[pos].name,
  }).addTo(map);

  L.marker([supermercado.geo.latitude, supermercado.geo.longitude], {
    title: supermercado.name,
  }).addTo(map);

  L.marker([restaurante.geo.latitude, restaurante.geo.longitude], {
    title: restaurante.name,
  }).addTo(map);

  if (navigator.geolocation) {
    // El navegador soporta geolocalización
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Se obtiene la posición actual del usuario
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var startMarker = L.marker([lat, lon], {
          title: "Tu ubicación actual",
        }).addTo(map);
        var control = L.Routing.control({
          waypoints: [
            L.latLng(startMarker.getLatLng()),
            L.latLng(endMarker.getLatLng()),
          ],
        }).addTo(map);
      },
      function (error) {
        // Ocurrió un error al obtener la geolocalización
        console.error("Error al obtener la geolocalización: " + error.message);
      }
    );
  } else {
    // El navegador no soporta geolocalización
    console.error("Geolocalización no soportada por este navegador");
  }
}

function initMap2() {
  var map = L.map("map").setView([39.639482525079316, 2.9700955197758736], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  for (let i = 0; i < json.itemListElement.length; i++) {
    var marcador = L.marker(
      [
        json.itemListElement[i].geo.latitude,
        json.itemListElement[i].geo.longitude,
      ],
      { title: "Bodegas " + json.itemListElement[i].name }
    ).addTo(map);
    marcador.on("click", function (e) {
      infoMapa(i);
    });
  }
}

//funcionalidad establecimientos cercanos

//fórmula de Haversine para calcular la distancia entre dos coordenadas geográficas en kilómetros:

function calcularDistancia(lat1, lon1, lat2, lon2) {
  const radioTierra = 6371; // Radio de la Tierra en kilómetros

  // Convertir las coordenadas a radianes
  const radianesLat1 = degToRad(lat1);
  const radianesLon1 = degToRad(lon1);
  const radianesLat2 = degToRad(lat2);
  const radianesLon2 = degToRad(lon2);

  // Diferencias de latitud y longitud
  const diferenciaLat = radianesLat2 - radianesLat1;
  const diferenciaLon = radianesLon2 - radianesLon1;

  // Calcular la distancia utilizando la fórmula de Haversine
  const a =
    Math.sin(diferenciaLat / 2) * Math.sin(diferenciaLat / 2) +
    Math.cos(radianesLat1) *
      Math.cos(radianesLat2) *
      Math.sin(diferenciaLon / 2) *
      Math.sin(diferenciaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancia = radioTierra * c;

  return distancia;
}

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}
//En este código, lat1 y lon1 son las coordenadas de latitud y longitud del primer punto, y lat2 y lon2 son las coordenadas de latitud y
//longitud del segundo punto. El método realiza los cálculos necesarios utilizando la fórmula de Haversine y devuelve la distancia resultante en kilómetros.

function establecimientoMasCercano(establecimiento, idBodega) {
  var posResult = 0;
  var distancia = calcularDistancia(
    json.itemListElement[idBodega].geo.latitude,
    json.itemListElement[idBodega].geo.longitude,
    establecimiento.itemListElement[posResult].geo.latitude,
    establecimiento.itemListElement[posResult].geo.longitude
  );

  for (let i = 1; i < establecimiento.itemListElement.length; i++) {
    var distanciaAux = calcularDistancia(
      json.itemListElement[idBodega].geo.latitude,
      json.itemListElement[idBodega].geo.longitude,
      establecimiento.itemListElement[i].geo.latitude,
      establecimiento.itemListElement[i].geo.longitude
    );

    if (distancia > distanciaAux) {
      posResult = i;
      distancia = distanciaAux;
    }
  }
  return establecimiento.itemListElement[posResult];
}

var expanded = false;

//comentarios
function añadirComentario(autor, texto, nota, bodegaId) {
  // Objeto JSON a añadir
  var jsonData = {
    author: autor,
    text: texto,
    rate: nota,
  };

  jsonC[bodegaId].comentarios.push(jsonData);
  // Convertir el objeto JSON en una cadena
  var jsonString = JSON.stringify(jsonC);

  // Realizar la solicitud POST al archivo PHP
  fetch("php/addComentario.php", {
    method: "POST",
    body: jsonString,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      alert(data); // Muestra la respuesta del servidor en la consola
    });
}

//grafico

function createGrafico(){
  var num = [0,0,0,0,0];
  for(let i = 0; i < jsonC.length; i++){
    num[calcularMedia(i)]++;
  }
  grafico(num);
}

function calcularMedia(bod){
  var result = 0;
  for(let i = 0; i < jsonC[bod].comentarios.length; i++){
    result =+ jsonC[bod].comentarios[i].rate;
  }
  return (result/jsonC[bod].comentarios.length).toFixed() > 0 ? (result/jsonC[bod].comentarios.length) .toFixed() - 1 : 0;
}

function grafico(num) {
  // Datos del gráfico de barras
  const data = [
    { label: "A", value: num[0] },
    { label: "B", value: num[1] },
    { label: "C", value: num[2] },
    { label: "D", value: num[3] },
    { label: "E", value: num[4] },
  ];

  // Dimensiones del gráfico
  const width = 300;
  const height = 300;
  const heightReal = 350;
  const margin = 20; // Margen entre las barras y los ejes

  // Escala para el eje Y
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([heightReal - margin, margin]);

  // Crear el contenedor SVG
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width + 10)
    .attr("height", heightReal);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  // Agregar barras de datos
  const bars = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d, i) => i * (width / data.length))
    .attr("y", (d) => yScale(d.value))
    .attr("width", width / data.length - 5)
    .attr("height", (d) => height - yScale(d.value) + 15)
    .attr("fill", (d, i) => colorScale(i));

  // Agregar etiquetas de texto
  svg
    .selectAll(".text")
    .data(data)
    .enter()
    .append("text")
    .text((d) => d.value)
    .attr("class", "text")
    .attr("x", (d, i) => (i + 0.5) * (width / data.length))
    .attr("y", (d) => yScale(d.value) - 5)
    .attr("text-anchor", "middle");

  // Agregar texto de estrellas
  svg
    .selectAll(".star-text")
    .data(data)
    .enter()
    .append("text")
    .text((d, i) => {
      const starCount = i + 1;
      return `${starCount} estrella${starCount !== 1 ? "s" : ""}`;
    })
    .attr("class", "star-text")
    .attr("x", (d, i) => (i + 0.5) * (width / data.length + 72))
    .attr("y", 325)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle");

  // Ajustar posición del texto de estrellas
  const starTexts = svg.selectAll(".star-text");
  starTexts.each(function (d, i) {
    const textWidth = this.getBBox().width;
    const barWidth = (width - 2 * margin) / data.length;
    const xPosition = (i + 0.8) * (barWidth + 10) - textWidth / 2;
    d3.select(this).attr("x", xPosition);
  });
}

