import { Building2 } from 'lucide-react';
import { HotelCard, Hotel } from './HotelCard';

// Import hotel images
import casaAntonietaImg from '@/assets/hotels/casa-antonieta.jpg';
import majaguaImg from '@/assets/hotels/majagua.jpg';
import otroOaxacaImg from '@/assets/hotels/otro-oaxaca.jpg';
import escondidoImg from '@/assets/hotels/escondido.jpg';
import quintaRealImg from '@/assets/hotels/quinta-real.jpg';
import fiestaAmericanaImg from '@/assets/hotels/fiesta-americana.jpg';
import casaOaxacaHotelImg from '@/assets/hotels/casa-oaxaca-hotel.jpg';
import casaVertizImg from '@/assets/hotels/casa-vertiz.jpg';
import nanaVidaImg from '@/assets/hotels/nana-vida.jpg';
import macondoArteImg from '@/assets/hotels/macondo-arte.jpg';
import granaBnbImg from '@/assets/hotels/grana-bnb.jpg';
import casaCarmenImg from '@/assets/hotels/casa-carmen.jpg';

interface HotelSectionProps {
  language: 'en' | 'es';
}

interface HotelCategory {
  name: string;
  hotels: Hotel[];
}

const hotelData: Record<'en' | 'es', { title: string; categories: HotelCategory[] }> = {
  en: {
    title: 'Hotels (Where to Stay)',
    categories: [
      {
        name: 'High-End / Special Occasion',
        hotels: [
          {
            name: 'Casa Antonieta',
            price: '$$$$',
            shortDescription: 'Minimalist, stylish boutique hotel—perfect base for food, mezcal, and Centro walks.',
            longDescription: 'Chic, design-led boutique stay with a calm feel and a great location for exploring Oaxaca on foot.',
            website: 'https://www.casaantonieta.com/',
            address: 'Miguel Hidalgo 911, Barrio de Jalatlaco, 68080 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Miguel%20Hidalgo%20911%2C%20Barrio%20de%20Jalatlaco%2C%2068080%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: casaAntonietaImg,
          },
          {
            name: 'Majagua Hotel Boutique',
            price: '$$$$',
            shortDescription: 'Elegant boutique hotel with a calm, upscale vibe—great for couples and close family.',
            longDescription: 'Upscale boutique stay in Centro with stylish rooms and a serene atmosphere—perfect for a special weekend.',
            website: 'https://www.majaguahotelboutique.com/',
            address: 'José María Pino Suárez 519, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jos%C3%A9%20Mar%C3%ADa%20Pino%20Su%C3%A1rez%20519%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: majaguaImg,
            discountCode: 'SYDNEYANDSANTIAGO2026',
          },
          {
            name: 'Otro Oaxaca',
            price: '$$$$',
            shortDescription: 'Design-forward luxury boutique in the heart of Centro—quiet, polished, and walkable.',
            longDescription: 'Refined, contemporary boutique stay with high design and great service—ideal for a "special trip" feel.',
            website: 'https://otrooaxaca.com/',
            address: 'Calle Macedonio Alcalá 505, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle%20Macedonio%20Alcal%C3%A1%20505%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: otroOaxacaImg,
          },
          {
            name: 'Escondido Oaxaca',
            price: '$$$$',
            shortDescription: 'Boutique luxury with a modern, "cool" aesthetic—perfect for design-hotel lovers.',
            longDescription: 'Contemporary, intimate boutique stay in Centro—sleek and stylish for guests who want something modern.',
            website: 'https://escondidooaxaca.com/',
            address: 'C. Morelos 401, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=C.%20Morelos%20401%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: escondidoImg,
          },
          {
            name: 'Quinta Real Oaxaca',
            price: '$$$$',
            shortDescription: 'Classic luxury in a historic building—grand, traditional, and iconic in Centro.',
            longDescription: 'Landmark heritage hotel with timeless architecture and a formal 5-star feel.',
            website: 'https://www.caminoreal.com/en/quintareal/quinta-real-oaxaca',
            address: 'Calle 5 de Mayo No. 300, Colonia Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle%205%20de%20Mayo%20300%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: quintaRealImg,
          },
          {
            name: 'Grand Fiesta Americana Oaxaca',
            price: '$$$$',
            shortDescription: 'Modern full-service 5-star hotel—best for guests who want convenience and amenities.',
            longDescription: 'Polished, comfortable full-service option—great if guests prefer everything handled in one place.',
            website: 'https://www.fiestamericanatravelty.com/en/grand-fiesta-americana/hotels/grand-fiesta-americana-oaxaca',
            address: '702 Calle de José María Pino Suárez, Centro Histórico, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=702%20Calle%20de%20Jos%C3%A9%20Mar%C3%ADa%20Pino%20Su%C3%A1rez%2C%20Centro%20Hist%C3%B3rico%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: fiestaAmericanaImg,
          },
          {
            name: 'Casa Oaxaca Hotel',
            price: '$$$$',
            shortDescription: 'Boutique charm + top location—classic Oaxaca stay with refined comfort.',
            longDescription: 'Well-loved boutique hotel in Centro with a warm, elevated vibe—excellent base for exploring.',
            website: 'https://casaoaxaca.com.mx/en/',
            address: 'Calle García Vigil 407, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle%20Garc%C3%ADa%20Vigil%20407%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: casaOaxacaHotelImg,
          },
        ],
      },
      {
        name: 'Mid-Range / Boutique',
        hotels: [
          {
            name: 'Hotel Casa Vértiz',
            price: '$$$',
            shortDescription: 'Boutique comfort in a very walkable spot near Santo Domingo—great value for Centro.',
            longDescription: 'Charming boutique option with a warm Oaxaca feel and a strong location.',
            website: 'https://hotelcasavertiz.com/en/',
            address: 'Reforma 404, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Reforma%20404%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: casaVertizImg,
          },
          {
            name: 'Nana Vida Boutique',
            price: '$$$',
            shortDescription: 'Pretty, modern boutique vibe—friendly, comfortable, and central.',
            longDescription: 'Stylish boutique hotel with relaxed energy—great for guests who want modern + cozy.',
            website: 'https://nanavida.com/en/oaxaca-english/',
            address: 'C. Murguía 405, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=C.%20Murgu%C3%ADa%20405%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: nanaVidaImg,
          },
          {
            name: 'Macondo Arte',
            price: '$$$',
            shortDescription: 'Small, artsy boutique stay—intimate, unique, and very Centro.',
            longDescription: 'Compact boutique hotel with an art-forward feel—best for guests who want something different.',
            website: 'https://www.booking.com/hotel/mx/macondo-arte.html',
            address: 'Humboldt esquina Andrés Quintana Roo, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Humboldt%20esquina%20Andr%C3%A9s%20Quintana%20Roo%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: macondoArteImg,
          },
        ],
      },
      {
        name: 'Friendly / Good Value',
        hotels: [
          {
            name: 'Grana B&B',
            price: '$$',
            shortDescription: 'Design-led B&B—calm, tasteful, and walkable.',
            longDescription: 'Thoughtfully designed bed & breakfast with a quiet, relaxed vibe—great value for boutique lovers.',
            website: 'https://www.granabnb.com/',
            address: 'Labastida 118, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Labastida%20118%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: granaBnbImg,
          },
          {
            name: 'Casa Hotel Carmen',
            price: '$$',
            shortDescription: 'Small, cozy stay with a great location—simple, warm, and easy for walking Centro.',
            longDescription: 'Comfortable and well-located option—perfect for guests who want a simple base and friendly service.',
            website: 'https://www.booking.com/hotel/mx/casa-carmen-morelos.html',
            address: 'Av. José María Morelos 305, Centro, 68000 Oaxaca de Juárez, Oax., Mexico',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.%20Jos%C3%A9%20Mar%C3%ADa%20Morelos%20305%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: casaCarmenImg,
          },
        ],
      },
    ],
  },
  es: {
    title: 'Hoteles (Dónde Hospedarse)',
    categories: [
      {
        name: 'Alta Gama / Ocasión Especial',
        hotels: [
          {
            name: 'Casa Antonieta',
            price: '$$$$',
            shortDescription: 'Hotel boutique minimalista y elegante—base perfecta para comida, mezcal y paseos por el Centro.',
            longDescription: 'Estadía boutique con diseño chic, ambiente tranquilo y excelente ubicación para explorar Oaxaca a pie.',
            website: 'https://www.casaantonieta.com/',
            address: 'Miguel Hidalgo 911, Barrio de Jalatlaco, 68080 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Miguel%20Hidalgo%20911%2C%20Barrio%20de%20Jalatlaco%2C%2068080%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: casaAntonietaImg,
          },
          {
            name: 'Majagua Hotel Boutique',
            price: '$$$$',
            shortDescription: 'Hotel boutique elegante con ambiente sofisticado—ideal para parejas y familia cercana.',
            longDescription: 'Estadía boutique de alta gama en el Centro con habitaciones elegantes y atmósfera serena—perfecto para un fin de semana especial.',
            website: 'https://www.majaguahotelboutique.com/',
            address: 'José María Pino Suárez 519, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jos%C3%A9%20Mar%C3%ADa%20Pino%20Su%C3%A1rez%20519%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: majaguaImg,
            discountCode: 'SYDNEYANDSANTIAGO2026',
          },
          {
            name: 'Otro Oaxaca',
            price: '$$$$',
            shortDescription: 'Boutique de lujo con diseño vanguardista en el corazón del Centro—tranquilo, pulido y caminable.',
            longDescription: 'Estadía boutique contemporánea y refinada con alto diseño y excelente servicio—ideal para una experiencia "especial".',
            website: 'https://otrooaxaca.com/',
            address: 'Calle Macedonio Alcalá 505, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle%20Macedonio%20Alcal%C3%A1%20505%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: otroOaxacaImg,
          },
          {
            name: 'Escondido Oaxaca',
            price: '$$$$',
            shortDescription: 'Lujo boutique con estética moderna y "cool"—perfecto para amantes del diseño hotelero.',
            longDescription: 'Estadía boutique contemporánea e íntima en el Centro—elegante y moderno para quienes buscan algo diferente.',
            website: 'https://escondidooaxaca.com/',
            address: 'C. Morelos 401, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=C.%20Morelos%20401%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: escondidoImg,
          },
          {
            name: 'Quinta Real Oaxaca',
            price: '$$$$',
            shortDescription: 'Lujo clásico en edificio histórico—grandioso, tradicional e icónico en el Centro.',
            longDescription: 'Hotel patrimonial emblemático con arquitectura atemporal y sensación formal de 5 estrellas.',
            website: 'https://www.caminoreal.com/en/quintareal/quinta-real-oaxaca',
            address: 'Calle 5 de Mayo No. 300, Colonia Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle%205%20de%20Mayo%20300%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: quintaRealImg,
          },
          {
            name: 'Grand Fiesta Americana Oaxaca',
            price: '$$$$',
            shortDescription: 'Hotel moderno de 5 estrellas con servicio completo—ideal para quienes buscan comodidad y amenidades.',
            longDescription: 'Opción pulida y cómoda con servicio completo—genial para huéspedes que prefieren todo resuelto en un solo lugar.',
            website: 'https://www.fiestamericanatravelty.com/en/grand-fiesta-americana/hotels/grand-fiesta-americana-oaxaca',
            address: '702 Calle de José María Pino Suárez, Centro Histórico, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=702%20Calle%20de%20Jos%C3%A9%20Mar%C3%ADa%20Pino%20Su%C3%A1rez%2C%20Centro%20Hist%C3%B3rico%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: fiestaAmericanaImg,
          },
          {
            name: 'Casa Oaxaca Hotel',
            price: '$$$$',
            shortDescription: 'Encanto boutique + ubicación top—estadía clásica de Oaxaca con confort refinado.',
            longDescription: 'Hotel boutique muy querido en el Centro con ambiente cálido y elevado—excelente base para explorar.',
            website: 'https://casaoaxaca.com.mx/en/',
            address: 'Calle García Vigil 407, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle%20Garc%C3%ADa%20Vigil%20407%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: casaOaxacaHotelImg,
          },
        ],
      },
      {
        name: 'Gama Media / Boutique',
        hotels: [
          {
            name: 'Hotel Casa Vértiz',
            price: '$$$',
            shortDescription: 'Confort boutique en ubicación muy caminable cerca de Santo Domingo—gran valor en el Centro.',
            longDescription: 'Opción boutique encantadora con ambiente oaxaqueño cálido y excelente ubicación.',
            website: 'https://hotelcasavertiz.com/en/',
            address: 'Reforma 404, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Reforma%20404%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: casaVertizImg,
          },
          {
            name: 'Nana Vida Boutique',
            price: '$$$',
            shortDescription: 'Ambiente boutique bonito y moderno—amigable, cómodo y central.',
            longDescription: 'Hotel boutique elegante con energía relajada—genial para quienes buscan moderno + acogedor.',
            website: 'https://nanavida.com/en/oaxaca-english/',
            address: 'C. Murguía 405, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=C.%20Murgu%C3%ADa%20405%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: nanaVidaImg,
          },
          {
            name: 'Macondo Arte',
            price: '$$$',
            shortDescription: 'Pequeña estadía artística boutique—íntima, única y muy Centro.',
            longDescription: 'Hotel boutique compacto con enfoque artístico—ideal para huéspedes que buscan algo diferente.',
            website: 'https://www.booking.com/hotel/mx/macondo-arte.html',
            address: 'Humboldt esquina Andrés Quintana Roo, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Humboldt%20esquina%20Andr%C3%A9s%20Quintana%20Roo%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: macondoArteImg,
          },
        ],
      },
      {
        name: 'Económico / Buen Valor',
        hotels: [
          {
            name: 'Grana B&B',
            price: '$$',
            shortDescription: 'B&B con diseño—tranquilo, de buen gusto y caminable.',
            longDescription: 'Bed & breakfast cuidadosamente diseñado con ambiente tranquilo y relajado—gran valor para amantes del boutique.',
            website: 'https://www.granabnb.com/',
            address: 'Labastida 118, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Labastida%20118%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: granaBnbImg,
          },
          {
            name: 'Casa Hotel Carmen',
            price: '$$',
            shortDescription: 'Estadía pequeña y acogedora con gran ubicación—simple, cálida y fácil para caminar el Centro.',
            longDescription: 'Opción cómoda y bien ubicada—perfecta para huéspedes que buscan una base simple y servicio amigable.',
            website: 'https://www.booking.com/hotel/mx/casa-carmen-morelos.html',
            address: 'Av. José María Morelos 305, Centro, 68000 Oaxaca de Juárez, Oax., México',
            mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.%20Jos%C3%A9%20Mar%C3%ADa%20Morelos%20305%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.%2C%20Mexico',
            image: casaCarmenImg,
          },
        ],
      },
    ],
  },
};

export function HotelSection({ language }: HotelSectionProps) {
  const data = hotelData[language];

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Building2 className="w-5 h-5 text-foreground" />
        <h3 className="font-serif text-xl text-foreground">
          {data.title}
        </h3>
      </div>

      {data.categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-10">
          <h4 className="font-sans font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
            {category.name}
          </h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.hotels.map((hotel, hotelIndex) => (
              <HotelCard key={hotelIndex} hotel={hotel} language={language} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
