import { Calendar, PartyPopper, Heart, MapPin, Clock, Info } from 'lucide-react';

interface DetailItem {
  name: string;
  time: string;
  description: string;
  meetingPoint?: string;
  venue?: string;
  address?: string;
  note?: string;
}

interface DaySchedule {
  day: string;
  title: string;
  description: string;
  details: readonly DetailItem[];
}

interface WeekendScheduleProps {
  t: {
    readonly thursday: DaySchedule;
    readonly friday: DaySchedule;
    readonly saturday: DaySchedule;
  };
}

const dayIcons = {
  thursday: Calendar,
  friday: PartyPopper,
  saturday: Heart,
};

export function WeekendSchedule({ t }: WeekendScheduleProps) {
  const days = [
    { key: 'thursday' as const, data: t.thursday },
    { key: 'friday' as const, data: t.friday },
    { key: 'saturday' as const, data: t.saturday },
  ];

  return (
    <div className="space-y-8">
      {days.map(({ key, data }) => {
        const Icon = dayIcons[key];
        
        return (
          <div 
            key={key} 
            className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm"
          >
            {/* Day Header */}
            <div className="p-6 border-b border-border/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {data.day}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                    {data.title}
                  </h3>
                  <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Event Details */}
            {data.details.length > 0 && (
              <div className="p-6 bg-muted/20">
                <div className="space-y-6">
                  {data.details.map((detail, index) => (
                    <div 
                      key={index} 
                      className="pl-4 border-l-2 border-border"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="font-sans text-sm font-medium text-foreground">
                          {detail.time}
                        </span>
                        <span className="text-muted-foreground">—</span>
                        <span className="font-serif text-sm text-foreground">
                          {detail.name}
                        </span>
                      </div>
                      
                      <p className="font-serif text-sm text-muted-foreground mb-3 leading-relaxed">
                        {detail.description}
                      </p>

                      {/* Meeting Point */}
                      {detail.meetingPoint && (
                        <div className="flex items-start gap-2 mb-2 bg-accent/30 p-3 rounded-md">
                          <Info className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                          <p className="font-sans text-sm font-medium text-foreground">
                            {detail.meetingPoint}
                          </p>
                        </div>
                      )}

                      {/* Venue & Address */}
                      {(detail.venue || detail.address) && (
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <p className="font-serif text-sm italic">
                            {detail.venue && <span>{detail.venue}</span>}
                            {detail.venue && detail.address && <br />}
                            {detail.address && <span>{detail.address}</span>}
                          </p>
                        </div>
                      )}

                      {/* Note */}
                      {detail.note && (
                        <div className="mt-3 flex items-start gap-2 bg-accent/30 p-3 rounded-md">
                          <Info className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                          <p className="font-sans text-sm text-foreground">
                            {detail.note}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
