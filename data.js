/* ============================================================
   Mareva Studio · Datos centralizados (servicios, equipo, blog,
   galería, testimonios, FAQ, premios y marcas).
   Editar este fichero actualiza todas las páginas.
   ============================================================ */

/* Imágenes de Unsplash (alta calidad) — sustituibles por las propias */
const IMG = {
  hero:        'images/photo-1521590832167-7bcbfaa6381f.jpg',
  heroAbout:   'images/photo-1560066984-138dadb4c035.jpg',
  heroSvc:     'images/photo-1522337094846-8a818192de1f.jpg',
  heroGal:     'images/photo-1632345031435-8727f6897d53.jpg',
  heroBlog:    'images/photo-1605497788044-5a32c7078486.jpg',
  heroBook:    'https://images.unsplash.com/photo-1599387737423-1d70a05ec1bd?w=2000&q=80&auto=format&fit=crop',
  heroContact: 'images/photo-1487412947147-5cebf100ffc2.jpg',
  about:       'images/photo-1562322140-8baeececf3df.jpg',

  /* Servicios */
  svcCorte:        'images/photo-1605497788044-5a32c7078486.jpg',
  svcColor:        'images/photo-1554519515-242161756769.jpg',
  svcBalayage:     'images/photo-1633681926022-84c23e8cb2d6.jpg',
  svcMechas:       'images/photo-1596367407372-96cb88503db6.jpg',
  svcCobertura:    'https://images.unsplash.com/photo-1595163230-12a99dccd8b1?w=1400&q=80&auto=format&fit=crop',
  svcCreativo:     'https://images.unsplash.com/photo-1620331317420-f49e7ad9b9ec?w=1400&q=80&auto=format&fit=crop',
  svcOlaplex:      'images/photo-1616394584738-fc6e612e71b9.jpg',
  svcK18:          'images/photo-1633681926022-84c23e8cb2d6.jpg',
  svcBotox:        'images/photo-1503951914875-452162b0f3f1.jpg',
  svcHidrata:      'images/photo-1571875257727-256c39da42af.jpg',
  svcNovias:       'images/photo-1519741497674-611481863552.jpg',
  svcEvento:       'images/photo-1487412912498-0447578fcca8.jpg',
  svcEditorial:    'images/photo-1562572159-4efc207f5aff.jpg',
  svcAsesoria:     'https://images.unsplash.com/photo-1515923021923-a266ddd1eb39?w=1400&q=80&auto=format&fit=crop',
  svcCambio:       'images/photo-1600948836101-f9ffda59d250.jpg',
  svcCaballeros:   'images/photo-1599351431202-1e0f0137899a.jpg',
  svcBarba:        'images/photo-1622286342621-4bd786c2447c.jpg',
  svcNinos:        'images/photo-1530538987395-032d1800fdd4.jpg',

  /* Galería */
  gal01: 'images/photo-1605497788044-5a32c7078486.jpg',
  gal02: 'images/photo-1554519515-242161756769.jpg',
  gal03: 'images/photo-1633681926022-84c23e8cb2d6.jpg',
  gal04: 'images/photo-1519741497674-611481863552.jpg',
  gal05: 'images/photo-1599351431202-1e0f0137899a.jpg',
  gal06: 'images/photo-1487412912498-0447578fcca8.jpg',
  gal07: 'images/photo-1502823403499-6ccfcf4fb453.jpg',
  gal08: 'images/photo-1596367407372-96cb88503db6.jpg',
  gal09: 'images/photo-1562572159-4efc207f5aff.jpg',
  gal10: 'https://images.unsplash.com/photo-1620331317420-f49e7ad9b9ec?w=1400&q=80&auto=format&fit=crop',
  gal11: 'images/photo-1503951914875-452162b0f3f1.jpg',
  gal12: 'images/photo-1622286342621-4bd786c2447c.jpg',
  gal13: 'images/photo-1605497788044-5a32c7078486.jpg',
  gal14: 'images/photo-1487412947147-5cebf100ffc2.jpg',
  gal15: 'images/photo-1571875257727-256c39da42af.jpg',
  gal16: 'https://images.unsplash.com/photo-1595163230-12a99dccd8b1?w=1400&q=80&auto=format&fit=crop',
  gal17: 'images/photo-1616394584738-fc6e612e71b9.jpg',
  gal18: 'https://images.unsplash.com/photo-1610910283335-d11d2c0aa72c?w=1400&q=80&auto=format&fit=crop',
  gal19: 'images/photo-1532710093739-9470acff878f.jpg',
  gal20: 'images/photo-1582095133179-bfd08e2fc6b3.jpg',
  gal21: 'images/photo-1607706189992-eae578626c86.jpg',
  gal22: 'images/photo-1559599101-f09722fb4948.jpg',
  gal23: 'images/photo-1580618672591-eb180b1a973f.jpg',
  gal24: 'images/photo-1632345031435-8727f6897d53.jpg',

  /* Equipo */
  team01: 'images/photo-1487412720507-e7ab37603c6f.jpg',
  team02: 'images/photo-1500648767791-00dcc994a43e.jpg',
  team03: 'images/photo-1573496359142-b8d87734a5a2.jpg',
  team04: 'images/photo-1544005313-94ddf0286df2.jpg',
  team05: 'images/photo-1492562080023-ab3db95bfbce.jpg',
  team06: 'images/photo-1494790108377-be9c29b29330.jpg',

  /* Blog */
  blog01: 'images/photo-1554519515-242161756769.jpg',
  blog02: 'images/photo-1503951914875-452162b0f3f1.jpg',
  blog03: 'images/photo-1605497788044-5a32c7078486.jpg',
  blog04: 'images/photo-1571875257727-256c39da42af.jpg',
  blog05: 'images/photo-1633681926022-84c23e8cb2d6.jpg',
  blog06: 'images/photo-1605497788044-5a32c7078486.jpg',
  blog07: 'images/photo-1620331311520-246422fd82f9.jpg',
  blog08: 'images/photo-1582095133179-bfd08e2fc6b3.jpg',
  blog09: 'https://images.unsplash.com/photo-1605980625600-88d5b8d6da64?w=1200&q=80&auto=format&fit=crop',
  blog10: 'images/photo-1521590832167-7bcbfaa6381f.jpg',
  blog11: 'images/photo-1559599101-f09722fb4948.jpg',
  blog12: 'https://images.unsplash.com/photo-1610910283335-d11d2c0aa72c?w=1200&q=80&auto=format&fit=crop'
};

