const submenus = {
  1: {
    titulo: 'Que quieres comer?',
    opciones: [
      { id: 1, label: 'Manzana',    emoji: '🍎', frase: 'quiero comer manzana' },
      { id: 2, label: 'Banano',     emoji: '🍌', frase: 'quiero comer banano' },
      { id: 3, label: 'Naranja',    emoji: '🍊', frase: 'quiero comer naranja' },
      { id: 4, label: 'Uvas',       emoji: '🍇', frase: 'quiero comer uvas' },
      { id: 5, label: 'Fresa',      emoji: '🍓', frase: 'quiero comer fresas' },
      { id: 6, label: 'Mango',      emoji: '🥭', frase: 'quiero comer mango' },
      { id: 7, label: 'Piña',       emoji: '🍍', frase: 'quiero comer piña' },
      { id: 8, label: 'Sandia',     emoji: '🍉', frase: 'quiero comer sandia' },
      { id: 9, label: 'Arroz',      emoji: '🍚', frase: 'quiero comer arroz' },
      { id: 10, label: 'Sopa',      emoji: '🍲', frase: 'quiero comer sopa' },
      { id: 11, label: 'Pasta',     emoji: '🍝', frase: 'quiero comer pasta' },
      { id: 12, label: 'Pizza',     emoji: '🍕', frase: 'quiero comer pizza' },
      { id: 13, label: 'Sandwich',  emoji: '🥪', frase: 'quiero comer sandwich' },
      { id: 14, label: 'Huevo',     emoji: '🍳', frase: 'quiero comer huevo' },
      { id: 15, label: 'Pollo',     emoji: '🍗', frase: 'quiero comer pollo' },
      { id: 16, label: 'Carne',     emoji: '🥩', frase: 'quiero comer carne' },
      { id: 17, label: 'Pescado',   emoji: '🐟', frase: 'quiero comer pescado' },
      { id: 18, label: 'Ensalada',  emoji: '🥗', frase: 'quiero comer ensalada' },
      { id: 19, label: 'Zanahoria', emoji: '🥕', frase: 'quiero comer zanahoria' },
      { id: 20, label: 'Pan',       emoji: '🍞', frase: 'quiero comer pan' },
      { id: 21, label: 'Leche',     emoji: '🥛', frase: 'quiero tomar leche' },
      { id: 22, label: 'Yogur',     emoji: '🫙', frase: 'quiero comer yogur' },
      { id: 23, label: 'Queso',     emoji: '🧀', frase: 'quiero comer queso' },
      { id: 24, label: 'Cereal',    emoji: '🥣', frase: 'quiero comer cereal' },
      { id: 25, label: 'Galletas',  emoji: '🍪', frase: 'quiero comer galletas' },
      { id: 26, label: 'Helado',    emoji: '🍦', frase: 'quiero comer helado' },
      { id: 27, label: 'Chocolate', emoji: '🍫', frase: 'quiero comer chocolate' },
      { id: 28, label: 'Torta',     emoji: '🎂', frase: 'quiero comer torta' },
    ]
  },
  39: {
    titulo: 'A que quieres jugar?',
    opciones: [
      { id: 1, label: 'Videojuegos', emoji: '🎮', frase: 'quiero jugar videojuegos' },
      { id: 2, label: 'Pelota',      emoji: '⚽', frase: 'quiero jugar con la pelota' },
      { id: 3, label: 'Lego',        emoji: '🧱', frase: 'quiero jugar con lego' },
      { id: 4, label: 'Rompecabezas',emoji: '🧩', frase: 'quiero armar un rompecabezas' },
      { id: 5, label: 'Carros',      emoji: '🚗', frase: 'quiero jugar con carros' },
      { id: 6, label: 'Muñecas',     emoji: '🪆', frase: 'quiero jugar con muñecas' },
      { id: 7, label: 'Pintar',      emoji: '🎨', frase: 'quiero jugar pintando' },
      { id: 8, label: 'Burbujas',    emoji: '🫧', frase: 'quiero jugar con burbujas' },
      { id: 9, label: 'Cartas',      emoji: '🃏', frase: 'quiero jugar cartas' },
      { id: 10, label: 'Ajedrez',    emoji: '♟️', frase: 'quiero jugar ajedrez' },
      { id: 11, label: 'Columpio',   emoji: '🎠', frase: 'quiero jugar en el columpio' },
      { id: 12, label: 'Bicicleta',  emoji: '🚴', frase: 'quiero montar bicicleta' },
    ]
  },
  40: {
    titulo: 'Que musica quieres escuchar?',
    opciones: [
      { id: 1, label: 'Infantil',   emoji: '🎵', frase: 'quiero escuchar musica infantil' },
      { id: 2, label: 'Relajante',  emoji: '🎶', frase: 'quiero escuchar musica relajante' },
      { id: 3, label: 'Alegre',     emoji: '🎸', frase: 'quiero escuchar musica alegre' },
      { id: 4, label: 'Clasica',    emoji: '🎻', frase: 'quiero escuchar musica clasica' },
      { id: 5, label: 'Reggaeton',  emoji: '🎤', frase: 'quiero escuchar reggaeton' },
      { id: 6, label: 'Villancicos',emoji: '🎄', frase: 'quiero escuchar villancicos' },
      { id: 7, label: 'Rock',       emoji: '🤘', frase: 'quiero escuchar rock' },
      { id: 8, label: 'Salsa',      emoji: '💃', frase: 'quiero escuchar salsa' },
    ]
  },
  44: {
    titulo: 'Que quieres ver?',
    opciones: [
      { id: 1, label: 'Dibujos',     emoji: '📺', frase: 'quiero ver dibujos animados' },
      { id: 2, label: 'Pelicula',    emoji: '🎬', frase: 'quiero ver una pelicula' },
      { id: 3, label: 'Futbol',      emoji: '⚽', frase: 'quiero ver futbol' },
      { id: 4, label: 'Animales',    emoji: '🦁', frase: 'quiero ver videos de animales' },
      { id: 5, label: 'YouTube',     emoji: '▶️', frase: 'quiero ver YouTube' },
      { id: 6, label: 'Novela',      emoji: '📱', frase: 'quiero ver una novela' },
      { id: 7, label: 'Documental',  emoji: '🌍', frase: 'quiero ver un documental' },
      { id: 8, label: 'Noticias',    emoji: '📰', frase: 'quiero ver las noticias' },
    ]
  },
  41: {
    titulo: 'A donde quieres ir?',
    opciones: [
      { id: 1, label: 'Parque',      emoji: '🌳', frase: 'quiero ir al parque' },
      { id: 2, label: 'Piscina',     emoji: '🏊', frase: 'quiero ir a la piscina' },
      { id: 3, label: 'Tienda',      emoji: '🛒', frase: 'quiero ir a la tienda' },
      { id: 4, label: 'Casa abuela', emoji: '👵', frase: 'quiero ir a la casa de la abuela' },
      { id: 5, label: 'Cine',        emoji: '🎥', frase: 'quiero ir al cine' },
      { id: 6, label: 'Restaurante', emoji: '🍽️', frase: 'quiero ir a un restaurante' },
      { id: 7, label: 'Iglesia',     emoji: '⛪', frase: 'quiero ir a la iglesia' },
      { id: 8, label: 'Plaza',       emoji: '🏙️', frase: 'quiero ir a la plaza' },
      { id: 9, label: 'Biblioteca',  emoji: '📚', frase: 'quiero ir a la biblioteca' },
      { id: 10, label: 'Playa',      emoji: '🏖️', frase: 'quiero ir a la playa' },
      { id: 11, label: 'Campo',      emoji: '🌾', frase: 'quiero ir al campo' },
      { id: 12, label: 'Casa',       emoji: '🏠', frase: 'quiero ir a casa' },
    ]
  },
};

export default submenus;