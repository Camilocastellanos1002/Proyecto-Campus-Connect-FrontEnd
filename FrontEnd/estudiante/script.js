document.addEventListener("DOMContentLoaded", function() {
    // Cargar datos
    cargarDatos();
    
    // Enviar mensaje
    document.getElementById('message-form').addEventListener('submit', function(e) {
        e.preventDefault();
        enviarMensaje();
    });

    // Registrar emoción
    document.getElementById('emociones-form').addEventListener('submit', function(e) {
        e.preventDefault();
        registrarEmocion();
    });
});

function cargarDatos() {
    // Asignaturas
    const asignaturas = [
        {nombre: "Matemáticas", codigo: "MAT101", descripcion: "Curso de matemáticas básicas"},
    ];
    const asignaturasList = document.getElementById('asignaturas-list');
    asignaturas.forEach(asignatura => {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${asignatura.nombre} (${asignatura.codigo}): ${asignatura.descripcion}`;
        asignaturasList.appendChild(li);
    });

    //  actividades, calificaciones, horario, etc.
}

function enviarMensaje() {
    const profesor = document.getElementById('profesor-select').value;
    const asunto = document.getElementById('subject').value;
    const mensaje = document.getElementById('message').value;
    alert(`Mensaje enviado a ${profesor} con asunto: ${asunto}`);
}

function registrarEmocion() {
    const emocion = document.getElementById('emocion-select').value;
    const comentarios = document.getElementById('comentarios').value;
    const historial = document.getElementById('emociones-historial');
    let registro = document.createElement('div');
    registro.className = 'alert alert-info';
    registro.textContent = `Emoción: ${emocion}, Comentarios: ${comentarios}`;
    historial.appendChild(registro);
}
