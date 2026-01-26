export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      intro: 'Intro',
      oaxaca: 'Oaxaca',
      venue: 'Venue',
      planYourTrip: 'Plan Your Trip',
      agenda: 'Agenda',
      recommendations: 'Recommendations',
      giftRegistry: 'Gift Registry',
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
    agenda: {
      title: 'Agenda',
      subtitle: 'A simple overview of the weekend.',
      anchors: {
        weather: 'Weather',
        schedule: 'Schedule',
        map: 'Map',
        dressCode: 'Dress Code',
      },
      weather: {
        label: 'Expected weather in Oaxaca (mid-November)',
        day: 'Day: ~24–28°C (75–82°F), sunny / dry',
        night: 'Night: ~10–14°C (50–57°F), cooler',
        note: 'Pack a light layer for evenings.',
      },
      schedule: {
        thursday: {
          day: 'Thursday',
          title: 'Free Time',
          description: 'Arrive, settle in, explore the city, mezcal tastings, markets, and food.',
        },
        friday: {
          day: 'Friday',
          title: 'Welcome Party',
          description: 'Join us for drinks, music, and a relaxed welcome celebration.',
        },
        saturday: {
          day: 'Saturday',
          title: 'Wedding (Jardín Etnobotánico)',
          description: 'Ceremony and celebration at the Jardín Etnobotánico de Oaxaca.',
        },
      },
      detailedSchedule: {
        friday: {
          date: 'Friday, November 13th',
          title: 'Welcome Party',
          events: [
            {
              name: 'Calenda (Oaxacan Parade)',
              time: '5:00 PM - 6:00 PM',
              venue: 'Templo Santo Domingo',
              address: 'Calle 5 de Mayo 413',
            },
            {
              name: 'Welcome Party Drinks',
              time: '6:00 PM - 9:00 PM',
              venue: 'Copal Restaurant',
              address: 'C. Macedonio Alcalá 803',
            },
          ],
        },
        saturday: {
          date: 'Saturday, November 14th',
          title: 'Wedding Day',
          events: [
            { name: 'Ceremony', time: '2:30 PM - 3:30 PM' },
            { name: 'Cocktails', time: '3:30 PM - 4:30 PM' },
            { name: 'Reception', time: '4:30 PM - 2:00 AM' },
          ],
          venue: {
            name: 'Patio el Huaje Entrance',
            location: 'Jardín Etnobotánico',
            address: 'Calle Macedonio Alcalá 505',
          },
        },
      },
      map: {
        title: 'Locations',
        locations: {
          welcomeParty: {
            name: 'Welcome Party',
            address: '[ADD ADDRESS]',
          },
          wedding: {
            name: 'Jardín Etnobotánico de Oaxaca',
            address: 'Reforma S/N, Centro, 68000 Oaxaca de Juárez, Oax.',
          },
        },
      },
      dressCode: {
        title: 'Dress Code',
        men: {
          label: 'Men',
          description: 'Suit and tie. Prefer classic colors like navy or gray. No black and no unusual/flashy colors.',
        },
        women: {
          label: 'Women',
          description: 'Colorful long dresses. Heels optional (comfortable shoes encouraged).',
        },
      },
    },
    planYourTrip: {
      title: 'Plan Your Trip',
      subtitle: 'Getting to Oaxaca',
      intro: "Oaxaca City is served by Xoxocotlán International Airport (OAX). Here's how to get here from different parts of the world:",
      flights: {
        title: 'Flights',
        directFlightsTitle: 'Direct Flights to Oaxaca',
        regions: [
          {
            name: 'From USA & Canada',
            description: 'Most flights connect through Mexico City (MEX) or Guadalajara (GDL). Direct flights available from some US cities.',
            searchUrl: 'https://www.google.com/travel/flights?q=flights%20to%20OAX%20Oaxaca',
          },
          {
            name: 'From Europe',
            description: 'Fly to Mexico City (MEX), then connect to Oaxaca. Flight time from MEX to OAX is about 1 hour.',
            searchUrl: 'https://www.google.com/travel/flights?q=flights%20to%20OAX%20Oaxaca%20from%20Europe',
          },
          {
            name: 'From Latin America',
            description: 'Direct or one-stop flights via Mexico City. Many carriers serve this route.',
            searchUrl: 'https://www.google.com/travel/flights?q=flights%20to%20OAX%20Oaxaca',
          },
          {
            name: 'From Mexico',
            description: 'Direct flights from Mexico City, Guadalajara, Monterrey, and other major cities.',
            searchUrl: 'https://www.google.com/travel/flights?q=flights%20to%20OAX%20Oaxaca%20from%20Mexico%20City',
          },
        ],
        cta: 'Search Flights',
      },
      accommodations: {
        title: 'Where to Stay',
        description: 'We recommend staying in the Centro Histórico for easy walking access to the venue and city attractions.',
        options: [
          {
            name: 'Boutique Hotels',
            description: 'Charming colonial-style hotels with courtyards. Try Hotel Quinta Real, Casa Oaxaca, or Hotel Los Amantes.',
          },
          {
            name: 'Airbnb & Rentals',
            description: 'Many beautiful apartments and casas available in the historic center. Great for groups or longer stays.',
          },
          {
            name: 'Budget-Friendly',
            description: 'Hostels and guesthouses offer comfortable stays. Casa Angel and Hostal de la Noria are popular choices.',
          },
        ],
      },
      tips: {
        title: 'Local Tips',
        items: [
          'The best time to book flights is 2-3 months in advance.',
          'November weather is pleasant—warm days (24°C/75°F) and cool evenings.',
          'Uber and taxis are readily available. The airport is 15 minutes from Centro.',
          'Mexican pesos are preferred, but USD is accepted at some tourist spots.',
          'Bring comfortable walking shoes—the city is best explored on foot!',
        ],
      },
    },
    recommendations: {
      title: 'Recommendations',
      subtitle: 'Our Favorite Spots',
      intro: "Oaxaca is a feast for all senses. Here are some places we love and think you'll enjoy:",
      categories: [
        {
          name: 'Food & Drink',
          items: [
            { name: 'Mercado 20 de Noviembre', description: 'Iconic market with incredible tlayudas and grilled meats.' },
            { name: 'Los Danzantes', description: 'Upscale Oaxacan cuisine with an extensive mezcal menu.' },
            { name: 'Mezcaloteca', description: 'Intimate mezcal tasting experience with expert guides.' },
            { name: 'Café Brújula', description: 'Best coffee in town with multiple locations.' },
          ],
        },
        {
          name: 'Culture & History',
          items: [
            { name: 'Monte Albán', description: 'Ancient Zapotec ruins with breathtaking valley views.' },
            { name: 'Museo de las Culturas', description: 'Stunning museum inside the Santo Domingo church complex.' },
            { name: 'Hierve el Agua', description: 'Petrified waterfalls and natural infinity pools (day trip).' },
          ],
        },
        {
          name: 'Shopping & Artisans',
          items: [
            { name: 'Mercado de Artesanías', description: 'Traditional crafts, textiles, and black pottery.' },
            { name: 'Teotitlán del Valle', description: 'Village famous for hand-woven rugs (30 min drive).' },
            { name: 'MARO', description: 'Curated cooperative featuring local artists and designers.' },
          ],
        },
      ],
    },
    giftRegistry: {
      title: 'Gift Registry',
      linkPlaceholder: 'Link to be added',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      intro: 'Intro',
      oaxaca: 'Oaxaca',
      venue: 'Recinto',
      planYourTrip: 'Planifica tu Viaje',
      agenda: 'Agenda',
      recommendations: 'Recomendaciones',
      giftRegistry: 'Mesa de Regalos',
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
    agenda: {
      title: 'Agenda',
      subtitle: 'Un resumen sencillo del fin de semana.',
      anchors: {
        weather: 'Clima',
        schedule: 'Programa',
        map: 'Mapa',
        dressCode: 'Código de Vestimenta',
      },
      weather: {
        label: 'Clima esperado en Oaxaca (mediados de noviembre)',
        day: 'Día: ~24–28°C (75–82°F), soleado / seco',
        night: 'Noche: ~10–14°C (50–57°F), más fresco',
        note: 'Trae una capa ligera para las noches.',
      },
      schedule: {
        thursday: {
          day: 'Jueves',
          title: 'Tiempo Libre',
          description: 'Llega, instálate, explora la ciudad, catas de mezcal, mercados y comida.',
        },
        friday: {
          day: 'Viernes',
          title: 'Fiesta de Bienvenida',
          description: 'Acompáñanos para bebidas, música y una celebración de bienvenida relajada.',
        },
        saturday: {
          day: 'Sábado',
          title: 'Boda (Jardín Etnobotánico)',
          description: 'Ceremonia y celebración en el Jardín Etnobotánico de Oaxaca.',
        },
      },
      detailedSchedule: {
        friday: {
          date: 'Viernes, 13 de Noviembre',
          title: 'Fiesta de Bienvenida',
          events: [
            {
              name: 'Calenda (Desfile Oaxaqueño)',
              time: '5:00 PM - 6:00 PM',
              venue: 'Templo Santo Domingo',
              address: 'Calle 5 de Mayo 413',
            },
            {
              name: 'Bebidas de Bienvenida',
              time: '6:00 PM - 9:00 PM',
              venue: 'Restaurante Copal',
              address: 'C. Macedonio Alcalá 803',
            },
          ],
        },
        saturday: {
          date: 'Sábado, 14 de Noviembre',
          title: 'Día de la Boda',
          events: [
            { name: 'Ceremonia', time: '2:30 PM - 3:30 PM' },
            { name: 'Cóctel', time: '3:30 PM - 4:30 PM' },
            { name: 'Recepción', time: '4:30 PM - 2:00 AM' },
          ],
          venue: {
            name: 'Entrada Patio el Huaje',
            location: 'Jardín Etnobotánico',
            address: 'Calle Macedonio Alcalá 505',
          },
        },
      },
      map: {
        title: 'Ubicaciones',
        locations: {
          welcomeParty: {
            name: 'Fiesta de Bienvenida',
            address: '[AGREGAR DIRECCIÓN]',
          },
          wedding: {
            name: 'Jardín Etnobotánico de Oaxaca',
            address: 'Reforma S/N, Centro, 68000 Oaxaca de Juárez, Oax.',
          },
        },
      },
      dressCode: {
        title: 'Código de Vestimenta',
        men: {
          label: 'Hombres',
          description: 'Traje y corbata. Preferir colores clásicos como azul marino o gris. No negro ni colores inusuales/llamativos.',
        },
        women: {
          label: 'Mujeres',
          description: 'Vestidos largos y coloridos. Tacones opcionales (se recomiendan zapatos cómodos).',
        },
      },
    },
    planYourTrip: {
      title: 'Planifica tu Viaje',
      subtitle: 'Cómo llegar a Oaxaca',
      intro: 'La ciudad de Oaxaca cuenta con el Aeropuerto Internacional de Xoxocotlán (OAX). Así puedes llegar desde diferentes partes del mundo:',
      flights: {
        title: 'Vuelos',
        directFlightsTitle: 'Vuelos Directos a Oaxaca',
        regions: [
          {
            name: 'Desde EE.UU. y Canadá',
            description: 'La mayoría de los vuelos conectan a través de Ciudad de México (MEX) o Guadalajara (GDL). Vuelos directos disponibles desde algunas ciudades de EE.UU.',
            searchUrl: 'https://www.google.com/travel/flights?q=vuelos%20a%20OAX%20Oaxaca',
          },
          {
            name: 'Desde Europa',
            description: 'Vuela a Ciudad de México (MEX) y conecta a Oaxaca. El vuelo de MEX a OAX dura aproximadamente 1 hora.',
            searchUrl: 'https://www.google.com/travel/flights?q=vuelos%20a%20OAX%20Oaxaca%20desde%20Europa',
          },
          {
            name: 'Desde Latinoamérica',
            description: 'Vuelos directos o con una escala vía Ciudad de México. Varias aerolíneas cubren esta ruta.',
            searchUrl: 'https://www.google.com/travel/flights?q=vuelos%20a%20OAX%20Oaxaca',
          },
          {
            name: 'Desde México',
            description: 'Vuelos directos desde Ciudad de México, Guadalajara, Monterrey y otras ciudades importantes.',
            searchUrl: 'https://www.google.com/travel/flights?q=vuelos%20a%20OAX%20Oaxaca%20desde%20Ciudad%20de%20Mexico',
          },
        ],
        cta: 'Buscar Vuelos',
      },
      accommodations: {
        title: 'Dónde Hospedarse',
        description: 'Recomendamos hospedarse en el Centro Histórico para tener fácil acceso a pie al recinto y las atracciones de la ciudad.',
        options: [
          {
            name: 'Hoteles Boutique',
            description: 'Encantadores hoteles de estilo colonial con patios. Prueba Hotel Quinta Real, Casa Oaxaca o Hotel Los Amantes.',
          },
          {
            name: 'Airbnb y Alquileres',
            description: 'Muchos hermosos departamentos y casas disponibles en el centro histórico. Ideales para grupos o estancias largas.',
          },
          {
            name: 'Opciones Económicas',
            description: 'Hostales y casas de huéspedes ofrecen estadías cómodas. Casa Angel y Hostal de la Noria son opciones populares.',
          },
        ],
      },
      tips: {
        title: 'Tips Locales',
        items: [
          'El mejor momento para reservar vuelos es 2-3 meses antes.',
          'El clima en noviembre es agradable—días cálidos (24°C) y noches frescas.',
          'Uber y taxis están disponibles. El aeropuerto está a 15 minutos del Centro.',
          'Se prefieren pesos mexicanos, pero algunos lugares turísticos aceptan dólares.',
          '¡Trae zapatos cómodos para caminar—la ciudad se explora mejor a pie!',
        ],
      },
    },
    recommendations: {
      title: 'Recomendaciones',
      subtitle: 'Nuestros Lugares Favoritos',
      intro: 'Oaxaca es un festín para todos los sentidos. Aquí hay algunos lugares que amamos y creemos que disfrutarán:',
      categories: [
        {
          name: 'Comida y Bebida',
          items: [
            { name: 'Mercado 20 de Noviembre', description: 'Mercado icónico con increíbles tlayudas y carnes asadas.' },
            { name: 'Los Danzantes', description: 'Cocina oaxaqueña de alta gama con extenso menú de mezcal.' },
            { name: 'Mezcaloteca', description: 'Experiencia íntima de degustación de mezcal con guías expertos.' },
            { name: 'Café Brújula', description: 'El mejor café de la ciudad con varias ubicaciones.' },
          ],
        },
        {
          name: 'Cultura e Historia',
          items: [
            { name: 'Monte Albán', description: 'Ruinas zapotecas antiguas con vistas impresionantes del valle.' },
            { name: 'Museo de las Culturas', description: 'Impresionante museo dentro del complejo de Santo Domingo.' },
            { name: 'Hierve el Agua', description: 'Cascadas petrificadas y albercas naturales infinitas (excursión de día).' },
          ],
        },
        {
          name: 'Compras y Artesanías',
          items: [
            { name: 'Mercado de Artesanías', description: 'Artesanías tradicionales, textiles y barro negro.' },
            { name: 'Teotitlán del Valle', description: 'Pueblo famoso por tapetes tejidos a mano (30 min en auto).' },
            { name: 'MARO', description: 'Cooperativa curada con artistas y diseñadores locales.' },
          ],
        },
      ],
    },
    giftRegistry: {
      title: 'Mesa de Regalos',
      linkPlaceholder: 'Link por agregar',
    },
  },
} as const;
