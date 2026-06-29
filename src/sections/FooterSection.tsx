import { Phone, Mail } from 'lucide-react';
import { SITE } from '@/constants/site';
import { WhatsAppIcon, SkypeIcon, ZoomIcon } from '@/components/icons/BrandIcons';
import { Button } from '@/components/ui/button';

export function FooterSection() {
  const { name, contact, teachingPlatforms, footer } = SITE;

  return (
    <footer className="w-full" role="contentinfo" aria-label="Site footer">
      {/* Contact band — full-width dark teal */}
      <section
        id="contact"
        className="relative w-full scroll-mt-24 overflow-hidden bg-teal-deep py-12 lg:py-14"
        aria-labelledby="footer-contact-heading"
      >
        {/* Subtle pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M50%2C30 L53.06%2C42.61 L64.14%2C35.86 L57.39%2C46.94 L70%2C50 L57.39%2C53.06 L64.14%2C64.14 L53.06%2C57.39 L50%2C70 L46.94%2C57.39 L35.86%2C64.14 L42.61%2C53.06 L30%2C50 L42.61%2C46.94 L35.86%2C35.86 L46.94%2C42.61 Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '100px 100px',
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10">
          <h2 id="footer-contact-heading" className="sr-only">
            Contact Information
          </h2>

          {/* Bismillah — centered section header */}
          <p
            className="mb-10 text-center font-arabic text-2xl leading-relaxed text-gold sm:text-3xl lg:mb-12"
            lang="ar"
            aria-label="Bismillah ir-Rahman ir-Rahim"
          >
            {footer.arabicQuote}
          </p>

          {/* Three-column grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Quick Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg font-semibold text-white">Quick Contact</h3>
              <ul className="flex flex-col gap-3" role="list">
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                    aria-label={`Phone: ${contact.phoneDisplay}`}
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.emailUrl}
                    className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                    aria-label={`Email: ${contact.email}`}
                  >
                    <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-3">
                <Button variant="whatsapp" size="sm" className="rounded-full" asChild>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Teaching Platforms */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-lg font-semibold text-white">Teaching Platforms</h3>
              <ul className="flex flex-col gap-3" role="list">
                {teachingPlatforms.map((platform) => {
                  const icons: Record<string, React.ReactNode> = {
                    whatsapp: <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />,
                    skype:    <SkypeIcon className="h-4 w-4 text-[#00AFF0]" />,
                    zoom:     <ZoomIcon className="h-4 w-4 text-[#2D8CFF]" />,
                  };
                  return (
                    <li key={platform.key} className="flex items-center gap-3 text-sm text-white/70">
                      {icons[platform.key]}
                      <span>{platform.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* About */}
            <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-serif text-lg font-semibold text-white">About</h3>
              <p className="font-sans text-sm leading-relaxed text-white/65">{footer.aboutText}</p>
              <p className="font-serif text-base font-medium italic text-white/80">{name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-footer — cream bar */}
      <div className="w-full border-t border-white/5 bg-cream-100">
        <div className="container-site flex w-full flex-col items-center justify-center gap-4 py-5 text-center md:flex-row">
          <p className="font-sans text-xs text-site-text-light">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
