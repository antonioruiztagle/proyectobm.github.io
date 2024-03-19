// scripts.js
document.getElementById('formEvento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const tipoEvento = document.getElementById('tipoEvento').value;
    const cantidadMozas = document.getElementById('cantidadMozas').value;

    // Aquí podrías utilizar una API o una base de datos para obtener las mozas disponibles
    // Por ahora, simularemos datos estáticos
    const mozasDisponibles = [
        { nombre: 'Juanita Smythe', edad: 25, calificacion: 4.8, imagen: 'juanita.jpeg', disponibilidad: 'Disponible los fines de semana' },
        { nombre: 'Ignacia Smythe', edad: 27, calificacion: 4.5, imagen: 'ignacia.jpeg', disponibilidad: 'Disponible cualquier día' },
        // Agrega más datos de mozas disponibles según sea necesario
    ];

    const mozasHTML = mozasDisponibles.map(moza => `
        <div class="moza">
            <img src="${moza.imagen}" alt="${moza.nombre}">
            <h3>${moza.nombre}</h3>
            <p>Edad: ${moza.edad}</p>
            <p>Calificación: ${moza.calificacion}</p>
            <p>Disponibilidad: ${moza.disponibilidad}</p>
        </div>
    `).join('');

    document.getElementById('mozas').innerHTML = mozasHTML;
});
