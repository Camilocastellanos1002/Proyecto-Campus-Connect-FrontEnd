/* btn log in */
const despegableContent = [
  (boton1 = [
    {
      id: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                <path d="M19 22v-6" />
                <path d="M22 19l-3 -3l-3 3" />
                </svg>`,
    },
  ]),
  (desplegable1 = [
    {
      id: 1,
      ref: "/componentes/login/log_in.html",
      title: "Ingreso",
    },
    {
      id: 2,
      ref: "/componentes/inicio_estudiantes/sistema_inicio.html",
      title: "Estudiantes",
    },
    {
      id: 3,
      ref: "/componentes/inicio_profesores/inicio_profe.html",
      title: "Profesores",
    },
    {
      id: 4,
      ref: "/componentes/inicio_profe/inicio_profe.html",
      title: "Padres",
    }
  ]),
  (boton2 = [
    {
      id: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
                <path d="M5 21v-7" />
                </svg>`,
    },
  ]),
  (boton3 = [
    {
      id: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-contrast" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 17a5 5 0 0 0 0 -10v10" />
                </svg>`,
    },
  ]),
];
/* btn idiomas */
const despegableIdioma = [
  {
    id: 1,
    ref: "index_en.html",
    title: "Ingles",
  },
  {
    id: 2,
    ref: "/componentes/pagina_principal/index.html",
    title: "Español",
  },
];
/* barra de menu */
const barraMenu = [
  {
    id: 1,
    name: "inicio",
    ref: "/componentes/pagina_principal/index.html",
    title: "Inicio",
  },
  {
    id: 2,
    name: "quienessomos",
    ref: "/componentes/quienes_somos/quienes_somos.html",
    title: "¿Quienes Somos?",
  },
  {
    id: 3,
    name: "noticiasyeventos",
    ref: "/componentes/noticias/noticiasyeventos.html",
    title: "Noticias y eventos",
  },
  {
    id: 4,
    name: "galeria",
    ref: "/componentes/galeria/galeria.html",
    title: "Galeria",
  },
  {
    id: 5,
    name: "contactenos",
    ref: "/componentes/contacto/contacto.html",
    title: "Contactenos",
  },
];
/*slider */
const slider = [
  {
    id: 1,
    image: "01.jpg",
    text: "Conoce nuestra institución",
  },
  {
    id: 2,
    image: "02.jpg",
    text: "Nuestros valores",
  },
  {
    id: 3,
    image: "03.jpg",
    text: "Nuestros familia",
  },
];

/* cuadros de publicidad */
const recuadrosPublicidad = [
  {
    id: 1,
    image: "/images/imagen_publicidad_1.jpg",
    title: "Arte y creatividad",
    paragraph:
      "Explorar la imaginacion es la forma de crecimeinto de habilidades, por ello lo tomamos como una prioridad de enseñanza.",
  },
  {
    id: 2,
    image: "/images/imagen_publicidad_2.jpg",
    title: "Deporte y Entretenimiento",
    paragraph: "Contamos con espacios adaptados para explorar las habilidades y fomentar habitos de salud",
  },
  {
    id: 3,
    image: "/images/imagen_publicidad_3.jpg",
    title: "Cultura",
    paragraph:
      "Fomentar cultura es crear identidad, fortalece el sentido de pertenencia y fomenta la comunicación social acertiva.",
  },
  {
    id: 4,
    image: "/images/imagen_publicidad_4.jpg",
    title: "Tecnología",
    paragraph:
      "Uno de nuestros objetivos es crear prospectos profesionales que se encuentren a la vanguardia, por ello tomamos muy enserio la adaptación de entornos con todos los materiales",
  },
  {
    id: 5,
    image: "/images/imagen_publicidad_5.jpg",
    title: "Ciencia",
    paragraph: "Practicar la ciencia en niños ayuda a crear pensamiento crítico, análisis, resolución de problemas.",
  },
  {
    id: 6,
    image: "/images/imagen_publicidad_5.jpg",
    title: "Ecología",
    paragraph:
      "Tener sentido de pertencia con el medio ambiente desde la temprana edad es uno de nuestros prinpales retos educativos.",
  },
];
/*cuadros de noticias */
const noticias = [
  {
    id: 1,
    image: "/images/diafamilia.png",
    title: "Dia de la Familia",
    paragraph: "Este es un dia especial, la familia <br>es lo más importante",
    announcer: "Rectora",
    date: "15 de Mayo",
  },
  {
    id: 2,
    image: "/images/diaambiente.png",
    title: "Dia del medio Ambiente",
    paragraph:
      "Cuidar el ambientes es uno de nuestros<br>principales objetivos como institucion<br>amigable al ambiente",
    announcer: "Profesor de etica",
    date: "5 de junio",
  },
  {
    id: 3,
    image: "/images/imagen_evento3.png",
    title: "Dia de la Raza",
    paragraph: "En memoria de aquella lucha que en 1492<br>libraron los indígenas y los colonizadores <br>españoles",
    announcer: "Profesor de sociales",
    date: "16 de octubre",
  },
  {
    id: 4,
    image: "/images/imagen_evento4.png",
    title: "Fiesta de halloween",
    paragraph: "Oportunidad de diversion,<br>disfraces y dulces",
    announcer: "Psicorientadora",
    date: "31 de octubre",
  },
  {
    id: 5,
    image: "/images/imagen_evento5.png",
    title: "Dia del trabajo",
    paragraph: "Esta oportunidad de poder conmemorar <br>la reivindicacion de los derechos <br>sociales y laborales",
    announcer: "Administracion",
    date: "1 de mayo",
  },
  {
    id: 6,
    image: "/images/imagen_evento6.png",
    title: "Dia de la resureccion",
    paragraph:
      "Ultimo dia de pascua, del cual celebramos <br>la resurreccion de jesus entre los muertos <br>luego de ser crucificado",
    announcer: "Profesor de sociales",
    date: "31 de Marzo",
  },
];
/* galeria de fotos */
const galeria = [
  {
    id: 1,
    image: "https://drive.google.com/file/d/1-Pt2OJsBahkAAWrX2TaWoLj-Swaw5hKT/preview",
  },
  {
    id: 2,
    image: "https://drive.google.com/file/d/1LZremh3ViWzsHgtHFHO10plNL20JgZgZ/preview",
  },
  {
    id: 3,
    image: "https://drive.google.com/file/d/11m_g1gpOnB6Qs8veHO_9HeNfpE1NKJNR/preview",
  },
  {
    id: 4,
    image: "https://drive.google.com/file/d/1_tTbulwlN3FDdnyfTM1QB-1TYCwQqRON/preview",
  },
  {
    id: 5,
    image: "https://drive.google.com/file/d/1k4yrYJbtxU1OkZ1-PlWVJa8wzM03FYKQ/preview",
  },
  {
    id: 6,
    image: "https://drive.google.com/file/d/1KCNZ8KBor8MT11d_Io1iu0K_7NPb5HXR/preview",
  },
  {
    id: 7,
    image: "https://drive.google.com/file/d/1QTyaPALQ6Xke0yvi-nNwMZb4R2KtfoFL/preview",
  },
  {
    id: 8,
    image: "https://drive.google.com/file/d/1JsFhIP5lhFDTgVlQYZcJmXe9SilVFZVV/preview",
  },
  {
    id: 9,
    image: "https://drive.google.com/file/d/1SWIgUyrBgzRYqdOlTemSDiAOGNXAhpJl/preview",
  },
  {
    id: 10,
    image: "https://drive.google.com/file/d/1xagjGZGdM7bLrWmW6AgTyprgDkTv1AlY/preview",
  },
  {
    id: 11,
    image: "https://drive.google.com/file/d/1jBRiymFpxdEAreWoEyGNNt9FgsgQ5-tr/preview",
  },
  {
    id: 12,
    image: "https://drive.google.com/file/d/1OyX33iUaAU5KIDabnzOH2R--DJFvLTO2/preview",
  },
  {
    id: 13,
    image: "https://drive.google.com/file/d/1eR9nvIjN6_vf_rPqXbF5G5YTRuSY9nCb/preview",
  },
  {
    id: 14,
    image: "https://drive.google.com/file/d/1gpHH4KKdcoWqGuy67CtJDkyFQ04qUcEP/preview",
  },
  {
    id: 15,
    image: "https://drive.google.com/file/d/1OoC5KTCK6DNkOW9Fg-XVf46xWdIh-T4z/preview",
  },
  {
    id: 16,
    image: "https://drive.google.com/file/d/1YfTibh9jdfgkdf1KlLlCSC7Hv78HabUe/preview",
  },
  {
    id: 17,
    image: "https://drive.google.com/file/d/1VUf9Clme_XF-uIAk2yOMLnEdyzwE8nwv/preview",
  },
  {
    id: 18,
    image: "https://drive.google.com/file/d/1nLJTIgVDyof5_HHMbVY8HHeQOQz9djaF/preview",
  },
  {
    id: 19,
    image: "https://drive.google.com/file/d/1gNaIMaVHr6NFTHyDPJavcB9WYy4w_7aK/preview",
  },
  {
    id: 20,
    image: "https://drive.google.com/file/d/12zU7BzCLIHZl79wnabMiG9fDN5gY8dNt/preview",
  },
  {
    id: 21,
    image: "https://drive.google.com/file/d/11lCQ1dzyeLkczOiSKKCstBMJpHIWul16/preview",
  },
  {
    id: 22,
    image: "https://drive.google.com/file/d/1GXtCL24SZPWLMDdQiHfd0_GGawEhlMgJ/preview",
  },
  {
    id: 23,
    image: "https://drive.google.com/file/d/1kfuIR1dMswUJCn6DD78Cusuogq4XvEpF/preview",
  },
];
/* pie de pagina */
const footer = [
  (logo = [
    {
      id: 1,
      image: "/images/logov2.png",
    },
  ]),
  (enlaces = [
    {
      id: 1,
      title: "¿Quienes Somos?",
      content: "quienes_somos.html",
    },
    {
      id: 2,
      title: "Noticias y eventos",
      content: "noticiasyeventos.html",
    },
    {
      id: 3,
      title: "Galeria",
      content: "galeria.html",
    },
    {
      id: 4,
      title: "Contactenos",
      content: "contacto.html",
    },
  ]),
  (infoContacto = [
    {
      id: 1,
      name: "nomenclatura",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google-maps" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                recuadrosPublicidad<path d="M12 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
                <path d="M6.428 12.494l7.314 -9.252" />
                <path d="M10.002 7.935l-2.937 -2.545" />
                <path d="M17.693 6.593l-8.336 9.979" />
                <path d="M17.591 6.376c.472 .907 .715 1.914 .709 2.935a7.263 7.263 0 0 1 -.72 3.18a19.085 19.085 0 0 1 -2.089 3c-.784 .933 -1.49 1.93 -2.11 2.98c-.314 .62 -.568 1.27 -.757 1.938c-.121 .36 -.277 .591 -.622 .591c-.315 0 -.463 -.136 -.626 -.593a10.595 10.595 0 0 0 -.779 -1.978a18.18 18.18 0 0 0 -1.423 -2.091c-.877 -1.184 -2.179 -2.535 -2.853 -4.071a7.077 7.077 0 0 1 -.621 -2.967a6.226 6.226 0 0 1 1.476 -4.055a6.25 6.25 0 0 1 4.811 -2.245a6.462 6.462 0 0 1 1.918 .284a6.255 6.255 0 0 1 3.686 3.092z" />
                </svg>`,
      value: "Cl. 13 #744, La Dorada, Caldas",
    },
    {
      id: 2,
      name: "correo",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
                </svg>`,
      value: "cadelsa2016@gmail.com",
    },
    {
      id: 3,
      name: "telefono",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>`,
      value: "3148116990",
    },
  ]),
  (redes = [
    {
      id: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>`,
      title: "Facebook",
      value: "https://www.facebook.com/caminos.delsaber.54",
    },
    {
      id: 2,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>`,
      title: "Twitter",
      value: "",
    },
    {
      id: 3,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
                </svg>`,
      title: "Instagram",
      value: "",
    },
    {
      id: 4,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>`,
      title: "Whattsapp",
      value: "3148116990",
    },
  ]),
  (copyR = [
    {
      id: 1,
      value: "©Copyright, Todos los derechos reservados 2023.",
    },
  ]),
];
/* menu quienes somos */
const quienesSomos = [
  {
    id: 1,
    clasTitle: "introduccion",
    clas: "titulo2",
    title: "NUESTRO COLEGIO",
    clasP: "contenido_i",
    paraf: `El colegio Caminos del Saber,
            es un establecimiento educativo de carácter privado, que ofrece el servicio educativo
            en jornada única, de carácter mixto, legalmente reconocido por las autoridades
            competentes, y que atiende la educación formal en los niveles de Preescolar (Pre-
            jardín, Jardín y Transición) y básica primaria, en el calendario A.
            El colegio Caminos del Saber es una entidad educativa que se encuentra reconocida
            por el estado colombiano con resolución de aprobación No. 3131-6 de mayo de 2013 y
            la confirmación de la licencia según resolución No. 2294-6 del 24 de julio de 2020, y su
            respectiva modificación No 2607-6 del 26 de agosto de 2020 Emanadas por la
            Secretaria de educación del departamento de Caldas.`,
  },
  {
    id: 2,
    clasTitle: "caja-contenido",
    clas: "mision caja",
    title: "Misión",
    clasP: "pmision cajat",
    paraf: `El colegio Caminos del Saber es una comunidad educativa de excelencia que
            incentiva a sus estudiantes a construir día a día sus conocimientos promoviendo la
            búsqueda de la verdad y el ejercicio de la libertad responsable. Generamos además
            ambientes propicios para un adecuado clima de convivencia escolar.`,
  },
  {
    id: 3,
    clasTitle: "caja-contenido",
    clas: "vision caja",
    title: "Visión",
    clasP: "pvision cajat",
    paraf: `El colegio Caminos del Saber será reconocido como una institución con alta calidad
            educativa, fundamentada en valores e inglés y un profundo sentido ético, humanista y
            social obteniendo estudiantes con un perfil de calidad académica, humana y cristiana
            para un desempeño optimo en espacios sociales, diversos y competitivos.`,
  },
  {
    id: 4,
    clasTitle: "caja-valores'",
    clas: "nuestros caja",
    title: "Nuestro valores",
    clasP: "valores",
    paraf: `
            <ul class="valores ">
                <li> Para construir un orden en dónde todos podamos ser felices: LA DEMOCRACIA</li><br>
                <li> Para descubrir e interactuar con el mundo: EL CONOCIMIENTO</li><br>
                <li> Para tejer redes sociales: LA COMUNICACIÓN</li><br>
                <li> Para vivir en armonía: LA CONVIVENCIA</li><br>
                <li> Para aprender a manejar la libertad: LA AUTONOMÍA</li><br>
                <li> Para garantizar la supervivencia del planeta y de la especie humana: CUIDADO DE SI
                MISMO Y DEL ENTORNO.</li><br>
            </ul> `,
  },
  {
    id: 5,
    clasTitle: "caja-contenido",
    clas: "manual",
    title: "Manual de Convivencia",
    clasP: "pvision cajat",
    paraf: `
            <iframe width="600" height="600" src="https://drive.google.com/file/d/1BHlvYZGAyPN7Fi3ZMf64IyWYKOCi7-vi/view?usp=sharing" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            `,
  },
];

