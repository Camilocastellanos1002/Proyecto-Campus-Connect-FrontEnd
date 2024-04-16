const urlEmociones="http://localhost:4001/emociones";

//Seleccionar el modal
const modalDomBody = document.querySelector(".modal-body");
const seleccionarEmocion = document.querySelectorAll(".especial");
const modalDomTitle = document.querySelector(".modal-title");

/* eventos */
seleccionarEmocion.forEach((emocion) => {
  emocion.addEventListener("click", (event) => {
    const valorE = emocion.getAttribute("data-emocion")

    /* fetch peticion */
    leerDataEmo(valorE)

    modalDomTitle.innerHTML = `${valorE}`

  });
});

//Recordar billete de 5, es la explicacion para entender que el parametro emocioncitoValorE es igual a valorE
async function leerDataEmo(emocioncitoValorE) {
  const respuesta = await fetch(urlEmociones)
  const datoEmo = await respuesta.json()

  datoEmo.forEach((datosRecorridos) => {
    if (datosRecorridos.titulo == emocioncitoValorE) {
      modalDomBody.innerHTML = `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/${datosRecorridos.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>${datosRecorridos.descripcion}</p>`;
    }
  })
}

// -------------------------------- Local Storage---------------------------------------------------

//Selectores
const btnGuardar = document.querySelector(".btn-outline-success")
const textArea = document.querySelector(".reflexion")

//Funcion de guardar en local storage
function guardar() {
  localStorage.setItem("reflexion", textArea.value)
  // Swal.fire({
  //   icon: "error",
  //   title: "Oops...",
  //   text: "Something went wrong!",
  // });
}

btnGuardar.addEventListener("click", ()=>{
  guardar();
  // console.log("Si guardoooooo!!!!!!!!!");
})
const btnRegresar= document.querySelector("#btn_regresar");
btnRegresar.addEventListener("click",()=>{
  window.location.href = "/componentes/inicio_estudiantes/sistema_inicio.html";
})
