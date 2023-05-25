<?php
  // Obtener el JSON enviado desde JavaScript
  $jsonString = file_get_contents('php://input');

  // Convertir la cadena JSON en un objeto JSON
  $jsonData = json_decode($jsonString);

  // Directorio de destino para guardar el archivo JSON
  $directorio = '/json';

  // Nombre de archivo para el JSON
  $nombreArchivo = 'comentarios.json';

  // Ruta completa del archivo
  $rutaArchivo = $directorio . $nombreArchivo;

  // Guardar el archivo JSON en el directorio
  $resultado = file_put_contents($rutaArchivo, $jsonString);

  if ($resultado !== false) {
    echo 'Archivo JSON guardado correctamente.';
  } else {
    echo 'Error al guardar el archivo JSON.';
  }
?>