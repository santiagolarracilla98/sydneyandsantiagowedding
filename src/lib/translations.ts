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
      qa: 'Q&A',
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
      weekendSchedule: {
        thursday: {
          day: 'Thursday, November 12th',
          title: 'Free Day',
          description: 'This is your day to explore Oaxaca at your own pace. Wander the cobblestone streets, visit the markets, try some mezcal tastings, discover incredible food, and soak in the vibrant culture of the city.',
          details: [],
        },
        friday: {
          day: 'Friday, November 13th',
          title: 'Parade & Welcome Party',
          description: 'We kick off the celebrations with a traditional Oaxacan Calenda—a joyful street parade with live music, dancing, and shots of mezcal as we walk through the historic streets of Oaxaca. The parade ends at Copal Restaurant for welcome drinks and light snacks—a taste of what\'s to come on the big day!',
          details: [
            {
              name: 'Calenda',
              time: '5:00 PM',
              description: "A Calenda is a traditional Oaxacan street parade. We'll walk through the streets with a brass band, giant puppets (monos de calenda), and plenty of mezcal. It's festive, lively, and uniquely Oaxacan!",
              meetingPoint: 'Meet at Santo Domingo Church at 4:55 PM',
              address: 'Templo de Santo Domingo, C. Macedonio Alcalá s/n, RUTA INDEPENDENCIA, Centro, 68000 Oaxaca de Juárez, Oax., México',
            },
            {
              name: 'Welcome Party Drinks',
              time: '6:00 PM – 9:00 PM',
              description: 'The Calenda ends at the welcome party venue. This is a drop-in event—come anytime during this window to enjoy drinks, light snacks, and good company.',
              venue: 'Copal Restaurant',
              address: 'C. Macedonio Alcalá 803',
            },
          ],
        },
        saturday: {
          day: 'Saturday, November 14th',
          title: 'Wedding Day',
          description: "The big day! We'll begin with a spiritual ceremony, followed by cocktail hour, then move into the botanical garden for dinner and dancing—all within the same stunning venue.",
          details: [
            {
              name: 'Ceremony',
              time: '2:30 PM – 3:30 PM',
              description: 'The ceremony will take place in El Patio del Huaje, a stunning courtyard within the Jardín Etnobotánico.',
              venue: 'El Patio del Huaje',
              address: 'Entrance on Calle Macedonio Alcalá 505 (across from El Otro Oaxaca hotel)',
              note: 'Please arrive by 2:15 PM.',
            },
            {
              name: 'Cocktails',
              time: '3:30 PM – 4:30 PM',
              description: 'After the ceremony, enjoy cocktails and canapés in the garden.',
            },
            {
              name: 'Reception',
              time: '4:30 PM – 2:00 AM',
              description: 'Dinner, dancing, and celebration—all within the Jardín Etnobotánico. No need to move venues!',
            },
          ],
        },
      },
      map: {
        title: 'Locations',
        locations: {
          santoDomingo: {
            name: 'Templo de Santo Domingo',
            address: 'C. Macedonio Alcalá s/n, RUTA INDEPENDENCIA, Centro, 68000 Oaxaca de Juárez, Oax., México',
          },
          welcomeParty: {
            name: 'Copal Restaurant',
            address: 'C. Macedonio Alcalá 803',
          },
          patioHuaje: {
            name: 'Patio del Huaje (Entrance)',
            address: 'C. Macedonio Alcalá 507, RUTA INDEPENDENCIA, Centro, 68000 Oaxaca de Juárez, Oax., México',
          },
          wedding: {
            name: 'Jardín Etnobotánico de Oaxaca',
            address: 'Reforma S/N, Centro, 68000 Oaxaca de Juárez, Oax.',
          },
        },
      },
      dressCode: {
        title: 'Dress Code',
        weddingDay: {
          subtitle: 'Wedding Day',
          men: {
            label: 'Men',
            description: 'Suit and tie. Prefer classic colors like navy or gray. No black, no unusual/flashy colors, and no sneakers.',
          },
          women: {
            label: 'Women',
            description: 'Colorful long dresses. Heels optional (comfortable shoes encouraged). Bring a light jacket or shawl for the evening—it gets cooler after dark.',
          },
        },
        welcomeParty: {
          subtitle: 'Welcome Party',
          men: {
            label: 'Men',
            description: 'Button-up shirts with dress pants or chinos. Smart casual and relaxed.',
          },
          women: {
            label: 'Women',
            description: 'Short or long dresses in colorful colors. Keep it festive and fun!',
          },
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
            description: 'Direct flights available from Dallas, Houston, and Los Angeles. Other cities connect through Mexico City (MEX) or Guadalajara (GDL).',
            searchUrl: 'https://www.google.com/travel/flights?q=flights%20to%20OAX%20Oaxaca',
          },
          {
            name: 'From Europe',
            description: "Fly to Mexico City (MEX) or connect through a US hub, then on to Oaxaca. We recommend spending a night or two in Mexico City—it's well worth the visit!",
            searchUrl: 'https://www.google.com/travel/flights?q=flights%20to%20OAX%20Oaxaca%20from%20Europe',
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
        title: 'Hotels',
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
    qa: {
      title: 'Q&A',
      subtitle: 'Frequently asked questions about our wedding weekend.',
      questions: [
        {
          question: 'When and where is the wedding?',
          answer: "We're getting married in Oaxaca City, Mexico on November 14, 2026, at El Jardín Etnobotánico de Oaxaca. The full weekend schedule and venue details are shared on this website (see \"Schedule\" and \"Venue\").",
        },
        {
          question: 'Will the ceremony and reception be in the same place?',
          answer: "Yes, both take place within the Botanical Garden venue. The ceremony is a 2-minute walk from the garden area, and you'll enter through \"Patio El Huaje\" (across from \"Hotel OTRO\") — not the main Botanical Garden entrance.",
        },
        {
          question: 'Is Oaxaca safe?',
          answer: 'Yes, Oaxaca is generally considered a safe destination. As with any new place, we recommend staying aware of your surroundings, keeping valuables secure, and using trusted transportation at night.',
        },
        {
          question: "What's the dress code?",
          answer: 'Think festive & elegant. Warm weather-friendly fabrics are ideal. For the main celebration: formal. For daytime events: smart casual.',
        },
        {
          question: 'Will it be outdoors?',
          answer: 'Yes, the wedding will be outdoors. We recommend bringing a light layer for evenings.',
        },
        {
          question: "What's the weather like in Oaxaca?",
          answer: 'Oaxaca is typically warm during the day and cooler at night. Plan for sun + comfortable shoes for walking on cobblestones.',
        },
        {
          question: 'How do I get to Oaxaca?',
          answer: 'You can fly directly to Oaxaca (OAX) from select cities, or connect via Mexico City (MEX). Check our "Travel" section for routes and tips.',
        },
        {
          question: "What's the best way to get from the airport to my hotel?",
          answer: 'The easiest option is to hire a shuttle or private transfer inside the airport (official services), rather than arranging pickup once you are outside of the airport. We recommend the same approach in Mexico City as well; book your transport inside the airport (or prebook) for a smoother arrival.',
        },
        {
          question: 'Where should I stay? (Hotels vs Airbnb)',
          answer: "We recommend staying maximum 10-15 mins walk from Centro for the best walkability. We've shared a curated hotel list on the website, and we also highly recommend Airbnb—there are lots of affordable options, amazing design, and great variety. If you choose Airbnb, try to book as close to the center as possible so you can easily walk everywhere.",
        },
        {
          question: 'How do I get around in Oaxaca?',
          answer: "Oaxaca is very walkable, especially in Centro; walking is often the best way to explore. Uber isn't available, so transportation is mainly taxis (and walking).",
        },
        {
          question: 'How do I know if I can bring a plus-one?',
          answer: "All plus-ones are listed on your invitation. We've thoughtfully planned our guest list, so we kindly ask that you RSVP only for the names shown on the invitation.",
        },
        {
          question: 'How do I confirm my attendance?',
          answer: "Please confirm through the RSVP page on this website. We'll also send a WhatsApp message a couple of months before the wedding to double-confirm your attendance.",
        },
        {
          question: 'Can I bring children?',
          answer: 'As much as we love children, this will be an adults-only celebration.',
        },
        {
          question: 'What time should I arrive to the wedding?',
          answer: 'Please arrive 30 minutes before the ceremony start time so you can settle in comfortably. Please enter via the Patio El Huaje entrance.',
        },
        {
          question: 'Will there be an open bar?',
          answer: 'Yes, an open bar will be provided during the Cocktail & Reception. Mezcal is delicious but stronger than it looks, so pace yourself!',
        },
        {
          question: 'Is there parking available?',
          answer: "There isn't designated wedding parking. Most guests won't need a car; Oaxaca is very walkable and taxis are easy. If you do rent a car, the typical option is street parking near your accommodation and then walking to the venue.",
        },
        {
          question: 'Do I need to speak Spanish?',
          answer: 'No; many tourist operators and hotels speak English. Everything wedding-related will be provided in English and Spanish, and we (and our Mexican crew) will be around all weekend to help with anything you need.',
        },
        {
          question: "What's the best way to pay in Oaxaca?",
          answer: 'Most places accept cards, but we recommend carrying some Mexican pesos for markets, small shops, and taxis. There are plenty of international ATMs in the city.',
        },
        {
          question: 'Are there any cultural traditions?',
          answer: 'Yes, there will be a few Mexican wedding traditions throughout the weekend like the Calenda parade. Come ready to celebrate, dance, and embrace the moment.',
        },
        {
          question: 'Will there be meal options for guests with dietary restrictions?',
          answer: "Yes. Please share any dietary restrictions or allergies when you RSVP, and we'll do our best to accommodate.",
        },
        {
          question: 'Gifts?',
          answer: "Your presence is truly the best gift. If you'd like to contribute, we'll share the registry / honeymoon experiences option on the website.",
        },
      ],
      form: {
        title: 'Any other questions?',
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        questionLabel: 'Question',
        questionPlaceholder: 'Type your question here...',
        submit: 'Send Question',
        submitting: 'Sending...',
        successTitle: 'Question sent!',
        successDescription: "We'll get back to you as soon as possible.",
        errorTitle: 'Error',
        errorDescription: 'Please fill in all fields.',
      },
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
      qa: 'Preguntas',
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
      weekendSchedule: {
        thursday: {
          day: 'Jueves, 12 de Noviembre',
          title: 'Día Libre',
          description: 'Este es tu día para explorar Oaxaca a tu ritmo. Pasea por las calles empedradas, visita los mercados, prueba catas de mezcal, descubre comida increíble y sumérgete en la vibrante cultura de la ciudad.',
          details: [],
        },
        friday: {
          day: 'Viernes, 13 de Noviembre',
          title: 'Desfile y Fiesta de Bienvenida',
          description: 'Comenzamos las celebraciones con una tradicional Calenda Oaxaqueña—un alegre desfile callejero con música en vivo, baile y shots de mezcal mientras caminamos por las calles históricas de Oaxaca. El desfile termina en Restaurante Copal para bebidas de bienvenida y bocadillos—¡una probadita de lo que vendrá el gran día!',
          details: [
            {
              name: 'Calenda',
              time: '5:00 PM',
              description: 'Una Calenda es un desfile callejero tradicional oaxaqueño. Caminaremos por las calles con una banda de música, muñecos gigantes (monos de calenda) y mucho mezcal. ¡Es festivo, animado y únicamente oaxaqueño!',
              meetingPoint: 'Punto de encuentro: Iglesia de Santo Domingo a las 4:55 PM',
              address: 'Templo de Santo Domingo, C. Macedonio Alcalá s/n, RUTA INDEPENDENCIA, Centro, 68000 Oaxaca de Juárez, Oax., México',
            },
            {
              name: 'Bebidas de Bienvenida',
              time: '6:00 PM – 9:00 PM',
              description: 'La Calenda termina en el lugar de la fiesta de bienvenida. Este es un evento de llegada libre—ven en cualquier momento durante este horario para disfrutar de bebidas, bocadillos y buena compañía.',
              venue: 'Restaurante Copal',
              address: 'C. Macedonio Alcalá 803',
            },
          ],
        },
        saturday: {
          day: 'Sábado, 14 de Noviembre',
          title: 'Día de la Boda',
          description: '¡El gran día! Comenzaremos con una ceremonia espiritual, seguida de la hora del cóctel, y luego nos moveremos al jardín botánico para la cena y el baile—todo dentro del mismo hermoso lugar.',
          details: [
            {
              name: 'Ceremonia',
              time: '2:30 PM – 3:30 PM',
              description: 'La ceremonia se llevará a cabo en El Patio del Huaje, un hermoso patio dentro del Jardín Etnobotánico.',
              venue: 'El Patio del Huaje',
              address: 'Entrada en Calle Macedonio Alcalá 505 (frente al hotel El Otro Oaxaca)',
              note: 'Por favor llega a las 2:15 PM.',
            },
            {
              name: 'Cóctel',
              time: '3:30 PM – 4:30 PM',
              description: 'Después de la ceremonia, disfruta de cócteles y canapés en el jardín.',
            },
            {
              name: 'Recepción',
              time: '4:30 PM – 2:00 AM',
              description: 'Cena, baile y celebración—todo dentro del Jardín Etnobotánico. ¡No hay necesidad de cambiar de lugar!',
            },
          ],
        },
      },
      map: {
        title: 'Ubicaciones',
        locations: {
          santoDomingo: {
            name: 'Templo de Santo Domingo',
            address: 'C. Macedonio Alcalá s/n, RUTA INDEPENDENCIA, Centro, 68000 Oaxaca de Juárez, Oax., México',
          },
          welcomeParty: {
            name: 'Restaurante Copal',
            address: 'C. Macedonio Alcalá 803',
          },
          patioHuaje: {
            name: 'Patio del Huaje (Entrada)',
            address: 'C. Macedonio Alcalá 507, RUTA INDEPENDENCIA, Centro, 68000 Oaxaca de Juárez, Oax., México',
          },
          wedding: {
            name: 'Jardín Etnobotánico de Oaxaca',
            address: 'Reforma S/N, Centro, 68000 Oaxaca de Juárez, Oax.',
          },
        },
      },
      dressCode: {
        title: 'Código de Vestimenta',
        weddingDay: {
          subtitle: 'Día de la Boda',
          men: {
            label: 'Hombres',
            description: 'Traje y corbata. Preferir colores clásicos como azul marino o gris. No negro, no colores inusuales/llamativos, y no tenis.',
          },
          women: {
            label: 'Mujeres',
            description: 'Vestidos largos y coloridos. Tacones opcionales (se recomiendan zapatos cómodos). Trae una chaqueta ligera o chal para la noche—refresca después del atardecer.',
          },
        },
        welcomeParty: {
          subtitle: 'Fiesta de Bienvenida',
          men: {
            label: 'Hombres',
            description: 'Camisas de botón con pantalón de vestir o chinos. Smart casual y relajado.',
          },
          women: {
            label: 'Mujeres',
            description: 'Vestidos cortos o largos en colores vivos. ¡Mantén el look festivo y divertido!',
          },
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
            description: 'Vuelos directos disponibles desde Dallas, Houston y Los Ángeles. Otras ciudades conectan a través de Ciudad de México (MEX) o Guadalajara (GDL).',
            searchUrl: 'https://www.google.com/travel/flights?q=vuelos%20a%20OAX%20Oaxaca',
          },
          {
            name: 'Desde Europa',
            description: 'Vuela a Ciudad de México (MEX) o conecta a través de EE.UU., y luego a Oaxaca. Recomendamos pasar una o dos noches en Ciudad de México—¡vale mucho la pena!',
            searchUrl: 'https://www.google.com/travel/flights?q=vuelos%20a%20OAX%20Oaxaca%20desde%20Europa',
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
        title: 'Hoteles',
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
    qa: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Preguntas frecuentes sobre nuestro fin de semana de boda.',
      questions: [
        {
          question: '¿Cuándo y dónde es la boda?',
          answer: 'Nos casamos en la Ciudad de Oaxaca, México el 14 de noviembre de 2026, en El Jardín Etnobotánico de Oaxaca. El programa completo del fin de semana y los detalles del lugar están en este sitio web (ver "Programa" y "Recinto").',
        },
        {
          question: '¿La ceremonia y la recepción serán en el mismo lugar?',
          answer: 'Sí, ambas se llevarán a cabo dentro del Jardín Botánico. La ceremonia está a 2 minutos caminando del área del jardín, y entrarás por "Patio El Huaje" (frente a "Hotel OTRO") — no por la entrada principal del Jardín Botánico.',
        },
        {
          question: '¿Es seguro Oaxaca?',
          answer: 'Sí, Oaxaca generalmente se considera un destino seguro. Como en cualquier lugar nuevo, recomendamos estar atento a tu entorno, mantener seguros tus objetos de valor y usar transporte de confianza por la noche.',
        },
        {
          question: '¿Cuál es el código de vestimenta?',
          answer: 'Piensa festivo y elegante. Telas cómodas para clima cálido son ideales. Para la celebración principal: formal. Para eventos de día: smart casual.',
        },
        {
          question: '¿Será al aire libre?',
          answer: 'Sí, la boda será al aire libre. Recomendamos traer una capa ligera para las noches.',
        },
        {
          question: '¿Cómo es el clima en Oaxaca?',
          answer: 'Oaxaca típicamente es cálido durante el día y más fresco por la noche. Planea para el sol + zapatos cómodos para caminar sobre los adoquines.',
        },
        {
          question: '¿Cómo llego a Oaxaca?',
          answer: 'Puedes volar directamente a Oaxaca (OAX) desde algunas ciudades, o conectar vía Ciudad de México (MEX). Consulta nuestra sección "Viaje" para rutas y consejos.',
        },
        {
          question: '¿Cuál es la mejor manera de ir del aeropuerto al hotel?',
          answer: 'La opción más fácil es contratar un shuttle o transfer privado dentro del aeropuerto (servicios oficiales), en lugar de organizar transporte una vez que estés afuera. Recomendamos lo mismo en Ciudad de México; reserva tu transporte dentro del aeropuerto (o con anticipación) para una llegada más tranquila.',
        },
        {
          question: '¿Dónde debería hospedarme? (Hoteles vs Airbnb)',
          answer: 'Recomendamos hospedarte máximo a 10-15 minutos caminando del Centro para la mejor accesibilidad. Hemos compartido una lista curada de hoteles en el sitio web, y también recomendamos mucho Airbnb—hay muchas opciones económicas, diseño increíble y gran variedad. Si eliges Airbnb, intenta reservar lo más cerca del centro posible para poder caminar a todos lados.',
        },
        {
          question: '¿Cómo me muevo en Oaxaca?',
          answer: 'Oaxaca es muy caminable, especialmente en el Centro; caminar suele ser la mejor manera de explorar. Uber no está disponible, así que el transporte es principalmente taxis (y caminando).',
        },
        {
          question: '¿Cómo sé si puedo llevar acompañante?',
          answer: 'Todos los acompañantes están indicados en tu invitación. Hemos planeado cuidadosamente nuestra lista de invitados, por lo que te pedimos amablemente que confirmes asistencia solo para los nombres que aparecen en la invitación.',
        },
        {
          question: '¿Cómo confirmo mi asistencia?',
          answer: 'Por favor confirma a través de la página de RSVP en este sitio web. También enviaremos un mensaje de WhatsApp un par de meses antes de la boda para confirmar tu asistencia.',
        },
        {
          question: '¿Puedo llevar niños?',
          answer: 'Por mucho que amamos a los niños, esta será una celebración solo para adultos.',
        },
        {
          question: '¿A qué hora debo llegar a la boda?',
          answer: 'Por favor llega 30 minutos antes de la hora de inicio de la ceremonia para que puedas acomodarte tranquilamente. Por favor entra por la entrada del Patio El Huaje.',
        },
        {
          question: '¿Habrá barra libre?',
          answer: '¡Sí, habrá barra libre durante el Cóctel y la Recepción! El mezcal es delicioso pero más fuerte de lo que parece, ¡así que tómalo con calma!',
        },
        {
          question: '¿Hay estacionamiento disponible?',
          answer: 'No hay estacionamiento designado para la boda. La mayoría de los invitados no necesitarán auto; Oaxaca es muy caminable y los taxis son fáciles. Si rentas un auto, la opción típica es estacionamiento en la calle cerca de tu alojamiento y luego caminar al lugar.',
        },
        {
          question: '¿Necesito hablar español?',
          answer: 'No; muchos operadores turísticos y hoteles hablan inglés. Todo lo relacionado con la boda se proporcionará en inglés y español, y nosotros (y nuestro equipo mexicano) estaremos disponibles todo el fin de semana para ayudar con lo que necesites.',
        },
        {
          question: '¿Cuál es la mejor forma de pagar en Oaxaca?',
          answer: 'La mayoría de los lugares aceptan tarjetas, pero recomendamos llevar algunos pesos mexicanos para mercados, tiendas pequeñas y taxis. Hay muchos cajeros automáticos internacionales en la ciudad.',
        },
        {
          question: '¿Hay tradiciones culturales?',
          answer: 'Sí, habrá algunas tradiciones mexicanas de boda durante el fin de semana como el desfile de la Calenda. Ven listo para celebrar, bailar y disfrutar el momento.',
        },
        {
          question: '¿Habrá opciones de comida para invitados con restricciones dietéticas?',
          answer: 'Sí. Por favor comparte cualquier restricción dietética o alergia cuando confirmes tu asistencia, y haremos nuestro mejor esfuerzo para acomodarte.',
        },
        {
          question: '¿Regalos?',
          answer: 'Tu presencia es verdaderamente el mejor regalo. Si deseas contribuir, compartiremos la opción de registro / experiencias de luna de miel en el sitio web.',
        },
      ],
      form: {
        title: '¿Alguna otra pregunta?',
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu@correo.com',
        questionLabel: 'Pregunta',
        questionPlaceholder: 'Escribe tu pregunta aquí...',
        submit: 'Enviar Pregunta',
        submitting: 'Enviando...',
        successTitle: '¡Pregunta enviada!',
        successDescription: 'Te responderemos lo antes posible.',
        errorTitle: 'Error',
        errorDescription: 'Por favor completa todos los campos.',
      },
    },
  },
} as const;