/* ============================================================
   SERVICIOS
   ============================================================ */
const CATEGORIES = {
  cortes:       { label: 'Cortes', sub: 'corte editorial · barbería · niños' },
  color:        { label: 'Color', sub: 'balayage · mechas · tonal · creativo' },
  tratamientos: { label: 'Tratamientos', sub: 'olaplex · K18 · botox vegetal' },
  eventos:      { label: 'Eventos', sub: 'novias · pasarela · editorial' },
  asesoria:     { label: 'Estilismo', sub: 'imagen · cambios · plan capilar' }
};

const SERVICES = [
  /* ============ CORTES ============ */
  {
    id: 'corte-editorial', cat: 'cortes',
    name: 'Corte editorial',
    desc: 'Cortes diseñados con precisión milimétrica. Estudio de rostro, textura y movimiento.',
    price: '€55', unit: 'desde', time: '60 min', freq: 'Cada 6 — 8 semanas',
    img: IMG.svcCorte,
    lead: 'Un corte que entiende tu cara, tu rutina y tu textura. Empezamos con una conversación de 10 minutos: cómo te peinas, cuánto tiempo dedicas, qué referencias miras. De ahí sale un corte hecho a tu medida, no uno de catálogo.',
    includes: [['Diagnóstico capilar','10 min'],['Lavado con productos veganos','incluido'],['Corte personalizado a mano','40 min'],['Peinado & estilismo final','10 min']],
    home: true
  },
  {
    id: 'corte-caballeros', cat: 'cortes',
    name: 'Corte caballeros',
    desc: 'Cortes clásicos y contemporáneos para hombre. Barbería tradicional con toalla caliente.',
    price: '€38', unit: 'desde', time: '45 min', freq: 'Cada 4 semanas',
    img: IMG.svcCaballeros,
    lead: 'Side parts, fades, undercuts y cortes editoriales. Servicio completo con lavado, perfilado de barba opcional y ritual de toalla caliente al estilo barbería.',
    includes: [['Lavado & masaje craneal','10 min'],['Corte personalizado','25 min'],['Perfilado barba (opcional)','+€12'],['Toalla caliente & final','10 min']],
    home: true
  },
  {
    id: 'corte-ninos', cat: 'cortes',
    name: 'Corte niños',
    desc: 'Atención paciente a partir de 4 años. Sillón de coche, lápices y sin prisas.',
    price: '€22', unit: 'hasta 12 años', time: '30 min', freq: 'Cada 6 semanas',
    img: IMG.svcNinos,
    lead: 'Pensado para que vengan tranquilos: sillón de coche, lápices, mini-tablet con dibujos y un equipo que sabe que cada niño tiene su ritmo. La primera vez es siempre gratis.',
    includes: [['Recibimiento y juego','5 min'],['Lavado en sillón espuma','5 min'],['Corte adaptado a edad','15 min'],['Foto de recuerdo (opcional)','incluido']]
  },
  {
    id: 'arreglo-barba', cat: 'cortes',
    name: 'Perfilado de barba',
    desc: 'Diseño y mantenimiento de barba. Toalla caliente, navaja y aceites esenciales.',
    price: '€20', unit: 'desde', time: '30 min', freq: 'Cada 2 — 3 semanas',
    img: IMG.svcBarba,
    lead: 'Trabajo a navaja con aceites pre-shave, toalla caliente y fijación con bálsamo natural. Para diseño completo recomendamos primera visita de 45 minutos.',
    includes: [['Toalla caliente pre-shave','5 min'],['Diseño y perfilado','15 min'],['Apurado a navaja','5 min'],['Bálsamo & aftershave','5 min']]
  },

  /* ============ COLOR ============ */
  {
    id: 'balayage', cat: 'color',
    name: 'Color & balayage',
    desc: 'Mechas a mano alzada, coberturas naturales y trabajos de color creativos. Sin amoníaco.',
    price: '€120', unit: 'desde', time: '2 — 3 h', freq: 'Cada 10 — 14 semanas',
    img: IMG.svcBalayage,
    lead: 'Color que parece nacido de tu cabello. Trabajamos balayage a mano alzada, baby lights y coberturas tonales con marcas certificadas vegan, sin amoníaco ni aceleradores agresivos. Cada sesión incluye Olaplex N° 2 de regalo.',
    includes: [['Test de mechón previo','15 min'],['Aplicación a mano alzada','90 — 120 min'],['Tratamiento Olaplex Nº 2','incluido'],['Corte de puntas & peinado','incluido']],
    home: true
  },
  {
    id: 'baby-lights', cat: 'color',
    name: 'Mechas baby lights',
    desc: 'Iluminaciones finas y graduales que imitan el reflejo del sol. Mantenimiento mínimo.',
    price: '€140', unit: 'desde', time: '2,5 h', freq: 'Cada 4 — 5 meses',
    img: IMG.svcMechas,
    lead: 'La técnica más fina: mechas micro de 1-2 mm aplicadas en zonas estratégicas para crear luz natural. Ideal para morenas que quieren iluminación sin compromiso.',
    includes: [['Diseño facial & mapeo','15 min'],['Aplicación micro a micro','120 min'],['Tonalizado pasarela','15 min'],['Olaplex N° 2 & secado','incluido']]
  },
  {
    id: 'cobertura-tonal', cat: 'color',
    name: 'Cobertura tonal sin amoníaco',
    desc: 'Color uniforme con bases vegetales. Cubre canas y aporta brillo sin agresión.',
    price: '€55', unit: 'desde', time: '90 min', freq: 'Cada 4 — 5 semanas',
    img: IMG.svcCobertura,
    lead: 'Trabajamos con Davines View y similares: 100 % sin amoníaco, sin parabenos, con extractos botánicos. Cobertura del 100 % de canas con resultado natural y reflejos personalizados.',
    includes: [['Estudio de tono base','10 min'],['Aplicación raíz a puntas','45 min'],['Tiempo de proceso','25 min'],['Lavado & peinado','10 min']]
  },
  {
    id: 'color-creativo', cat: 'color',
    name: 'Color creativo / fashion',
    desc: 'Tonos pastel, neón, joya. Decoloración, pigmentación y mantenimiento personalizado.',
    price: '€180', unit: 'desde', time: '4 — 5 h', freq: 'Cada 6 — 8 semanas',
    img: IMG.svcCreativo,
    lead: 'Si vas a salir de tu zona de confort, mejor hacerlo con quien sabe. Decoloración profesional con bonders, neutralizado, pigmentación con tintes de pelo profesional y plan de mantenimiento detallado.',
    includes: [['Test de elasticidad','15 min'],['Decoloración con bonder','120 min'],['Aplicación pigmento fashion','60 min'],['Tratamiento sellado & shampoo de mantenimiento','incluido']]
  },

  /* ============ TRATAMIENTOS ============ */
  {
    id: 'olaplex', cat: 'tratamientos',
    name: 'Tratamiento Olaplex completo',
    desc: 'Reparación profunda de los enlaces de disulfuro. Para cabello dañado por color.',
    price: '€60', unit: 'desde', time: '60 min', freq: 'Mensual',
    img: IMG.svcOlaplex,
    lead: 'El protocolo de 5 pasos completo, no solo el N° 2 que te ponen a la salida. Reparación real de los enlaces internos del cabello con tiempo de actuación calibrado y sellado térmico final.',
    includes: [['Diagnóstico de fibra','10 min'],['Olaplex N°1 + N°2 con tiempo de pose','25 min'],['Olaplex N°3 + N°4 + N°5','15 min'],['Secado & sellado térmico','10 min']],
    home: true
  },
  {
    id: 'k18', cat: 'tratamientos',
    name: 'K18 reparación molecular',
    desc: 'Péptido bioactivo que reconstruye el cabello dañado. Resultado desde el primer uso.',
    price: '€45', unit: 'desde', time: '45 min', freq: 'Cada 4 — 6 lavados',
    img: IMG.svcK18,
    lead: 'El péptido más comentado de los últimos años — reconstruye queratina dañada en 4 minutos. Lo combinamos con hidratación profunda para sellar el resultado.',
    includes: [['Lavado pre-clarificante','10 min'],['Aplicación K18 leave-in','15 min'],['Mascarilla hidratante a medida','15 min'],['Peinado al aire','5 min']]
  },
  {
    id: 'botox-capilar', cat: 'tratamientos',
    name: 'Botox capilar vegetal',
    desc: 'Sellado de cutícula con keratina vegetal. Brillo cristal y reducción de encrespamiento.',
    price: '€85', unit: 'desde', time: '90 min', freq: 'Cada 3 meses',
    img: IMG.svcBotox,
    lead: 'Versión 100 % vegetal del clásico botox capilar: sin formol, sin parabenos. Reduce el volumen, sella la fibra y deja brillo cristalino durante 12 — 14 lavados.',
    includes: [['Lavado clarificante 2 veces','15 min'],['Aplicación con tiempo de pose','40 min'],['Sellado térmico a 200 °C','25 min'],['Peinado final','10 min']]
  },
  {
    id: 'hidratacion', cat: 'tratamientos',
    name: 'Hidratación profunda',
    desc: 'Mascarilla a medida con masaje craneal. Para devolver elasticidad y brillo.',
    price: '€35', unit: 'desde', time: '40 min', freq: 'Mensual',
    img: IMG.svcHidrata,
    lead: 'El cuidado básico que todos deberíamos hacer cada mes. Diagnóstico previo para elegir entre hidratación, nutrición o reestructuración, y un masaje craneal de 10 minutos como ritual.',
    includes: [['Diagnóstico de fibra','5 min'],['Mascarilla a medida','20 min'],['Masaje craneal con aceites','10 min'],['Secado natural & sellado','5 min']]
  },

  /* ============ EVENTOS ============ */
  {
    id: 'novias', cat: 'eventos',
    name: 'Novias — pack completo',
    desc: 'Peinados editoriales con prueba previa. Recogidos, semirrecogidos y trenzas escultóricas.',
    price: '€280', unit: 'pack', time: '2 prueba + día', freq: 'Reserva con 3 meses',
    img: IMG.svcNovias,
    lead: 'Un acompañamiento en dos citas: una prueba con fotografías y un día del evento sin prisas, en el estudio o donde nos pidas. Trabajamos con flores naturales, joyería capilar y velos.',
    includes: [['Cita previa & moodboard','60 min'],['Prueba de peinado con fotografía','90 min'],['Día del evento — peinado','90 min'],['Maquillaje (opcional)','+€110']],
    home: true
  },
  {
    id: 'evento-especial', cat: 'eventos',
    name: 'Eventos especiales',
    desc: 'Peinado para invitada de boda, gala, fiesta o celebración. Sin prueba previa.',
    price: '€85', unit: 'desde', time: '60 min', freq: 'Reserva con 2 semanas',
    img: IMG.svcEvento,
    lead: 'Para invitadas de boda, gala, premios o celebraciones que no necesitan prueba previa. Llega con referencia visual y salimos con el peinado listo en una hora.',
    includes: [['Lavado opcional','+€10'],['Peinado con referencia','45 min'],['Joyería de pelo (opcional)','+€20'],['Fijación pasarela','15 min']]
  },
  {
    id: 'sesion-editorial', cat: 'eventos',
    name: 'Sesión foto / editorial',
    desc: 'Peinado de pasarela y editorial. Trabajamos con fotógrafos y agencias.',
    price: '€220', unit: 'media jornada', time: '4 h', freq: 'Reserva por proyecto',
    img: IMG.svcEditorial,
    lead: 'Si tienes una sesión de fotos, una pasarela o una campaña en preparación, podemos crear el styling capilar contigo desde el moodboard. Trabajamos en estudio, en exteriores y en producción.',
    includes: [['Moodboard previo','incluido'],['Hasta 4 cambios de look','—'],['Retoques en plató','incluido'],['Asistente (opcional)','+€80']]
  },

  /* ============ ASESORÍA ============ */
  {
    id: 'asesoria', cat: 'asesoria',
    name: 'Asesoría de imagen',
    desc: 'Sesión de 90 minutos para repensar tu look: corte, color, rutina y producto. Sin tijeras.',
    price: '€90', unit: 'sesión única', time: '90 min', freq: 'Una vez al año',
    img: IMG.svcAsesoria,
    lead: 'Sin tijeras, sin color. Una conversación honesta sobre tu cabello, tu estilo y tu rutina. Salimos con un plan a 6 meses, una lista de productos y un par de referencias visuales.',
    includes: [['Análisis de cabello & rostro','20 min'],['Moodboard a medida','30 min'],['Plan a 6 meses','20 min'],['Lista de producto recomendado','incluido']],
    home: true
  },
  {
    id: 'cambio-radical', cat: 'asesoria',
    name: 'Cambio de imagen — consulta + plan',
    desc: 'Para quien viene con muchas dudas. Plan en dos sesiones para no improvisar.',
    price: '€140', unit: 'pack 2 sesiones', time: '2 × 60 min', freq: 'Una vez',
    img: IMG.svcCambio,
    lead: 'Para los que llevan tiempo dándole vueltas a un cambio importante. Dos sesiones separadas por una semana: una para entender, otra para decidir. Con descuento si después haces el cambio aquí.',
    includes: [['Sesión 1 — diagnóstico & moodboard','60 min'],['Sesión 2 — decisión & calendario','60 min'],['Bono 50 € canjeable en el cambio','incluido'],['Acompañamiento por WhatsApp','incluido']]
  }
];

