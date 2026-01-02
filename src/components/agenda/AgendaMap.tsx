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
  // Jardín Etnobotánico de Oaxaca coordinates
  const centerLat = 17.0647;
  const centerLng = -96.7236;
  
  // Google Maps embed URL centered on Oaxaca Centro
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.1234567890!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7223b89e0f6d1%3A0x4d4e9b8f8c8e8f8e!2sJard%C3%ADn%20Etnobot%C3%A1nico%20de%20Oaxaca!5e0!3m2!1sen!2smx!4v1234567890123!5m2!1sen!2smx`;

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="rounded-lg overflow-hidden shadow-md border border-border/50">
        <iframe
          src={mapEmbedUrl}
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
        {/* Welcome Party */}
        <div className="bg-card border border-border/50 rounded-lg p-4 shadow-sm">
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
        </div>

        {/* Wedding */}
        <div className="bg-card border border-border/50 rounded-lg p-4 shadow-sm">
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
        </div>
      </div>
    </div>
  );
}