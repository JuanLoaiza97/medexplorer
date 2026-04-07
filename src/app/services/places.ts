import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places = [

    // 🌙 VIDA NOCTURNA
    { id: 1, name: 'Provenza', lat: 6.209, lng: -75.567, location: 'El Poblado', rating: 4.7, image: 'assets/images/provenza.jpg',
      description: 'Una de las zonas más exclusivas y vibrantes de Medellín para la vida nocturna. Provenza ofrece una amplia variedad de bares, discotecas y restaurantes con ambiente internacional, música en vivo y cocteles de autor. Ideal para quienes buscan una experiencia premium.',
      tags: ['Vida nocturna'] },

    { id: 2, name: 'La 70', lat: 6.244, lng: -75.590, location: 'Laureles', rating: 4.5, image: 'assets/images/la70.jpg',
      description: 'Una de las avenidas más tradicionales para salir de fiesta en Medellín. Aquí encontrarás bares con música crossover, vallenato, salsa y reggaetón, además de un ambiente más local y auténtico. Perfecto para vivir la cultura paisa nocturna.',
      tags: ['Vida nocturna'] },

    { id: 3, name: 'Parque Lleras', lat: 6.208, lng: -75.565, location: 'Poblado', rating: 4.6, image: 'assets/images/lleras.jpg',
      description: 'El corazón de la rumba en Medellín. Rodeado de bares, discotecas y restaurantes, es uno de los lugares más visitados por turistas. Ambiente animado, música variada y excelente para conocer gente.',
      tags: ['Vida nocturna'] },

    { id: 4, name: 'Vintrash Bar', lat: 6.2095, lng: -75.566, location: 'Poblado', rating: 4.4, image: 'assets/images/vintrash.jpg',
      description: 'Un bar temático único con una decoración extravagante y ambiente juvenil. Destaca por su estilo vintage, música alternativa y cócteles creativos. Muy popular entre locales y extranjeros.',
      tags: ['Vida nocturna'] },

    { id: 5, name: 'Salon Amador', lat: 6.210, lng: -75.567, location: 'Poblado', rating: 4.3, image: 'assets/images/amador.jpg',
      description: 'Club nocturno especializado en música electrónica y presentaciones de DJs nacionales e internacionales. Cuenta con excelente sonido, iluminación y ambiente underground.',
      tags: ['Vida nocturna'] },

    // 🌿 NATURALEZA
    { id: 6, name: 'Parque Arví', lat: 6.270, lng: -75.500, location: 'Santa Elena', rating: 4.8, image: 'assets/images/arvi.jpg',
      description: 'Reserva natural ecológica ideal para desconectarse de la ciudad. Ofrece senderos ecológicos, picnic, actividades al aire libre y acceso en metrocable con vistas espectaculares.',
      tags: ['Naturaleza'] },

    { id: 7, name: 'Cerro Nutibara', lat: 6.244, lng: -75.580, location: 'Centro', rating: 4.6, image: 'assets/images/nutibara.jpg',
      description: 'Cerro emblemático que ofrece una de las mejores vistas panorámicas de Medellín. En la cima se encuentra el Pueblito Paisa, una réplica de un pueblo tradicional antioqueño.',
      tags: ['Naturaleza'] },

    { id: 8, name: 'Jardín Botánico', lat: 6.270, lng: -75.563, location: 'Norte', rating: 4.7, image: 'assets/images/botanico.jpg',
      description: 'Espacio natural con gran diversidad de flora. Perfecto para caminar, relajarse y disfrutar de eventos culturales. Destaca el Orquideorama, ícono arquitectónico del lugar.',
      tags: ['Naturaleza'] },

    { id: 9, name: 'Parque Explora', lat: 6.268, lng: -75.565, location: 'Norte', rating: 4.5, image: 'assets/images/explora.jpg',
      description: 'Parque interactivo de ciencia y tecnología con acuario, exposiciones y experiencias educativas. Ideal para todas las edades.',
      tags: ['Naturaleza'] },

    { id: 10, name: 'Ecoparque El Salado', lat: 6.170, lng: -75.600, location: 'Envigado', rating: 4.6, image: 'assets/images/salado.jpg',
      description: 'Lugar perfecto para hacer senderismo, respirar aire puro y disfrutar de la naturaleza. Cuenta con cascadas, rutas ecológicas y zonas de descanso.',
      tags: ['Naturaleza'] },

    // 🎨 CULTURA
    { id: 11, name: 'Comuna 13', lat: 6.2518, lng: -75.623, location: 'San Javier', rating: 4.9, image: 'assets/comuna13.jpg',
      description: 'Uno de los lugares más emblemáticos de Medellín por su transformación social. Destaca por sus grafitis, escaleras eléctricas y recorridos culturales llenos de historia.',
      tags: ['Cultura'] },

    { id: 12, name: 'Museo de Antioquia', lat: 6.251, lng: -75.563, location: 'Centro', rating: 4.7, image: 'assets/images/museo.jpg',
      description: 'Uno de los museos más importantes de Colombia. Alberga obras de Fernando Botero y otros artistas, mostrando la historia y cultura de la región.',
      tags: ['Cultura'] },

    { id: 13, name: 'Plaza Botero', lat: 6.252, lng: -75.563, location: 'Centro', rating: 4.6, image: 'assets/images/botero.jpg',
      description: 'Plaza al aire libre con esculturas monumentales de Fernando Botero. Es uno de los puntos turísticos más fotografiados de la ciudad.',
      tags: ['Cultura'] },

    { id: 14, name: 'Teatro Metropolitano', lat: 6.244, lng: -75.573, location: 'Centro', rating: 4.8, image: 'assets/images/teatro.jpg',
      description: 'Principal escenario cultural de Medellín donde se realizan conciertos, obras de teatro, danza y eventos internacionales.',
      tags: ['Cultura'] },

    { id: 15, name: 'Casa de la Memoria', lat: 6.245, lng: -75.570, location: 'Centro', rating: 4.7, image: 'assets/images/memoria.jpg',
      description: 'Museo dedicado a la memoria histórica del conflicto en Colombia. Un espacio de reflexión, aprendizaje y construcción de paz.',
      tags: ['Cultura'] },

    // 🍔 GASTRONOMÍA
    { id: 16, name: 'Mondongo’s', lat: 6.207, lng: -75.565, location: 'Poblado', rating: 4.8, image: 'assets/images/mondongos.jpg',
      description: 'Restaurante tradicional famoso por su mondongo y platos típicos paisas. Excelente servicio y ambiente familiar.',
      tags: ['Gastronomía'] },

    { id: 17, name: 'Carmen', lat: 6.209, lng: -75.567, location: 'Poblado', rating: 4.9, image: 'assets/images/carmen.jpg',
      description: 'Restaurante de alta cocina reconocido internacionalmente. Ofrece una experiencia gastronómica innovadora con ingredientes locales.',
      tags: ['Gastronomía'] },

    { id: 18, name: 'El Cielo', lat: 6.210, lng: -75.566, location: 'Poblado', rating: 4.9, image: 'assets/images/cielo.jpg',
      description: 'Experiencia gastronómica sensorial única. Cada plato está diseñado para estimular los sentidos en un recorrido culinario inolvidable.',
      tags: ['Gastronomía'] },

    { id: 19, name: 'Pergamino Café', lat: 6.208, lng: -75.567, location: 'Poblado', rating: 4.7, image: 'assets/images/pergamino.jpg',
      description: 'Cafetería especializada en café colombiano de alta calidad. Ambiente acogedor ideal para trabajar o relajarse.',
      tags: ['Gastronomía'] },

    { id: 20, name: 'Hato Viejo', lat: 6.250, lng: -75.570, location: 'Centro', rating: 4.6, image: 'assets/images/hato.jpg',
      description: 'Restaurante tradicional con auténtica comida paisa. Ideal para probar bandeja paisa en un ambiente típico.',
      tags: ['Gastronomía'] },

    // ⚽ DEPORTE
    { id: 21, name: 'Atanasio Girardot', lat: 6.256, lng: -75.590, location: 'Estadio', rating: 4.8, image: 'assets/images/estadio.jpg',
      description: 'Principal estadio de Medellín donde juegan Atlético Nacional y DIM. Escenario de grandes eventos deportivos y conciertos.',
      tags: ['Deporte'] },

    { id: 22, name: 'Unidad Deportiva', lat: 6.255, lng: -75.590, location: 'Estadio', rating: 4.7, image: 'assets/images/unidad.jpg',
      description: 'Complejo deportivo con múltiples escenarios para fútbol, atletismo, natación y más. Ideal para practicar deporte.',
      tags: ['Deporte'] },

    { id: 23, name: 'Ciclovía', lat: 6.240, lng: -75.580, location: 'Ciudad', rating: 4.6, image: 'assets/images/ciclovia.jpg',
      description: 'Actividad dominical donde se cierran vías para uso exclusivo de ciclistas, corredores y peatones. Perfecto para ejercicio al aire libre.',
      tags: ['Deporte'] },

    { id: 24, name: 'Parque Norte', lat: 6.270, lng: -75.565, location: 'Norte', rating: 4.5, image: 'assets/images/norte.jpg',
      description: 'Parque recreativo con atracciones mecánicas y espacios para el deporte y la diversión en familia.',
      tags: ['Deporte'] },

    { id: 25, name: 'Sky Center', lat: 6.200, lng: -75.570, location: 'Sur', rating: 4.4, image: 'assets/images/sky.jpg',
      description: 'Centro de entretenimiento con actividades deportivas extremas como salto en trampolines, ideal para liberar adrenalina.',
      tags: ['Deporte'] },

  ];

  getPlaces() {
    return this.places;
  }
}