/* ============================================================
   PACKS / TARJETAS REGALO destacados
   ============================================================ */
const PACKS = [
  {
    name: 'Tarjeta Regalo · Esencial',
    price: '€60',
    duration: 'Vale 6 meses',
    items: ['Lavado, corte y peinado', 'Diagnóstico capilar', 'Recomendación producto', 'En tarjeta física o digital'],
    cta: 'Comprar tarjeta'
  },
  {
    name: 'Pack Mareva · Color & cuidado',
    price: '€180',
    duration: 'Vale 8 meses',
    featured: true,
    tag: 'Más vendido',
    items: ['Color o balayage', 'Tratamiento Olaplex completo', 'Corte de puntas & peinado', 'Producto Davines de regalo'],
    cta: 'Comprar pack'
  },
  {
    name: 'Pack Novia · Pre + Día',
    price: '€320',
    duration: 'Vale 12 meses',
    items: ['Cita previa & moodboard', 'Prueba con fotografías', 'Peinado el día del evento', 'Maquillaje 50 % descuento'],
    cta: 'Reservar pack'
  }
];

const ADDONS = [
  { name: 'Tratamiento brillo express', price: '+€18', desc: 'Sellado de cutícula con aceite ligero, ideal antes de un evento.' },
  { name: 'Masaje craneal con aceites', price: '+€12', desc: '10 minutos de masaje sueco con aceites de jojoba y coco.' },
  { name: 'Servicio a domicilio', price: '+€60', desc: 'Llevamos el estudio a casa. Mínimo dos servicios por desplazamiento.' },
  { name: 'Joyería capilar premium', price: '+€25', desc: 'Pinzas, peinetas y horquillas vintage para evento o sesión.' },
  { name: 'Foto profesional after', price: '+€40', desc: 'Tres fotografías editadas del resultado para tus redes.' },
  { name: 'Champú y mascarilla a medida', price: '€32', desc: 'Producto formulado en estudio con tu diagnóstico capilar.' }
];

