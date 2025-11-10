export const maquinas = [
  { id: "rack-sentadillas", nombre: "Rack de sentadillas", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787258/1_vfci9a.jpg" },
  { id: "barra-olimpica", nombre: "Barra olímpica", img:"" },
  { id: "maquina-smith", nombre: "Máquina Smith", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787259/5_jgerqo.jpg" },
  { id: "banco-olimpico", nombre: "Banco Olímpico", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787267/2_hepaoi.jpg" },
  { id: "banco-inclinado", nombre: "Banco Inclinado", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787262/11_ge7ilg.jpg" },
  { id: "banco-scott", nombre: "Banco Scott", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787261/10_zly57i.jpg" },
  { id: "prensa-45", nombre: "Prensa 45º", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787258/3_ihldyg.jpg" },
  { id: "maquina-gemelos", nombre: "Máquina Gemelos", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787267/22_tjht5a.jpg" },
  { id: "mancuernas", nombre: "Mancuernas", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787263/13_uwm4b5.jpg" },
  { id: "maquina-fondos", nombre: "Máquina Fondos", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787260/8_y9zd9f.jpg" },
  { id: "polea-alta", nombre: "Polea Alta", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787259/6_bxrvuk.jpg" },
  { id: "cardio", nombre: "Cardio", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787266/18_pw1v4j.jpg" },
  { id: "maquina-aductores", nombre: "Máquina Aductores", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787266/19_t1oe7b.jpg" },
  { id: "barra", nombre: "Barra", img:"" },
  { id: "poleas", nombre: "Poleas", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787263/14_ysfyoc.jpg" },
  { id: "maquina-femorales", nombre: "Máquina Femorales", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787267/21_tiopv6.jpg" },
  { id: "banco-declinado", nombre: "Banco Declinado", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787265/15_zp0kgj.jpg" },
  { id: "banco-olimpico-inclinado", nombre: "Banco Olímpico Inclinado", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787260/7_ehdbr1.jpg" },
  { id: "cinta", nombre: "Cinta", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787265/17_dxeses.jpg" },
  { id: "polea-baja", nombre: "Polea Baja", img:"" },
  { id: "banco-lumbar", nombre: "Banco Lumbar", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787264/16_k3pn6w.jpg" },
  { id: "suelo", nombre: "Suelo", img:"" },
  { id: "silla-cuadriceps", nombre: "Silla de Cuádriceps", img:"https://res.cloudinary.com/dfschbyq2/image/upload/v1762787266/20_csrke3.jpg" },
];

export const ejerciciosData = {
  "rack-sentadillas": [
    {
      id: 1,
      nombre: "Sentadilla sumo",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787219/SENTADILLA_SUMO_mmw1re.mp4",
      descripcion: "Ejercicio para piernas y glúteos con énfasis en aductores. Postura abierta y espalda firme para bajar con control.",
      imagen: "https://res.cloudinary.com/dfschbyq2/video/upload/so_1/v1762787219/SENTADILLA_SUMO_mmw1re.jpg",
      pasos: [
        "Abrí el ancho de piernas más que tus hombros y apuntá los pies hacia afuera.",
        "Activá el core y mantené la espalda recta.",
        "Bajá llevando la cola hacia atrás y abajo.",
        "Llegá hasta que tus caderas bajen al nivel de las rodillas.",
        "Subí empujando con talones, sin cerrar rodillas."
      ]
    },
    {
      id: 2,
      nombre: "Sentadilla libre con barra olímpica",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787268/SENTADILLA_LIBRE_CON_BARRA_OLIMPICA_vtkb3l.mp4",
      descripcion: "La sentadilla clásica para piernas y glúteos, enfocada en fuerza y estabilidad profunda.",
      imagen: "https://res.cloudinary.com/dfschbyq2/video/upload/so_1/v1762787268/SENTADILLA_LIBRE_CON_BARRA_OLIMPICA_vtkb3l.jpg",
      pasos: [
        "Ubicá la barra sobre la parte alta de la espalda (no en el cuello).",
        "Pies al ancho de hombros, punta de pies levemente hacia afuera.",
        "Activá abdomen y mantené torso firme.",
        "Bajá flexionando cadera y rodillas al mismo tiempo.",
        "Subí empujando con talones y manteniendo la espalda recta."
      ]
    },
  ],
  "barra-olimpica": [
    {
      id: 3,
      nombre: "Peso muerto con barra",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787288/PESO_MUERTO_CON_BARRA_fmj5eu.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 4,
      nombre: "Remo con barra olímpica",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787237/REMO_CON_BARRA_OLIMPICA_yh0tk5.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 24,
      nombre: "Hip Thrust con barra",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787288/HIP_TRUST_CON_BARRA_cbdayg.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 29,
      nombre: "Peso muerto",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787288/PESO_MUERTO_CON_BARRA_fmj5eu.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "maquina-smith": [
    {
      id: 5,
      nombre: "Sentadilla en máquina Smith",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787277/SENTADILLA_EN_MA%CC%81QUINA_SMITH_ljhjof.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 6,
      nombre: "Press pecho plano Smith",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787284/PRESS_DE_PECHO_PLANO_EN_MA%CC%81QUINA_SMITH_s7n2ox.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "banco-olimpico": [
    {
      id: 7,
      nombre: "Press pecho plano en banco olímpico",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787280/PRESS_DE_PECHO_PLANO_EN_BANCO_OLIMPICO_zzhynq.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "banco-inclinado": [
    {
      id: 8,
      nombre: "Pecho inclinado con mancuernas",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787282/PECHO_EN_BANCO_INCLINADO_CON_MANCUERNAS_gobffe.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "banco-scott": [
    {
      id: 25,
      nombre: "Curl bíceps banco Scott con barra Z",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787289/CURL_DE_BI%CC%81CEPS_EN_BANCO_SCOTT_CON_BARRA_Z_tvgjzs.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "prensa-45": [
    {
      id: 26,
      nombre: "Gemelos en prensa 45",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787286/PRENSA_45_GEMELOS_okrch1.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 55,
      nombre: "Prensa cuadríceps",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787282/PRENSA_45_CUADRICEPS_jvpobl.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "maquina-gemelos": [
    {
      id: 27,
      nombre: "Gemelos parado en máquina",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787289/GEMELOS_PARADO_EN_MAQUINA_q7b9ok.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  mancuernas: [
    {
      id: 28,
      nombre: "Press militar con mancuernas",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787291/PRESS_MILITAR_CON_MANCUERNAS_khnggs.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 44,
      nombre: "Vuelos laterales",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787226/VUELOS_LATERALES_CON_MANCUERNAS_PARADO_mmajsp.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 48,
      nombre: "Curl bíceps martillo",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787243/CURL_DE_BI%CC%81CEPS_MARTILLO_CON_MANCUERNA_hlflvx.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 49,
      nombre: "Curl bíceps con mancuernas",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787255/CURL_DE_BI%CC%81CEPS_CON_MANCUERNA_y7sk9m.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "maquina-fondos": [
    {
      id: 30,
      nombre: "Fondos de tríceps en máquina",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787291/FONDOS_DE_TRICPES_EN_MAQUINA_id6zga.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "polea-alta": [
    {
      id: 31,
      nombre: "Curl de muñeca en polea alta",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787294/CURL_DE_MUN%CC%83ECA_EN_POLEA_ALTA_tbfduk.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 50,
      nombre: "Jalón al pecho agarre prono",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787271/JALON_AL_PECHO_AGARRE_PRONO_gh8hoc.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 51,
      nombre: "Jalón al pecho agarre cerrado",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787273/JALON_AL_PECHO_AGARRE_CERRADO_hvjbhu.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  cardio: [
    {
      id: 32,
      nombre: "Bicicleta fija",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787294/BICICLETA_FIJA_udkg9f.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "maquina-aductores": [
    {
      id: 33,
      nombre: "Aductores en máquina",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787295/ADUCTORES_EN_MAQUINA_lpmqac.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 53,
      nombre: "Abductores en máquina multipiernas",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787256/ABDUCTORES_EN_MAQUINA_MULTIPIERNAS_ndjadj.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  barra: [
    {
      id: 34,
      nombre: "Curl de muñecas con barra",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787294/CURL_DE_MUN%CC%83ECAS_CON_BARRA_mdtnyo.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "poleas": [
    {
      id: 35,
      nombre: "Apertura para pecho en polea",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787295/APERTURAS_PARA_PECHO_EN_POLEA_zuqqyh.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 38,
      nombre: "Apertura pecho baja polea",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787300/APERTURAS_PARA_PECHO_BAJO_EN_POLEA_uftego.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 43,
      nombre: "Remo Gironda agarre cerrado",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787223/REMO_GIRONDA_AGARRE_CERRADO_kepghh.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 41,
      nombre: "Extensión tríceps en polea baja (katana)",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787272/TRI%CC%81CEPS_KATANA_EN_POLEA_BAJA_bjbzzd.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 42,
      nombre: "Curl bíceps en polea baja",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787240/CURL_DE_BI%CC%81CEPS_EN_POLEA_BAJA_exqwou.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
    {
      id: 56,
      nombre: "Patada de glúteo en polea baja",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787302/PATADA_DE_GLUTEO_EN_POLEA_BAJA_ahhgqq.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "maquina-femorales": [
    {
      id: 36,
      nombre: "Camilla de femorales",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787299/CAMILLA_DE_FEMORALES_lannc3.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "banco-declinado": [
    {
      id: 37,
      nombre: "Abdominales en banco declinado",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787300/ABDOMINALES_EN_BANCO_DECLINADO_usmg5u.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "banco-olimpico-inclinado": [
    {
      id: 39,
      nombre: "Press pecho inclinado banco olímpico",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787303/PRESS_DE_PECHO_INCLINADO_EN_BANCO_OLIMPICO_offmfj.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  cinta: [
    {
      id: 40,
      nombre: "Cinta caminadora",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787303/CINTA_CAMINADORA_d39kht.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "banco-lumbar": [
    {
      id: 43,
      nombre: "Hiper extensiones banco lumbar",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787236/HIPER_EXTENSIONES_EN_BANCO_LUMBAR_45_mx2uec.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  suelo: [
    {
      id: 45,
      nombre: "Plancha abdominal",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787283/PLANCHA_ABDOMOINAL_b8ipya.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
  "silla-cuadriceps": [
    {
      id: 46,
      nombre: "Silla de cuádriceps",
      video:
        "https://res.cloudinary.com/dfschbyq2/video/upload/v1762787274/SILLA_DE_CUA%CC%81DRICEPS_verzdz.mp4",
      imagen: "",
      descripcion: "Ejercicio para fortalecer el músculo objetivo manteniendo técnica correcta y control del movimiento.",
      pasos: [
        "Ajustá la máquina o posición inicial según sea necesario.",
        "Mantené el core firme y la espalda recta.",
        "Realizá el movimiento controlando tanto la fase concéntrica como excéntrica.",
        "Evitá movimientos bruscos o usar demasiado impulso.",
        "Respirá de manera fluida durante toda la ejecución."
      ]
    },
  ],
};
