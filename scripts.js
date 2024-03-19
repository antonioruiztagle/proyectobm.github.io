document.getElementById('formEvento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const tipoEvento = document.getElementById('tipoEvento').value;
    const cantidadMozas = document.getElementById('cantidadMozas').value;

    // Aquí podrías utilizar una API o una base de datos para obtener las mozas disponibles
    // Por ahora, simularemos datos estáticos
    const mozasDisponibles = [
        { nombre: 'Juanita Smythe', edad: 25, calificacion: 4.8, imagen: 'juanita.jpeg', disponibilidad: 'Disponible los fines de semana' },
        { nombre: 'Ignacia Smythe', edad: 27, calificacion: 4.5, imagen: 'ignacia.jpeg', disponibilidad: 'Disponible cualquier día' },
        { nombre: 'María González', edad: 23, calificacion: 4.7, imagen: 'maria.jpeg', disponibilidad: 'Disponible los sábados por la tarde' },
        { nombre: 'Carolina Martínez', edad: 29, calificacion: 4.6, imagen: 'carolina.jpeg', disponibilidad: 'Disponible los domingos y feriados' },
        { nombre: 'Ana López', edad: 26, calificacion: 4.9, imagen: 'ana.jpeg', disponibilidad: 'Disponible cualquier día de la semana' },
        { nombre: 'Laura Fernández', edad: 28, calificacion: 4.4, imagen: 'laura.jpeg', disponibilidad: 'Disponible durante las noches' },
        { nombre: 'Elena Ramírez', edad: 24, calificacion: 4.5, imagen: 'elena.jpeg', disponibilidad: 'Disponible los viernes y sábados' },
        { nombre: 'Patricia Díaz', edad: 25, calificacion: 4.8, imagen: 'patricia.jpeg', disponibilidad: 'Disponible los fines de semana' },
        { nombre: 'Sofía Torres', edad: 27, calificacion: 4.3, imagen: 'sofia.jpeg', disponibilidad: 'Disponible cualquier día' },
        { nombre: 'Camila Sánchez', edad: 22, calificacion: 4.6, imagen: 'camila.jpeg', disponibilidad: 'Disponible los sábados por la mañana' },
        { nombre: 'Valentina Gómez', edad: 28, calificacion: 4.7, imagen: 'valentina.jpeg', disponibilidad: 'Disponible los domingos por la tarde' },
        { nombre: 'Lucía Pérez', edad: 26, calificacion: 4.9, imagen: 'lucia.jpeg', disponibilidad: 'Disponible cualquier día de la semana' },
        { nombre: 'Diana Rodríguez', edad: 23, calificacion: 4.4, imagen: 'diana.jpeg', disponibilidad: 'Disponible durante las tardes' },
        { nombre: 'Natalia López', edad: 29, calificacion: 4.5, imagen: 'natalia.jpeg', disponibilidad: 'Disponible los viernes y sábados' },
        // Agrega más datos de mozas disponibles según sea necesario
    ];

    const mozasContainer = document.getElementById('mozasRow');

    // Limpiamos cualquier contenido previo
    mozasContainer.innerHTML = '';

    mozasDisponibles.forEach(moza => {
        // Creamos elementos Bootstrap para mostrar la información de cada moza
        const mozaCard = document.createElement('div');
        mozaCard.classList.add('col-lg-3', 'col-md-4', 'mb-4'); // Ajuste de tamaño para mostrar más mozas por fila

        mozaCard.innerHTML = `
            <div class="card h-100">
                <img src="${moza.imagen}" class="card-img-top" alt="${moza.nombre}" style="height: 200px; object-fit: cover;"> <!-- Ajuste de tamaño de imagen -->
                <div class="card-body">
                    <h5 class="card-title">${moza.nombre}</h5>
                    <p class="card-text">Edad: ${moza.edad}</p>
                    <p class="card-text">Calificación: ${moza.calificacion}</p>
                    <p class="card-text">Disponibilidad: ${moza.disponibilidad}</p>
                </div>
            </div>
        `;

        mozasContainer.appendChild(mozaCard);
    });
});