/* ============================================================
   EQUIPO
   ============================================================ */
const TEAM = [
  {
    name: 'Mareva Soto',
    role: 'Fundadora · Directora creativa',
    bio: 'Estudió en la academia Vidal Sassoon de Londres y ha trabajado con Vogue, Harper\'s Bazaar y Mango. Cree que el corte es escultura y que la conversación previa vale tanto como las tijeras.',
    img: IMG.team02,
    tags: ['Cortes editoriales','Cambios radicales','Asesoría']
  },
  {
    name: 'Lucas Alarcón',
    role: 'Senior stylist',
    bio: 'Catorce años cortando y educando. Lleva la formación interna del estudio y se forma cada año en Tokio con la escuela Crew Hair Design.',
    img: IMG.team04,
    tags: ['Cortes editoriales','Caballeros','Master class']
  },
  {
    name: 'Naia Etxeberri',
    role: 'Color master',
    bio: 'Certificada Davines, Wella Master Color Expert y Olaplex Educator. Especialista en balayage a mano alzada y trabajos cromáticos sobre canas.',
    img: IMG.team06,
    tags: ['Balayage','Color creativo','Cubrir canas']
  },
  {
    name: 'Olivia Ríos',
    role: 'Eventos & novias',
    bio: 'Peluquera y maquilladora con un pie en moda y otro en bodas. Más de 200 novias acompañadas con su método "una conversación por mes" durante el año previo.',
    img: IMG.team03,
    tags: ['Recogidos','Novias','Eventos']
  },
  {
    name: 'Marcos Reyes',
    role: 'Barbería contemporánea',
    bio: 'Antes peluquero de plató en RTVE, ahora dedicado a redefinir la barbería: sin clichés, con cortes que duran y el cuidado de un spa.',
    img: IMG.team05,
    tags: ['Caballeros','Barba','Toalla caliente']
  },
  {
    name: 'Sofía Linde',
    role: 'Tratamientos & diagnóstico',
    bio: 'Tricóloga certificada por la Trichological Society de Londres. Diseña los protocolos de tratamiento del estudio y la línea de productos propia.',
    img: IMG.team01,
    tags: ['Tricología','Olaplex','K18']
  }
];

