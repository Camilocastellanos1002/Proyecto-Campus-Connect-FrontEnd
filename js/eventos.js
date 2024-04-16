import { despliegueFooter } from "./footer.js";
import { getEventos } from "../apiConnection/API.js";

async function mostrarEventos(noticias){

    const contenedorNoticias = document.querySelector('#despli_info');
    const eventos = await getEventos();
    console.log(eventos);

    eventos.forEach((notice)=>{
        const noticiasHtml =document.createElement('section');
        noticiasHtml.innerHTML=
        `
        <div class="evento" style="width:32rem;">
            <img src="${notice.eventUrl}" class="imagen_evento" alt="..." height="250" width="250">
            <div class="info_evento">
                <h2 class="card-title">${notice.eventTitle}</h2>
                <p class="card-text">${notice.eventLocation}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="locutor"><p>${notice.eventStartTime}</p></li>
                <li class="fecha"><p>${notice.eventStartDate}</p></li>
            </ul>
        </div>
        
      `;
        contenedorNoticias.appendChild(noticiasHtml);
        // console.log(contenedorNoticias);
    })
};

document.addEventListener('DOMContentLoaded',()=>{
    mostrarEventos(noticias);
    despliegueFooter(footer);
});


