import { calendario } from "./calendario.js";
import { despliegueFooter } from "./footer.js";
import { quienes } from "./quienesSomos.js";
function logIn(despegableContent){

    const bot1 = document.querySelector('.boton_despegable1');
    despegableContent[0].forEach((log)=>{
        const logHtml1 =document.createElement('section');
        const {icon}=log
        logHtml1.innerHTML=`
            ${icon}
        `;
        bot1.appendChild(logHtml1);
    })
    const In = document.querySelector('.despegable-content');
    despegableContent[1].forEach((log)=>{
        const logHtml =document.createElement('section');
        const {ref,title}=log
        logHtml.innerHTML=`
            <a href="${ref}">${title}</a>
        `;
      In.appendChild(logHtml);
    })
    In.children[1].style.display="none";
    In.children[2].style.display="none";
    In.children[3].style.display="none";


    const bot2 = document.querySelector('.boton_despegable2');
    despegableContent[2].forEach((log)=>{
        const logHtml2 =document.createElement('section');
        const {icon}=log
        logHtml2.innerHTML=`
            ${icon}
        `;
        bot2.appendChild(logHtml2);
    })

    const bot3 = document.querySelector('.boton_despegable3');
    despegableContent[3].forEach((log)=>{
        const logHtml3 =document.createElement('section');
        const {icon}=log
        logHtml3.innerHTML=`
            ${icon}
        `;
        bot3.appendChild(logHtml3);
    })
};

function ElMenu(barraMenu){

    const menu = document.querySelector('.barra_menu');

    barraMenu.forEach((mimenu)=>{
        const menuHtml =document.createElement('section');
        const {name,ref,title}=mimenu
        menuHtml.innerHTML=`
            <a class="${name}" href="${ref}">${title}</a>
        `;
      menu.appendChild(menuHtml);
    })

}




function mostrarRecuadrosPublicidad(recuadrosPublicidad){

    const contenedorRecuadros = document.querySelector('.main').children[2];

    recuadrosPublicidad.forEach((recuadro)=>{
        const recuadroHtml =document.createElement('section');
        recuadroHtml.className="recuadro";
        const {image,title,paragraph}=recuadro
        recuadroHtml.innerHTML=`
        <div class="horizontal-card">
        <img class="imager" src="${image}" height="200rem" width="200rem"/>
        <div class="content">
            <div class="title">${title}</div>
            <h2 class="parrafo">${paragraph}</h2>
            </div>
        </div>
        </div>
      `;
      contenedorRecuadros.appendChild(recuadroHtml);
    })
};


function mostrarResumenEventos(noticias){

    const contenedorResumenNoticias = document.querySelector('.despli_info');

    for (let i = 0; i < 2; i++) {
        const {image,title}= noticias[i];
        const noticiasResumenHtml =document.createElement('section');
        noticiasResumenHtml.innerHTML=`
        <div class="evento" style="width:32rem;">
            <section class="imagen_evento">
                <img src="${image}"  height="250" width="250">
            </section>
            <section class="info_evento">
                <h2 class="titulo_evento">${title}</h2>
            </section>
        </div>
        
      `;
        contenedorResumenNoticias.appendChild(noticiasResumenHtml);
    }     
};

function mostrarResumenGaleria(galeria){

    const contenedorResumenImagenes = document.querySelector('.despli_galeria');

    for (let i = 0; i < 3; i++) {
        const {image}= galeria[i];
        const galeriaResumenHtml =document.createElement('iframe');
        galeriaResumenHtml.src=`${image}`;
        galeriaResumenHtml.width="250";
        galeriaResumenHtml.height="250";
        
        contenedorResumenImagenes.appendChild(galeriaResumenHtml);
    }
};

document.addEventListener('DOMContentLoaded',()=>{
    mostrarRecuadrosPublicidad(recuadrosPublicidad);
    mostrarResumenEventos(noticias);
    mostrarResumenGaleria(galeria);
    ElMenu(barraMenu);
    logIn(despegableContent);
    calendario();
    despliegueFooter(footer);
});