/* ============================================================
   TIMELINE / HISTORIA
   ============================================================ */
const TIMELINE = [
  { year: '2014', title: 'Apertura del primer estudio', text: 'Mareva abre en un piso reformado del barrio de Salamanca con dos sillones y una idea: peluquería sin prisas.' },
  { year: '2017', title: 'Equipo certificado Davines & Olaplex', text: 'Toda la plantilla pasa por la formación oficial. Empezamos a trabajar exclusivamente con marcas vegan y bio-certificadas.' },
  { year: '2019', title: 'Salón del Año por Marie Claire', text: 'Reconocimiento a la excelencia del color y al concepto de "slow hair". Reportaje a doble página en la edición de septiembre.' },
  { year: '2021', title: 'Inauguración de la segunda planta', text: 'Abrimos un laboratorio capilar abierto al público: tricología, microscopía y diagnóstico avanzado en planta superior.' },
  { year: '2023', title: 'Línea propia "Mareva Care"', text: 'Lanzamos cinco productos formulados en colaboración con un laboratorio de Florencia. Hoy disponibles en cuarenta puntos de venta en España.' },
  { year: '2025', title: 'Top 50 Salons of Europe', text: 'Por segundo año consecutivo, listados entre los 50 mejores salones del continente por la guía profesional Modern Salon Europe.' }
];

