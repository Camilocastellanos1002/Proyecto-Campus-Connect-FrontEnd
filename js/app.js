import { despliegueFooter } from "./footer.js";
function mostrarGaleria(galeria){

    const contenedorImagenes = document.querySelector('.galeria_grid');

    galeria.forEach((img)=>{
        const galeriaHtml =document.createElement('iframe');
        galeriaHtml.src=`${img.image}`;
        galeriaHtml.width="400";
        galeriaHtml.height="350";
        // galeriaHtml.allow="autoplay";
        contenedorImagenes.appendChild(galeriaHtml);
    })
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarGaleria(galeria);
    despliegueFooter(footer);

});