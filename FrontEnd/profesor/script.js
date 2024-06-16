document.addEventListener('DOMContentLoaded', function() {
    const actividades = [
        { id: 1, nombre: 'Tarea 1', descripcion: 'Descripción de la tarea 1', fecha: '2024-05-20' },
        { id: 2, nombre: 'Examen 1', descripcion: 'Descripción del examen 1', fecha: '2024-05-21' }
    ];

    const calificaciones = [
        { id: 1, nombre: 'Estudiante 1', actividad: 'Tarea 1', calificacion: 85 },
        { id: 2, nombre: 'Estudiante 2', actividad: 'Examen 1', calificacion: 90 }
    ];

    const asistencia = [
        { id: 1, nombre: 'Estudiante 1', fecha: '2024-05-20', asistio: true },
        { id: 2, nombre: 'Estudiante 2', fecha: '2024-05-20', asistio: false }
    ];

    function mostrarActividades() {
        const actividadesDiv = document.getElementById('actividades');
        actividadesDiv.innerHTML = '';
        actividades.forEach(actividad => {
            actividadesDiv.innerHTML += `<div class="card my-2">
                <div class="card-body">
                    <h5 class="card-title">${actividad.nombre}</h5>
                    <p class="card-text">${actividad.descripcion}</p>
                    <p class="card-text"><small class="text-muted">${actividad.fecha}</small></p>
                    <button class="btn btn-warning btn-sm" onclick="editarActividad(${actividad.id})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarActividad(${actividad.id})">Eliminar</button>
                </div>
            </div>`;
        });
    }

    function mostrarCalificaciones() {
        const calificacionesDiv = document.getElementById('calificaciones-list');
        calificacionesDiv.innerHTML = '';
        calificaciones.forEach(calificacion => {
            calificacionesDiv.innerHTML += `<div class="card my-2">
                <div class="card-body">
                    <h5 class="card-title">${calificacion.nombre}</h5>
                    <p class="card-text">${calificacion.actividad}</p>
                    <p class="card-text"><small class="text-muted">Calificación: ${calificacion.calificacion}</small></p>
                    <button class="btn btn-warning btn-sm" onclick="editarCalificacion(${calificacion.id})">Editar</button>
                </div>
            </div>`;
        });
    }

    function mostrarAsistencia() {
        const asistenciaDiv = document.getElementById('asistencia-list');
        asistenciaDiv.innerHTML = '';
        asistencia.forEach(registro => {
            asistenciaDiv.innerHTML += `<div class="card my-2">
                <div class="card-body">
                    <h5 class="card-title">${registro.nombre}</h5>
                    <p class="card-text"><small class="text-muted">${registro.fecha}</small></p>
                    <p class="card-text">Asistencia: ${registro.asistio ? 'Sí' : 'No'}</p>
                    <button class="btn btn-warning btn-sm" onclick="editarAsistencia(${registro.id})">Editar</button>
                </div>
            </div>`;
        });
    }

    mostrarActividades();
    mostrarCalificaciones();
    mostrarAsistencia();
});

function crearActividad() {
    const nombre = prompt('Nombre de la actividad:');
    const descripcion = prompt('Descripción de la actividad:');
    const fecha = prompt('Fecha de la actividad (YYYY-MM-DD):');
    
    if (nombre && descripcion && fecha) {
        const nuevaActividad = {
            id: Date.now(),
            nombre: nombre,
            descripcion: descripcion,
            fecha: fecha
        };
        actividades.push(nuevaActividad);
        mostrarActividades();
    }
}

function editarActividad(id) {
    const actividad = actividades.find(act => act.id === id);
    if (actividad) {
        const nombre = prompt('Nombre de la actividad:', actividad.nombre);
        const descripcion = prompt('Descripción de la actividad:', actividad.descripcion);
        const fecha = prompt('Fecha de la actividad (YYYY-MM-DD):', actividad.fecha);

        if (nombre && descripcion && fecha) {
            actividad.nombre = nombre;
            actividad.descripcion = descripcion;
            actividad.fecha = fecha;
            mostrarActividades();
        }
    }
}

function eliminarActividad(id) {
    const index = actividades.findIndex(act => act.id === id);
    if (index !== -1) {
        actividades.splice(index, 1);
        mostrarActividades();
    }
}

function editarCalificacion(id) {
    const calificacion = calificaciones.find(cal => cal.id === id);
    if (calificacion) {
        const nuevaCalificacion = prompt('Calificación:', calificacion.calificacion);
        if (nuevaCalificacion !== null) {
            calificacion.calificacion = Number(nuevaCalificacion);
            mostrarCalificaciones();
        }
    }
}

function editarAsistencia(id) {
    const registro = asistencia.find(asist => asist.id === id);
    if (registro) {
        const nuevaAsistencia = confirm('¿Asistió?');
        registro.asistio = nuevaAsistencia;
        mostrarAsistencia();
    }
}
