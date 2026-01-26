interface EventItem {
  name: string;
  time: string;
  venue?: string;
  address?: string;
}

interface DaySchedule {
  date: string;
  title: string;
  events: readonly EventItem[];
  venue?: {
    readonly name: string;
    readonly location: string;
    readonly address: string;
  };
}

interface DetailedScheduleProps {
  t: {
    readonly friday: DaySchedule;
    readonly saturday: DaySchedule;
  };
}

export function DetailedSchedule({ t }: DetailedScheduleProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 border-t border-border pt-8">
      {/* Friday - Welcome Party */}
      <div className="text-center border-r-0 md:border-r border-border pr-0 md:pr-8">
        <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-3">
          {t.friday.date}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl italic text-foreground mb-8">
          {t.friday.title}
        </h3>
        
        <div className="space-y-8">
          {t.friday.events.map((event, index) => (
            <div key={index} className="space-y-1">
              <p className="font-sans text-base text-foreground">{event.name}</p>
              <p className="font-sans text-sm text-muted-foreground">{event.time}</p>
              {event.venue && (
                <p className="font-serif text-sm italic text-muted-foreground mt-3">
                  {event.venue},<br />{event.address}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Saturday - Wedding Day */}
      <div className="text-center pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-border">
        <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-3">
          {t.saturday.date}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl italic text-foreground mb-8">
          {t.saturday.title}
        </h3>
        
        <div className="space-y-4">
          {t.saturday.events.map((event, index) => (
            <div key={index} className="space-y-1">
              <p className="font-sans text-base text-foreground">{event.name}</p>
              <p className="font-sans text-sm text-muted-foreground">{event.time}</p>
            </div>
          ))}
          
          {/* Venue info for Saturday */}
          {t.saturday.venue && (
            <div className="pt-6">
              <p className="font-serif text-sm italic text-muted-foreground">
                {t.saturday.venue.name},<br />
                {t.saturday.venue.location},<br />
                {t.saturday.venue.address}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
