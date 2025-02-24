<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar con Tailwind CSS</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">

<nav class="bg-white p-4">
    <div class="container mx-auto flex justify-between items-center">

        <a href="#" class="text-2xl font-bold text-gray-800">TuLogo</a>

        <div class="flex space-x-6">
            <a href="#" class="text-gray-600 hover:text-gray-800">Inicio</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Funcionalidades</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Beneficios</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Menu Demo</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Reseñas</a>
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Iniciar Sesión
        </button>
    </div>
</nav>

</body>
</html>