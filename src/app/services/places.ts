import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places = [

    // 🌙 VIDA NOCTURNA
    { id: 1, name: 'Provenza', lat: 6.209, lng: -75.567, location: 'El Poblado', rating: 4.7, image: 'assets/images/provenza.jpg',
      description: 'Es un vibrante epicentro turístico y gastronómico conocido por sus calles coloridas, cafés de especialidad, boutiques de moda y una intensa vida nocturna. Reconocido internacionalmente, este barrio combina un ambiente cosmopolita con zonas verdes, convirtiéndose en un punto de encuentro esencial para locales y visitantes.',
      tags: ['Vida nocturna'] },

    { id: 2, name: 'La 70', lat: 6.244, lng: -75.590, location: 'Laureles', rating: 4.5, image: 'assets/images/la70.jpg',
      description: 'El corredor turístico, gastronómico y de rumba más tradicional de Medellín, ubicado en el sector de Laureles-Estadio. A diferencia del Parque Lleras, que es más cosmopolita, La 70 destaca por un ambiente auténticamente local y "paisa".',
      tags: ['Vida nocturna'] },

    { id: 3, name: 'Parque Lleras', lat: 6.208, lng: -75.565, location: 'Poblado', rating: 4.6, image: 'assets/images/lleras.jpg',
      description: 'El corazón de la vida nocturna y el entretenimiento en el barrio El Poblado de Medellín. Es una plaza arbolada rodeada de una vibrante oferta de bares, discotecas, cafés y restaurantes que lo convierten en un punto de encuentro esencial para turistas y locales.',
      tags: ['Vida nocturna'] },

    { id: 4, name: 'Vintrash Bar', lat: 6.2095, lng: -75.566, location: 'Poblado', rating: 4.4, image: 'assets/images/vintrash.jpg',
      description: 'Un reconocido club nocturno y bar temático ubicado en el sector de Provenza, en El Poblado. Se define como el "templo de la gozadera" y destaca por su concepto de upcycling (reciclaje creativo) y una atmósfera nostálgica inspirada en los años 60.',
      tags: ['Vida nocturna'] },

    { id: 5, name: 'Salon Amador', lat: 6.210, lng: -75.567, location: 'Poblado', rating: 4.3, image: 'assets/images/amador.jpg',
      description: 'Uno de los clubes de música electrónica más prestigiosos y sofisticados de Medellín, ubicado también en el sector de Provenza, El Poblado. Se distingue por ofrecer una experiencia de "club de nicho" con un enfoque artístico y una curaduría musical impecable.',
      tags: ['Vida nocturna'] },

    // 🌿 NATURALEZA
    { id: 6, name: 'Parque Arví', lat: 6.270, lng: -75.500, location: 'Santa Elena', rating: 4.8, image: 'assets/images/arvi.jpg',
      description: 'Una inmensa reserva natural de 16,000 hectáreas localizada en el corregimiento de Santa Elena, al noreste de Medellín. Es el destino preferido para el ecoturismo, ofreciendo un respiro de aire puro, bosques de niebla y una conexión directa con la cultura campesina silletera.',
      tags: ['Naturaleza'] },

    { id: 7, name: 'Cerro Nutibara', lat: 6.244, lng: -75.580, location: 'Centro', rating: 4.6, image: 'assets/images/nutibara.jpg',
      description: 'Uno de los siete cerros tutelares de Medellín y un símbolo cultural de la ciudad. Con 80 metros de altura, ofrece una de las mejores vistas panorámicas de 360 grados del Valle de Aburrá.',
      tags: ['Naturaleza'] },

    { id: 8, name: 'Jardín Botánico', lat: 6.270, lng: -75.563, location: 'Norte', rating: 4.7, image: 'assets/images/botanico.jpg',
      description: 'Un museo vivo de 13 hectáreas y uno de los pulmones verdes más importantes de la ciudad. A diferencia de un parque común, es un centro de investigación científica y conservación ubicado en la Zona Norte.',
      tags: ['Naturaleza'] },

    { id: 9, name: 'Parque Explora', lat: 6.268, lng: -75.565, location: 'Norte', rating: 4.5, image: 'assets/images/explora.jpg',
      description: 'Centro de ciencia y tecnología más importante de Medellín, ubicado en el distrito de innovación (Zona Norte). Es un museo interactivo que combina el aprendizaje lúdico con uno de los acuarios de agua dulce más grandes de Sudamérica.',
      tags: ['Naturaleza'] },

    { id: 10, name: 'Ecoparque El Salado', lat: 6.170, lng: -75.600, location: 'Envigado', rating: 4.6, image: 'assets/images/salado.jpg',
      description: 'Lugar perfecto para hacer senderismo, respirar aire puro y disfrutar de la naturaleza. Cuenta con cascadas, rutas ecológicas y zonas de descanso.',
      tags: ['Naturaleza'] },

    // 🎨 CULTURA
    { id: 11, name: 'Comuna 13', lat: 6.2518, lng: -75.623, location: 'San Javier', rating: 4.9, image: 'assets/comuna13.jpg',
      description: 'Es el ejemplo más famoso de transformación social y urbana de Medellín. Pasó de ser uno de los sectores más peligrosos del mundo a convertirse en una galería de arte urbano al aire libre y un referente mundial de resiliencia.',
      tags: ['Cultura'] },

    { id: 12, name: 'Museo de Antioquia', lat: 6.251, lng: -75.563, location: 'Centro', rating: 4.7, image: 'assets/images/museo.jpg',
      description: 'El museo más importante de Medellín y el segundo fundado en Colombia. Está ubicado en el centro de la ciudad, frente a la icónica Plaza Botero, y es el hogar de la colección más grande del mundo de obras de Fernando Botero.',
      tags: ['Cultura'] },

    { id: 13, name: 'Plaza Botero', lat: 6.252, lng: -75.563, location: 'Centro', rating: 4.6, image: 'assets/images/botero.jpg',
      description: 'Plaza al aire libre con esculturas monumentales de Fernando Botero. Es uno de los puntos turísticos más fotografiados de la ciudad.',
      tags: ['Cultura'] },

    { id: 14, name: 'Teatro Metropolitano', lat: 6.244, lng: -75.573, location: 'Centro', rating: 4.8, image: 'assets/images/teatro.jpg',
      description: 'Icónico museo al aire libre de 7,000 metros cuadrados ubicado en el corazón de Medellín. Es el único lugar en el mundo donde puedes caminar entre 23 esculturas monumentales de bronce donadas por el maestro Fernando Botero.',
      tags: ['Cultura'] },

    { id: 15, name: 'Casa de la Memoria', lat: 6.245, lng: -75.570, location: 'Centro', rating: 4.7, image: 'assets/images/memoria.jpg',
      description: 'Es un espacio simbólico y político ubicado en el centro de Medellín (barrio Boston). A diferencia de otros museos, su propósito es dar voz a las víctimas del conflicto armado en Colombia, promoviendo la reflexión y la esperanza para que la historia no se repita.',
      tags: ['Cultura'] },

    // 🍔 GASTRONOMÍA
    { id: 16, name: 'Mondongo’s', lat: 6.207, lng: -75.565, location: 'Poblado', rating: 4.8, image: 'assets/images/mondongos.jpg',
      description: 'El restaurante de comida típica más icónico y visitado de Medellín. Su fama se debe a una receta tradicional que ha mantenido su sabor por décadas, convirtiéndose en una parada obligatoria para quienes buscan la esencia culinaria de Antioquia.',
      tags: ['Gastronomía'] },

    { id: 17, name: 'Carmen', lat: 6.209, lng: -75.567, location: 'Poblado', rating: 4.9, image: 'assets/images/carmen.jpg',
      description: 'Uno de los restaurantes de alta cocina más prestigiosos de Medellín, ubicado en el barrio El Poblado. Se destaca por su propuesta de cocina contemporánea que rinde homenaje a la biodiversidad colombiana, utilizando técnicas modernas para resaltar ingredientes locales de diversas regiones del país.',
      tags: ['Gastronomía'] },

    { id: 18, name: 'El Cielo', lat: 6.210, lng: -75.566, location: 'Poblado', rating: 4.9, image: 'assets/images/cielo.jpg',
      description: 'Restaurante insignia del chef Juan Manuel Barrientos, pionero en la cocina de vanguardia en Colombia y poseedor de estrellas Michelin en sus sedes internacionales. Ubicado en El Poblado, ofrece una experiencia sensorial que va más allá de simplemente comer; es un "viaje" por la biodiversidad y cultura colombiana.',
      tags: ['Gastronomía'] },

    { id: 19, name: 'Pergamino Café', lat: 6.208, lng: -75.567, location: 'Poblado', rating: 4.7, image: 'assets/images/pergamino.jpg',
      description: 'Considerado uno de los mejores cafés de especialidad en Colombia y un lugar de culto para los amantes del café en Medellín. No es solo una cafetería, sino una tostaduría que exporta sus granos a todo el mundo, trabajando directamente con pequeños productores locales.',
      tags: ['Gastronomía'] },

    { id: 20, name: 'Hato Viejo', lat: 6.250, lng: -75.570, location: 'Centro', rating: 4.6, image: 'assets/images/hato.jpg',
      description: 'Restaurante emblemático con más de 40 años de tradición, considerado un referente de la gastronomía típica antioqueña en Medellín. Ubicado cerca del edificio Coltejer, ofrece un ambiente que rinde homenaje a la arquitectura y cultura paisa tradicional, brindando un refugio silencioso y fresco en medio del ajetreo del centro.',
      tags: ['Gastronomía'] },

    // ⚽ DEPORTE
    { id: 21, name: 'Atanasio Girardot', lat: 6.256, lng: -75.590, location: 'Estadio', rating: 4.8, image: 'assets/images/estadio.jpg',
      description: 'Complejo deportivo y cultural más importante de Medellín. Con una extensión de más de 324,000 metros cuadrados, alberga cerca de 18 escenarios para la práctica de diversas disciplinas y es el hogar de los dos equipos de fútbol locales: Atlético Nacional e Independiente Medellín.',
      tags: ['Deporte'] },

    { id: 22, name: 'Unidad Deportiva de Belen', lat: 6.233, lng: -75.586, location: 'Belen', rating: 4.7, image: 'assets/images/unidad.jpg',
      description: 'Oficialmente llamada Unidad Deportiva Andrés Escobar Saldarriaga) es uno de los centros recreativos más completos y modernos de Medellín. Fue nombrada en honor al futbolista Andrés Escobar y es un espacio fundamental para el deporte comunitario y de alto rendimiento en el suroccidente de la ciudad.',
      tags: ['Deporte'] },

    { id: 23, name: 'Ciclovía', lat: 6.240, lng: -75.580, location: 'Ciudad', rating: 4.6, image: 'assets/images/ciclovia.jpg',
      description: 'Son un programa recreativo insignia de la ciudad, coordinado por el INDER, que consiste en el cierre temporal de importantes vías vehiculares para el uso exclusivo de ciclistas, patinadores y peatones.',
      tags: ['Deporte'] },

    { id: 24, name: 'Parque Norte', lat: 6.270, lng: -75.565, location: 'Norte', rating: 4.5, image: 'assets/images/norte.jpg',
      description: 'El principal parque de atracciones mecánicas de Medellín, ubicado en la Zona Norte de la ciudad. Con una extensión de 160,000 metros cuadrados, destaca por albergar el lago urbano más grande de Latinoamérica y ofrecer una mezcla de adrenalina, naturaleza y cultura.',
      tags: ['Deporte'] },

    { id: 25, name: 'Sky Center', lat: 6.200, lng: -75.570, location: 'Sur', rating: 4.4, image: 'assets/images/sky.jpg',
      description: 'Reconocida academia de baile y centro cultural ubicado en el sector de El Poblado, en Medellín. Es ampliamente conocido por ser uno de los lugares de referencia para aprender ritmos latinos, especialmente Salsa y Bachata, tanto para locales como para los numerosos turistas que visitan la ciudad.',
      tags: ['Deporte'] },

  ];

  getPlaces() {
    return this.places;
  }
}
