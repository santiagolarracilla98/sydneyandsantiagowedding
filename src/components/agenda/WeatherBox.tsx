import { Sun, Moon } from 'lucide-react';

interface WeatherBoxProps {
  t: {
    label: string;
    day: string;
    night: string;
    note: string;
  };
}

export function WeatherBox({ t }: WeatherBoxProps) {
  return (
    <div className="bg-card border border-border/50 rounded-lg p-6 shadow-sm">
      <h3 className="font-serif text-sm md:text-base text-foreground mb-4 text-center">
        {t.label}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Day */}
        <div className="flex items-center gap-3 p-3 bg-background rounded-md">
          <Sun className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <p className="font-serif text-sm text-foreground">{t.day}</p>
        </div>
        
        {/* Night */}
        <div className="flex items-center gap-3 p-3 bg-background rounded-md">
          <Moon className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <p className="font-serif text-sm text-foreground">{t.night}</p>
        </div>
      </div>
      
      <p className="font-serif text-xs text-muted-foreground text-center italic">
        {t.note}
      </p>
    </div>
  );
}