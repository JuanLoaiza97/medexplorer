import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places = [

    // 🌙 VIDA NOCTURNA
    {
      id: 1,
      name: 'Provenza',
      lat: 6.209,
      lng: -75.567,
      location: 'El Poblado',
      address: 'Cra 35, El Poblado, Medellín',
      rating: 4.7,
      image: 'assets/images/provenza.jpg',

      description: 'Zona exclusiva de vida nocturna con bares premium, rooftops y restaurantes internacionales. Es uno de los sectores más modernos y visitados por turistas en Medellín.',
      tags: ['Vida nocturna', 'Gastronomía', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Provenza pasó de ser una zona residencial tranquila a convertirse en uno de los principales epicentros de entretenimiento de Medellín.
      Su crecimiento se dio gracias al auge del turismo internacional y al desarrollo de propuestas gastronómicas innovadoras.
      Hoy es considerada una de las zonas más exclusivas de la ciudad.
      `,

      facts: [
        'Alta presencia de turistas internacionales.',
        'Gran cantidad de rooftops y bares premium.',
        'Zona muy fotografiada.',
        'Ambiente cosmopolita.'
      ],

      price: '$40.000 - $120.000 COP',

      comments: [
        { user: 'Laura', text: 'El mejor ambiente nocturno 🔥' },
        { user: 'Andrés', text: 'Perfecto para salir con amigos.' }
      ]
    },

    {
      id: 2,
      name: 'Parque Lleras',
      lat: 6.208,
      lng: -75.565,
      location: 'El Poblado',
      address: 'Cra 38 #9A-10, Medellín',
      rating: 4.6,
      image: 'assets/images/lleras.jpg',

      description: 'El corazón de la vida nocturna en Medellín, rodeado de bares, discotecas y restaurantes.',
      tags: ['Vida nocturna', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      El Parque Lleras ha sido históricamente el punto de encuentro para la vida nocturna en Medellín.
      Con el paso del tiempo se convirtió en una referencia internacional para turistas que buscan fiesta.
      `,

      facts: [
        'Zona más famosa de fiesta.',
        'Gran diversidad de bares.',
        'Ambiente internacional.',
        'Alta actividad nocturna.'
      ],

      price: '$30.000 - $100.000',

      comments: [
        { user: 'Camila', text: 'Siempre hay ambiente.' },
        { user: 'David', text: 'Muy turístico pero divertido.' }
      ]
    },

    {
      id: 3,
      name: 'La 70',
      lat: 6.244,
      lng: -75.590,
      location: 'Laureles',
      address: 'Av. 70, Medellín',
      rating: 4.5,
      image: 'assets/images/la70.jpg',

      description: 'Avenida tradicional con bares de música en vivo y ambiente local paisa.',
      tags: ['Vida nocturna', 'Cultura'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      La Avenida 70 ha sido durante décadas un punto clave de entretenimiento para los locales.
      A diferencia de otras zonas, mantiene una esencia más auténtica y cultural.
      `,

      facts: [
        'Música en vivo.',
        'Ambiente local.',
        'Precios más accesibles.',
        'Ideal para bailar.'
      ],

      price: '$20.000 - $60.000',

      comments: [
        { user: 'Sofía', text: 'Muy auténtico 💃' }
      ]
    },

    {
      id: 4,
      name: 'Vintrash Bar',
      lat: 6.2095,
      lng: -75.566,
      location: 'Poblado',
      address: 'Cra 36 #10-42, Medellín',
      rating: 4.4,
      image: 'assets/images/vintrash.jpg',

      description: 'Bar temático con decoración extravagante, ideal para una experiencia diferente.',
      tags: ['Vida nocturna', 'Entretenimiento'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Vintrash se posicionó como un bar alternativo en Medellín,
      destacándose por su estética llamativa y ambiente juvenil.
      `,

      facts: [
        'Decoración única.',
        'Música alternativa.',
        'Ambiente juvenil.'
      ],

      price: '$30.000 - $80.000',

      comments: [
        { user: 'Juan', text: 'Muy diferente 🔥' }
      ]
    },

    {
      id: 5,
      name: 'Salon Amador',
      lat: 6.210,
      lng: -75.567,
      location: 'Poblado',
      address: 'Cra 34 #7-159, Medellín',
      rating: 4.3,
      image: 'assets/images/amador.jpg',

      description: 'Club de música electrónica con DJs internacionales y ambiente underground.',
      tags: ['Vida nocturna', 'Música'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Salon Amador es uno de los referentes de música electrónica en Medellín,
      con presentaciones de artistas internacionales.
      `,

      facts: [
        'Música electrónica.',
        'Eventos internacionales.',
        'Sonido profesional.'
      ],

      price: '$50.000+',

      comments: [
        { user: 'Diego', text: 'Top electrónica 🎧' }
      ]
    },

    // 🌿 NATURALEZA
    {
      id: 6,
      name: 'Parque Arví',
      lat: 6.270,
      lng: -75.500,
      location: 'Santa Elena',
      address: 'Vía Santa Elena, Medellín',
      rating: 4.8,
      image: 'assets/images/arvi.jpg',

      description: 'Reserva natural ideal para desconectarse de la ciudad.',
      tags: ['Naturaleza', 'Aventura', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      El Parque Arví es una reserva ecológica protegida que promueve el turismo sostenible.
      Se ha convertido en un espacio clave para conectar con la naturaleza.
      `,

      facts: [
        'Acceso en metrocable.',
        'Senderos ecológicos.',
        'Gran biodiversidad.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Mateo', text: 'Muy relajante 🌿' }
      ]
    },

    {
      id: 7,
      name: 'Cerro Nutibara',
      lat: 6.244,
      lng: -75.580,
      location: 'Centro',
      address: 'Cerro Nutibara, Medellín',
      rating: 4.6,
      image: 'assets/images/nutibara.jpg',

      description: 'Cerro con vista panorámica de la ciudad y hogar del Pueblito Paisa.',
      tags: ['Naturaleza', 'Cultura', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Es uno de los cerros tutelares de Medellín y un símbolo cultural de la ciudad.
      En su cima se construyó el Pueblito Paisa.
      `,

      facts: [
        'Vista 360°.',
        'Acceso fácil.',
        'Zona turística.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Luisa', text: 'La vista es increíble 📸' }
      ]
    },

    {
      id: 8,
      name: 'Jardín Botánico',
      lat: 6.270,
      lng: -75.563,
      location: 'Norte',
      address: 'Cl. 73 #51D-14, Medellín',
      rating: 4.7,
      image: 'assets/images/botanico.jpg',

      description: 'Espacio natural con gran diversidad de flora y arquitectura icónica.',
      tags: ['Naturaleza', 'Cultura'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      El Jardín Botánico ha sido un espacio clave para la conservación ambiental
      y la educación en Medellín.
      `,

      facts: [
        'Orquideorama.',
        'Eventos culturales.',
        'Zona tranquila.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Ana', text: 'Muy bonito y tranquilo 🌿' }
      ]
    },

    {
      id: 9,
      name: 'Parque Explora',
      lat: 6.268,
      lng: -75.565,
      location: 'Norte',
      address: 'Cra 52 #73-75, Medellín',
      rating: 4.5,
      image: 'assets/images/explora.jpg',

      description: 'Parque interactivo de ciencia y tecnología.',
      tags: ['Cultura', 'Educación'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Parque Explora fue creado para fomentar el aprendizaje interactivo
      en ciencia y tecnología.
      `,

      facts: [
        'Acuario.',
        'Exposiciones.',
        'Experiencias educativas.'
      ],

      price: '$25.000',

      comments: [
        { user: 'Carlos', text: 'Muy educativo 👌' }
      ]
    },

    {
      id: 10,
      name: 'Ecoparque El Salado',
      lat: 6.170,
      lng: -75.600,
      location: 'Envigado',
      address: 'Envigado, Antioquia',
      rating: 4.6,
      image: 'assets/images/salado.jpg',

      description: 'Espacio natural con senderos, cascadas y aire puro.',
      tags: ['Naturaleza', 'Aventura'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      El Ecoparque El Salado es un espacio de conservación natural
      muy visitado por locales para actividades ecológicas.
      `,

      facts: [
        'Cascadas.',
        'Senderismo.',
        'Zona ecológica.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Mateo', text: 'Perfecto para desconectar 🌿' }
      ]
    },
        // 🎨 CULTURA
    {
      id: 11,
      name: 'Comuna 13',
      lat: 6.2518,
      lng: -75.623,
      location: 'San Javier',
      address: 'Comuna 13, Medellín',
      rating: 4.9,
      image: 'assets/comuna13.jpg',

      description: 'Uno de los lugares más emblemáticos de Medellín por su transformación social, lleno de arte urbano, historia y cultura viva.',
      tags: ['Cultura', 'Historia', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      La Comuna 13 fue durante muchos años una de las zonas más conflictivas de Medellín debido a la violencia urbana.
      A partir de los años 2000, se implementaron proyectos de transformación social y urbana como las escaleras eléctricas.
      Hoy es un símbolo mundial de resiliencia y cambio a través del arte.
      `,

      facts: [
        'Escaleras eléctricas al aire libre.',
        'Arte urbano reconocido internacionalmente.',
        'Tours guiados culturales.',
        'Alta afluencia turística.'
      ],

      price: 'Gratis (Tours desde $30.000 COP)',

      comments: [
        { user: 'Juan', text: 'Una experiencia increíble 🔥' },
        { user: 'María', text: 'Muchísima historia.' }
      ]
    },

    {
      id: 12,
      name: 'Museo de Antioquia',
      lat: 6.251,
      lng: -75.563,
      location: 'Centro',
      address: 'Cra 52 #52-43, Medellín',
      rating: 4.7,
      image: 'assets/images/museo.jpg',

      description: 'Uno de los museos más importantes de Colombia, con obras de Fernando Botero.',
      tags: ['Cultura', 'Historia', 'Arte'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Fundado en 1881, es uno de los museos más antiguos del país.
      Alberga una de las colecciones más importantes de arte colombiano.
      `,

      facts: [
        'Obras de Botero.',
        'Ubicado en Plaza Botero.',
        'Arte nacional e internacional.'
      ],

      price: '$18.000',

      comments: [
        { user: 'Laura', text: 'Muy interesante 🎨' }
      ]
    },

    {
      id: 13,
      name: 'Plaza Botero',
      lat: 6.252,
      lng: -75.563,
      location: 'Centro',
      address: 'Cra 52 #52-43, Medellín',
      rating: 4.6,
      image: 'assets/images/botero.jpg',

      description: 'Plaza icónica con esculturas del maestro Fernando Botero.',
      tags: ['Cultura', 'Turismo', 'Arte'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      La plaza fue renovada para exhibir esculturas donadas por Botero.
      Hoy es uno de los puntos turísticos más fotografiados.
      `,

      facts: [
        '23 esculturas.',
        'Acceso gratuito.',
        'Zona turística.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Carlos', text: 'Muy fotogénico 📸' }
      ]
    },

    {
      id: 14,
      name: 'Teatro Metropolitano',
      lat: 6.244,
      lng: -75.573,
      location: 'Centro',
      address: 'Cl. 41 #57-30, Medellín',
      rating: 4.8,
      image: 'assets/images/teatro.jpg',

      description: 'Principal escenario cultural para eventos artísticos en Medellín.',
      tags: ['Cultura', 'Arte', 'Eventos'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Inaugurado en 1987, es el principal teatro de la ciudad.
      Recibe eventos internacionales de alto nivel.
      `,

      facts: [
        'Gran acústica.',
        'Eventos internacionales.',
        'Arquitectura moderna.'
      ],

      price: '$50.000+',

      comments: [
        { user: 'Andrés', text: 'Excelente acústica 🎭' }
      ]
    },

    {
      id: 15,
      name: 'Casa de la Memoria',
      lat: 6.245,
      lng: -75.570,
      location: 'Centro',
      address: 'Cl. 51 #36-66, Medellín',
      rating: 4.7,
      image: 'assets/images/memoria.jpg',

      description: 'Espacio de memoria histórica del conflicto colombiano.',
      tags: ['Cultura', 'Historia', 'Educación'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Este museo busca preservar la memoria del conflicto armado
      y promover la construcción de paz.
      `,

      facts: [
        'Entrada gratuita.',
        'Exposiciones interactivas.',
        'Enfoque social.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Ana', text: 'Muy reflexivo.' }
      ]
    },

    // 🍔 GASTRONOMÍA
    {
      id: 16,
      name: 'Mondongo’s',
      lat: 6.207,
      lng: -75.565,
      location: 'Poblado',
      address: 'Cra 38 #10A-34',
      rating: 4.8,
      image: 'assets/images/mondongos.jpg',

      description: 'Restaurante tradicional paisa reconocido por su mondongo.',
      tags: ['Gastronomía', 'Cultura'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Es uno de los restaurantes más tradicionales de Medellín,
      famoso por su receta auténtica.
      `,

      facts: [
        'Comida típica.',
        'Ambiente familiar.',
        'Muy popular.'
      ],

      price: '$30.000 - $70.000',

      comments: [
        { user: 'Camilo', text: 'Delicioso 🍽️' }
      ]
    },

    {
      id: 17,
      name: 'Carmen',
      lat: 6.209,
      lng: -75.567,
      location: 'Poblado',
      address: 'Cra 36 #10A-27',
      rating: 4.9,
      image: 'assets/images/carmen.jpg',

      description: 'Restaurante de alta cocina con reconocimiento internacional.',
      tags: ['Gastronomía', 'Lujo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Carmen ha posicionado a Medellín en el mapa gastronómico mundial
      con propuestas innovadoras.
      `,

      facts: [
        'Alta cocina.',
        'Ingredientes locales.',
        'Experiencia premium.'
      ],

      price: '$150.000+',

      comments: [
        { user: 'Valentina', text: 'Experiencia top ⭐' }
      ]
    },

    {
      id: 18,
      name: 'El Cielo',
      lat: 6.210,
      lng: -75.566,
      location: 'Poblado',
      address: 'Cra 40 #10A-22',
      rating: 4.9,
      image: 'assets/images/cielo.jpg',

      description: 'Experiencia gastronómica sensorial única.',
      tags: ['Gastronomía', 'Experiencia'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Fundado por el chef Juan Manuel Barrientos,
      es uno de los restaurantes más innovadores del país.
      `,

      facts: [
        'Experiencia sensorial.',
        'Reconocimiento internacional.',
        'Menú degustación.'
      ],

      price: '$250.000+',

      comments: [
        { user: 'Santiago', text: 'Una locura 🤯' }
      ]
    },

    {
      id: 19,
      name: 'Pergamino Café',
      lat: 6.208,
      lng: -75.567,
      location: 'Poblado',
      address: 'Cra 37 #8A-37',
      rating: 4.7,
      image: 'assets/images/pergamino.jpg',

      description: 'Cafetería especializada en café colombiano premium.',
      tags: ['Gastronomía', 'Café'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Pergamino ha impulsado el consumo de café de especialidad en Medellín,
      trabajando directamente con productores.
      `,

      facts: [
        'Café de origen.',
        'Ambiente moderno.',
        'Ideal para trabajar.'
      ],

      price: '$10.000 - $25.000',

      comments: [
        { user: 'Laura', text: 'El mejor café ☕' }
      ]
    },

    {
      id: 20,
      name: 'Hato Viejo',
      lat: 6.250,
      lng: -75.570,
      location: 'Centro',
      address: 'Cl. 16 #30-94',
      rating: 4.6,
      image: 'assets/images/hato.jpg',

      description: 'Restaurante tradicional de comida paisa.',
      tags: ['Gastronomía', 'Cultura'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Hato Viejo es un referente de la gastronomía tradicional,
      con décadas de historia en Medellín.
      `,

      facts: [
        'Bandeja paisa.',
        'Tradición.',
        'Ambiente típico.'
      ],

      price: '$30.000 - $70.000',

      comments: [
        { user: 'Pedro', text: 'Muy auténtico 👌' }
      ]
    },
        // ⚽ DEPORTE + ENTRETENIMIENTO + EXPERIENCIAS
    {
      id: 21,
      name: 'Estadio Atanasio Girardot',
      lat: 6.256,
      lng: -75.590,
      location: 'Estadio',
      address: 'Cra 74 #48-10, Medellín',
      rating: 4.8,
      image: 'assets/images/estadio.jpg',

      description: 'El principal estadio de Medellín y epicentro del fútbol colombiano, hogar de Atlético Nacional y el DIM.',
      tags: ['Deporte', 'Eventos', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Inaugurado en 1953, el estadio ha sido escenario de eventos deportivos históricos,
      conciertos internacionales y momentos emblemáticos del fútbol colombiano.
      Hace parte de la Unidad Deportiva Atanasio Girardot.
      `,

      facts: [
        'Capacidad superior a 40.000 personas.',
        'Sede de grandes conciertos.',
        'Ubicación estratégica.',
        'Ambiente futbolero único.'
      ],

      price: '$30.000 - $150.000',

      comments: [
        { user: 'Felipe', text: 'El ambiente es brutal ⚽🔥' },
        { user: 'Sara', text: 'Imperdible en un clásico.' }
      ]
    },

    {
      id: 22,
      name: 'Unidad Deportiva Atanasio Girardot',
      lat: 6.255,
      lng: -75.590,
      location: 'Estadio',
      address: 'Cra 74 #48-10, Medellín',
      rating: 4.7,
      image: 'assets/images/unidad.jpg',

      description: 'Complejo deportivo con múltiples escenarios para practicar diferentes disciplinas.',
      tags: ['Deporte', 'Salud', 'Aire libre'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Mañana',
      securityLevel: 'Alto',

      history: `
      Este complejo deportivo se ha convertido en uno de los espacios públicos más importantes de Medellín,
      promoviendo la actividad física y el deporte.
      `,

      facts: [
        'Piscinas olímpicas.',
        'Pistas de atletismo.',
        'Acceso gratuito.',
        'Muy frecuentado por deportistas.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Daniel', text: 'Excelente para entrenar 💪' }
      ]
    },

    {
      id: 23,
      name: 'Ciclovía Medellín',
      lat: 6.240,
      lng: -75.580,
      location: 'Ciudad',
      address: 'Principales avenidas de Medellín',
      rating: 4.6,
      image: 'assets/images/ciclovia.jpg',

      description: 'Evento dominical donde se cierran vías para actividades deportivas.',
      tags: ['Deporte', 'Aire libre', 'Salud'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Mañana',
      securityLevel: 'Alto',

      history: `
      La ciclovía es una iniciativa que promueve el uso del espacio público,
      el deporte y la vida saludable en la ciudad.
      `,

      facts: [
        'Domingos y festivos.',
        'Kilómetros de recorrido.',
        'Actividades gratuitas.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Laura', text: 'Perfecto para hacer ejercicio 🚴' }
      ]
    },

    {
      id: 24,
      name: 'Parque Norte',
      lat: 6.270,
      lng: -75.565,
      location: 'Norte',
      address: 'Cra 53 #76-115, Medellín',
      rating: 4.5,
      image: 'assets/images/norte.jpg',

      description: 'Parque de atracciones ideal para familias y grupos.',
      tags: ['Entretenimiento', 'Familia', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Tarde',
      securityLevel: 'Alto',

      history: `
      Parque Norte ha sido uno de los principales centros de entretenimiento
      para familias en Medellín durante décadas.
      `,

      facts: [
        'Atracciones mecánicas.',
        'Ambiente familiar.',
        'Ubicación central.'
      ],

      price: '$20.000 - $50.000',

      comments: [
        { user: 'Carlos', text: 'Muy divertido 🎢' }
      ]
    },

    {
      id: 25,
      name: 'Sky Center',
      lat: 6.200,
      lng: -75.570,
      location: 'Sur',
      address: 'Cra 48 #18 Sur-200',
      rating: 4.4,
      image: 'assets/images/sky.jpg',

      description: 'Centro de trampolines y actividades extremas.',
      tags: ['Entretenimiento', 'Deporte'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Tarde',
      securityLevel: 'Alto',

      history: `
      Sky Center se ha convertido en un espacio moderno de entretenimiento,
      ideal para liberar energía y divertirse.
      `,

      facts: [
        'Trampolines.',
        'Juegos extremos.',
        'Ambiente juvenil.'
      ],

      price: '$30.000 - $60.000',

      comments: [
        { user: 'Juan', text: 'Muy divertido 🔥' }
      ]
    },

    // ✨ EXPERIENCIAS TOP
    {
      id: 26,
      name: 'Mirador Las Palmas',
      lat: 6.200,
      lng: -75.550,
      location: 'Las Palmas',
      address: 'Vía Las Palmas, Medellín',
      rating: 4.8,
      image: 'assets/images/palmas.jpg',

      description: 'Mirador con vista espectacular de Medellín, ideal para planes nocturnos.',
      tags: ['Turismo', 'Naturaleza', 'Romántico'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      La vía Las Palmas conecta Medellín con el oriente antioqueño,
      y sus miradores se han convertido en puntos icónicos.
      `,

      facts: [
        'Vista panorámica.',
        'Muy visitado de noche.',
        'Zona segura.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Sofía', text: 'Vista increíble 🌃' }
      ]
    },

    {
      id: 27,
      name: 'Pueblito Paisa',
      lat: 6.244,
      lng: -75.580,
      location: 'Cerro Nutibara',
      address: 'Cerro Nutibara, Medellín',
      rating: 4.7,
      image: 'assets/images/pueblito.jpg',

      description: 'Réplica de un pueblo antioqueño tradicional.',
      tags: ['Cultura', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Construido como representación de los pueblos tradicionales,
      es un símbolo cultural de Antioquia.
      `,

      facts: [
        'Arquitectura típica.',
        'Vista de la ciudad.',
        'Zona turística.'
      ],

      price: 'Gratis',

      comments: [
        { user: 'Ana', text: 'Muy bonito 📸' }
      ]
    },

    {
      id: 28,
      name: 'Centro Comercial Santafé',
      lat: 6.196,
      lng: -75.573,
      location: 'Poblado',
      address: 'Cra 43A #7 Sur-170',
      rating: 4.7,
      image: 'assets/images/santafe.jpg',

      description: 'Uno de los centros comerciales más grandes de Medellín.',
      tags: ['Compras', 'Entretenimiento'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Tarde',
      securityLevel: 'Alto',

      history: `
      Santafé se consolidó como uno de los centros comerciales más importantes
      de la ciudad.
      `,

      facts: [
        'Gran variedad de tiendas.',
        'Zona gastronómica.',
        'Cine.'
      ],

      price: 'Variable',

      comments: [
        { user: 'Laura', text: 'Tiene de todo 🛍️' }
      ]
    },

    {
      id: 29,
      name: 'Centro Comercial El Tesoro',
      lat: 6.200,
      lng: -75.550,
      location: 'Poblado',
      address: 'Cra 25A #1A Sur-45',
      rating: 4.8,
      image: 'assets/images/tesoro.jpg',

      description: 'Centro comercial con una de las mejores vistas de Medellín.',
      tags: ['Compras', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Tarde',
      securityLevel: 'Alto',

      history: `
      El Tesoro se destaca por su ubicación estratégica
      y su oferta comercial de alto nivel.
      `,

      facts: [
        'Vista panorámica.',
        'Zona premium.',
        'Restaurantes.'
      ],

      price: 'Variable',

      comments: [
        { user: 'Andrés', text: 'La vista es brutal 🔥' }
      ]
    },

    {
      id: 30,
      name: 'Aeroparque Juan Pablo II',
      lat: 6.220,
      lng: -75.590,
      location: 'Belén',
      address: 'Cra 70 #16-04',
      rating: 4.6,
      image: 'assets/images/aeroparque.jpg',

      description: 'Parque recreativo con piscinas, zonas verdes y actividades familiares.',
      tags: ['Naturaleza', 'Familia', 'Aire libre'],

      accessible: true,
      openingHours: '10:00 AM - 2:00 AM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Este parque ha sido un espacio recreativo importante para los habitantes de Medellín,
      ofreciendo múltiples actividades al aire libre.
      `,

      facts: [
        'Piscinas.',
        'Zonas verdes.',
        'Ambiente familiar.'
      ],

      price: '$10.000 - $20.000',

      comments: [
        { user: 'Camila', text: 'Perfecto para ir en familia 👨‍👩‍👧' }
      ]
    }

  ];

  getPlaces() {
    return this.places;
  }
}
