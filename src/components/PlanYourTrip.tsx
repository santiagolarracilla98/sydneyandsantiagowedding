import { Plane, Hotel } from 'lucide-react';
import directFlightsMap from '@/assets/direct-flights-map.png';
import { HotelSection } from './HotelSection';
interface FlightRegion {
  readonly name: string;
  readonly description: string;
  readonly searchUrl: string;
}
interface PlanYourTripProps {
  t: {
    planYourTrip: {
      readonly title: string;
      readonly subtitle: string;
      readonly intro: string;
      readonly flights: {
        readonly title: string;
        readonly directFlightsTitle: string;
        readonly regions: readonly FlightRegion[];
        readonly cta: string;
      };
      readonly accommodations: {
        readonly title: string;
        readonly intro: string;
      };
    };
  };
  language: 'en' | 'es';
}
export function PlanYourTrip({
  t,
  language
}: PlanYourTripProps) {
  const {
    planYourTrip
  } = t;
  return <section id="plan-your-trip" className="pt-6 pb-16 md:pt-8 md:pb-24 bg-background">
      <div className="container">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              {planYourTrip.title}
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              {planYourTrip.subtitle}
            </p>
          </div>

          <p className="text-muted-foreground font-sans leading-relaxed text-center mb-12">
            {planYourTrip.intro}
          </p>

          {/* Flights */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-5 h-5 text-foreground" />
              <h3 className="font-serif text-xl text-foreground">
                {planYourTrip.flights.title}
              </h3>
            </div>

            {/* Direct Flights Map */}
            <div className="mb-8">
              <h4 className="font-sans font-medium text-foreground mb-4 text-center">
                {planYourTrip.flights.directFlightsTitle}
              </h4>
              <div className="rounded-lg overflow-hidden">
                <img src={directFlightsMap} alt="Map showing direct flight routes to Oaxaca" className="w-full h-auto" />
              </div>
            </div>
            <div className="grid gap-4">
              {planYourTrip.flights.regions.map((region, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-5">
                  <h4 className="font-sans font-medium text-foreground mb-2">
                    {region.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {region.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Accommodations - Hotels */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Hotel className="w-5 h-5 text-foreground" />
              <h3 className="font-serif text-xl text-foreground">
                {planYourTrip.accommodations.title}
              </h3>
            </div>

            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              {planYourTrip.accommodations.intro}
            </p>

            <HotelSection language={language} />
          </div>
        </div>
      </div>
    </section>;
}