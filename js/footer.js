export function despliegueFooter(footer){

    const contenedorFooter = document.querySelector('.pie_de_pagina');

    const contenedorFooterEscudo = document.querySelector('.escudo');


    footer[0].forEach((log)=>{

        const Html1 =document.createElement('section');
        const {image}=log
        Html1.innerHTML=`
            <img src="${image}" alt="" height="200" width="200">

        `;
        contenedorFooterEscudo.appendChild(Html1);
    });

    const contenedorFooterEnlaces = document.querySelector('.enlaces');

    footer[1].forEach((enlace)=>{

        const Html2 =document.createElement('section');
        const {title,content}=enlace
        Html2.innerHTML=`
            <a href="${content}">${title}</a>
        `;
        contenedorFooterEnlaces.appendChild(Html2);

    });
    const contenedorFooterContacto = document.querySelector('.contacto');
    
    footer[2].forEach((info)=>{

        const Html3 =document.createElement('section');
        const {name, icon, value}=info
        Html3.innerHTML=`
            ${icon}<p>${value}</p>
        `;
        contenedorFooterContacto.appendChild(Html3);

    });
    const contenedorFooterRedes = document.querySelector('.redes_sociales');

    footer[3].forEach((red)=>{

        const Html4 =document.createElement('section');
        const {icon,title,value}=red
        Html4.innerHTML=`
            ${icon}
            <a href="${value}">${title}</a>
        `;
        contenedorFooterRedes.appendChild(Html4);

    });
    const contenedorFooterCopyR = document.querySelector('.Copyright');

    footer[4].forEach((c)=>{
        const Html5 =document.createElement('section');
        const {value}=c
        Html5.innerHTML=`
            <section class="Copyright">
                <p>${value}</p>
            </section>
        `;
        contenedorFooterCopyR.appendChild(Html5);
    });
};