/* barra menu de estudiantes */
const cajaOpcionesEstudiante = [
  (logo = [
    {
      id: 1,
      logo: `<img src="/images/logoc.png" alt="" height="150rem" width="150rem">`,
    },
  ]),
  (logoEstatico = [
    {
      id: 1,
      logoEs: `<img src="/images/Colegio Caminos del Saber.png" width="500" height="200" alt="">`,
    },
  ]),
  (menu = [
    {
      id: 1,
      titleSection: "inicio caja",
      icono: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            `,
      theTitle: "INICIO",
    },
    {
      id: 2,
      titleSection: "asignaturas caja",
      icono: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-books" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M5 8h4" />
            <path d="M9 16h4" />
            <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
            <path d="M14 9l4 -1" />
            <path d="M16 16l3.923 -.98" />
            </svg>
            `,
      theTitle: "MIS ASIGNATURAS",
    },
    {
      id: 3,
      titleSection: "horario caja",
      icono: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M16 3l0 4" />
            <path d="M8 3l0 4" />
            <path d="M4 11l16 0" />
            <path d="M8 15h2v2h-2z" />
            </svg>`,
      theTitle: "HORARIO",
    },
    {
      id: 4,
      titleSection: "santillana caja",
      icono: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vocabulary" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
            <path d="M12 5v16" />
            <path d="M7 7h1" />
            <path d="M7 11h1" />
            <path d="M16 7h1" />
            <path d="M16 11h1" />
            <path d="M16 15h1" />
            </svg>`,
      theTitle: "SANTILLANA",
    },
    {
      id: 5,
      titleSection: "Material caja",
      icono: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 19l18 0" />
            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            </svg>
            `,
      theTitle: "MATERIAL DE CLASE",
    },
    {
      id: 6,
      titleSection: "Material caja",
      icono: `
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-wink-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
          <path d="M9 10h-.01" />
          <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
          <path d="M15.5 8.5l-1.5 1.5l1.5 1.5" />
        </svg>
            `,
      theTitle: "COMO TE SIENTES HOY?",
    },
  ]),
  (logoPersonal = [
    {
      id: 1,
      theIcon: `<img src="" class="imagen_titulo" height="50rem" width="50rem">`,
    },
  ]),
];

/* barra menu de padres de familia */
const cajaOpcionesPadres = [
  (logo = [
    {
      id: 1,
      logo: `<img src="/images/logoc.png" alt="" height="150rem" width="150rem">`,
    },
  ]),
  (logoEstatico = [
    {
      id: 1,
      logoEs: `<img src="/images/Colegio Caminos del Saber.png" width="500" height="200" alt="">`,
    },
  ]),
  (menu = [
    {
      id: 1,
      titleSection: "inicio caja",
      icono: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
        `,
      theTitle: "INICIO",
    },
    {
      id: 2,
      titleSection: "asignaturas caja",
      icono: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-books" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        <path d="M5 8h4" />
        <path d="M9 16h4" />
        <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
        <path d="M14 9l4 -1" />
        <path d="M16 16l3.923 -.98" />
        </svg>
        `,
      theTitle: "ASIGNATURAS",
    },
    {
      id: 3,
      titleSection: "horario caja",
      icono: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M16 3l0 4" />
        <path d="M8 3l0 4" />
        <path d="M4 11l16 0" />
        <path d="M8 15h2v2h-2z" />
        </svg>`,
      theTitle: "HORARIO",
    },
    {
      id: 4,
      titleSection: "notas caja",
      icono: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vocabulary" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
        <path d="M12 5v16" />
        <path d="M7 7h1" />
        <path d="M7 11h1" />
        <path d="M16 7h1" />
        <path d="M16 11h1" />
        <path d="M16 15h1" />
        </svg>`,
      theTitle: "NOTAS",
    },
    {
      id: 5,
      titleSection: "Material caja",
      icono: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 19l18 0" />
        <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
        </svg>
        `,
      theTitle: "PAGOS",
    },
  ]),
  (logoPersonal = [
    {
      id: 1,
      theIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>`,
    },
  ]),
];

/* barra menu de profesores */
const cajaOpcionesProfesor = [
  (logo = [
    {
      id: 1,
      logo: `<img src="/images/logoc.png" alt="" height="150rem" width="150rem">`,
    },
  ]),
  (logoEstatico = [
    {
      id: 1,
      logoEs: `<img src="/images/Colegio Caminos del Saber.png" width="500" height="160" alt="">`,
    },
  ]),
  (menu = [
    {
      id: 1,
      titleSection: "inicio caja",
      icono: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
        `,
      theTitle: "INICIO",
    },
    {
      id: 2,
      titleSection: "asignaturas caja",
      icono: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-books" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        <path d="M5 8h4" />
        <path d="M9 16h4" />
        <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
        <path d="M14 9l4 -1" />
        <path d="M16 16l3.923 -.98" />
        </svg>
        `,
      theTitle: "ASIGNATURAS",
    },
    {
      id: 3,
      titleSection: "horario caja",
      icono: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M16 3l0 4" />
        <path d="M8 3l0 4" />
        <path d="M4 11l16 0" />
        <path d="M8 15h2v2h-2z" />
        </svg>`,
      theTitle: "HORARIO",
    },
    {
      id: 4,
      titleSection: "notas caja",
      icono: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vocabulary" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
        <path d="M12 5v16" />
        <path d="M7 7h1" />
        <path d="M7 11h1" />
        <path d="M16 7h1" />
        <path d="M16 11h1" />
        <path d="M16 15h1" />
        </svg>`,
      theTitle: "NOTAS",
    },
    {
      id: 5,
      titleSection: "Material caja",
      icono: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 19l18 0" />
        <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
        </svg>
        `,
      theTitle: "MATERIAL DE CLASE",
    },
    {
      id: 6,
      titleSection: "Material caja",
      icono: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 19l18 0" />
        <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
        </svg>
        `,
      theTitle: "ESTUDIANTES",
    },
  ]),
  (logoPersonal = [
    {
      id: 1,
      theIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>`,
    },
  ]),
];

/* log in */
const logIn_botones = [
  {
    id: 1,
    icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-up" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                <path d="M19 22v-6" />
                <path d="M22 19l-3 -3l-3 3" />
            </svg>`,
    title: "Iniciar Sesion",
  },
  {
    id: 2,
    icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
            </svg>
            `,
    title: "Registrarse",
  },
  {
    id: 3,
    icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-question" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                <path d="M19 22v.01" />
                <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            </svg>
            `,
    title: "Obtener/Recuperar informacion",
  },
];

// https://cnbguatemala.org/wiki/Mallas_Curriculares_por_%C3%81rea_y_Grado_-_Primaria
