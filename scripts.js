// scripts.js
document.getElementById('formEvento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const tipoEvento = document.getElementById('tipoEvento').value;
    const cantidadMozas = parseInt(document.getElementById('cantidadMozas').value);

    // Simulación de datos estáticos de mozas disponibles
    const mozasDisponibles = [
        { nombre: 'Juanita Smythe', edad: 20, calificacion: 5, imagen: 'juanita.jpeg', disponibilidad: 'Disponible los fines de semana' },
        { nombre: 'Ignacia Smythe', edad: 21, calificacion: 4.5, imagen: 'ignacia.jpeg', disponibilidad: 'Disponible cualquier día' },
        // { nombre: 'Trinidad Correa', edad: 20, calificacion: 4.9, imagen: 'ana.jpg', disponibilidad: 'Disponible los jueves y viernes' },
        // { nombre: 'Blanca Matte', edad: 20, calificacion: 4.9, imagen: 'lucia.jpg', disponibilidad: 'Disponible los sábados por la tarde' },
        // Agrega más datos de mozas disponibles según sea necesario
    ];

    // Filtrar mozas según el tipo de evento
    const mozasFiltradas = mozasDisponibles.filter(moza => {
        // Agrega lógica para filtrar mozas según el tipo de evento si es necesario
        return true; // Por ahora, mostramos todas las mozas disponibles
    });

    // Verificar si hay suficientes mozas disponibles
    if (mozasFiltradas.length >= cantidadMozas) {
        const mozasHTML = mozasFiltradas.slice(0, cantidadMozas).map(moza => `
            <div class="moza">
                <img src="${moza.imagen}" alt="${moza.nombre}">
                <h3>${moza.nombre}</h3>
                <p>Edad: ${moza.edad}</p>
                <p>Calificación: ${moza.calificacion}</p>
                <p>Disponibilidad: ${moza.disponibilidad}</p>
            </div>
        `).join('');

        document.getElementById('mozas').innerHTML = mozasHTML;
    } else {
        // Mostrar un mensaje de error si no hay suficientes mozas disponibles
        document.getElementById('mozas').innerHTML = '<p>No hay suficientes mozas disponibles para este evento.</p>';
    }
});
