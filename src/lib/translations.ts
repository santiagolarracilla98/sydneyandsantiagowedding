export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      intro: 'Intro',
      oaxaca: 'Oaxaca',
      venue: 'Venue',
      planYourTrip: 'Plan Your Trip',
      recommendations: 'Recommendations',
    },
    hero: {
      title: "Sydney & Santiago's Wedding",
      date: 'November 14, 2026',
      location: 'Oaxaca City, Mexico',
    },
    modal: {
      title: 'Choose your language',
      subtitle: 'Elige tu idioma',
      hint: 'You can change this anytime.',
      english: 'English',
      spanish: 'Español',
    },
    intro: {
      title: 'Intro',
      paragraphs: [
        "Hi! we're incredibly grateful you're here.",
        "Some of you have been with us from the very beginning, others through family, friendship, and life along the way, but every one of you has mattered in helping shape who we are, and how we've arrived at this moment.",
        "This weekend is a celebration of love: two cultures, two families, and two sides of the world coming together; full of flavour, colour, energy, and good vibes.",
        "Having you here means more than we can say, because you're not just attending… you're witnessing one of the biggest transitions of our lives.",
        "Thank you for standing with us as we begin this new chapter and become one bigger family and community.",
      ],
      signature: 'Sydney and Santiago',
    },
    oaxaca: {
      title: 'Oaxaca',
      paragraphs: [
        "Oaxaca is a place where deep history and everyday joy live side by side. Long before the city existed, the Valley of Oaxaca was home to thriving Indigenous civilizations, most famously the Zapotecs, who founded Monte Albán (Pyramids) around 500 BCE on the hilltops just outside town.",
        "Centuries later, the Spanish founded Oaxaca de Juárez (then called Antequera) in 1529, laying out the city in a colonial grid that still shapes its walkable streets and plazas today, so significant that the Historic Centre and Monte Albán are recognized together as a UNESCO World Heritage Site.",
        "Set in a fertile valley about 1,550 metres above sea level, Oaxaca feels warm, colourful, and full of life; stone streets, open-air courtyards, lively markets, and a food culture that's as generous as it is unforgettable.",
        "It's also a place built on community and celebration, from artisan traditions to festivals like the Guelaguetza, where music, dance, and regional pride take over the city.",
      ],
    },
    venue: {
      title: 'The Venue',
      subtitle: 'Jardín Etnobotánico',
      paragraphs: [
        "The Jardín Etnobotánico de Oaxaca is a living celebration of the region's native plants—where nature and culture have grown together for centuries. It sits within the former orchard of the 16th-century Ex-Convent of Santo Domingo, right in the heart of the city.",
        "As you stroll through, you'll see Oaxaca's landscapes in miniature: striking cacti and agaves, desert species, and plants from tropical and mountain regions.",
        "And in the middle of it all, surrounded by greenery and history; is where we'll say our vows with you beside us.",
      ],
    },
    footer: {
      message: 'With love,',
      names: 'Sydney & Santiago',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      intro: 'Intro',
      oaxaca: 'Oaxaca',
      venue: 'Recinto',
      planYourTrip: 'Planifica tu Viaje',
      recommendations: 'Recomendaciones',
    },
    hero: {
      title: 'La Boda de Sydney & Santiago',
      date: '14 de Noviembre, 2026',
      location: 'Ciudad de Oaxaca, México',
    },
    modal: {
      title: 'Elige tu idioma',
      subtitle: 'Choose your language',
      hint: 'Puedes cambiarlo cuando quieras.',
      english: 'English',
      spanish: 'Español',
    },
    intro: {
      title: 'Intro',
      paragraphs: [
        '¡Hola! Estamos increíblemente agradecidos de que estén aquí.',
        'Algunos han estado con nosotros desde el principio, otros han llegado a nuestras vidas a través de familia, amistades y a través del camino que hemos recorrido, pero cada uno ha sido una pieza vital en ayudarnos a formar quiénes somos y cómo hemos llegado a este momento.',
        'Este fin de semana celebramos el amor: dos culturas, dos familias y dos rincones del mundo uniéndose; llenos de sabor, color, energía y buena vibra.',
        'Tenerlos aquí significa más de lo que podemos expresar, porque no solo están asistiendo… están siendo testigos de una de las transiciones más grandes de nuestras vidas.',
        'Gracias por acompañarnos mientras empezamos este nuevo capítulo y nos convertimos en una familia y una comunidad aún más grande.',
      ],
      signature: 'Sydney y Santiago',
    },
    oaxaca: {
      title: 'Oaxaca',
      paragraphs: [
        'Oaxaca es un lugar donde la historia profunda y la alegría cotidiana conviven lado a lado. Mucho antes de que existiera la ciudad, el Valle de Oaxaca fue hogar de prósperas civilizaciones indígenas, sobre todo los zapotecas, quienes fundaron Monte Albán alrededor del 500 a. C. en las colinas a las afueras de la ciudad.',
        'Siglos después, los españoles fundaron Oaxaca de Juárez (entonces llamada Antequera) en 1529, trazando la ciudad con una cuadrícula colonial que hasta hoy define sus calles caminables y sus plazas, tan significativa que el Centro Histórico y Monte Albán están reconocidos juntos como Patrimonio Mundial de la UNESCO.',
        'Ubicada en un valle fértil a unos 1,550 metros sobre el nivel del mar, Oaxaca se siente cálida, colorida y llena de vida: calles de piedra, patios al aire libre, mercados vibrantes y una cultura gastronómica tan generosa como inolvidable.',
        'También es un lugar construido sobre la comunidad y la celebración, desde sus tradiciones artesanales hasta festivales como la Guelaguetza, donde la música, el baile y el orgullo regional se apoderan de la ciudad.',
      ],
    },
    venue: {
      title: 'El Recinto',
      subtitle: 'Jardín Etnobotánico',
      paragraphs: [
        'El Jardín Etnobotánico de Oaxaca es una celebración viva de las plantas nativas de la región, un lugar donde la naturaleza y la cultura han crecido juntas durante siglos. Está ubicado en la antigua huerta del Ex Convento de Santo Domingo, del siglo XVI, en pleno corazón de la ciudad.',
        'Mientras lo recorren, verán en pequeño los paisajes de Oaxaca: imponentes cactáceas y agaves, especies del desierto y plantas de regiones tropicales y de montaña.',
        'Y en medio de todo, rodeados de vegetación e historia; ahí será donde diremos nuestros votos, con ustedes a nuestro lado.',
      ],
    },
    footer: {
      message: 'Con amor,',
      names: 'Sydney & Santiago',
    },
  },
} as const;
