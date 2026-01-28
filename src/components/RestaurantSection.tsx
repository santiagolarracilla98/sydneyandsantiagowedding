import { Utensils } from 'lucide-react';
import { RestaurantCard } from './RestaurantCard';

// Import restaurant images
import criolloImg from '@/assets/restaurants/criollo.png';
import casaOaxacaImg from '@/assets/restaurants/casa-oaxaca.png';
import ancestralImg from '@/assets/restaurants/ancestral.png';
import levaduraDeOllaImg from '@/assets/restaurants/levadura-de-olla.png';
import laCocinaDeHumoImg from '@/assets/restaurants/la-cocina-de-humo.png';
import losDanzantesImg from '@/assets/restaurants/los-danzantes.png';
import lasQuinceLetrasImg from '@/assets/restaurants/las-quince-letras.png';
import laOllaImg from '@/assets/restaurants/la-olla.png';
import zandungaImg from '@/assets/restaurants/zandunga.png';
import expendioTradicionImg from '@/assets/restaurants/expendio-tradicion.png';

interface RestaurantSectionProps {
  language: 'en' | 'es';
}

const restaurantData = {
  en: {
    title: "Restaurants (Sydney's Recommendations)",
    intro: "Oaxaca is the culinary capital of Mexico—from vibrant markets to Michelin-starred restaurants, prepare for one of the most incredible food experiences of your life. But save some room for the big day, as we have a few culinary surprises planned!",
    categories: [
      {
        name: 'High-End / Special Occasion',
        restaurants: [
          {
            name: 'Criollo',
            price: '$$$$',
            description: 'Refined, seasonal Oaxacan tasting menu by Enrique Olvera. Minimalist, ingredient-focused, destination dining experience that celebrates local flavors.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/criollo',
            image: criolloImg,
          },
          {
            name: 'Casa Oaxaca el Restaurante',
            price: '$$$$',
            description: 'Elegant rooftop dining featuring elevated traditional Oaxacan dishes. Classic and polished atmosphere with stunning views.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/casa-oaxaca-el-restaurante',
            image: casaOaxacaImg,
          },
          {
            name: 'Ancestral Cocina Tradicional',
            price: '$$$',
            description: 'Deeply traditional Oaxacan cooking in a beautiful setting. Great cultural context and authentic flavors rooted in ancestral recipes.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/ancestral-cocina-tradicional',
            image: ancestralImg,
          },
        ],
      },
      {
        name: 'Mid-Range / Elevated Traditional',
        restaurants: [
          {
            name: 'Levadura de Olla',
            price: '$$$',
            description: 'Traditional Oaxacan recipes with modern presentation. Warm, stylish, and consistently excellent cooking.',
            image: levaduraDeOllaImg,
          },
          {
            name: 'La Cocina de Humo',
            price: '$$$',
            description: 'Fire-driven, ancestral Oaxacan cooking. Rustic, soulful, and ingredient-forward dishes prepared with traditional techniques.',
            link: 'https://www.theworlds50best.com/discovery/Establishments/Mexico/Oaxaca/La-Cocina-de-Humo.html',
            image: laCocinaDeHumoImg,
          },
          {
            name: 'Los Danzantes',
            price: '$$$',
            description: 'Contemporary Mexican cuisine with strong Oaxacan roots. Lively courtyard atmosphere and excellent mezcal selection.',
            link: 'https://losdanzantesoaxaca.com.mx/eng-inicio/',
            image: losDanzantesImg,
          },
          {
            name: 'Las Quince Letras',
            price: '$$–$$$',
            description: 'Beloved local spot for classic Oaxacan dishes. Reliable, comforting, and very well executed traditional recipes.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/las-quince-letras',
            image: lasQuinceLetrasImg,
          },
          {
            name: 'Restaurante La Olla',
            price: '$$–$$$',
            description: 'Traditional Oaxacan home-style cooking. Generous portions and approachable vibe in a charming courtyard setting.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/la-olla',
            image: laOllaImg,
          },
        ],
      },
      {
        name: 'Casual / Local Favorites',
        restaurants: [
          {
            name: 'Zandunga Sabor Istmeño',
            price: '$$',
            description: 'Isthmus-style Oaxacan cuisine featuring seafood, moles, and bold flavors. Colorful and energetic atmosphere.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/zandunga',
            image: zandungaImg,
          },
          {
            name: 'Expendio Tradición',
            price: '$$',
            description: 'Casual spot focused on traditional regional recipes. Relaxed and authentic experience with genuine Oaxacan hospitality.',
            link: 'https://www.tripadvisor.es/Restaurant_Review-g150801-d7394128-Reviews-Expendio_Tradicion-Oaxaca_Southern_Mexico.html',
            image: expendioTradicionImg,
          },
        ],
      },
    ],
  },
  es: {
    title: 'Restaurantes (Recomendaciones de Sydney)',
    intro: "Oaxaca es la capital culinaria de México—desde mercados vibrantes hasta restaurantes con estrellas Michelin, prepárense para una de las experiencias gastronómicas más increíbles de su vida. ¡Pero guarden espacio para el gran día, ya que tenemos algunas sorpresas culinarias planeadas!",
    categories: [
      {
        name: 'Alta Cocina / Ocasiones Especiales',
        restaurants: [
          {
            name: 'Criollo',
            price: '$$$$',
            description: 'Menú de degustación oaxaqueño refinado y de temporada por Enrique Olvera. Experiencia minimalista enfocada en ingredientes locales.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/criollo',
            image: criolloImg,
          },
          {
            name: 'Casa Oaxaca el Restaurante',
            price: '$$$$',
            description: 'Elegante comedor en azotea con platillos oaxaqueños tradicionales elevados. Ambiente clásico y pulido con vistas impresionantes.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/casa-oaxaca-el-restaurante',
            image: casaOaxacaImg,
          },
          {
            name: 'Ancestral Cocina Tradicional',
            price: '$$$',
            description: 'Cocina oaxaqueña profundamente tradicional en un hermoso entorno. Gran contexto cultural y sabores auténticos.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/ancestral-cocina-tradicional',
            image: ancestralImg,
          },
        ],
      },
      {
        name: 'Gama Media / Tradicional Elevado',
        restaurants: [
          {
            name: 'Levadura de Olla',
            price: '$$$',
            description: 'Recetas oaxaqueñas tradicionales con presentación moderna. Cálido, elegante y consistentemente excelente.',
            image: levaduraDeOllaImg,
          },
          {
            name: 'La Cocina de Humo',
            price: '$$$',
            description: 'Cocina oaxaqueña ancestral impulsada por el fuego. Platillos rústicos y con alma, preparados con técnicas tradicionales.',
            link: 'https://www.theworlds50best.com/discovery/Establishments/Mexico/Oaxaca/La-Cocina-de-Humo.html',
            image: laCocinaDeHumoImg,
          },
          {
            name: 'Los Danzantes',
            price: '$$$',
            description: 'Cocina mexicana contemporánea con fuertes raíces oaxaqueñas. Animado patio y excelente selección de mezcal.',
            link: 'https://losdanzantesoaxaca.com.mx/eng-inicio/',
            image: losDanzantesImg,
          },
          {
            name: 'Las Quince Letras',
            price: '$$–$$$',
            description: 'Querido lugar local para platillos oaxaqueños clásicos. Confiable, reconfortante y muy bien ejecutado.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/las-quince-letras',
            image: lasQuinceLetrasImg,
          },
          {
            name: 'Restaurante La Olla',
            price: '$$–$$$',
            description: 'Cocina casera oaxaqueña tradicional. Porciones generosas y ambiente acogedor en un encantador patio.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/la-olla',
            image: laOllaImg,
          },
        ],
      },
      {
        name: 'Casual / Favoritos Locales',
        restaurants: [
          {
            name: 'Zandunga Sabor Istmeño',
            price: '$$',
            description: 'Cocina oaxaqueña estilo Istmo con mariscos, moles y sabores intensos. Ambiente colorido y energético.',
            link: 'https://guide.michelin.com/gb/en/oaxaca/oaxaca-de-juarez_2056768/restaurant/zandunga',
            image: zandungaImg,
          },
          {
            name: 'Expendio Tradición',
            price: '$$',
            description: 'Lugar casual enfocado en recetas regionales tradicionales. Experiencia relajada y auténtica con genuina hospitalidad oaxaqueña.',
            link: 'https://www.tripadvisor.es/Restaurant_Review-g150801-d7394128-Reviews-Expendio_Tradicion-Oaxaca_Southern_Mexico.html',
            image: expendioTradicionImg,
          },
        ],
      },
    ],
  },
};

export function RestaurantSection({ language }: RestaurantSectionProps) {
  const data = restaurantData[language];

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <Utensils className="w-5 h-5 text-foreground" />
        <h3 className="font-serif text-xl text-foreground">
          {data.title}
        </h3>
      </div>

      <p className="text-muted-foreground font-sans leading-relaxed mb-8">
        {data.intro}
      </p>

      {data.categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-10">
          <h4 className="font-sans font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
            {category.name}
          </h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.restaurants.map((restaurant, restaurantIndex) => (
              <RestaurantCard key={restaurantIndex} restaurant={restaurant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
