import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
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

async function geocode(address: string): Promise<LatLng | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
    address,
  )}`;
  const res = await fetch(url, {
    headers: {
      // polite header; some endpoints use it for contact
      'Accept-Language': 'en',
    },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as Array<{ lat: string; lon: string }>;
  const first = data?.[0];
  if (!first) return null;
  return [Number(first.lat), Number(first.lon)];
}

export function AgendaMap({ t }: AgendaMapProps) {
  const [copal, setCopal] = useState<LatLng | null>(null);
  const [jardin, setJardin] = useState<LatLng | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [copalResult, jardinResult] = await Promise.all([
        geocode('Copal Restaurant, C. Macedonio Alcalá 803, Oaxaca de Juárez, Oax., Mexico'),
        geocode('Jardín Etnobotánico de Oaxaca, Reforma S/N, Centro, 68000 Oaxaca de Juárez, Oax., Mexico'),
      ]);

      if (cancelled) return;
      setCopal(copalResult);
      setJardin(jardinResult);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const points = useMemo(() => {
    return [copal, jardin].filter(Boolean) as LatLng[];
  }, [copal, jardin]);

  const bounds = useMemo(() => {
    if (points.length === 0) return null;
    // pad a bit so pins aren't on the edge
    return L.latLngBounds(points.map(([lat, lng]) => L.latLng(lat, lng))).pad(0.18);
  }, [points]);

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="rounded-lg overflow-hidden shadow-md border border-border/50">
        {bounds ? (
          <MapContainer
            bounds={bounds}
            boundsOptions={{ padding: [40, 40] }}
            scrollWheelZoom={false}
            className="h-[400px] w-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {copal && (
              <Marker position={copal}>
                <Popup>
                  <div className="space-y-1">
                    <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Friday</div>
                    <div className="font-serif text-sm text-foreground">{t.locations.welcomeParty.name}</div>
                    <div className="font-serif text-xs text-muted-foreground">{t.locations.welcomeParty.address}</div>
                  </div>
                </Popup>
              </Marker>
            )}

            {jardin && (
              <Marker position={jardin}>
                <Popup>
                  <div className="space-y-1">
                    <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Saturday</div>
                    <div className="font-serif text-sm text-foreground">{t.locations.wedding.name}</div>
                    <div className="font-serif text-xs text-muted-foreground">{t.locations.wedding.address}</div>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        ) : (
          <div className="h-[400px] w-full grid place-items-center">
            <p className="font-sans text-sm text-muted-foreground">Loading map…</p>
          </div>
        )}
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