/* ============================================================
   FILOSOFÍA / PILARES
   ============================================================ */
const PILLARS = [
  { num: '01', title: 'Slow hair', text: 'Reservas espaciadas, conversaciones largas y un equipo que solo lleva tres clientas en paralelo. Sin prisas.' },
  { num: '02', title: 'Vegan first', text: 'Cero amoníaco, cero parabenos, cero sulfatos. Trabajamos solo con marcas certificadas vegan y crueltyfree.' },
  { num: '03', title: 'Diagnóstico previo', text: 'Cada cita empieza con 10 minutos de diagnóstico. Si no es lo que necesitas, te lo decimos.' },
  { num: '04', title: 'Formación continua', text: 'Cierre del estudio dos semanas al año para que el equipo se forme en Londres, Tokio y Milán.' }
];

/* ============================================================
   PREMIOS
   ============================================================ */
const AWARDS = [
  { year: '2025', title: 'Top 50 Salons of Europe', org: 'Modern Salon Europe' },
  { year: '2024', title: 'Mejor Color Natural', org: 'Vogue España · Beauty Awards' },
  { year: '2023', title: 'Best Bridal Salon', org: 'AllureES Awards' },
  { year: '2022', title: 'Industry Innovation Award', org: 'Davines Sustainable Beauty' },
  { year: '2021', title: 'Best Color Salon', org: 'Vogue España' },
  { year: '2019', title: 'Salón del Año', org: 'Marie Claire España' }
];

const BRANDS = [
  { name: 'Olaplex',      use: 'Reparación & bonding capilar' },
  { name: 'K18',          use: 'Tratamiento regenerador de queratina' },
  { name: 'Davines',      use: 'Color, cuidado & styling sostenible' },
  { name: 'Oribe',        use: 'Finishing & fijación de alta gama' },
  { name: 'Sisley Paris', use: 'Tratamientos de lujo para el cuero cabelludo' },
  { name: 'Kérastase',    use: 'Rituales de hidratación y fuerza' },
];

/* ============================================================
   GALERÍA
   ============================================================ */
const GALLERY = [
  { src: IMG.gal01, cat: 'cortes',   title: 'Bob asimétrico' },
  { src: IMG.gal02, cat: 'color',    title: 'Balayage caramelo' },
  { src: IMG.gal03, cat: 'tratamientos', title: 'Brillo cristal post K18' },
  { src: IMG.gal04, cat: 'novias',   title: 'Recogido floral' },
  { src: IMG.gal05, cat: 'hombre',   title: 'Side part clásico' },
  { src: IMG.gal06, cat: 'eventos',  title: 'Peinado de gala' },
  { src: IMG.gal07, cat: 'cortes',   title: 'Long bob con onda' },
  { src: IMG.gal08, cat: 'color',    title: 'Mechas baby lights' },
  { src: IMG.gal09, cat: 'cortes',   title: 'Editorial pasarela' },
  { src: IMG.gal10, cat: 'color',    title: 'Color creativo cobre' },
  { src: IMG.gal11, cat: 'tratamientos', title: 'Botox capilar vegetal' },
  { src: IMG.gal12, cat: 'hombre',   title: 'Perfilado de barba' },
  { src: IMG.gal13, cat: 'cortes',   title: 'Pixie cut moderno' },
  { src: IMG.gal14, cat: 'novias',   title: 'Semirrecogido novia' },
  { src: IMG.gal15, cat: 'tratamientos', title: 'Hidratación profunda' },
  { src: IMG.gal16, cat: 'color',    title: 'Cobertura tonal' },
  { src: IMG.gal17, cat: 'tratamientos', title: 'Olaplex completo' },
  { src: IMG.gal18, cat: 'eventos',  title: 'Trenza escultórica' },
  { src: IMG.gal19, cat: 'cortes',   title: 'Capa textura suave' },
  { src: IMG.gal20, cat: 'novias',   title: 'Coleta baja con velo' },
  { src: IMG.gal21, cat: 'color',    title: 'Rubio platino' },
  { src: IMG.gal22, cat: 'eventos',  title: 'Recogido lateral' },
  { src: IMG.gal23, cat: 'cortes',   title: 'Long layers' },
  { src: IMG.gal24, cat: 'cortes',   title: 'Studio shoot' }
];

const GALLERY_FILTERS = [
  { id: 'all',           label: 'Todo' },
  { id: 'cortes',        label: 'Cortes' },
  { id: 'color',         label: 'Color' },
  { id: 'tratamientos',  label: 'Tratamientos' },
  { id: 'novias',        label: 'Novias' },
  { id: 'eventos',       label: 'Eventos' },
  { id: 'hombre',        label: 'Caballeros' }
];

/* ============================================================
   BLOG (12 artículos)
   ============================================================ */
