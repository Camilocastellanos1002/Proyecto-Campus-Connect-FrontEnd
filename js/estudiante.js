import { calendario } from "./calendario.js";
import { horario } from "./horario.js";   
import { getSubjectsOne, getSubjectsTwo, getSubjectsThree, getSubjectsFour, getSubjectsFive } from "../apiConnection/API.js";

function menuInicioEstudiantes(cajaOpcionesEstudiante){

  const menuInicio = document.querySelector('.caja-opciones');
  const logoE =document.querySelector('.logo');
  const logoBienve= document.querySelector('.titulo');
  const log= document.querySelector('.caja-nombre');
  const miTab = document.querySelector('.info_tab');
  const contentTab = document.querySelector(".contenido_tab");

  /* impresion del nombre en el menu desplegable */
  const nombreUsuario = document.querySelector('.nombre');
  const usuarioObtenido = JSON.parse(localStorage.getItem('usuario'));
  nombreUsuario.textContent = `Hola, ${usuarioObtenido[0].nombre}`;

    cajaOpcionesEstudiante[0].forEach((me)=>{
        const theLogo =document.createElement('section');
        const {logo}=me
        theLogo.innerHTML=`
            ${logo}
        `;
        logoE.appendChild(theLogo);
    })

    cajaOpcionesEstudiante[1].forEach((me)=>{
        const theLogoBien =document.createElement('section');
        const {logoEs}=me
        theLogoBien.innerHTML=`
            ${logoEs}
        `;
        logoBienve.appendChild(theLogoBien);
    })

    cajaOpcionesEstudiante[2].forEach((me)=>{
        const menu =document.createElement('a');
        const {id,titleSection, icono, theTitle}=me
        menu.id =`${id}`;
        menu.innerHTML=`
            <section class="${titleSection}">
                ${icono}
                <h3>${theTitle}</h3>
            </section>
        `;
        menuInicio.appendChild(menu);
        menu.addEventListener('click',async e=>{
            if (menu.id==1){
                miTab.innerHTML=`
                    <section class="notas cajaA">Tus notas</section>
                    <section class="notas cajaA">Tus profesores</section>
                    <section class="ao cajaA">Actividades En-Linea</section>
                    <section class="ac cajaA">Actividades Extracurriculares</section>

                `;
            } else if (menu.id==2){
              miTab.innerHTML = "";
              if (usuarioObtenido[0].nivelAcademico === "primero") {
                e.preventDefault();
                const materias = await getSubjectsOne();
                //console.log(materias);
                materias.forEach(materia => {
                  const subject = document.createElement('a');
                  subject.id = materia.id;
                  subject.type="button"
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);

                  subject.addEventListener('click',e => {
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement('ol');
                    materia.contenido.forEach(content => {
                      contenidoMateria.innerHTML+=`
                      <style>
                      .contenido_tab{
                      background-color: rgb(255, 147, 147)}
                      </style>
                      <li>${content}</li>`;
                    })
                    contentTab.appendChild(contenidoMateria);
                  })
                  miTab.appendChild(contentTab);
                })

              } else if (usuarioObtenido[0].nivelAcademico === "segundo") {
                e.preventDefault();
                const materias = await getSubjectsTwo();
                console.log(materias);
                materias.forEach((materia) => {
                  const subject = document.createElement("a");
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);
                  subject.addEventListener("click", (e) => {
                    console.log(subject.id);
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement("ol");
                    materia.contenido.forEach((content) => {
                      contenidoMateria.innerHTML +=`
                      <style>
                      .contenido_tab{
                      background-color: rgb(255, 147, 147)}
                      </style>
                      <li>${content}</li>`
                    });
                    contentTab.appendChild(contenidoMateria);
                  });
                  miTab.appendChild(contentTab);
                });
              } else if (usuarioObtenido[0].nivelAcademico === "tercero") {
                e.preventDefault();
                const materias = await getSubjectsThree();
                console.log(materias);
                materias.forEach((materia) => {
                  const subject = document.createElement("a");
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);
                  subject.addEventListener("click", (e) => {
                    console.log(subject.id);
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement("ol");
                    materia.contenido.forEach((content) => {
                      contenidoMateria.innerHTML += `<li>${content}</li>`
                    });
                    contentTab.appendChild(contenidoMateria);
                  });
                  miTab.appendChild(contentTab);
                });
              } else if (usuarioObtenido[0].nivelAcademico === "cuarto") {
                e.preventDefault();
                const materias = await getSubjectsFour();
                materias.forEach((materia) => {
                  const subject = document.createElement("a");
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);
                  subject.addEventListener("click", (e) => {
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement("ol");
                    materia.contenido.forEach((content) => {
                      contenidoMateria.innerHTML += `
                      <style>
                      .contenido_tab{
                      background-color: rgb(255, 147, 147)}
                      </style>
                      <li>${content}</li>`
                    });
                    contentTab.appendChild(contenidoMateria);
                  });
                  miTab.appendChild(contentTab);
                });
              } else if (usuarioObtenido[0].nivelAcademico === "quinto") {
                e.preventDefault();
                const materias = await getSubjectsFive();
                console.log(materias);
                materias.forEach((materia) => {
                  const subject = document.createElement("a");
                  subject.className = "materia cajac";
                  subject.textContent = `${materia.materia}`;
                  miTab.appendChild(subject);
                  subject.addEventListener("click", (e) => {
                    console.log(subject.id);
                    contentTab.innerHTML = "";
                    const contenidoMateria = document.createElement("ol");
                    materia.contenido.forEach((content) => {
                      contenidoMateria.innerHTML += 
                      `
                      <style>
                      .contenido_tab{
                      background-color: rgb(255, 147, 147)}
                      </style>
                      <li>${content}</li>`;
                    });
                    contentTab.appendChild(contenidoMateria);
                  });
                  miTab.appendChild(contentTab);
                });
              }
            }else if(menu.id==3){
              miTab.innerHTML = "";
              miTab.innerHTML=
              `
                  <style>
                  .titulo-horario{
                    display:flex;
                    justify-content:center;
                  }
                  #thorario{
                    display:block;
                    width:20rem;
                    height:8rem;
                    margin:5rem;
                  }
                  #horario1{
                    display:block;
                    margin-left: auto;
                    margin-right: auto;

                  }
                  </style> 
                  <div class="titulo-horario">
                  <img src="/images/horario.png" alt="horario" id="thorario">
                  </div>
                  <img src="/images/horario1.jpg" alt="horario" id="horario1" width="600rem" height="350rem" >`;
            }else if(menu.id==4){
              miTab.innerHTML = "";
              miTab.innerHTML=`
                  <section class="santillana cajaA"><a class="santillana" href="https://identity.santillanaconnect.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dneds_client_compartir_colombia_pro%26scope%3Dopenid%2520profile%2520email%2520role%2520external.info%2520neds%252Ffull_access%26state%3DhvStUYOXZk1o90ZlQ-WWCYmATFwq4ssnKr74ReB7Y0Y%253D%26redirect_uri%3Dhttps%253A%252F%252Fedi-compartir-co.stn-neds.com%252Fts%252Flogin%252Foauth2%252Fcode%252Fcompartirco%26code_challenge_method%3DS256%26nonce%3DhwXSF5yru2GqY8z954DUKi49C1mpDpX9eKbTI5ZPYBo%26code_challenge%3Do8sqFkXoxiVGHJk17e4qwpmGKmAmfOCFxS2BdmzYFxE">Santillana</a></section>   
              `; 
            }
            else if(menu.id==5){
              miTab.innerHTML = "";
              miTab.innerHTML=`
                  <section class="videos cajaA"><a class="titulo_video" href="https://www.youtube.com/watch?v=doDviaaHoG0&list=PL6kAhmdEPHEMSDr38CTwAi1Tw-rT_pMRY">Videos de Refuerzo</a></section>
                  <iframe width="560" height="315" class="video" src="https://www.youtube-nocookie.com/embed/7V27anz82zY?si=4HtZj8JNC8Y5z2gM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              `;
            }
            else if(menu.id==6){
              window.location.href="/componentes/inicio_estudiantes/emociones.html"
            }
        })
    })
    
    cajaOpcionesEstudiante[3].forEach((me)=>{
      const logito =document.createElement('section');
      const {theIcon}=me
      logito.innerHTML=`
      <img src="${usuarioObtenido[0].imagen}" class"imagen_titulo" alt="" height="50rem" width="50rem" style="border-radius:3rem" >
    
      `;
      log.appendChild(logito)});
    /*
    const fecha = new Date();
    const miEvent=document.querySelector('.event_box');
    miEvent.innerHTML=`
        <p>${fecha.toDateString()}<br>Evento: </p> 
    `;*/

};

document.addEventListener('DOMContentLoaded',()=>{
    menuInicioEstudiantes(cajaOpcionesEstudiante);
    calendario();
    horario();
});



















