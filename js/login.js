/* Importar librerias o modulos */
import { getUsuarios } from "../apiConnection/API.js";
import { Usuario } from "./modulos.js";
import { NewUsuario } from "../apiConnection/API.js";

/* Crear Objeto o instancia de una clase */
const elUsuario = new Usuario;


function botonesIngres(logIn_botones){

    const contenido= document.querySelector('.Log_in');
    const menus= document.querySelector('#contenido');
    


    logIn_botones.forEach(element => {
        const elemtHtml = document.createElement('a');
        elemtHtml.className="boton_login";
        const {id,icon,title}=element
        elemtHtml.id=`${id}`;
        elemtHtml.innerHTML=`
            <a class="botton${id} botton">
                ${icon}
                <p>${title}</p> 
            </a>
        `;
        contenido.appendChild(elemtHtml);
        elemtHtml.addEventListener('click',e=>{
            if (elemtHtml.id==1){
                menus.innerHTML=`
                <style>
                .boton_login{
                    visibility:hidden;
                }
                .usuario{
                    margin-top:-20rem;
                }
                </style>
                    <section class="usuario">
                        <section class="datos">
                            <label><h1>Usuario: </h1> </label>
                            <input id="my_user" type="dato1" placeholder="Ingrese usuario">
                            <label><h1>Contraseña: </h1></label>
                            <input id="my_password" type="dato2" placeholder="Ingrese contraseña">
                            <br>
                            <section class="botones">
                                <a class="botton" href="/componentes/login/log_in.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-lines" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3z" />
                                        <path d="M21 15v-6" />
                                        <path d="M18 15v-6" />
                                    </svg>
                                    Atras
                                </a>
                                <a class="botton" type="button" id="ingresar_mis_datos" href="">
                                    Ingresar
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right-lines" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z" />
                                        <path d="M3 9v6" />
                                        <path d="M6 9v6" />
                                    </svg>
                                </a>
                            </section> 
                        </section>
                    </section>
                `;
                contenido.appendChild(menus);
                const myUser= document.querySelector('#my_user');
                const myPass= document.querySelector('#my_password');
                const loginBtn = document.querySelector('#ingresar_mis_datos');

                myUser.addEventListener('input',e=>{
                    elUsuario.user= e.target.value;
                })
                myPass.addEventListener('input',e=>{
                    elUsuario.contraseña =e.target.value;
                })
                loginBtn.addEventListener('click', async(event)=>{
                  event.preventDefault();
                  const users = await getUsuarios();
                  console.log(users);

                  const user = users.filter(filtrarUsuario).filter(filtrarContraseña)

                  console.log(user);

                  const userString = JSON.stringify(user)
                  localStorage.setItem('usuario', userString);
                  
                  if (user[0].rol === "estudiante") {
                      window.location.href = "/componentes/inicio_estudiantes/sistema_inicio.html"; 
                  }else if (user[0].rol === "docente" || user[0].rol === "profesor" ){
                      window.location.href = "/componentes/inicio_profesores/inicio_profe.html";
                  }else if (user[0].rol === "padre") {
                      window.location.href = "/componentes/inicio_padres/inicio_padres.html";
                  }
                })
                
            }else if(elemtHtml.id==2){

                menus.innerHTML=`
                    <style>
                    .boton_login{
                        visibility:hidden;
                    }
                    .usuario{
                        margin-top:-23rem;
                    }
                    </style>
                    <section class="usuario">
                        <section class="datos">
                            <label><h1>Nombre: </h1> </label>
                            <input id="dato1" placeholder="Ingrese nombre usuario">
                            <label><h1>Correo: </h1></label>
                            <input id="dato2" placeholder="Ingrese correo">
                            <label><h1>Contraseña: </h1></label>
                            <input id="dato3" placeholder="Ingrese contraseña">
                            <label><h1>Usuario: </h1></label>
                            <input id="dato4" placeholder="ingrese nombre.apellido">
                            <label><h1>Edad: </h1></label>
                            <input id="dato5" placeholder="Ingrese edad">
                            <label><h1>Documento: </h1></label>
                            <input id="dato6" placeholder="Ingrese documento">
                            <label><h1>Direccion: </h1></label>
                            <input id="dato7" placeholder="Escriba su direccion">
                            <label><h1>Profesion: </h1></label>
                            <input id="dato8" placeholder="(estudiante, docente o Padre de F.)">
                            <section class="botones">
                                <a class="botton" href="/componentes/login/log_in.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-lines" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3z" />
                                        <path d="M21 15v-6" />
                                        <path d="M18 15v-6" />
                                    </svg>
                                    Atras
                                </a>
                                <a class="botton" type="button" id="ingresar_mis_datos" href="">
                                    Agregar usuario
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right-lines" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z" />
                                        <path d="M3 9v6" />
                                        <path d="M6 9v6" />
                                    </svg>
                                </a>
                            </section> 
                        </section>
                    </section>
                `;
                contenido.appendChild(menus);
                const loginBtn = document.querySelector('#ingresar_mis_datos');

                const theName= document.querySelector('#dato1');
                const theEmail= document.querySelector('#dato2');
                const thePassw= document.querySelector('#dato3');
                const theUser= document.querySelector('#dato4');
                const theAge= document.querySelector('#dato5');
                const theID= document.querySelector('#dato6');
                const theDir= document.querySelector('#dato7');
                const theProf= document.querySelector('#dato8');


                theName.addEventListener('input',e=>{
                    elUsuario.nombre= e.target.value;
                });
                theEmail.addEventListener('input',e=>{
                    elUsuario.correo=e.target.value;
                });
                thePassw.addEventListener('input',e=>{
                    elUsuario.contraseña= e.target.value;
                });
                theUser.addEventListener('input',e=>{
                    elUsuario.user= e.target.value;
                });                
                theAge.addEventListener('input',e=>{
                    elUsuario.edad=e.target.value;
                });
                theID.addEventListener('input',e=>{
                    elUsuario.documento= e.target.value;
                });
                theDir.addEventListener('input',e=>{
                    elUsuario.direccion=e.target.value;
                });
                theProf.addEventListener('input',e=>{
                    elUsuario.profesion=e.target.value;
                });
                loginBtn.addEventListener('click',eve=>{
                    console.log(elUsuario);
                    alert("El usuario nuevo se ha inscrito satisfactoriamente");
                    eve.preventDefault();
                    NewUsuario(elUsuario);

                })
            }else if(elemtHtml.id==3){
                menus.innerHTML=`
                <style>
                .boton_login{
                    visibility:hidden;
                }
                .usuario{
                    margin-top:-20rem;
                }
                </style>
                    <section class="usuario">
                        <section class="datos">
                            <label><h1>Documento: </h1> </label>
                            <input id="dato1" placeholder="Ingrese documento">
                            <br>
                            <section class="botones">
                                <a class="botton" href="/componentes/login/log_in.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-lines" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3z" />
                                        <path d="M21 15v-6" />
                                        <path d="M18 15v-6" />
                                    </svg>
                                    Atras
                                </a>
                                <a class="botton" type="button" id="ingresar_mis_datos" href="/componentes/login/log_in.html">
                                    Buscar
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right-lines" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z" />
                                        <path d="M3 9v6" />
                                        <path d="M6 9v6" />
                                    </svg>
                                </a>
                            </section> 
                        </section>
                    </section>
                `;
                contenido.appendChild(menus);
                const loginBtn = document.querySelector('#ingresar_mis_datos');
                const dato = document.querySelector('#dato1');
                dato.addEventListener('input',e=>{
                    elUsuario.documento = e.target.value;
                });
                loginBtn.addEventListener('click',async eve=>{
                    eve.preventDefault();
                    const users = await getUsuarios();
                    // console.log(users);
                    const user = users.filter(filtrarDocumento);
                    const bloqueDialogo = document.createElement('section');
                    bloqueDialogo.id="bloque_dialogo";
                    console.log(user[0]);
                    bloqueDialogo.innerHTML=`
                    <style>
                    .boton_login{
                        visibility:hidden;
                    }
                    .usuario{
                        margin-top:-23rem;
                    }
                    </style>
                        <label><h1>Su usuario es: </h1> </label>
                        <label>${user[0].usuario}</label>
                        <label><h1>Su contraseña es: </h1></label>
                        <label>${user[0].contraseña}</label>
                    `;
                    menus.appendChild(bloqueDialogo);
                });
            }
        })
    });
}
function filtrarUsuario(user){
  if (elUsuario.user) {
      console.log("log in satisfactorio");
      return user.usuario === elUsuario.user;
    }
    else {
      console.log("usuario o contraseña no encontrado");
      return user;
    }
}
function filtrarContraseña(user){
    if(elUsuario.contraseña){
        return user.contraseña === elUsuario.contraseña;
    }
    else {
      console.log("usuario o contraseña no encontrado");
        return user;
    }
}
function filtrarDocumento(user){
    if(elUsuario.documento){
        return user.documento === elUsuario.documento;
    }
    else {
      return user;
    }
}
function validate(objecto) {
    return !Object.values(objecto).every(element=> element !== '');
}

document.addEventListener('DOMContentLoaded',()=>{
    botonesIngres(logIn_botones)
});