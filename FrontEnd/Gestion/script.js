document.addEventListener("DOMContentLoaded", function() {
    // Elementos del DOM
    const usuarioTableBody = document.getElementById("usuarioTableBody");
    const grupoTableBody = document.getElementById("grupoTableBody");
    const claseTableBody = document.getElementById("claseTableBody");
    const asignaturaTableBody = document.getElementById("asignaturaTableBody");
    const eventoTableBody = document.getElementById("eventoTableBody");
    const asistenciaTableBody = document.getElementById("asistenciaTableBody");
    const buscarUsuario = document.getElementById("buscarUsuario");

    // Formularios
    const usuarioForm = document.getElementById("usuarioForm");
    const grupoForm = document.getElementById("grupoForm");
    const claseForm = document.getElementById("claseForm");
    const asignaturaForm = document.getElementById("asignaturaForm");
    const eventoForm = document.getElementById("eventoForm");

    // Datos
    let usuarios = [];
    let grupos = [];
    let clases = [];
    let asignaturas = [];
    let eventos = [];
    let asistencias = [];

    // Función para renderizar tablas
    function renderTable(data, tbody, customRow) {
        tbody.innerHTML = '';
        data.forEach((item, index) => {
            const row = customRow(item, index);
            tbody.innerHTML += row;
        });
    }

    // Función para renderizar la tabla de usuarios
    function renderUsuariosTable() {
        const filteredUsuarios = usuarios.filter(user => 
            user.nombre.toLowerCase().includes(buscarUsuario.value.toLowerCase()) ||
            user.email.toLowerCase().includes(buscarUsuario.value.toLowerCase()) ||
            user.rol.toLowerCase().includes(buscarUsuario.value.toLowerCase())
        );
        renderTable(filteredUsuarios, usuarioTableBody, (user, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${user.nombre}</td>
                <td>${user.email}</td>
                <td>${user.rol}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editUsuario(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUsuario(${index})">Eliminar</button>
                </td>
            </tr>
        `);
    }

    // Función para renderizar la tabla de grupos
    function renderGruposTable() {
        renderTable(grupos, grupoTableBody, (grupo, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${grupo.nombre}</td>
                <td>${grupo.descripcion}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editGrupo(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteGrupo(${index})">Eliminar</button>
                </td>
            </tr>
        `);
    }

    // Función para renderizar la tabla de clases
    function renderClasesTable() {
        renderTable(clases, claseTableBody, (clase, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${clase.nombre}</td>
                <td>${clase.descripcion}</td>
                <td>${clase.horario}</td>
                <td>${clase.profesor}</td>
                <td>${clase.grupo}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editClase(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteClase(${index})">Eliminar</button>
                </td>
            </tr>
        `);
    }

    // Función para renderizar la tabla de asignaturas
    function renderAsignaturasTable() {
        renderTable(asignaturas, asignaturaTableBody, (asignatura, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${asignatura.nombre}</td>
                <td>${asignatura.codigo}</td>
                <td>${asignatura.descripcion}</td>
                <td>${asignatura.profesor}</td>
                <td>${asignatura.clase}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editAsignatura(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteAsignatura(${index})">Eliminar</button>
                </td>
            </tr>
        `);
    }

    // Función para renderizar la tabla de eventos
    function renderEventosTable() {
        renderTable(eventos, eventoTableBody, (evento, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${evento.nombre}</td>
                <td>${evento.descripcion}</td>
                <td>${evento.fecha}</td>
                <td>${evento.hora}</td>
                <td>${evento.lugar}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editEvento(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteEvento(${index})">Eliminar</button>
                </td>
            </tr>
        `);
    }

    // Función para renderizar la tabla de asistencia
    function renderAsistenciaTable() {
        renderTable(asistencias, asistenciaTableBody, (asistencia, index) => `
            <tr>
                <td>${asistencia.estudianteId}</td>
                <td>${asistencia.estudianteNombre}</td>
                <td>${asistencia.clase}</td>
                <td>
                    <input type="checkbox" ${asistencia.asistencia ? 'checked' : ''} onclick="toggleAsistencia(${index})">
                </td>
            </tr>
        `);
    }

    // Agregar usuario
    usuarioForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUser = {
            nombre: document.getElementById("usuarioNombre").value,
            email: document.getElementById("usuarioEmail").value,
            rol: document.getElementById("usuarioRol").value
        };
        usuarios.push(newUser);
        renderUsuariosTable();
        $('#usuarioModal').modal('hide');
        usuarioForm.reset();
    });

    // Agregar grupo
    grupoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newGrupo = {
            nombre: document.getElementById("grupoNombre").value,
            descripcion: document.getElementById("grupoDescripcion").value
        };
        grupos.push(newGrupo);
        renderGruposTable();
        $('#grupoModal').modal('hide');
        grupoForm.reset();
    });

    // Agregar clase
    claseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newClase = {
            nombre: document.getElementById("claseNombre").value,
            descripcion: document.getElementById("claseDescripcion").value,
            horario: document.getElementById("claseHorario").value,
            profesor: document.getElementById("claseProfesor").value,
            grupo: document.getElementById("claseGrupo").value
        };
        clases.push(newClase);
        renderClasesTable();
        $('#claseModal').modal('hide');
        claseForm.reset();
    });

    // Agregar asignatura
    asignaturaForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newAsignatura = {
            nombre: document.getElementById("asignaturaNombre").value,
            codigo: document.getElementById("asignaturaCodigo").value,
            descripcion: document.getElementById("asignaturaDescripcion").value,
            profesor: document.getElementById("asignaturaProfesor").value,
            clase: document.getElementById("asignaturaClase").value
        };
        asignaturas.push(newAsignatura);
        renderAsignaturasTable();
        $('#asignaturaModal').modal('hide');
        asignaturaForm.reset();
    });

    // Agregar evento
    eventoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newEvento = {
            nombre: document.getElementById("eventoNombre").value,
            descripcion: document.getElementById("eventoDescripcion").value,
            fecha: document.getElementById("eventoFecha").value,
            hora: document.getElementById("eventoHora").value,
            lugar: document.getElementById("eventoLugar").value
        };
        eventos.push(newEvento);
        renderEventosTable();
        $('#eventoModal').modal('hide');
        eventoForm.reset();
    });

    // Buscar usuario
    buscarUsuario.addEventListener("input", renderUsuariosTable);

    // Función para editar un usuario
    window.editUsuario = function(index) {
        const user = usuarios[index];
        document.getElementById("usuarioNombre").value = user.nombre;
        document.getElementById("usuarioEmail").value = user.email;
        document.getElementById("usuarioRol").value = user.rol;
        $('#usuarioModal').modal('show');
        usuarioForm.onsubmit = function(event) {
            event.preventDefault();
            user.nombre = document.getElementById("usuarioNombre").value;
            user.email = document.getElementById("usuarioEmail").value;
            user.rol = document.getElementById("usuarioRol").value;
            renderUsuariosTable();
            $('#usuarioModal').modal('hide');
            usuarioForm.onsubmit = addUsuario;
            usuarioForm.reset();
        };
    };

    // Función para eliminar un usuario (baja lógica)
    window.deleteUsuario = function(index) {
        usuarios[index].deleted = true;
        renderUsuariosTable();
    };

    // Función para editar un grupo
    window.editGrupo = function(index) {
        const grupo = grupos[index];
        document.getElementById("grupoNombre").value = grupo.nombre;
        document.getElementById("grupoDescripcion").value = grupo.descripcion;
        $('#grupoModal').modal('show');
        grupoForm.onsubmit = function(event) {
            event.preventDefault();
            grupo.nombre = document.getElementById("grupoNombre").value;
            grupo.descripcion = document.getElementById("grupoDescripcion").value;
            renderGruposTable();
            $('#grupoModal').modal('hide');
            grupoForm.onsubmit = addGrupo;
            grupoForm.reset();
        };
    };

    // Función para eliminar un grupo (baja lógica)
    window.deleteGrupo = function(index) {
        grupos[index].deleted = true;
        renderGruposTable();
    };

    // Función para editar una clase
    window.editClase = function(index) {
        const clase = clases[index];
        document.getElementById("claseNombre").value = clase.nombre;
        document.getElementById("claseDescripcion").value = clase.descripcion;
        document.getElementById("claseHorario").value = clase.horario;
        document.getElementById("claseProfesor").value = clase.profesor;
        document.getElementById("claseGrupo").value = clase.grupo;
        $('#claseModal').modal('show');
        claseForm.onsubmit = function(event) {
            event.preventDefault();
            clase.nombre = document.getElementById("claseNombre").value;
            clase.descripcion = document.getElementById("claseDescripcion").value;
            clase.horario = document.getElementById("claseHorario").value;
            clase.profesor = document.getElementById("claseProfesor").value;
            clase.grupo = document.getElementById("claseGrupo").value;
            renderClasesTable();
            $('#claseModal').modal('hide');
            claseForm.onsubmit = addClase;
            claseForm.reset();
        };
    };

    // Función para eliminar una clase (baja lógica)
    window.deleteClase = function(index) {
        clases[index].deleted = true;
        renderClasesTable();
    };

    // Función para editar una asignatura
    window.editAsignatura = function(index) {
        const asignatura = asignaturas[index];
        document.getElementById("asignaturaNombre").value = asignatura.nombre;
        document.getElementById("asignaturaCodigo").value = asignatura.codigo;
        document.getElementById("asignaturaDescripcion").value = asignatura.descripcion;
        document.getElementById("asignaturaProfesor").value = asignatura.profesor;
        document.getElementById("asignaturaClase").value = asignatura.clase;
        $('#asignaturaModal').modal('show');
        asignaturaForm.onsubmit = function(event) {
            event.preventDefault();
            asignatura.nombre = document.getElementById("asignaturaNombre").value;
            asignatura.codigo = document.getElementById("asignaturaCodigo").value;
            asignatura.descripcion = document.getElementById("asignaturaDescripcion").value;
            asignatura.profesor = document.getElementById("asignaturaProfesor").value;
            asignatura.clase = document.getElementById("asignaturaClase").value;
            renderAsignaturasTable();
            $('#asignaturaModal').modal('hide');
            asignaturaForm.onsubmit = addAsignatura;
            asignaturaForm.reset();
        };
    };

    // Función para eliminar una asignatura (baja lógica)
    window.deleteAsignatura = function(index) {
        asignaturas[index].deleted = true;
        renderAsignaturasTable();
    };

    // Función para editar un evento
    window.editEvento = function(index) {
        const evento = eventos[index];
        document.getElementById("eventoNombre").value = evento.nombre;
        document.getElementById("eventoDescripcion").value = evento.descripcion;
        document.getElementById("eventoFecha").value = evento.fecha;
        document.getElementById("eventoHora").value = evento.hora;
        document.getElementById("eventoLugar").value = evento.lugar;
        $('#eventoModal').modal('show');
        eventoForm.onsubmit = function(event) {
            event.preventDefault();
            evento.nombre = document.getElementById("eventoNombre").value;
            evento.descripcion = document.getElementById("eventoDescripcion").value;
            evento.fecha = document.getElementById("eventoFecha").value;
            evento.hora = document.getElementById("eventoHora").value;
            evento.lugar = document.getElementById("eventoLugar").value;
            renderEventosTable();
            $('#eventoModal').modal('hide');
            eventoForm.onsubmit = addEvento;
            eventoForm.reset();
        };
    };

    // Función para eliminar un evento (baja lógica)
    window.deleteEvento = function(index) {
        eventos[index].deleted = true;
        renderEventosTable();
    };

    // Función para alternar la asistencia
    window.toggleAsistencia = function(index) {
        asistencias[index].asistencia = !asistencias[index].asistencia;
        renderAsistenciaTable();
    };

    // Cargar datos iniciales (dummy)
    usuarios = [
        { nombre: "Juan Perez", email: "juan@example.com", rol: "Estudiante" },
        { nombre: "Maria Lopez", email: "maria@example.com", rol: "Profesor" }
    ];

    grupos = [
        { nombre: "Grupo 1", descripcion: "Descripción del Grupo 1" },
        { nombre: "Grupo 2", descripcion: "Descripción del Grupo 2" }
    ];

    clases = [
        { nombre: "Matemáticas", descripcion: "Clase de Matemáticas", horario: "Lunes 10:00 - 12:00", profesor: "Maria Lopez", grupo: "Grupo 1" },
        { nombre: "Física", descripcion: "Clase de Física", horario: "Martes 14:00 - 16:00", profesor: "Maria Lopez", grupo: "Grupo 2" }
    ];

    asignaturas = [
        { nombre: "Álgebra", codigo: "MAT101", descripcion: "Asignatura de Álgebra", profesor: "Maria Lopez", clase: "Matemáticas" },
        { nombre: "Mecánica", codigo: "FIS101", descripcion: "Asignatura de Mecánica", profesor: "Maria Lopez", clase: "Física" }
    ];

    eventos = [
        { nombre: "Examen Matemáticas", descripcion: "Examen final de Matemáticas", fecha: "2024-06-01", hora: "10:00", lugar: "Aula 101" },
        { nombre: "Examen Física", descripcion: "Examen final de Física", fecha: "2024-06-02", hora: "14:00", lugar: "Aula 102" }
    ];

    asistencias = [
        { estudianteId: "1", estudianteNombre: "Juan Perez", clase: "Matemáticas", asistencia: true },
        { estudianteId: "2", estudianteNombre: "Maria Lopez", clase: "Física", asistencia: false }
    ];

    // Renderizar tablas iniciales
    renderUsuariosTable();
    renderGruposTable();
    renderClasesTable();
    renderAsignaturasTable();
    renderEventosTable();
    renderAsistenciaTable();
});