const POSTS = [
  { id: 'balayage-favorece',  date: '06 May 2026', read: '5 min', cat: 'Color',
    title: 'Cómo elegir el balayage que de verdad te favorece',
    intro: 'Tono de piel, hábitos de lavado, mantenimiento. Una guía sin tecnicismos para entender qué pedirle a tu colorista la próxima vez.',
    img: IMG.blog01 },
  { id: 'ritual-lunes',       date: '22 Abr 2026', read: '7 min', cat: 'Cuidado',
    title: 'El ritual de los lunes: recuperar el pelo después del verano',
    intro: 'Cuatro pasos sencillos, productos que ya tienes en casa, y un par de mascarillas que valen su precio. Sin promesas mágicas.',
    img: IMG.blog02 },
  { id: 'flequillos-2026',    date: '14 Abr 2026', read: '4 min', cat: 'Tendencias',
    title: 'Los flequillos que veremos esta primavera (y los que no)',
    intro: 'Volvemos al curtain bangs, pero con una vuelta de tuerca. Repasamos las cinco variantes que estamos cortando ahora mismo.',
    img: IMG.blog03 },
  { id: 'lavar-cabello',      date: '02 Abr 2026', read: '6 min', cat: 'Rutinas',
    title: 'Cuántas veces lavar el cabello según tu textura',
    intro: 'No, no es cada día. Y no, tampoco una vez por semana para todas. Una guía honesta con cinco tipos de cabello y su cadencia ideal.',
    img: IMG.blog04 },
  { id: 'olaplex-vs-k18',     date: '21 Mar 2026', read: '8 min', cat: 'Tratamientos',
    title: '¿Olaplex o K18? Diferencias reales más allá del marketing',
    intro: 'Ambos prometen reparar la fibra capilar pero actúan de forma muy distinta. Lo desmenuzamos con ejemplos reales del estudio.',
    img: IMG.blog05 },
  { id: 'cortes-bajo-mantenimiento', date: '10 Mar 2026', read: '5 min', cat: 'Cortes',
    title: 'Cortes que no necesitan retoque cada mes',
    intro: 'Para quienes valoran su tiempo y su cartera. Cinco cortes que mantienen la forma durante 3-4 meses sin perder estilo.',
    img: IMG.blog06 },
  { id: 'color-sin-amoniaco', date: '24 Feb 2026', read: '6 min', cat: 'Color',
    title: 'Color natural sin amoníaco: cómo funciona realmente',
    intro: 'Te explicamos la química del color vegetal, qué se puede y qué no, y por qué no todos los "sin amoníaco" son iguales.',
    img: IMG.blog07 },
  { id: '5-errores-cabello',  date: '08 Feb 2026', read: '4 min', cat: 'Cuidado',
    title: '5 errores que dañan tu cabello sin que te des cuenta',
    intro: 'Toalla muy fuerte, calor sin protector, coletas siempre en el mismo sitio. Pequeñas costumbres con gran impacto.',
    img: IMG.blog08 },
  { id: 'rizado-rutina',      date: '20 Ene 2026', read: '7 min', cat: 'Rutinas',
    title: 'Cabello rizado: la rutina que sí funciona',
    intro: 'Plopping, scrunching, leave-in. Te contamos qué orden funciona, qué tipos de rizo necesitan qué, y los productos que probamos.',
    img: IMG.blog09 },
  { id: 'novias-2026',        date: '05 Ene 2026', read: '6 min', cat: 'Eventos',
    title: 'Peinados de novia: tendencias 2026',
    intro: 'Menos volumen, más naturalidad. Trenzas suaves, recogidos bajos y mucha atención al cabello que se sale "casualmente".',
    img: IMG.blog10 },
  { id: 'encrespamiento',     date: '18 Dic 2025', read: '5 min', cat: 'Producto',
    title: 'Encrespamiento: 4 productos que probamos esta semana',
    intro: 'Frizz control honesto: cómo se han comportado en cabellos rizados, ondulados y lisos finos. Con tachones a uno de los favoritos.',
    img: IMG.blog11 },
  { id: 'caida-otono',        date: '02 Dic 2025', read: '6 min', cat: 'Tricología',
    title: 'Caída de pelo otoñal: cuándo preocuparse y cuándo no',
    intro: 'Es normal perder más pelo entre octubre y diciembre. Pero no todo es estacional. Cuándo pedir cita con el tricólogo.',
    img: IMG.blog12 }
];

const POST_CATEGORIES = ['Todo','Color','Cortes','Cuidado','Tratamientos','Tendencias','Rutinas','Eventos','Producto','Tricología'];

/* ============================================================
   TESTIMONIOS (Google Reviews)
   ============================================================ */
