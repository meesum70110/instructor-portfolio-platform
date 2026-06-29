import { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SITE } from '@/constants/site';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/BrandIcons';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

const SHRINE_IMAGE = '/images/Jamkran_Shrine.png';

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface ScholarPortraitProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  parallaxX?: number;
  reducedMotion: boolean;
  priority?: boolean;
}

function ScholarPortrait({
  src,
  alt,
  className,
  delay = 0,
  parallaxX = 0,
  reducedMotion,
  priority = false,
}: ScholarPortraitProps) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, x: parallaxX }}
      transition={{
        opacity: { duration: 0.75, delay, ease: EASE },
        y: { duration: 0.75, delay, ease: EASE },
        x: { duration: 0.35, ease: 'easeOut' },
      }}
      className={cn('relative shrink', className)}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className="pointer-events-none block h-full w-auto select-none object-contain object-bottom"
      />
    </motion.div>
  );
}

function HeroComposition() {
  const prefersReduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(0);

  const grandfather = SITE.heroPortraits.find((p) => p.role === 'left')!;
  const qari = SITE.heroPortraits.find((p) => p.role === 'center')!;
  const father = SITE.heroPortraits.find((p) => p.role === 'right')!;

  const handlePointerMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReduced || !stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      setParallax(((e.clientX - rect.left) / rect.width - 0.5) * 10);
    },
    [prefersReduced],
  );

  const handlePointerLeave = useCallback(() => setParallax(0), []);
  const px = (mult: number) => (prefersReduced ? 0 : parallax * mult);

  return (
    <motion.div
      ref={stageRef}
      className={cn(
        'relative mx-auto w-full max-w-full',
        'h-[min(380px,42vh)]',
        'sm:h-[min(420px,48vh)]',
        'lg:h-[min(550px,60vh)]',
      )}
      role="group"
      aria-label="Family legacy portrait composition"
      initial={prefersReduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      <div className="relative flex h-full w-full items-end justify-center">
        <img
          src={SHRINE_IMAGE}
          alt=""
          loading="eager"
          decoding="async"
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute bottom-0 left-1/2 z-0 h-full w-auto max-w-full -translate-x-1/2',
            'object-contain object-bottom opacity-55',
            '[mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]',
            '[-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]',
          )}
        />

        <div className="relative z-10 flex max-w-full items-end justify-center">
          <div
            className={cn(
              'flex max-w-full items-end justify-center',
              'h-[min(340px,48vh)] sm:h-[min(380px,50vh)]',
              'lg:h-[min(480px,52vh)]',
            )}
          >
          <ScholarPortrait
            src={grandfather.src}
            alt={grandfather.alt}
            reducedMotion={!!prefersReduced}
            delay={0.32}
            parallaxX={px(-0.4)}
            className="h-[85%] max-w-[40%] -mr-20 lg:-mr-14"
          />

          <ScholarPortrait
            src={qari.src}
            alt={qari.alt}
            reducedMotion={!!prefersReduced}
            priority
            delay={0.18}
            parallaxX={px(0.08)}
            className="h-[92%] max-w-[45%] -mr-20 lg:-mr-14"
          />

          <ScholarPortrait
            src={father.src}
            alt={father.alt}
            reducedMotion={!!prefersReduced}
            delay={0.28}
            parallaxX={px(0.42)}
            className="h-[94%] max-w-[42%]"
          />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  const textParent = prefersReduced
    ? {}
    : { initial: 'hidden' as const, animate: 'visible' as const, variants: staggerContainer };

  const textChild = prefersReduced ? {} : { variants: fadeInUp };

  return (
    <motion.section
      id="home"
      className="relative flex min-h-dvh scroll-mt-24 flex-col overflow-x-hidden overflow-y-auto pt-[72px] lg:min-h-0 lg:flex-1 lg:overflow-hidden lg:pt-20"
      aria-label="Introduction"
      initial={prefersReduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="container-site relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col py-3 lg:min-h-0 lg:pt-2 lg:pb-0">
        <div className="grid w-full flex-1 grid-cols-1 items-start gap-6 sm:gap-8 lg:min-h-0 lg:grid-cols-[55fr_45fr] lg:items-end lg:gap-12">

          {/* LEFT — copy */}
          <motion.div
            className="relative z-10 order-2 flex min-w-0 flex-col px-5 lg:order-1 lg:self-center lg:px-0"
            {...textParent}
          >
            <motion.div {...textChild} className="mb-4 text-center lg:mb-8 lg:text-left">
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-gold/40 bg-white/50 px-3 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-primary sm:px-5 sm:text-[11px]">
                {SITE.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              {...textChild}
              className="text-balance mx-auto mb-2 max-w-[550px] text-center font-serif text-[clamp(1.375rem,2vw+1.125rem,2.25rem)] font-semibold leading-[1.15] tracking-tight text-primary lg:mx-0 lg:mb-3 lg:max-w-[800px] lg:text-left lg:text-[2.5rem] lg:leading-[1.15]"
            >
              {SITE.hero.headline}
            </motion.h1>

            <motion.div
              {...textChild}
              className="mb-3 flex w-full justify-center lg:mb-4"
              aria-hidden="true"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/70 to-transparent lg:w-20" />
            </motion.div>

            <motion.p
              {...textChild}
              className="mb-4 w-full max-w-[620px] self-start text-left font-serif text-lg font-medium italic leading-[1.6] text-primary/90 sm:text-xl lg:mb-3 lg:max-w-[750px]"
            >
              {SITE.hero.subheading}
            </motion.p>

            <motion.p
              {...textChild}
              className="mb-5 w-full max-w-[620px] self-start text-left font-sans text-[15px] leading-relaxed text-gray-800 sm:text-base lg:mb-4 lg:max-w-[750px]"
            >
              {SITE.hero.intro}
            </motion.p>

            <motion.div
              {...textChild}
              className="flex flex-col items-center gap-3.5 sm:flex-row lg:items-start"
            >
              <motion.div
                whileHover={prefersReduced ? {} : { y: -2 }}
                whileTap={prefersReduced ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="h-12 w-full rounded-full px-10 shadow-primary sm:w-auto"
                  asChild
                >
                  <a
                    href={SITE.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={prefersReduced ? {} : { y: -2 }}
                whileTap={prefersReduced ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline-gold"
                  size="lg"
                  className="h-12 w-full rounded-full border-gold/50 bg-white/50 px-10 text-primary/90 sm:w-auto"
                  asChild
                >
                  <a href={SITE.contact.emailUrl} aria-label="Send an email inquiry">
                    <Mail className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                    Send an Email
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT — shrine backdrop + portrait collage */}
          <div className="order-1 mt-auto flex min-h-0 w-full min-w-0 flex-col items-end justify-end lg:order-2">
            <HeroComposition />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
