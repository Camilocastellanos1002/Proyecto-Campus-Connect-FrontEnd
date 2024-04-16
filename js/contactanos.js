import { despliegueFooter } from "./footer.js";
import { Mensaje } from "./modulos.js";

async function contactanos(){

    const contenedorFormulario = document.querySelector('#mi_formulario');
    const theForm= document.createElement('form');
    theForm.className="formulario";
    theForm.innerHTML=`
        <form class="formulario">
            <p>Tu nombre</p>
            <input id="nombre_mensaje" type="text" name="Tu nombre" placeholder="Escribe tu nombre">
            <p>Tu correo</p>
            <input id="correo_mensaje" type="email" name="Correo" placeholder="Escribe tu correo">
            <p>Dejanos un mensaje</p>
            <input id="el_mensaje" class="input-mensaje" type="text" name="Mensaje" placeholder="Escribe tu mensaje" maxlength="300">
        </form>
        <button id="btn_enviar_mensaje">Envia tu mensaje</button>
    `;
    contenedorFormulario.appendChild(theForm);

    const nombreMensaje = document.querySelector('#nombre_mensaje');
    const correoMensaje = document.querySelector('#correo_mensaje');
    const elMensaje = document.querySelector('#el_mensaje');
    const btnMensaje = document.querySelector('#btn_enviar_mensaje');

    const mensaje = new Mensaje;

    nombreMensaje.addEventListener('input',e=>{
        mensaje.nombre=e.target.value;
    });
    correoMensaje.addEventListener('input',e=>{
        mensaje.correo=e.target.value;
    });
    elMensaje.addEventListener('input',e=>{
        mensaje.mensaje=e.target.value;
    });

    btnMensaje.addEventListener('click',e=>{
        e.preventDefault();
        const mensajeString = JSON.stringify(mensaje)
        localStorage.setItem('mensaje', mensajeString);
        alert('Mensaje Enviado');
        window.location.href="/componentes/contacto/contact.html"
    })

};

document.addEventListener('DOMContentLoaded',()=>{
    contactanos();
    despliegueFooter(footer);
});
