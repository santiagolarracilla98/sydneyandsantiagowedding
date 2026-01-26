import { MapPin } from 'lucide-react';

interface AgendaMapProps {
  t: {
    title: string;
    locations: {
      welcomeParty: {
        name: string;
        address: string;
      };
      wedding: {
        name: string;
        address: string;
      };
    };
  };
}

export function AgendaMap({ t }: AgendaMapProps) {
  // Google Maps embed with both locations pinned
  // Copal Restaurant: C. Macedonio Alcalá 803, Oaxaca
  // Jardín Etnobotánico: Reforma S/N, Centro, 68000 Oaxaca de Juárez
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3814.2!2d-96.726!3d17.064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCopal%20Restaurant%2C%20Macedonio%20Alcala%2C%20Oaxaca!5e0!3m2!1sen!2smx!4v1234567890123!5m2!1sen!2smx`;

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="rounded-lg overflow-hidden shadow-md border border-border/50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1907.0621138850845!2d-96.72506!3d17.0650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7223c89e8e8e5%3A0x1234567890abcdef!2sJard%C3%ADn%20Etnobot%C3%A1nico%20de%20Oaxaca!5e0!3m2!1sen!2smx!4v1706000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Venue Map"
          className="w-full"
        />
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Welcome Party - Copal Restaurant */}
        <a 
          href="https://maps.google.com/?q=Copal+Restaurant,+C.+Macedonio+Alcalá+803,+Oaxaca"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Friday
              </p>
              <h4 className="font-serif text-sm text-foreground mb-1">
                {t.locations.welcomeParty.name}
              </h4>
              <p className="font-serif text-xs text-muted-foreground">
                {t.locations.welcomeParty.address}
              </p>
            </div>
          </div>
        </a>

        {/* Wedding - Jardín Etnobotánico */}
        <a 
          href="https://maps.google.com/?q=Jardín+Etnobotánico+de+Oaxaca,+Reforma+S/N,+Centro,+68000+Oaxaca+de+Juárez"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Saturday
              </p>
              <h4 className="font-serif text-sm text-foreground mb-1">
                {t.locations.wedding.name}
              </h4>
              <p className="font-serif text-xs text-muted-foreground">
                {t.locations.wedding.address}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
