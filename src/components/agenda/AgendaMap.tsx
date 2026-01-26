import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { useMemo } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icons for Vite builds
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

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

type LatLng = [number, number];

export function AgendaMap({ t }: AgendaMapProps) {
  // Hardcoded coordinates to guarantee pins always appear
  // Source: Copal (Postcard listing), Jardín (Wikipedia)
  const copal: LatLng = [17.0693649, -96.7233629];
  const jardin: LatLng = [17.0666, -96.7225];
  const points: LatLng[] = [copal, jardin];

  const bounds = useMemo(() => {
    // pad a bit so pins aren't on the edge
    return L.latLngBounds(points.map(([lat, lng]) => L.latLng(lat, lng))).pad(0.18);
  }, [points]);

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="rounded-lg overflow-hidden shadow-md border border-border/50">
        <MapContainer bounds={bounds} boundsOptions={{ padding: [40, 40] }} className="h-[400px] w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={copal}>
            <Popup>
              <div className="space-y-1">
                <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Friday</div>
                <div className="font-serif text-sm text-foreground">{t.locations.welcomeParty.name}</div>
                <div className="font-serif text-xs text-muted-foreground">{t.locations.welcomeParty.address}</div>
              </div>
            </Popup>
          </Marker>

          <Marker position={jardin}>
            <Popup>
              <div className="space-y-1">
                <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Saturday</div>
                <div className="font-serif text-sm text-foreground">{t.locations.wedding.name}</div>
                <div className="font-serif text-xs text-muted-foreground">{t.locations.wedding.address}</div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://maps.google.com/?q=Copal+Restaurant,+C.+Macedonio+Alcalá+803,+Oaxaca"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Friday</p>
              <h4 className="font-serif text-sm text-foreground mb-1">{t.locations.welcomeParty.name}</h4>
              <p className="font-serif text-xs text-muted-foreground">{t.locations.welcomeParty.address}</p>
            </div>
          </div>
        </a>

        <a
          href="https://maps.google.com/?q=Jardín+Etnobotánico+de+Oaxaca,+Reforma+S/N,+Centro,+68000+Oaxaca+de+Juárez"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Saturday</p>
              <h4 className="font-serif text-sm text-foreground mb-1">{t.locations.wedding.name}</h4>
              <p className="font-serif text-xs text-muted-foreground">{t.locations.wedding.address}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
