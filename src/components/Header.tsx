import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { SITE } from '@/constants/site';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/** Circular overlapping portraits — Qari (MRaza_Pic) is rightmost. */
function LogoPortraits() {
  return (
    <div className="pointer-events-none flex items-center pl-1 select-none" aria-hidden="true">
      {SITE.badgePortraits.map((portrait, i) => (
        <div
          key={portrait.src}
          className={cn(
            'relative shrink-0 overflow-hidden rounded-full border border-gold shadow-sm',
            'h-12 w-12 sm:h-14 sm:w-14',
            i > 0 && '-ml-4',
            i === 0 && 'z-10',
            i === 1 && 'z-20',
            i === 2 && 'z-30',
          )}
        >
          <img
            src={portrait.src}
            alt=""
            className={cn(
              'h-full w-full rounded-full object-cover object-top',
              i > 0 && 'scale-x-[-1]',
            )}
            width={56}
            height={56}
            loading="eager"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

function BrandLockup({ onHomeClick }: { onHomeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <div className="flex items-center gap-3">
      <LogoPortraits />
      <a
        href="#home"
        onClick={onHomeClick}
        className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Go to top — Qari M. Raza"
      >
        <div className="flex flex-col">
          <span className="font-serif text-lg font-semibold italic leading-tight text-primary">
            Qari M. Raza
          </span>
          <div className="mt-1 h-px w-10 bg-gradient-to-r from-gold to-gold/20" aria-hidden="true" />
        </div>
      </a>
    </div>
  );
}

const HEADER_OFFSET_PX = 80;
const TOP_SCROLL_THRESHOLD_PX = 48;
const BOTTOM_SCROLL_THRESHOLD_PX = 50;

function isAtPageTop() {
  return window.scrollY < TOP_SCROLL_THRESHOLD_PX;
}

function isAtPageBottom() {
  return (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight - BOTTOM_SCROLL_THRESHOLD_PX
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const sections = SITE.nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const visibleRatios = new Map<string, number>();

    const syncActiveSection = () => {
      if (isAtPageTop()) {
        setActiveHash('#home');
        return;
      }

      if (isAtPageBottom()) {
        setActiveHash('#contact');
        return;
      }

      if (visibleRatios.size === 0) return;

      let bestHash = '#home';
      let bestRatio = 0;

      visibleRatios.forEach((ratio, hash) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestHash = hash;
        }
      });

      setActiveHash(bestHash);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const hash = `#${entry.target.id}`;
          if (entry.isIntersecting) {
            visibleRatios.set(hash, entry.intersectionRatio);
          } else {
            visibleRatios.delete(hash);
          }
        });
        syncActiveSection();
      },
      {
        rootMargin: `-${HEADER_OFFSET_PX}px 0px -45% 0px`,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    syncActiveSection();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      if (isAtPageTop()) {
        setActiveHash('#home');
        return;
      }

      if (isAtPageBottom()) {
        setActiveHash('#contact');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-cream-200/80 bg-cream/96 shadow-sm backdrop-blur-md'
          : 'bg-cream/70 backdrop-blur-sm',
      )}
      role="banner"
    >
      <div className="container-site">
        <div className="flex h-[72px] items-center justify-between gap-4 lg:h-20">
          <div className="shrink-0">
            <BrandLockup
              onHomeClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            />
          </div>

          <nav
            className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9"
            aria-label="Main navigation"
          >
            {SITE.nav.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    'relative px-1 py-1 font-sans text-sm font-medium transition-colors duration-200',
                    isActive ? 'text-primary' : 'text-site-text-muted hover:text-primary',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button variant="default" size="sm" className="rounded-full px-5 shadow-primary" asChild>
              <a
                href={SITE.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact now via WhatsApp"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                Contact Now
              </a>
            </Button>
          </div>

          <button
            className="rounded-md p-2 text-site-text transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-cream-200 bg-cream/98 shadow-md backdrop-blur-sm lg:hidden"
          >
            <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile navigation">
              {SITE.nav.map((item) => (
                <a
                  key={`mobile-${item.label}-${item.href}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="rounded-lg px-3 py-3 font-sans text-base font-medium text-site-text transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 border-t border-cream-200 pt-3">
                <Button variant="default" className="w-full rounded-full" asChild>
                  <a
                    href={SITE.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact now via WhatsApp"
                  >
                    <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                    Contact Now
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
