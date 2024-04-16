import { despliegueFooter } from "./footer.js";
export function quienes(quienesSomos){

    const quien = document.querySelector('.quienessomos');

    quienesSomos.forEach((qs)=>{
        const quienHtml =document.createElement('section');
        const {clasTitle,clas, title,clasP, paraf}=qs
        quienHtml.innerHTML=`
        <div class="${clasTitle}">
            <h1 class="${clas}">${title}</h1>
            <p class="${clasP}">${paraf}</p>
        </div> 
        `;
        quien.appendChild(quienHtml);
    })
};

document.addEventListener('DOMContentLoaded',()=>{
    quienes(quienesSomos);
    despliegueFooter(footer);
});