const TESTIMONIALS = [
  { name: 'Sofía M.', initial: 'S', color:'#ea4335', date:'hace 2 semanas',
    text:'Llevaba años con miedo al cambio de color. En Mareva entendieron exactamente lo que quería sin que yo supiera explicarlo. El resultado fue increíble.' },
  { name: 'Carlos R.', initial: 'C', color:'#4285f4', date:'hace 1 mes',
    text:'Primer corte que me dura de verdad más de tres meses. La consulta previa marca una diferencia brutal. Nunca volveré a ir a otro sitio.' },
  { name: 'Elena V.', initial: 'E', color:'#34a853', date:'hace 2 meses',
    text:'La prueba de peinado de novia fue todo un acierto. Me vi en el espejo y supe que era lo que quería. El día de la boda, perfecto.' },
  { name: 'Marta L.', initial: 'M', color:'#9c27b0', date:'hace 3 meses',
    text:'Tenía el pelo muy dañado por el tinte en casa. Después del tratamiento K18 cambió completamente la textura. Lo noté desde el primer lavado.' },
  { name: 'Andrea F.', initial: 'A', color:'#f57c00', date:'hace 4 meses',
    text:'Nunca había tenido una asesoría de imagen. Salí con un plan real, referencias concretas y por primera vez entendí mi propio cabello.' },
  { name: 'Isabel G.', initial: 'I', color:'#00897b', date:'hace 5 meses',
    text:'El ambiente es especial. No hay prisa, te escuchan y el resultado habla por sí solo. Llevo dos años viniendo y no me planteo cambiar.' },
  { name: 'Lucía P.', initial: 'L', color:'#3949ab', date:'hace 6 meses',
    text:'Naia es un cerebro del color. Pedí un balayage natural y salí con luz, no con mechas. La diferencia con sitios anteriores: abismal.' },
  { name: 'Diego T.', initial: 'D', color:'#d81b60', date:'hace 7 meses',
    text:'Marcos me ha cambiado la barba. El ritual de toalla caliente parece una tontería hasta que lo pruebas. Ahora no puedo ir a otro sitio.' },
  { name: 'Patricia O.', initial: 'P', color:'#5d4037', date:'hace 8 meses',
    text:'Reservar siempre 3 semanas antes, pero merece la pena. La línea propia de productos es de las pocas que mantengo en mi rutina.' }
];

/* ============================================================
   FAQ (preguntas frecuentes)
   ============================================================ */
const FAQS = [
  { q: '¿Cuánto dura un balayage en condiciones normales?',
    a: 'Entre 10 y 14 semanas, dependiendo de la velocidad de crecimiento y los hábitos de lavado. Trabajamos con productos sin sulfatos para que el color se mantenga vivo más tiempo.' },
  { q: '¿Hace falta primera consulta antes de un cambio importante?',
    a: 'Si vas a hacer un cambio radical (color creativo, transformación de longitud), recomendamos la asesoría de 90 minutos. Para servicios habituales no es necesario.' },
  { q: '¿Qué productos usáis para el color sin amoníaco?',
    a: 'Trabajamos principalmente con Davines View y Wella Illumina. Ambas son líneas profesionales sin amoníaco, sin parabenos y certificadas vegan.' },
  { q: '¿Cuál es la política de cancelación?',
    a: 'Hasta 24 horas antes sin coste. Las cancelaciones con menos de 24 horas tienen un cargo del 30 %. No-show: cobro completo del servicio. Lo decimos al confirmar la cita.' },
  { q: '¿Aceptáis reservas para grupos?',
    a: 'Sí, para grupos de 4 a 8 personas (despedidas, cumpleaños, fotografías). Cerramos parte del estudio. Pídenos presupuesto a eventos@marevastudio.es' },
  { q: '¿Cuándo debo pedir cita para una boda?',
    a: 'Recomendamos reservar la prueba con 3 — 4 meses de antelación. Para temporadas altas (mayo a octubre) hasta 6 meses antes.' },
  { q: '¿Hay servicio a domicilio?',
    a: 'Sí, a partir de 2 servicios. Suplemento de 60 € por desplazamiento dentro de la M-30. Fuera consultar.' },
  { q: '¿Aceptáis tarjetas regalo?',
    a: 'Tenemos tarjetas físicas y digitales desde 60 €. Se compran online o en estudio. Vencen a los 12 meses.' },
  { q: '¿Tenéis parking propio?',
    a: 'No, pero tenemos convenio con el parking de Calle Castelló (3 min andando) con 50 % descuento por servicios desde 80 €.' },
  { q: '¿Es accesible para sillas de ruedas?',
    a: 'Sí, planta baja con acceso adaptado. Para servicios en planta superior, pídenos cita y reorganizamos para hacerlo abajo.' },
  { q: '¿Trabajáis con extensiones de cabello?',
    a: 'Trabajamos con extensiones tipo Great Lengths cosidas o adheridas con queratina. Solo con cabello natural y certificado de origen ético.' },
  { q: '¿Puedo llevar a mi hijo/a mientras me cortan?',
    a: 'Sí, tenemos zona de juegos y pinta-pintas para los más pequeños. Pídenos cita en horario amable (mañanas) si es la primera vez.' }
];

/* ============================================================
   HORARIOS
   ============================================================ */
const HOURS = [
  { day: 'Lunes',     hour: 'Cerrado',      closed: true,  small: 'Día de descanso' },
  { day: 'Martes',    hour: '10:00 — 21:00', small: 'Última cita 19:00' },
  { day: 'Miércoles', hour: '10:00 — 21:00', small: 'Última cita 19:00' },
  { day: 'Jueves',    hour: '10:00 — 21:00', small: 'Última cita 19:00' },
  { day: 'Viernes',   hour: '10:00 — 21:00', small: 'Última cita 19:00' },
  { day: 'Sábado',    hour: '10:00 — 19:00', small: 'Última cita 17:30' },
  { day: 'Domingo',   hour: 'Cerrado',      closed: true,  small: 'Eventos bajo petición' }
];
