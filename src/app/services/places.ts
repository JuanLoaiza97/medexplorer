//
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
      lat: 6.2084716,
      lng: -75.5657768,
      location: 'Barrio El Poblado',
      address: 'Cra. 35 #7-33, El Poblado',
      rating: 4.7,
      image: 'assets/images/provenza.jpg',

      description: 'Una de las zonas más vibrantes y famosas de Medellín, ubicada en el exclusivo sector de El Poblado. Ha ganado reconocimiento internacional (incluso destacada por la revista Time Out como una de las calles más "cool" del mundo) por su increíble ambiente bohemio, cosmopolita y su animada vida nocturna.',
      tags: ['Vida nocturna', 'Gastronomía', 'Turismo'],

      accessible: true,
      openingHours: '9:00 AM - 2:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Provenza comenzó a desarrollarse en la década de 1950 como un barrio residencial de clase alta, 
      construido en los terrenos de la antigua Finca Provenza por el Banco Central Hipotecario. 
      Con el tiempo, las casas coloniales y modernas fueron transformándose en locales comerciales. 
      Su mayor auge ocurrió tras la pandemia, cuando se peatonalizaron varias vías y el sector se organizó para convertirse en un referente mundial de entretenimiento, 
      siendo incluso mencionado en canciones de artistas globales como Karol G.
      `,

      facts: [
        'Alta presencia de turistas internacionales.',
        'Gran cantidad de rooftops y bares premium.',
        'Zona muy fotografiada.',
        'Ambiente cosmopolita.'
      ],

      price: '$120.000 - $500.000 COP',

      comments: [
        { user: 'Laura', text: 'El mejor ambiente nocturno 🔥' },
        { user: 'Andrés', text: 'Perfecto para salir con amigos.' }
      ]
    },

    {
      id: 2,
      name: 'Parque Lleras',
      lat: 6.208881,
      lng: -75.5677791,
      location: 'El Poblado',
      address: 'Calle 10 con Carrera 38',
      rating: 4.4,
      image: 'assets/images/lleras.jpg',

      description: 'Uno de los puntos de encuentro más icónicos de la ciudad. Recientemente remodelado y peatonalizado, el parque es una plaza rodeada de una densa oferta de discotecas, bares de música crossover, restaurantes y hostales.',
      tags: ['Vida nocturna', 'Turismo'],

      accessible: true,
      openingHours: '6:00 PM - 6:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Medio',

      history: `
      Surgió en la década de los 30 como un espacio verde donado por el señor Julio Enrique Lleras.
      Durante años fue un sector residencial tranquilo hasta que en los años 70 y 80 comenzó su transformación comercial. 
      Ha sobrevivido a momentos difíciles de la historia de la ciudad, incluyendo un atentado en 2001, 
      logrando reinventarse siempre como el corazón del entretenimiento. 
      En 2023, fue entregada su más reciente renovación urbana que integró más zonas peatonales y vegetación.
      `,

      facts: [
        'Zona más famosa de fiesta.',
        'Gran diversidad de bares.',
        'Ambiente internacional.',
        'Alta actividad nocturna.'
      ],

      price: '$150.000 - $700.000',

      comments: [
        { user: 'Camila', text: 'Siempre hay ambiente.' },
        { user: 'David', text: 'Muy turístico pero divertido.' }
      ]
    },

    {
      id: 3,
      name: 'La 70',
      lat: 6.24831,
      lng: -75.58935,
      location: 'Laureles',
      address: 'Av. 70, Medellín',
      rating: 4.6,
      image: 'assets/images/la70.jpg',

      description: 'Corredor turístico y de entretenimiento más importante del occidente de la ciudad. A diferencia de Provenza, La 70 ofrece un ambiente mucho más auténtico y local',
      tags: ['Vida nocturna', 'Cultura'],

      accessible: true,
      openingHours: '11:00 AM - 3:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Medio',

      history: `
      Antiguamente conocida como la "Avenida El Colombiano" (en honor a los 70 años del periódico homónimo en 1982), 
      este corredor nació como parte del desarrollo residencial de Laureles en los años 30 y 40. 
      Su vocación comercial se consolidó con la construcción de la Unidad Deportiva Atanasio Girardot en 1953, 
      convirtiéndose en el epicentro de la celebración deportiva y cultural de la ciudad. 
      Recientemente fue intervenida urbanísticamente para mejorar sus senderos peatonales y áreas verdes.
      `,

      facts: [
        'Música en vivo.',
        'Ambiente local.',
        'Precios más accesibles.',
        'Ideal para bailar.'
      ],

      price: '$50.000 - $250.000',

      comments: [
        { user: 'Sofía', text: 'Muy auténtico 💃' }
      ]
    },

    {
      id: 4,
      name: 'Vintrash Bar',
      lat: 6.2079191,
      lng: -75.5660177,
      location: 'Poblado',
      address: 'Carrera 35 # 8A - 39, Medellín',
      rating: 4.2,
      image: 'assets/images/vintrash.jpg',

      description: 'Bar-discoteca que se define como el "templo de la gozadera". Se destaca por su concepto de "upcycling" (reciclaje creativo) y una estética retro/vintage.',
      tags: ['Vida nocturna', 'Entretenimiento'],

      accessible: true,
      openingHours: '4:00 PM - 4:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Vintrash nació originalmente en Bucaramanga y luego se expandió con gran éxito a Bogotá y Medellín. 
      Su concepto revolucionó la rumba tradicional al mezclar arte, diseño sostenible y diversos géneros musicales en un solo lugar. 
      En Medellín, se consolidó rápidamente como un pilar de la transformación de la Carrera 35 en Provenza, 
      convirtiéndose en un paso obligado para quienes buscan una experiencia de rumba menos convencional y más creativa.
      `,

      facts: [
        'Decoración única.',
        'Música alternativa.',
        'Ambiente juvenil.'
      ],

      price: '$50.000 - $120.000',

      comments: [
        { user: 'Juan', text: 'Muy diferente 🔥' }
      ]
    },

    {
      id: 5,
      name: 'Salon Amador',
      lat: 6.2098969,
      lng: -75.5682776,
      location: 'Poblado',
      address: 'Calle 10 # 40-30, Medellín',
      rating: 4.4,
      image: 'assets/images/amador.jpg',

      description: 'club de música electrónica de primer nivel, conocido por su sistema de sonido de alta fidelidad y una curaduría musical impecable que incluye House, Techno y ritmos alternativos.',
      tags: ['Vida nocturna', 'Música'],

      accessible: true,
      openingHours: '10:00 pm - 4:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Salón Amador se consolidó rápidamente como un referente de la escena "underground" 
      elegante en Medellín. Fue diseñado para llenar un vacío en la ciudad: un lugar que combinara 
      la atmósfera íntima de un salón con la potencia de un club de clase mundial. A lo largo de los años, 
      ha sido pieza clave para posicionar a Medellín como una parada obligatoria para la música electrónica en Sudamérica, 
      manteniendo una identidad clara que prioriza la calidad sonora y el respeto por la cultura del baile.
      `,

      facts: [
        'Música electrónica.',
        'Eventos internacionales.',
        'Sonido profesional.'
      ],

      price: '$70.000+',

      comments: [
        { user: 'Diego', text: 'Top electrónica 🎧' }
      ]
    },

    // 🌿 NATURALEZA
    {
      id: 6,
      name: 'Parque Arví',
      lat: 6.2803712,
      lng: -75.5026504,
      location: 'Santa Elena',
      address: 'Corregimiento de Santa Elena, Medellín,',
      rating: 4.7,
      image: 'assets/images/arvi.jpg',

      description: 'Parque natural ecológico que se extiende sobre 16,000 hectáreas. Es un centro de ecoturismo diseñado para el disfrute de la riqueza ambiental de la región',
      tags: ['Naturaleza', 'Aventura', 'Turismo'],

      accessible: true,
      openingHours: '9:00 AM - 6:00 PM',
      bestTime: 'Mañana',
      securityLevel: 'Alto',

      history: `
      El Parque Arví fue concebido como un proyecto de desarrollo sostenible para proteger la cuenca hidrográfica y la biodiversidad de la zona, 
      además de preservar el patrimonio arqueológico (como el antiguo camino de piedras "Caminos de Guaca"). Fue inaugurado oficialmente en su 
      forma actual en el año 2010, coincidiendo con la apertura de la línea de Metrocable Arví, lo que facilitó el acceso masivo de locales y 
      turistas a esta reserva natural.
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
      lat: 6.2363889,
      lng: -75.58,
      location: 'Comuna 16 (Belén), Medellín',
      address: 'Calle 30 No. 55 – 64',
      rating: 4.5,
      image: 'assets/images/nutibara.jpg',

      description: 'Parque metropolitano de 33 hectáreas que se eleva 80 metros sobre el nivel de la ciudad.',
      tags: ['Naturaleza', 'Cultura', 'Turismo'],

      accessible: true,
      openingHours: '8:00 AM - 10:00 PM',
      bestTime: 'Tarde',
      securityLevel: 'Alto',

      history: `
      Originalmente llamado Cerro de los Cadavides, fue comprado por la ciudad en 1927 
      para ser convertido en un parque recreativo. En 1978 se inauguró el Pueblito Paisa, 
      construido con materiales rescatados del antiguo pueblo de El Peñol (que fue inundado para construir el embalse de Guatapé). 
      El cerro lleva el nombre del Cacique Nutibara, un importante líder indígena de la región.
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
      lat: 6.2709,
      lng: -75.5654,
      location: 'Zona Norte, Medellín',
      address: 'Calle 73 # 51D - 14',
      rating: 4.7,
      image: 'assets/images/botanico.jpg',

      description: 'Museo vivo y centro de investigación científica de 13.2 hectáreas. Es famoso por su Orquideorama, una estructura arquitectónica de madera que simula un bosque de flores y árboles.',
      tags: ['Naturaleza', 'Cultura'],

      accessible: true,
      openingHours: '9:00 AM - 4:00 PM',
      bestTime: 'Mañana',
      securityLevel: 'Muy Alto',

      history: `
      Sus orígenes se remontan a finales del siglo XIX como la "Casa de Baños el Edén". 
      En 1913 se convirtió en el "Bosque de la Independencia" y finalmente, en 1972, se 
      transformó en el Jardín Botánico actual para la VII Conferencia Mundial de Orquideología. 
      A principios de los años 2000, vivió una renovación urbana total que incluyó la construcción del galardonado Orquideorama, 
      convirtiéndose en un símbolo de la transformación social de Medellín.
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
      lat: 6.2698891,
      lng: -75.5658286,
      location: 'Zona Norte, Medellín',
      address: 'Carrera 52 # 73 - 75',
      rating: 4.7,
      image: 'assets/images/explora.jpg',

      description: 'Museo interactivo de ciencias, artes y tecnología. Cuenta con más de 300 experiencias interactivas repartidas en salas dedicadas a la mente, el tiempo, la música y la física.',
      tags: ['Cultura', 'Educación'],

      accessible: true,
      openingHours: '8:30 AM - 5:30 PM',
      bestTime: 'Mañana',
      securityLevel: 'Alto',

      history: `
      Inaugurado en diciembre de 2007, fue parte de un ambicioso proyecto de transformación
      urbana de la Zona Norte de Medellín liderado por la alcaldía de la época. Diseñado por el arquitecto Alejandro Echeverri, 
      el complejo de cuatro "cajas rojas" se convirtió rápidamente en un hito arquitectónico y educativo que simboliza el compromiso 
      de la ciudad con la innovación y la inclusión social.
      `,

      facts: [
        'Acuario.',
        'Exposiciones.',
        'Experiencias educativas.'
      ],

      price: '$35.000',

      comments: [
        { user: 'Carlos', text: 'Muy educativo 👌' }
      ]
    },

    {
      id: 10,
      name: 'Ecoparque El Salado',
      lat: 6.1369872,
      lng: -75.5693948,
      location: 'Envigado',
      address: 'Vereda El Vallano, Envigado',
      rating: 4.7,
      image: 'assets/images/salado.jpg',

      description: 'Uno de los parques ecoturísticos más grandes del departamento (170,000 m²). Se caracteriza por ser una reserva natural bañada por la quebrada La Ayurá.',
      tags: ['Naturaleza', 'Aventura'],

      accessible: true,
      openingHours: '10:00 AM - 5:00 PM',
      bestTime: 'Mañana',
      securityLevel: 'Muy Alto',

      history: `
      El parque fue concebido como una estrategia para la conservación del ecosistema de la 
      microcuenca de la quebrada La Ayurá y para ofrecer un espacio de recreación sostenible a 
      los habitantes de Envigado y el resto del valle. A lo largo de los años, ha pasado de ser un 
      simple balneario natural a un complejo ecoturístico estructurado que promueve la educación 
      ambiental y el turismo de aventura suav
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
      lat: 6.2541,
      lng: -75.6117,
      location: 'San Javier',
      address: 'Comuna 13, Medellín',
      rating: 4.8,
      image: 'assets/images/comuna13.jpg',

      description: 'Antiguamente una de las zonas más peligrosas del mundo, hoy es un vibrante epicentro cultural y artístico. Es famosa por su "Graffitour", donde enormes murales cuentan historias de resistencia y esperanza.',
      tags: ['Cultura', 'Historia', 'Turismo'],

      accessible: true,
      openingHours: '6:00 AM - 10:00 PM',
      bestTime: 'Mañana',
      securityLevel: 'Alto',

      history: `
      Su historia está marcada por el dolor y la superación. Durante los años 90 y principios de los 2000 fue 
      escenario de intensos conflictos entre guerrillas, paramilitares y el Estado (destacando la Operación Orión en 2002). 
      La construcción de las escaleras eléctricas en 2011 y el Metrocable transformaron la movilidad y la dignidad del barrio, 
      permitiendo que el arte y el turismo reemplazaran a la violencia, convirtiéndola en un modelo global de urbanismo social.
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
      lat: 6.252277,
      lng: -75.564947,
      location: 'Centro de Medellín',
      address: 'Cra 52 #52-43, Medellín',
      rating: 4.7,
      image: 'assets/images/museo.jpg',

      description: 'El primer museo fundado en el departamento y el segundo en Colombia.',
      tags: ['Cultura', 'Historia', 'Arte'],

      accessible: true,
      openingHours: '10:00 AM - 5:30 PM',
      bestTime: 'Mañana',
      securityLevel: 'Medio',

      history: `
      Fundado en 1881 como el Museo de Zea, ha pasado por varias sedes y nombres. Su gran transformación ocurrió a finales 
      de los años 90 y principios de los 2000, cuando se trasladó al actual Palacio Municipal y se creó la Plaza de las 
      Esculturas gracias a las generosas donaciones de Fernando Botero, convirtiéndose en el motor de la revitalización 
      cultural del centro de la ciudad.
      `,

      facts: [
        'Obras de Botero.',
        'Ubicado en Plaza Botero.',
        'Arte nacional e internacional.'
      ],

      price: '$18.000 - $40.000',

      comments: [
        { user: 'Laura', text: 'Muy interesante 🎨' }
      ]
    },

    {
      id: 13,
      name: 'Plaza Botero',
      lat: 6.2522,
      lng: -75.5647,
      location: 'Centro',
      address: 'Cra 52 #52-43, Medellín',
      rating: 4.6,
      image: 'assets/images/botero.jpg',

      description: 'Un espacio público de 7.000 metros cuadrados que exhibe 23 esculturas de bronce monumentales donadas por el maestro Fernando Botero.',
      tags: ['Cultura', 'Turismo', 'Arte'],

      accessible: true,
      openingHours: '10:00 AM - 5:30 PM',
      bestTime: 'Mañana',
      securityLevel: 'Medio',

      history: `
      Inaugurada en el año 2002, la plaza fue la piedra angular de un proyecto de renovación 
      urbana masiva en el centro de Medellín. El maestro Botero propuso la creación de este 
      espacio como un regalo a su ciudad natal, con la condición de que las obras estuvieran 
      en la calle para que todas las personas pudieran disfrutar del arte de manera gratuita.
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
      lat: 6.2430224,
      lng: -75.5774573,
      location: 'Centro',
      address: 'Calle 41 # 57 - 30, Medellín',
      rating: 4.8,
      image: 'assets/images/teatro.jpg',

      description: 'Uno de los centros culturales más importantes de Colombia. Con una capacidad para cerca de 1,600 personas, es la sede de la Filarmónica de Medellín.',
      tags: ['Cultura', 'Arte', 'Eventos'],

      accessible: true,
      openingHours: '8:00 AM - 8:00 PM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Inaugurado en 1987, fue el resultado de un esfuerzo conjunto entre la empresa privada
      y el sector público para dotar a la ciudad de un espacio con estándares internacionales de acústica. 
      Lleva el nombre de José Gutiérrez Gómez, un importante líder empresarial que impulsó su creación. 
      Desde entonces, ha sido el eje de la Temporada Internacional de Música Clásica y de innumerables 
      eventos culturales que han transformado la cara artística de Medellín.
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
      lat: 6.2443,
      lng: -75.5562,
      location: 'Barrio Boston , Medellín',
      address: 'Calle 51 # 36-66',
      rating: 4.8,
      image: 'assets/images/memoria.jpg',

      description: 'Espacio de carácter público destinado a la reparación simbólica de las víctimas del conflicto armado en Medellín y Colombia.',
      tags: ['Cultura', 'Historia', 'Educación'],

      accessible: true,
      openingHours: '9:00 AM - 6:00 PM',
      bestTime: 'Día',
      securityLevel: 'Medio',

      history: `
      Fue creado en 2006 a partir de una iniciativa del Programa de Atención a Víctimas 
      de la Alcaldía de Medellín. El edificio actual, una pieza arquitectónica icónica de concreto y 
      cristal, fue inaugurado en 2012. Se ha convertido en un referente internacional en museografía 
      de memoria, siendo un lugar donde las voces de las víctimas son las protagonistas del relato histórico.
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
      lat: 6.2088,
      lng: -75.5678,
      location: 'Poblado',
      address: 'Calle 10 # 38 - 38',
      rating: 4.7,
      image: 'assets/images/mondongos.jpg',

      description: 'Restaurante referente de la comida típica antioqueña. Aunque su menú es sencillo, se especializa en el Mondongo',
      tags: ['Gastronomía', 'Cultura'],

      accessible: true,
      openingHours: '11:30 AM - 9:00 PM',
      bestTime: 'Mediodía',
      securityLevel: 'Muy Alto',

      history: `
      Mondongo's nació en octubre de 1976 gracias a una conversación entre amigos que querían un lugar digno para disfrutar de esta sopa tradicional. 
      La primera sede fue la de La 70 y, debido a su éxito masivo por la calidad y el tamaño de los platos, se expandieron a 
      El Poblado y posteriormente a Miami (Doral). Se ha mantenido como un negocio familiar que conserva la receta original 
      y el espíritu de la hospitalidad paisa por más de 45 años.
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
      lat: 6.209153,
      lng: -75.564947,
      location: 'Poblado',
      address: 'Carrera 36 # 10A - 27',
      rating: 4.7,
      image: 'assets/images/carmen.jpg',

      description: 'Rreferente de la gastronomía contemporánea en Colombia. Su propuesta se basa en el uso de ingredientes locales y biodiversos colombianos aplicados a técnicas de cocina moderna.',
      tags: ['Gastronomía', 'Lujo'],

      accessible: true,
      openingHours: '12:00 PM - 10:30 PM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Fundado en 2008 por los chefs Carmen Angel y Rob Pevitts, el restaurante nació 
      con el deseo de rendir homenaje a la despensa colombiana desde una perspectiva creativa y técnica. 
      A lo largo de los años, ha sido incluido consistentemente en listas de los mejores restaurantes de 
      Latinoamérica y ha jugado un papel crucial en elevar el perfil gastronómico de Medellín a nivel internacional.
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
      lat: 6.2091132,
      lng: -75.5732386,
      location: 'Poblado',
      address: 'Calle 7D # 43C - 36',
      rating: 4.4,
      image: 'assets/images/cielo.jpg',

      description: 'Uno de los restaurantes más innovadores del mundo, fundado por el reconocido chef Juan Manuel Barrientos.',
      tags: ['Gastronomía', 'Experiencia'],

      accessible: true,
      openingHours: '11:00 PM - 11:00 PM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Fundado en 2007 en Medellín, Elcielo fue pionero en aplicar conceptos de neurociencia 
      a la gastronomía en Latinoamérica. Su éxito llevó a la marca a expandirse a Bogotá, Miami y 
      Washington D.C., logrando ser la primera cadena de restaurantes colombiana en obtener una 
      Estrella Michelin (en su sede de EE. UU.). El restaurante de Medellín sigue siendo el corazón y 
      origen de esta propuesta que busca "cocinar la paz de Colombia".
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
      lat: 6.2096753,
      lng: -75.5658661,
      location: 'Poblado',
      address: 'Carrera 37 # 8A - 37',
      rating: 4.6,
      image: 'assets/images/pergamino.jpg',

      description: 'Referente mundial del café colombiano de alta calidad. Pergamino no es solo una cafetería, sino una empresa que tuesta y exporta granos de sus propias fincas y de productores locales.',
      tags: ['Gastronomía', 'Café'],

      accessible: true,
      openingHours: '8:00 AM - 9:00 PM',
      bestTime: 'Mañana',
      securityLevel: 'Alto',

      history: `
      La familia Echavarría, con una tradición cafetera de décadas, fundó Pergamino para 
      cerrar la brecha entre el productor y el consumidor final. En lugar de exportar todo el 
      mejor café, decidieron dejar una parte para que los colombianos y turistas pudieran probar 
      la verdadera calidad de exportación en casa. Su apertura fue clave para la transformación 
      de la Vía Primavera en un corredor de diseño y gastronomía.
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
      lat: 6.2147,
      lng: -75.5584,
      location: 'Las Palmas',
      address: 'Calle 16 # 28-60',
      rating: 4.6,
      image: 'assets/images/hato.jpg',

      description: 'Restaurante de cocina tradicional colombiana que destaca por su ambiente acogedor que evoca las antiguas casonas antioqueñas.',
      tags: ['Gastronomía', 'Cultura'],

      accessible: true,
      openingHours: '8:00 AM - 11:00 PM',
      bestTime: 'Mediodía',
      securityLevel: 'Muy Alto',

      history: `
      Hatoviejo abrió sus puertas en 1982. Nació con la misión de exaltar la cultura y los sabores 
      de Antioquia en un entorno de alta calidad. Con el tiempo, se convirtió en un paso obligado 
      para presidentes, artistas y turistas, logrando expandir la marca sin perder la esencia de la sazón casera. 
      Recientemente, han integrado opciones contemporáneas (como platos vegetarianos) para adaptarse a las nuevas generaciones
      mientras conservan su legado de hospitalidad paisa.
      `,

      facts: [
        'Bandeja paisa.',
        'Tradición.',
        'Ambiente típico.'
      ],

      price: '$50.000 - $265.000',

      comments: [
        { user: 'Pedro', text: 'Muy auténtico 👌' }
      ]
    },
        // ⚽ DEPORTE + ENTRETENIMIENTO + EXPERIENCIAS
    {
      id: 21,
      name: 'Estadio Atanasio Girardot',
      lat: 6.256864,
      lng: -75.59013,
      location: 'Estadio',
      address: 'Carrera 74 # 48 - 01',
      rating: 4.7,
      image: 'assets/images/estadio.jpg',

      description: 'Estadio principal de la ciudad y el corazón de la Unidad Deportiva Atanasio Girardot. Tiene una capacidad para aproximadamente 45,000 espectadores y es la sede de los dos equipos profesionales de la ciudad: Atlético Nacional e Independiente Medellín.',
      tags: ['Deporte', 'Eventos', 'Turismo'],

      accessible: true,
      openingHours: '5:00 AM - 10:00 PM',
      bestTime: 'Mañana',
      securityLevel: 'Medio',

      history: `
      Inaugurado en 1953, lleva el nombre del prócer de la independencia Atanasio Girardot. 
      Ha sido remodelado en varias ocasiones, la más importante para el Mundial Sub-20 de la FIFA en 2011. 
      Es un lugar sagrado para la cultura paisa, donde se celebran no solo triunfos deportivos, 
      sino también eventos masivos como la inauguración de la Feria de las Flores.
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
      name: 'Unidad Deportiva de Belén Andrés Escobar Saldarriaga',
      lat: 6.2346848,
      lng: -75.5885154,
      location: 'Comuna 16 (Belén), Medellín',
      address: 'Carrera 66B # 31A - 15',
      rating: 4.7,
      image: 'assets/images/unidad.jpg',

      description: 'Espacio multideportivo de acceso público rodeado de una gran zona arbolada. Cuenta con una infraestructura envidiable que incluye una piscina olímpica, canchas de fútbol de césped sintético y natural, canchas de baloncesto, voleibol, bolera pública, pista de arquería y un gimnasio al aire libre.',
      tags: ['Deporte', 'Salud', 'Aire libre'],

      accessible: true,
      openingHours: '6:00 AM - 10:30 PM',
      bestTime: 'Mañana',
      securityLevel: 'Alto',

      history: `
      Fue nombrada en honor a Andrés Escobar Saldarriaga, el legendario futbolista antioqueño conocido como
      "El Caballero del Fútbol", tras su fallecimiento en 1994. El complejo ha sido objeto de constantes 
      renovaciones para mantenerse como uno de los centros deportivos urbanos más modernos de Colombia, 
      siendo fundamental para la promoción del deporte social y comunitario.
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

      description: 'Programa que cierra temporalmente el flujo vehicular en importantes avenidas para convertirlas en espacios seguros para correr, montar en bicicleta, patinar o caminar.',
      tags: ['Deporte', 'Aire libre', 'Salud'],

      accessible: true,
      openingHours: '7:00 AM - 1:00 PM',
      bestTime: 'Mañana',
      securityLevel: 'Alto',

      history: `
      La ciclovía en Medellín comenzó formalmente en 1984 (celebró sus 40 años recientemente), inspirada en modelos de éxito internacional. 
      Lo que empezó como un pequeño tramo se convirtió en un eje de transformación social, permitiendo que ciudadanos de todos los estratos 
      compartan el espacio público. Ha sido fundamental para promover la cultura de la bicicleta en la ciudad, que hoy cuenta con uno de 
      los sistemas de bicicletas públicas (EnCicla) más importantes de la región.
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
      lat: 6.272007,
      lng: -75.5660801,
      location: 'Norte',
      address: 'Carrera 53 # 76 - 115',
      rating: 4.5,
      image: 'assets/images/norte.jpg',

      description: 'Parque de diversiones que rodea el lago urbano más grande de la ciudad. Está dividido en cuatro plazoletas temáticas: Extrema, Aventura, Fantasía y Expedición.',
      tags: ['Entretenimiento', 'Familia', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 5:00 PM',
      bestTime: 'Tarde',
      securityLevel: 'Alto',

      history: `
      Inaugurado originalmente en la década de los 70, el Parque Norte ha sido un lugar de recreación tradicional 
      para las familias paisas. A lo largo de los años ha pasado por varias renovaciones, la más importante a mediados 
      de los 2000, que modernizó sus atracciones y lo integró al circuito turístico del norte junto al Jardín Botánico 
      y el Parque Explora. Hoy es administrado por Metroparques.
      `,

      facts: [
        'Atracciones mecánicas.',
        'Ambiente familiar.',
        'Ubicación central.'
      ],

      price: '$25.000 - $60.000',

      comments: [
        { user: 'Carlos', text: 'Muy divertido 🎢' }
      ]
    },

    {
      id: 25,
      name: 'Sky Center',
      lat: 6.1859081,
      lng: -75.5899635,
      location: 'Itagüí',
      address: 'Calle 85 # 48 - 01',
      rating: 4.4,
      image: 'assets/images/sky.jpg',

      description: 'Moderno centro de eventos ubicado en el último piso del bloque naranja de la Mayorista. Se caracteriza por ser un "rooftop" (terraza) con una gran capacidad para conciertos, festivales de música electrónica (Techno), reggaetón y eventos corporativos.',
      tags: ['Entretenimiento', 'Deporte'],

      accessible: true,
      openingHours: '8:00 AM - 12:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Alto',

      history: `
      Sky Center surgió como una respuesta a la necesidad de espacios amplios y con estilo "industrial-chic" 
      para eventos en el sur del área metropolitana. Al aprovechar la estructura del Bloque Naranja en Itagüí, 
      logró ofrecer un espacio con capacidad para miles de personas sin alejarse demasiado de la zona central. 
      Se ha convertido en la sede favorita para festivales como el Medellín Urban Fest y diversas
      presentaciones de DJs internacionales de Techno y House.
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
      location: 'Vía Las Palmas',
      address: 'Avenida Las Palmas',
      rating: 4.3,
      image: 'assets/images/palmas.jpg',

      description: 'Bahías de descanso ubicadas estratégicamente a un costado de la doble calzada de Las Palmas. Ofrecen una vista panorámica ininterrumpida de toda la ciudad, desde el sur hasta el norte',
      tags: ['Turismo', 'Naturaleza', 'Romántico'],

      accessible: true,
      openingHours: '5:30 PM - 12:00 AM',
      bestTime: 'Noche',
      securityLevel: 'Medio',

      history: `
      Estos miradores han existido de manera informal desde que se construyó la vía Las Palmas, 
      pero con los años la alcaldía adecuó las bahías con barandas y senderos para formalizarlos 
      como paradas turísticas. Se han convertido en un símbolo de la cultura local, siendo la "recompensa" 
      para los ciclistas que entrenan en esta exigente subida y el lugar preferido para las "rumbas de mirador"
      o simplemente para tomar un chocolate caliente frente a la ciudad.
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
      lat: 6.2361854,
      lng: -75.5802909,
      location: 'Cerro Nutibara',
      address: 'Cerro Nutibara, Medellín',
      rating: 4.4,
      image: 'assets/images/pueblito.jpg',

      description: 'Representación a escala de un típico pueblo antioqueño de comienzos del siglo XX. Cuenta con una plaza empedrada, una fuente, una iglesia, una escuela, una barbería y una botica.',
      tags: ['Cultura', 'Turismo'],

      accessible: true,
      openingHours: '5:00 AM - 11:00 PM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Fue inaugurado el 3 de marzo de 1978. Fue construido utilizando materiales originales 
      (puertas, ventanas y techos) de pueblos que quedaron sumergidos bajo el agua durante la 
      construcción del embalse de Guatapé (como el antiguo Peñol). 
      Se diseñó para preservar la identidad arquitectónica y las costumbres de los 
      ancestros paisas en medio de la creciente modernización de Medellín.
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
      lat: 6.196852,
      lng: -75.574351,
      location: 'Poblado',
      address: 'Carrera 43A, Cl. 7 Sur #170',
      rating: 4.6,
      image: 'assets/images/santafe.jpg',

      description: 'Uno de los centros comerciales más grandes de Medellín.',
      tags: ['Compras', 'Entretenimiento'],

      accessible: true,
      openingHours: '10:00 AM - 9:00 PM',
      bestTime: 'Tarde',
      securityLevel: 'Muy Alto',

      history: `
      Inaugurado en 2010, se construyó con la visión de ser el corazón del comercio 
      y la vida social en El Poblado. Su diseño arquitectónico innovador lo ha hecho acreedor 
      de varios reconocimientos. Se ha convertido en un punto de referencia no solo para compras, 
      sino como un espacio cultural donde se realizan eventos de moda, arte y 
      celebraciones tradicionales de la cultura paisa.
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
      lat: 6.1972984,
      lng: -75.5582293,
      location: 'Poblado',
      address: 'Carrera 25A # 1A Sur - 45',
      rating: 4.8,
      image: 'assets/images/tesoro.jpg',

      description: 'Más que un centro comercial, es considerado un "parque comercial" debido a su arquitectura abierta que permite la circulación de aire natural y ofrece vistas espectaculares de la ciudad.',
      tags: ['Compras', 'Turismo'],

      accessible: true,
      openingHours: '10:00 AM - 9:00 PM',
      bestTime: 'Tarde',
      securityLevel: 'Muy Alto',

      history: `
      Inaugurado en 1999, El Tesoro transformó el concepto de centros comerciales en Colombia 
      al priorizar el paisajismo y el respeto por el entorno montañoso. A lo largo de los años 
      ha pasado por varias etapas de expansión, añadiendo una torre médica, un hotel (Novotel) y 
      nuevos bloques comerciales, consolidándose como el destino preferido para el mercado de lujo y 
      el turismo de salud en la ciudad.
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
      lat: 6.2200154,
      lng: -75.5917358,
      location: 'Belén',
      address: 'Carrera 70 # 16 - 04',
      rating: 4.4,
      image: 'assets/images/aeroparque.jpg',

      description: 'Extenso complejo recreativo que combina un parque acuático con múltiples piscinas (incluyendo una de olas y una semiolímpica), toboganes de diferentes niveles y un sendero de 1.6 kilómetros ideal para caminar, correr o montar en bicicleta y patines.',
      tags: ['Naturaleza', 'Familia', 'Aire libre'],

      accessible: true,
      openingHours: '9:30 AM - 5:00 PM',
      bestTime: 'Día',
      securityLevel: 'Alto',

      history: `
      Fue construido en terrenos que anteriormente formaban parte de la pista del Aeropuerto Olaya Herrera y 
      fue inaugurado en la década de los 90. Su nombre rinde homenaje a la visita del Papa Juan Pablo II 
      a Medellín en 1986, quien celebró una misa multitudinaria precisamente en este lugar. 
      Actualmente es administrado por Metroparques y ha sido renovado para incluir tecnologías más sostenibles 
      en el tratamiento de sus aguas.
      `,

      facts: [
        'Piscinas.',
        'Zonas verdes.',
        'Ambiente familiar.'
      ],

      price: '$25.000 - $50.000',

      comments: [
        { user: 'Camila', text: 'Perfecto para ir en familia 👨‍👩‍👧' }
      ]
    }

  ];

  getPlaces() {
    return this.places;
  }
}
