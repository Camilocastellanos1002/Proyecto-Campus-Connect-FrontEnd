document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo
    const asignaturas = [
        { nombre: "Álgebra", codigo: "MAT101", descripcion: "Asignatura de Álgebra" },
        { nombre: "Mecánica", codigo: "FIS101", descripcion: "Asignatura de Mecánica" }
    ];

    const actividades = [
        { tipo: "Tarea", fechaEntrega: "2024-06-01", ponderacion: "20%" },
        { tipo: "Examen", fechaEntrega: "2024-06-15", ponderacion: "50%" }
    ];

    const calificaciones = [
        { actividad: "Tarea 1", calificacion: "90" },
        { actividad: "Examen Parcial", calificacion: "85" }
    ];

    const horario = [
        { asignatura: "Álgebra", dia: "Lunes", hora: "10:00 - 12:00", aula: "A101" },
        { asignatura: "Mecánica", dia: "Martes", hora: "14:00 - 16:00", aula: "A102" }
    ];

    const grupo = { nombre: "Grupo 1", integrantes: ["Juan Perez", "Maria Lopez"] };

    const profesorGrupo = { nombre: "Dr. Smith", email: "smith@example.com", horarioAtencion: "Miércoles 10:00 - 12:00" };

    const profesoresAsignaturas = [
        { asignatura: "Álgebra", nombre: "Dr. Johnson", email: "johnson@example.com", horarioAtencion: "Lunes 12:00 - 14:00" },
        { asignatura: "Mecánica", nombre: "Dr. Brown", email: "brown@example.com", horarioAtencion: "Martes 16:00 - 18:00" }
    ];

    const notificaciones = [
        { asunto: "Nueva Tarea", mensaje: "Se ha asignado una nueva tarea en Álgebra." }
    ];

    const contenidoAdicional = [
        { asignatura: "Álgebra", tipo: "Apuntes", titulo: "Apuntes de la primera semana", enlace: "#" },
        { asignatura: "Mecánica", tipo: "Presentación", titulo: "Presentación sobre Dinámica", enlace: "#" }
    ];

    const calendario = [
        { evento: "Examen Álgebra", fecha: "2024-06-01", descripcion: "Examen final de Álgebra" },
        { evento: "Examen Mecánica", fecha: "2024-06-15", descripcion: "Examen final de Mecánica" }
    ];

    const emociones = [];

    // Renderizar datos
    function renderAsignaturas() {
        const contenedor = document.getElementById('asignaturasCursadas');
        asignaturas.forEach(asignatura => {
            contenedor.innerHTML += `<p>${asignatura.nombre} (${asignatura.codigo}): ${asignatura.descripcion}</p>`;
        });
    }

    function renderActividades() {
        const contenedor = document.getElementById('actividades');
        actividades.forEach(actividad => {
            contenedor.innerHTML += `<p>${actividad.tipo} - Fecha de Entrega: ${actividad.fechaEntrega} - Ponderación: ${actividad.ponderacion}</p>`;
        });
    }

    function renderCalificaciones() {
        const contenedor = document.getElementById('calificaciones');
        calificaciones.forEach(calificacion => {
            contenedor.innerHTML += `<p>${calificacion.actividad}: ${calificacion.calificacion}</p>`;
        });
    }

    function renderHorario() {
        const contenedor = document.getElementById('horarioAsignaturas');
        horario.forEach(hora => {
            contenedor.innerHTML += `<p>${hora.asignatura} - ${hora.dia} ${hora.hora} - Aula: ${hora.aula}</p>`;
        });
    }

    function renderGrupo() {
        const contenedor = document.getElementById('grupo');
        contenedor.innerHTML = `<p>${grupo.nombre} - Integrantes: ${grupo.integrantes.join(', ')}</p>`;
    }

    function renderProfesorGrupo() {
        const contenedor = document.getElementById('profesorGrupo');
        contenedor.innerHTML = `<p>${profesorGrupo.nombre} - Email: ${profesorGrupo.email} - Horario de Atención: ${profesorGrupo.horarioAtencion}</p>`;
    }

    function renderProfesoresAsignaturas() {
        const contenedor = document.getElementById('profesoresAsignaturas');
        profesoresAsignaturas.forEach(profesor => {
            contenedor.innerHTML += `<p>${profesor.asignatura}: ${profesor.nombre} - Email: ${profesor.email} - Horario de Atención: ${profesor.horarioAtencion}</p>`;
        });
    }

    function renderNotificaciones() {
        const contenedor = document.getElementById('notificaciones');
        notificaciones.forEach(notificacion => {
            contenedor.innerHTML += `<p>${notificacion.asunto}: ${notificacion.mensaje}</p>`;
        });
    }

    function renderContenidoAdicional() {
        const contenedor = document.getElementById('contenidoAdicional');
        contenidoAdicional.forEach(contenido => {
            contenedor.innerHTML += `<p>${contenido.asignatura} - ${contenido.tipo}: <a href="${contenido.enlace}">${contenido.titulo}</a></p>`;
        });
    }

    function renderCalendario() {
        const contenedor = document.getElementById('calendarioAcademico');
        calendario.forEach(evento => {
            contenedor.innerHTML += `<p>${evento.evento} - Fecha: ${evento.fecha} - Descripción: ${evento.descripcion}</p>`;
        });
    }

    function renderHistorialEmociones() {
        const contenedor = document.getElementById('historialEmociones');
        emociones.forEach(emocion => {
            contenedor.innerHTML += `<p>${emocion.fecha}: ${emocion.estado} - ${emocion.comentarios}</p>`;
        });
    }

    // Registrar eventos
    document.getElementById('mensajeForm').onsubmit = function (event) {
        event.preventDefault();
        alert('Mensaje enviado');
        // Aquí se añadiría la lógica para enviar el mensaje al servidor
    };

    document.getElementById('emocionesForm').onsubmit = function (event) {
        event.preventDefault();
        const estado = document.getElementById('estadoAnimo').value;
        const comentarios = document.getElementById('comentarios').value;
        const fecha = new Date().toLocaleDateString();
        emociones.push({ fecha, estado, comentarios });
        renderHistorialEmociones();
    };

    // Inicializar vista
    renderAsignaturas();
    renderActividades();
    renderCalificaciones();
    renderHorario();
    renderGrupo();
    renderProfesorGrupo();
    renderProfesoresAsignaturas();
    renderNotificaciones();
    renderContenidoAdicional();
    renderCalendario();
    renderHistorialEmociones();
});
