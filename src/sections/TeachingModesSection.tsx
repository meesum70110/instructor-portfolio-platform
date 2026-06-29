import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '@/constants/site';
import { WhatsAppIcon, SkypeIcon, ZoomIcon } from '@/components/icons/BrandIcons';
import { staggerContainer, fadeInUp } from '@/lib/motion';

type PlatformKey = 'whatsapp' | 'skype' | 'zoom';

interface PlatformStyle {
  Icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  color: string;
}

const platformStyles: Record<PlatformKey, PlatformStyle> = {
  whatsapp: { Icon: WhatsAppIcon, color: 'text-[#25D366]' },
  skype:    { Icon: SkypeIcon,    color: 'text-[#00AFF0]' },
  zoom:     { Icon: ZoomIcon,     color: 'text-[#2D8CFF]' },
};

export function TeachingModesSection() {
  const prefersReduced = useReducedMotion();
  const { teaching, teachingPlatforms } = SITE;

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
      id="teaching-modes"
      className="scroll-mt-24 bg-cream py-16 lg:py-24"
      aria-labelledby="teaching-heading"
    >
      <div className="container-site">
        <motion.div
          className="mb-8 text-center lg:mb-12"
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-flourish mb-3">
            <h2
              id="teaching-heading"
              className="font-serif text-sm font-semibold uppercase tracking-[0.25em] text-primary lg:text-base"
            >
              {teaching.sectionTitle}
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-cream-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:max-w-7xl lg:gap-10 lg:divide-x-0 lg:divide-y-0"
          {...containerProps}
        >
          {teachingPlatforms.map((platform) => {
            const style = platformStyles[platform.key as PlatformKey];

            return (
              <motion.article
                key={platform.key}
                {...itemProps}
                className="flex flex-col items-center gap-3 px-6 py-8 text-center sm:py-4 lg:gap-6 lg:px-10 lg:py-6 xl:px-14"
              >
                <style.Icon
                  className={`h-10 w-10 md:h-20 md:w-20 lg:h-24 lg:w-24 ${style.color}`}
                  aria-hidden={true}
                />
                <h3 className="font-serif text-xl font-semibold text-primary lg:text-3xl">{platform.name}</h3>
                <p className="font-sans text-sm leading-relaxed text-site-text-muted lg:text-xl lg:leading-relaxed">
                  {platform.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
