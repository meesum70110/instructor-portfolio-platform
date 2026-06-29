import { Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '@/constants/site';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/BrandIcons';
import { staggerContainer, fadeInUp } from '@/lib/motion';

export function CTASection() {
  const prefersReduced = useReducedMotion();
  const { cta, contact } = SITE;

  const containerProps = prefersReduced
    ? {}
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.2 },
        variants: staggerContainer,
      };

  const itemProps = prefersReduced ? {} : { variants: fadeInUp };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-primary"
      aria-labelledby="cta-heading"
    >
      {/* Subtle white star pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M50%2C30 L53.06%2C42.61 L64.14%2C35.86 L57.39%2C46.94 L70%2C50 L57.39%2C53.06 L64.14%2C64.14 L53.06%2C57.39 L50%2C70 L46.94%2C57.39 L35.86%2C64.14 L42.61%2C53.06 L30%2C50 L42.61%2C46.94 L35.86%2C35.86 L46.94%2C42.61 Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: '100px 100px',
        }}
        aria-hidden="true"
      />

      {/* Decorative ring accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full border border-gold/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full border border-gold/15" aria-hidden="true" />

      <div className="container-site relative z-10">
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
          {...containerProps}
        >
          {/* Bismillah in Arabic */}
          <motion.div {...itemProps}>
            <p
              className="font-arabic text-2xl leading-relaxed text-gold/80"
              lang="ar"
              aria-label="Bismillah ir-Rahman ir-Rahim"
            >
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          </motion.div>

          <motion.div {...itemProps} aria-hidden="true">
            <div className="gold-rule mx-auto w-16" />
          </motion.div>

          <motion.h2
            id="cta-heading"
            {...itemProps}
            className="text-balance font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            {cta.heading}
          </motion.h2>

          <motion.p
            {...itemProps}
            className="max-w-md font-sans text-base leading-relaxed text-white/75"
          >
            {cta.subtext}
          </motion.p>

          <motion.div
            {...itemProps}
            className="flex w-full flex-col items-center gap-4 pt-2 sm:w-auto sm:flex-row"
          >
            <Button variant="whatsapp" size="xl" asChild className="w-full shadow-lg hover:shadow-xl sm:w-auto">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start learning via WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {cta.primaryLabel}
              </a>
            </Button>

            <Button
              variant="outline-gold"
              size="xl"
              asChild
              className="w-full border-white/40 text-white hover:bg-white hover:text-primary sm:w-auto"
            >
              <a
                href={contact.emailUrl}
                aria-label="Send an email inquiry"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {cta.secondaryLabel}
              </a>
            </Button>
          </motion.div>

          {/* Contact details */}
          <motion.div
            {...itemProps}
            className="flex flex-col items-center gap-3 pt-1 font-sans text-sm text-white/55 sm:flex-row sm:gap-4"
          >
            <a href={`tel:${contact.phone}`} className="transition-colors hover:text-white" aria-label={`Call ${contact.phoneDisplay}`}>
              {contact.phoneDisplay}
            </a>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <a href={contact.emailUrl} className="transition-colors hover:text-white" aria-label={`Email ${contact.email}`}>
              {contact.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
