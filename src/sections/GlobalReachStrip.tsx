import { Clock, Globe } from 'lucide-react';
import { SITE } from '@/constants/site';

export function GlobalReachStrip() {
  return (
    <section
      aria-label="Global teaching reach"
      className="w-full shrink-0 border-y border-primary/10 bg-[#E8EDEA]"
    >
      <div className="container-site flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between lg:py-2.5">
        <p className="font-sans text-sm font-medium text-primary/85 sm:text-[15px]">
          {SITE.globalReach.leftText}
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Globe
            className="h-4 w-4 shrink-0 text-primary/45"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="font-sans text-xs text-primary/70 sm:text-sm">
            {SITE.globalReach.rightText}
          </span>
          <Clock
            className="h-4 w-4 shrink-0 text-primary/45"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <div className="flex items-center gap-1.5" aria-label="Countries served">
            {SITE.globalReach.flags.map((flag) => (
              <img
                key={flag.code}
                src={flag.src}
                alt={flag.label}
                title={flag.label}
                className="h-6 w-6 shrink-0 rounded-full object-cover shadow-sm"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
