/* declaracion de las clases */

export class Usuario{
    constructor(nom,doc,ed,corr,prof,password,picture,dir,us){
        this.nombre=nom;
        this.documento =doc;
        this.edad= ed;
        this.correo = corr;
        this.rol = prof;
        this.contraseña = password;
        this.foto = picture;
        this.direccion = dir;
        this.user = us;
    }
    LogIN(correo,contraseña){

    };
    logOut(correo,contraseña){

    };
    asistencia(){}
}
export class Mensaje{
    constructor(nom,corr,mens){
        this.nombre=nom;
        this.correo = corr;
        this.mensaje = mens;
    }
}


export class Profesor extends Usuario {
    constructor(nombre, documento,edad, correo, profesion, contraseña, foto, direccion, user,proy,materia,hor, antig){
        super(nombre, documento,edad, correo, profesion, contraseña, foto, direccion, user);
        this.proyecto = proy;
        this.materiaEjercida = materia;
        this.horario = hor;
        this.antiguedad = antig;
    }
    entregarNotas(){}
    planeacion(){}
    modificarNotas(){}
    crearExamen(){}
    capacitacion(){}
}

export class ProfesorPracticante extends Profesor{
    constructor(nombre, documento,edad, correo, profesion, contraseña, foto, direccion, user,proyecto,materiaEjercida,horario, antiguedad,est){
        super(nombre, documento,edad, correo, profesion, contraseña, foto, direccion, user,proyecto,materiaEjercida,horario,antiguedad);
        this.estadoContra= est;
    }
    estadoContratacion(){}
}

export class Estudiante extends Usuario{
    constructor (nombre, documento,edad, correo, profesion, contraseña, foto, direccion, user,hor, grad){
        super(nombre, documento,edad, correo, profesion, contraseña, foto, direccion, user);
        this.horario=hor;
        this.grado=grad;
    }
    materiasPerdidad(){}
    materiasGanadas(){}
    graduado(){}
}

export class PadreDeFamilia extends Usuario{
    constructor (nombre, documento,edad, correo, profesion, contraseña, foto, direccion,trab,horaCon,nomH,inte){
        super(nombre, documento,edad, correo, profesion, contraseña, foto, direccion, user);
        this.trabajo= trab;
        this.horarioTrabajo= horaCon;
        this.nombreHijo = nomH;
        this.integranteComitePadreDeFamilia = inte;
    }
    boletinBimestral(){}
    reunionPadres(){}
    eventos(){}
}

export class Empleado extends Usuario{
    constructor (nombre, documento,edad, correo, profesion, contraseña, foto, direccion,trab){
        super(nombre, documento,edad, correo, profesion, contraseña, foto, direccion, user);
        this.trabajo=trab;
    }
    verHorarioLaboral(){}
    eventos(){}
    nomina(){}
    capacitacion(){}
}

export class Rector extends Usuario{
    numeroReuniones;
    periodoEjercion;   
    convocarComiteEstudiantil(){}
    convocarReunionPadres(){}
    publicarEvento(){}
}

export class Materias{
    constructor(nomb,hor,inten,sal,loc,not){
        this.nombreMateria = nomb;
        this.materiaHorario = hor;
        this.intensidadSemanal = inten;
        this.salon = sal;
        this.profesorLocutor=loc;
        this.nota=not;
    }

    planeacion(){}
    ingresarateria(){}
    mostrarInformacion(){}
    novedades(){}
    ingresarNota(){}
    modificarNota(){}
    eliminarNota(){}
}

export class DataBase {
    constructor(ests,profs,emple,padf){
        this.totalEstudiantes = ests;
        this.totalProfesores = profs;
        this.totalEmpleados = emple;
        this.totalPadres = padf;
    }
    actualizar(){}
}
export class Colegio {
    constructor(nom,num,sed,mis,vis,manual,anoL){
        this.nombre = nom;
        this.nit=num;
        this.sede=sed;
        this.mision=mis;
        this.vision=vis;
        this.manualConvivencia=manual;
        this.añoLectivo=anoL;
    }
    modificarInformacion(){}
    matriculas(){}
    vacaciones(){}
}

export default function mensajeDefault() {
    return `LA BASE DE DATOS HA CARGADO EXITOSAMENTE.`
}
