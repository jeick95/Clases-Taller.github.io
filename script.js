document.getElementById('btnInicio').addEventListener('click', function() {
    document.getElementById('inicio').classList.add('contenido-activo');
    document.getElementById('trabajos').classList.remove('contenido-activo');
});

document.getElementById('btnTrabajos').addEventListener('click', function() {
    document.getElementById('trabajos').classList.add('contenido-activo');
    document.getElementById('inicio').classList.remove('contenido-activo');
});
