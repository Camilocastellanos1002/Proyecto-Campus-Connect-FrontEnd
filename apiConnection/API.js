const urlUsuarios = "http://localhost:4001/usuarios";
const urlMaterias1="http://localhost:4001/materiasPrimero";
const urlMaterias2="http://localhost:4001/materiasSegundo";
const urlMaterias3="http://localhost:4001/materiasTercero";
const urlMaterias4="http://localhost:4001/materiasCuarto";
const urlMaterias5="http://localhost:4001/materiasQuinto";
const urlEventos="http://localhost:4001/events";
const urlHorario="http://localhost:4001/horario";
const urlMaterias="http://localhost:4001/materias";
const urlEmociones="http://localhost:4001/emociones";
const urlCuento="http://localhost:4001/imagenesCuento";

/* obtener datos usuarios */

export const getUsuarios = async () => {
    try {
        const response = await fetch(urlUsuarios);
        if (!response.ok) {
            throw new Error(`Erroor al obtener estudiantes: ${response.status}`);
        }
        const students = await response.json();
        return students;
    } catch (error) {
        console.log("Error al obtener estudiantes", error);
    }
}

/* obtener datos Materias primero */

export const getSubjectsOne= async ()=>{
    try {
        const result = await fetch(urlMaterias1);
        const subjects1 = await result.json();
        return subjects1;
    } catch (error) {
        console.log("Error al obtener materias de primero");
    }
}
/* obtener datos materias Segundo */

export const getSubjectsTwo= async ()=>{
    try {
        const result = await fetch(urlMaterias2);
        const subjects2 = await result.json();
        return subjects2;
    } catch (error) {
        console.log("Error al obtener materias de segundo");
    }
}
 
/* obtener datos materias tercero */

export const getSubjectsThree= async ()=>{
    try {
        const result = await fetch(urlMaterias3);
        const subjects3 = await result.json();
        return subjects3;
    } catch (error) {
        console.log("Error al obtener materias de tercero");
    }
}

/* obtener datos materias cuarto */

export const getSubjectsFour= async ()=>{
    try {
        const result = await fetch(urlMaterias4);
        const subjects4 = await result.json();
        return subjects4;
    } catch (error) {
        console.log("Error al obtener materias de cuarto");
    }
}

/* obtener datos materias quinto */

export const getSubjectsFive= async ()=>{
    try {
        const result = await fetch(urlMaterias5);
        const subjects5 = await result.json();
        return subjects5;
    } catch (error) {
        console.log("Error al obtener materias de quinto");
    }
}

/* obtener datos de eventos */

export const getEventos = async () => {
    try {
        const response = await fetch(urlEventos);
        if (!response.ok) {
            throw new Error(`Erroor al obtener los eventos: ${response.status}`);
        }
        const events = await response.json();
        return events;
    } catch (error) {
        console.log("Error al obtener eventos", error);
    }
}

/* obtener datos del horario*/

export const getHorario = async () => {
    try {
        const response = await fetch(urlHorario);
        if (!response.ok) {
            throw new Error(`Erroor al obtener los eventos: ${response.status}`);
        }
        const schedule = await response.json();
        return schedule;
    } catch (error) {
        console.log("Error al obtener eventos", error);
    }
};


/*Crear un nuevo usuario */

export const NewUsuario = newuser=>{
    try {
        fetch(urlUsuarios,{
            method: 'POST',
            body: JSON.stringify(newuser),
            headers:{
                'Content-Type':'application/json'
            }
        });
        // window.location.href='log_in.html';
    } catch (error) {
        console.log(error);
    }
};

/* obtener datos emociones */

export const getEmociones = async () => {
    try {
        const response = await fetch(urlEmociones);
        if (!response.ok) {
            throw new Error(`Erroor al obtener estudiantes: ${response.status}`);
        }
        const emociones = await response.json();
        return emociones;
    } catch (error) {
        console.log("Error al obtener estudiantes", error);
    }
}
/* obtener cuento  */

export const getCuento = async () => {
    try {
        const response = await fetch(urlCuento);
        if (!response.ok) {
            throw new Error(`Erroor al obtener estudiantes: ${response.status}`);
        }
        const cuento = await response.json();
        return cuento;
    } catch (error) {
        console.log("Error al obtener estudiantes", error);
    }
}

 
