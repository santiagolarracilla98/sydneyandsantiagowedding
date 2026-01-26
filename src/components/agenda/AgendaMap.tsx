import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import santoDomingoImage from '@/assets/santo-domingo.png';
import copalImage from '@/assets/copal-restaurant.png';

// Fix default marker icons for Vite builds
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Create normal and large icons
const normalIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const largeIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [38, 62],
  iconAnchor: [19, 62],
  popupAnchor: [1, -50],
  shadowSize: [62, 62],
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
      patioHuaje: {
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
type LocationKey = 'santoDomingo' | 'welcomeParty' | 'patioHuaje' | 'wedding';

export function AgendaMap({ t }: AgendaMapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<LocationKey | null>(null);
  
  // Hardcoded coordinates to guarantee pins always appear
  const coordinates: Record<LocationKey, LatLng> = {
    santoDomingo: [17.06556, -96.72306],
    welcomeParty: [17.0693649, -96.7233629],
    patioHuaje: [17.0670, -96.7228],
    wedding: [17.0666, -96.7225],
  };

  const mapElRef = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<Record<LocationKey, L.Marker | null>>({
    santoDomingo: null,
    welcomeParty: null,
    patioHuaje: null,
    wedding: null,
  });

  const bounds = useMemo(() => {
    return L.latLngBounds(
      Object.values(coordinates).map(([lat, lng]) => L.latLng(lat, lng))
    ).pad(0.18);
  }, []);

  // Update marker icons when hover state changes
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([key, marker]) => {
      if (marker) {
        marker.setIcon(key === hoveredLocation ? largeIcon : normalIcon);
      }
    });
  }, [hoveredLocation]);

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

    const popups: Record<LocationKey, string> = {
      santoDomingo: `
        <div style="line-height:1.2">
          <div style="font-size:11px; letter-spacing:0.08em; text-transform:uppercase; opacity:.7">Friday</div>
          <div style="font-size:14px; margin-top:4px">${t.locations.santoDomingo.name}</div>
          <div style="font-size:12px; opacity:.7; margin-top:2px">${t.locations.santoDomingo.address}</div>
        </div>
      `,
      welcomeParty: `
        <div style="line-height:1.2">
          <div style="font-size:11px; letter-spacing:0.08em; text-transform:uppercase; opacity:.7">Friday</div>
          <div style="font-size:14px; margin-top:4px">${t.locations.welcomeParty.name}</div>
          <div style="font-size:12px; opacity:.7; margin-top:2px">${t.locations.welcomeParty.address}</div>
        </div>
      `,
      patioHuaje: `
        <div style="line-height:1.2">
          <div style="font-size:11px; letter-spacing:0.08em; text-transform:uppercase; opacity:.7">Saturday</div>
          <div style="font-size:14px; margin-top:4px">${t.locations.patioHuaje.name}</div>
          <div style="font-size:12px; opacity:.7; margin-top:2px">${t.locations.patioHuaje.address}</div>
        </div>
      `,
      wedding: `
        <div style="line-height:1.2">
          <div style="font-size:11px; letter-spacing:0.08em; text-transform:uppercase; opacity:.7">Saturday</div>
          <div style="font-size:14px; margin-top:4px">${t.locations.wedding.name}</div>
          <div style="font-size:12px; opacity:.7; margin-top:2px">${t.locations.wedding.address}</div>
        </div>
      `,
    };

    // Create markers and store refs
    (Object.keys(coordinates) as LocationKey[]).forEach((key) => {
      const marker = L.marker(coordinates[key], { icon: normalIcon })
        .addTo(map)
        .bindPopup(popups[key]);
      markersRef.current[key] = marker;
    });

    setTimeout(() => map.invalidateSize(), 50);

    return () => {
      map.remove();
      markersRef.current = {
        santoDomingo: null,
        welcomeParty: null,
        patioHuaje: null,
        wedding: null,
      };
    };
  }, [bounds, t]);

  const locationCards: { key: LocationKey; day: string; name: string; address: string }[] = [
    { key: 'santoDomingo', day: 'Friday', name: t.locations.santoDomingo.name, address: t.locations.santoDomingo.address },
    { key: 'welcomeParty', day: 'Friday', name: t.locations.welcomeParty.name, address: t.locations.welcomeParty.address },
    { key: 'patioHuaje', day: 'Saturday', name: t.locations.patioHuaje.name, address: t.locations.patioHuaje.address },
    { key: 'wedding', day: 'Saturday', name: t.locations.wedding.name, address: t.locations.wedding.address },
  ];

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="rounded-lg overflow-hidden shadow-md border border-border/50">
        <div ref={mapElRef} className="h-[400px] w-full" />
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {locationCards.map(({ key, day, name, address }) => (
          <div
            key={key}
            className="bg-card border border-border/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            onMouseEnter={() => setHoveredLocation(key)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">{day}</p>
                <h4 className="font-serif text-sm text-foreground mb-1">{name}</h4>
                <p className="font-serif text-xs text-muted-foreground">{address}</p>
              </div>
              {key === 'santoDomingo' && (
                <img 
                  src={santoDomingoImage} 
                  alt="Templo de Santo Domingo" 
                  className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                />
              )}
              {key === 'welcomeParty' && (
                <img 
                  src={copalImage} 
                  alt="Copal Restaurant" 
                  className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
