document.addEventListener('DOMContentLoaded', function() {
    // Obtén las referencias a las secciones y enlaces de navegación
    const seccion1 = document.getElementById('seccion1');
    const seccion2 = document.getElementById('seccion2');
    const seccion3 = document.getElementById('seccion3');
    
    const enlaceSeccion1 = document.querySelector('a[href="#seccion1"]');
    const enlaceSeccion2 = document.querySelector('a[href="#seccion2"]');
    const enlaceSeccion3 = document.querySelector('a[href="#seccion3"]');

    // Función para mostrar una sección y ocultar las demás
    function mostrarSeccion(seccion) {
        seccion1.style.display = 'none';
        seccion2.style.display = 'none';
        seccion3.style.display = 'none';

        seccion.style.display = 'block';
    }

    // Asigna eventos de clic a los enlaces de navegación
    enlaceSeccion1.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarSeccion(seccion1);
    });

    enlaceSeccion2.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarSeccion(seccion2);
    });

    enlaceSeccion3.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarSeccion(seccion3);
    });
});
