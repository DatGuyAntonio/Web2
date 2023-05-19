<?php
$servername = "localhost";
$username = "root";
$password = "BIGpopa16";
$database = "venta_playeras";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}

$correo = $_POST['correo_inicio'];
$contrasena = $_POST['contraseña_inicio'];

$query = "SELECT * FROM usuarios WHERE correo = '$correo' AND contraseña = '$contrasena'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    // Credenciales válidas, redireccionar al usuario a la página principal
    header('Location: index.html');
    exit();
} else {
    // Credenciales inválidas, mostrar mensaje de error
    $mensajeError = 'Correo o contraseña no válidos.';
    header('Location: inicio_sesion.html?error=' . urlencode($mensajeError));
    exit();
}

mysqli_close($conn);
?>