import { calendario } from "./calendario.js";
import { getUsuarios } from "../apiConnection/API.js";

function menuInicioProfesores(cajaOpcionesProfesor) {
  const menuInicio = document.querySelector(".caja-opciones");
  const logoE = document.querySelector(".logo");
  const logoBienve = document.querySelector(".titulo");
  const log = document.querySelector(".caja-nombre");
  const miTab = document.querySelector(".info_tab");

  /* impresion del nombre en el menu desplegable */
  const nombreUsuario = document.querySelector(".nombre");
  const usuarioObtenido = JSON.parse(localStorage.getItem("usuario"));
  nombreUsuario.textContent = `Hola, ${usuarioObtenido[0].nombre}`;

  cajaOpcionesProfesor[0].forEach((me) => {
    const theLogo = document.createElement("section");
    const { logo } = me;
    theLogo.innerHTML = `
            ${logo}
        `;
    logoE.appendChild(theLogo);
  });

  cajaOpcionesProfesor[1].forEach((me) => {
    const theLogoBien = document.createElement("section");
    const { logoEs } = me;
    theLogoBien.innerHTML = `
            ${logoEs}
        `;
    logoBienve.appendChild(theLogoBien);
  });

  cajaOpcionesProfesor[2].forEach((me) => {
    const menu = document.createElement("a");
    const { id, titleSection, icono, theTitle } = me;
    menu.id = `${id}`;
    menu.innerHTML = `
            <section class="${titleSection}">
                ${icono}
                <h3>${theTitle}</h3>
            </section>
        `;
    menuInicio.appendChild(menu);
    menu.addEventListener("click", async (e) => {
      if (menu.id == 1) {
        console.log(menu.id);
        miTab.innerHTML = `
                    <section class="notas cajaA">Notas</section>
                    <section class="notas cajaA">Grados a cargo</section>
                    <section class="ao cajaA">Actividades</section>
                `;
      } else if (menu.id == 2) {
        miTab.innerHTML = `
                    <style>
                    #calendar{
                      display: none;
                    }
                    .container_grados{
                      margin: 2rem;
                      display: flex;
                      justify-content: space-around;
                      flex-wrap: wrap;
                    }
                    .asignatura{
                      width: 10rem;
                      text-align: center;
                    }
                    </style>
                    <div class="container_grados">
                    <a type="button" class="grado cajac" id="jardin">Grado Jardin</a>
                    <a type="button" class="grado cajac" id="transcion">Grado Transicion</a>
                    <a type="button" class="grado cajac" id="primero">Grado Primero</a>
                    <a type="button" class="grado cajac" id="segundo">Grado Segundo</a>
                    <a type="button" class="grado cajac" id="tercero">Grado Tercero</a>
                    <a type="button" class="grado cajac" id="cuarto">Grado Cuarto</a>
                    <a type="button" class="grado cajac" id="quinto">Grado Quinto</a>
                    </div>
                `;

        const grados = document.querySelectorAll(".grado");
        grados.forEach((grado) => {
          grado.addEventListener("click", (e) => {
            e.preventDefault();
            miTab.innerHTML = "";
            miTab.innerHTML = `
              <style>
              #calendar{
                display: none;
              }
              .cajab{
                background-color: darkgreen;
                color: white;
                padding: 5rem;
                border-radius: 1rem;
                margin: 1rem;
                cursor: pointer;
                width: 10rem;
                text-align: center;
              }
              .cajab:hover{
                background-color: green;
              }
              .container_asignaturas{
                margin: 2rem;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
              }
              </style>
             <div class="container_asignaturas"> 
              <a type="button" class="materias cajab" id="">Arte</a>
              <a type="button" class="materias cajab" id="ciencias">Ciencias</a>
              <a type="button" class="materias cajab" id="matematicas">Matematicas</a>
              <a type="button" class="materias cajab" id="sociales">Sociales</a>
              <a type="button" class="materias cajab" id="lenguaje">Lenguaje</a>
              <a type="button" class="materias cajab" id="religion">Religion</a>
              <a type="button" class="materias cajab" id="educacionf">Educacion Fisica</a>
              </div>        arte
                        `;
            const subjects = document.querySelectorAll(".materias");
            subjects.forEach((subject) => {
              subject.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("hola");
                miTab.innerHTML = `
                <style>
                #calendar{
                  display: none;
                }
                .formulario{
                  display: flex;
                  wrap: wrap;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  margin: .5rem;
                  font-style: italic;
                }
                #container_form{
                  background-color: beige;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  margin: 3rem 15rem; 
                  gap: 1rem;
                  padding: 2rem;
                  webkit-box-shadow: 0px 0px 10px 0px rgba(0,0.2,0,0.35);
                  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0.2,0,0.35);
                  box-shadow: 0px 0px 10px 0px rgba(0,0.2,0,0.35);
                  wrap: wrap;
                }

                input{
                  width: 20rem;
                  height: 2rem;
                  margin: .5rem;
                  border-radius: .3rem;
                  border-style: none;
                }
                #btn-guardar{
                  background-color: darkred;
                  color: white;
                  padding: .5rem;
                  border-radius: .8rem;
                  border-style: none;
                  cursor: pointer;
                }
               
                </style>
                <div id="container_form">
                  <form class="formulario">
                      <h2>En este espacio podra ingresar las actividades</h2>
                      <input type="hidden" id="userId">
                      <div>
                          <label for="actividad">Actividad</label>
                          <input type="text" id="actividad" placeholder="Descripcion de la actividad" >
                      </div>
                      <div>
                          <label for="userDate">Fecha de entrega</label>
                          <input type="date" id="userDate" placeholder="Ingrese fecha de entrega">
                      </div>
                      <div>
                          <label for="userGrado">Grado</label>
                          <input type="text" id="userGrado" placeholder="Ingrese el grado al cual se asignara la actividad">
                      </div>
                      <button type="submit" id="btn-guardar">Guardar</button>
                  </form>
                  <div>
                  <h2>Actividades asignadas</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Actividad</th>
                                <th>Grado</th>
                                <th>Fecha de entrega</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                        </tbody>
                    </table>
                </div>
                </div>
                
                `;
              });
              const actividad = document.querySelector("#actividad");
              const grado = document.querySelector("#userGrado");
              const userDate = document.querySelector("#userDate");
              const userId = document.querySelector("#userId");
              const form = document.querySelector("#form");
              const tbody = document.querySelector("#tbody");
              // addEventListener para cargar la funcion apenas se inicie el navegador 
              document.addEventListener("DOMContentLoaded", () => {
                  actividad.value = "";
                  grado.value = "";
                  userDate.value = "";
                  userId.value = "";
                  renderActividad();
                });
            });
          });
        });

      } else if (menu.id == 3) {
        console.log(menu.id);
        miTab.innerHTML = `
                    <section class="ah cajaA">Horario</section>
                `;
      } else if (menu.id == 4) {
        console.log(menu.id);
        miTab.innerHTML = `
                    <section class="materia1 cajac">CIENCIAS</section>
                    <section class="materia2 cajac">ETICA</section>
                `;
      } else if (menu.id == 5) {
        console.log(menu.id);
        miTab.innerHTML = `
                    <section class="videos cajaA">Material de clase</section>
                `;
      } else if (menu.id == 6) {
        console.log(menu.id);
        e.preventDefault();
        const usuarios = await getUsuarios();
        const estudiantes = usuarios.filter((usuario) => usuario.rol == "estudiante");
        console.log(estudiantes);
        miTab.innerHTML = "";
        miTab.innerHTML = `
            
                <div class="padre">
                <div class="container-fluid fondo">
                <h2 class="texto-negrita"> Bienvenido al sistema de busqueda de estudiantes</h2>
                  <div class="busqueda">
                    <form class="gx-3 gy-2 align-items-center filasForm">
          
                      <!-- Select Nombres estudiantes -->
                      <div class="col-sm-3">
                        <select class="form-select" id="nombre">
                          <option value="">Seleccione Estudiantes</option>
                        </select>
                      </div>
          
                      <!-- Select Edades -->
                      <div class="col-sm-3">
                        <select class="form-select" id="edad">
                          <option value="">Seleccione Edad</option>
                        </select>
                      </div>
                      <!-- Select notas para seleccionar un grado del estudiante -->
                      <div class="col-sm-3">
                        <select class="form-select" id="nivelAcademico">
                          <option value="">Seleccione grado</option>
                          <option value="jardin">Jardin</option>
                          <option value="transicion">Transicion</option>
                          <option value="primero">Primero A</option>
                          <option value="primero">Primero B</option>
                          <option value="segundo">Segundo A</option>
                          <option value="segundo">Segundo B</option>
                          <option value="tercero">Tercero A</option>
                          <option value="tercero">Tercero B</option>
                          <option value="cuarto">Cuarto</option>
                          <option value="quinto">Quinto</option>
                        </select>
                      </div>
                      </div>
                    </form>                 
                  </div>
                  <input id="buscador" type="text" value="" placeholder="Buscar por el nombre del estudiante: ">
                </div>
                <br><br>
                <div class="contenedor">
                <!-- Parent Principal para los resultados de los filtros -->
                <div class="tarjetas" id="tarjetas">
                </div>
                </div>
                
                </div>
              </div>
                </div>
                `;
        const contenido = document.querySelector(".contenedor");
        // contenido.innerHTML="";

        /*6. selectores */
        const nombreEstudiante = document.querySelector("#nombre");
        const edadEstudiante = document.querySelector("#edad");
        const nivelAcademicoEstudiante = document.querySelector("#nivelAcademico");

        /*1. crear dinamicamente los valores del select con nombres coders */

        estudiantes.forEach((estudiante) => {
          const opcion = document.createElement("option");
          opcion.value = estudiante.nombre;
          opcion.textContent = estudiante.nombre;
          document.querySelector("#nombre").appendChild(opcion);
        });

        /*2. crear dinamicamente el rango de edad de los estudiantes para el select*/
        for (let edad = 0; edad <= 20; edad++) {
          const opcion = document.createElement("option");
          opcion.value = edad;
          opcion.textContent = edad;
          document.querySelector("#edad").appendChild(opcion);
        }

        /*7. event listener para los filtros */
        nombreEstudiante.addEventListener("input", (event) => {
          criteriosSeleccionado.nombre = event.target.value;
          /*8. llamado de funcion de alto nivel */
          filtrar();
        });

        edadEstudiante.addEventListener("input", (event) => {
          criteriosSeleccionado.edad = event.target.value;
          filtrar();
        });

        nivelAcademicoEstudiante.addEventListener("input", (event) => {
          criteriosSeleccionado.nivelAcademico = event.target.value;
          filtrar();
        });


        /*3. event listener DOM */
        document.addEventListener("DOMContentLoaded", () => {
          show(estudiantes);
          console.log(criteriosSeleccionado);
          select();
        });
        /*5. declaracion objeto para criterios de busqueda  */
        const criteriosSeleccionado = {
          nombre: "",
          edad: "",
          nivelAcademico: "",
        };

        /*4. funcion para inyectar directamente al html las cards*/

        function show(estudiantes) {
          /*selector para cards */
          const contenedorTarjetas = document.querySelector("#tarjetas");
          limpiar();
          estudiantes.forEach((estudiante) => {
            /*destructuring */
            const { imagen, nombre, edad, nivelAcademico } = estudiante;
            const estudianteHtml = document.createElement("p");
            estudianteHtml.innerHTML = `
                        <style>
                        #title{
                          font-size: 20px;
                          font-weight: 500;
                          margin-bottom: 25px;
                          text-align: center;
                        }
                        
                        .clearfix:before,
                        .clearfix:after {
                            content: " ";
                            display: table;
                        }
                        .clearfix:after {
                            clear: both;
                        }
                        
                        .card {
                          background-color: #fff;
                          border-radius: 2px;
                          box-shadow: -1px 2px 4px rgba(0,0,0,.25), 1px 1px 3px rgba(0,0,0,.1);
                          margin: 0 auto;
                          max-width: 360px;
                        }
          
                        .card-media {
                          margin: 1rem;
                          align-items: center;
                        }
                        
                        .card-details {
                          padding: 5px 10px;
                        }
                        
                        .card-head {
                          font-weight: 400;
                        }
                        
                        .card-head {
                          font-size: 26px;
                          margin-bottom: 15px;
                        }
                        </style>

                        
                        <div class="card">
                        <img src="${imagen}" class="card-media" width="170rem"/>
                        <div class="card-details">
                          <h2 class="card-head">${nombre}</h2>
                          <p>Grado: ${nivelAcademico}</p>
                          <p>Edad: ${edad}</p>
                        </div>
                        </div>
                                      
                        </div>
                        `;
            contenedorTarjetas.appendChild(estudianteHtml);
          });
        }

        /*8.1 declaracion de funcion de alto nivel */

        function filtrar() {
          const resultado = estudiantes
            .filter(filtrarNombre)
            .filter(filtrarEdad)
            .filter(filtrarGrado)
          console.log(resultado);

          if (resultado.length) {
            show(resultado);
          } else {
            const notFoundHTML = document.createElement("p");
            notFoundHTML.innerHTML = `
                            <img id="notFound" src="img/Not_found.jpg" class="card-img-top">
                            <br>
                            No se encontro el estudiante que buscas
                        `;
            limpiar();
            document.querySelector("#tarjetas").appendChild(notFoundHTML);
          }
        }

        /*8.2 declaracion de funcion filtrarNombre */

        function filtrarNombre(estudiante) {
          if (criteriosSeleccionado.nombre) {
            return estudiante.nombre === criteriosSeleccionado.nombre;
          } else {
            return estudiante;
          }
        }

        function filtrarEdad(estudiante) {
          if (criteriosSeleccionado.edad) {
            return estudiante.edad === Number(criteriosSeleccionado.edad);
          } else {
            return estudiante;
          }
        }
        function filtrarGrado(estudiante) {
          if (criteriosSeleccionado.grado) {
            return estudiante.nivelAcademico == criteriosSeleccionado.nivelAcademico;
          } else {
            return estudiante;
          }
        }

        function limpiar() {
          let m = document.querySelectorAll("p");
          for (let a = 0; a < m.length; a++) {
            m[a].remove();
          }
        }

        /*Sistema de buscador */

        buscador.addEventListener("input", (e) => {
          criteriosSeleccionado.nombre = e.target.value;
          filtrar();
        });
      }
    });
  });

  cajaOpcionesProfesor[3].forEach((me) => {
    const logito = document.createElement("section");
    const { theIcon } = me;
    logito.innerHTML = `
            ${theIcon}
        `;
    log.appendChild(logito);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  menuInicioProfesores(cajaOpcionesProfesor);
  calendario();
});

