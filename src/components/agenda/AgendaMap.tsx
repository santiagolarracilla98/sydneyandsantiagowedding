import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';

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
      santoDomingo: {
        name: string;
        address: string;
      };
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
  // Source: Copal (Postcard listing), Santo Domingo & Jardín (Wikipedia)
  const copal: LatLng = [17.0693649, -96.7233629];
  const santoDomingo: LatLng = [17.06556, -96.72306];
  const jardin: LatLng = [17.0666, -96.7225];
  const mapElRef = useRef<HTMLDivElement | null>(null);

  const bounds = useMemo(() => {
    return L.latLngBounds([copal, santoDomingo, jardin].map(([lat, lng]) => L.latLng(lat, lng))).pad(0.18);
  }, [copal, jardin, santoDomingo]);

  useEffect(() => {
    if (!mapElRef.current) return;

    const map = L.map(mapElRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    map.fitBounds(bounds, { padding: [40, 40] });

    const copalPopup = `
      <div style="line-height:1.2">
        <div style="font-size:11px; letter-spacing:0.08em; text-transform:uppercase; opacity:.7">Friday</div>
        <div style="font-size:14px; margin-top:4px">${t.locations.welcomeParty.name}</div>
        <div style="font-size:12px; opacity:.7; margin-top:2px">${t.locations.welcomeParty.address}</div>
      </div>
    `;

    const santoDomingoPopup = `
      <div style="line-height:1.2">
        <div style="font-size:11px; letter-spacing:0.08em; text-transform:uppercase; opacity:.7">Friday</div>
        <div style="font-size:14px; margin-top:4px">${t.locations.santoDomingo.name}</div>
        <div style="font-size:12px; opacity:.7; margin-top:2px">${t.locations.santoDomingo.address}</div>
      </div>
    `;

    const jardinPopup = `
      <div style="line-height:1.2">
        <div style="font-size:11px; letter-spacing:0.08em; text-transform:uppercase; opacity:.7">Saturday</div>
        <div style="font-size:14px; margin-top:4px">${t.locations.wedding.name}</div>
        <div style="font-size:12px; opacity:.7; margin-top:2px">${t.locations.wedding.address}</div>
      </div>
    `;

    L.marker(copal).addTo(map).bindPopup(copalPopup);
    L.marker(santoDomingo).addTo(map).bindPopup(santoDomingoPopup);
    L.marker(jardin).addTo(map).bindPopup(jardinPopup);

    // Ensure proper sizing if the map container is rendered after layout
    setTimeout(() => map.invalidateSize(), 50);

    return () => {
      map.remove();
    };
  }, [
    bounds,
    copal,
    jardin,
    santoDomingo,
    t.locations.santoDomingo.address,
    t.locations.santoDomingo.name,
    t.locations.wedding.address,
    t.locations.wedding.name,
    t.locations.welcomeParty.address,
    t.locations.welcomeParty.name,
  ]);

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="rounded-lg overflow-hidden shadow-md border border-border/50">
        <div ref={mapElRef} className="h-[400px] w-full" />
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href="https://maps.google.com/?q=Templo+de+Santo+Domingo+de+Guzmán,+Oaxaca"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">Friday</p>
              <h4 className="font-serif text-sm text-foreground mb-1">{t.locations.santoDomingo.name}</h4>
              <p className="font-serif text-xs text-muted-foreground">{t.locations.santoDomingo.address}</p>
            </div>
          </div>
        </a>

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
