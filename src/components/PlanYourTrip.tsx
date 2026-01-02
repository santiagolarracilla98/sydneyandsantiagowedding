import { Plane, Hotel, ExternalLink } from 'lucide-react';

interface FlightRegion {
  readonly name: string;
  readonly description: string;
  readonly searchUrl: string;
}

interface AccommodationOption {
  readonly name: string;
  readonly description: string;
}

interface PlanYourTripProps {
  t: {
    planYourTrip: {
      readonly title: string;
      readonly subtitle: string;
      readonly intro: string;
      readonly flights: {
        readonly title: string;
        readonly regions: readonly FlightRegion[];
        readonly cta: string;
      };
      readonly accommodations: {
        readonly title: string;
        readonly description: string;
        readonly options: readonly AccommodationOption[];
      };
    };
  };
}

export function PlanYourTrip({ t }: PlanYourTripProps) {
  const { planYourTrip } = t;

  return (
    <section id="plan-your-trip" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
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

            <div className="grid gap-4">
              {planYourTrip.flights.regions.map((region, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5 hover:shadow-soft transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-sans font-medium text-foreground mb-1">
                        {region.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {region.description}
                      </p>
                    </div>
                    <a
                      href={region.searchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-sans border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm whitespace-nowrap"
                    >
                      {planYourTrip.flights.cta}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accommodations */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Hotel className="w-5 h-5 text-foreground" />
              <h3 className="font-serif text-xl text-foreground">
                {planYourTrip.accommodations.title}
              </h3>
            </div>

            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              {planYourTrip.accommodations.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {planYourTrip.accommodations.options.map((option, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-5"
                >
                  <h4 className="font-sans font-medium text-foreground mb-2">
                    {option.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
