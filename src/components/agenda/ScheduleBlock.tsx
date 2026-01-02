import { LucideIcon } from 'lucide-react';

interface ScheduleBlockProps {
  day: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ScheduleBlock({ day, title, description, icon: Icon }: ScheduleBlockProps) {
  return (
    <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-muted rounded-full flex items-center justify-center">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <div className="flex-1">
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {day}
          </p>
          <h3 className="font-serif text-base md:text-lg text-foreground mb-2">
            {title}
          </h3>
          <p className="font-serif text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}