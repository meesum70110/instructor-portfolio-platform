import { GraduationCap, Users, CheckCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '@/constants/site';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface AuthorityCardProps {
  icon: React.ReactNode;
  title: string;
  items: readonly string[];
  titleColor: 'primary' | 'gold';
  iconBg: string;
}

function AuthorityCard({ icon, title, items, titleColor, iconBg }: AuthorityCardProps) {
  return (
    <article className="authority-card h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex h-full flex-col p-7 pl-8 sm:p-8 sm:pl-9 lg:p-12">
        <div
          className={cn(
            'mb-5 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-md lg:mb-6 lg:h-20 lg:w-20',
            iconBg,
          )}
        >
          {icon}
        </div>

        <h3
          className={cn(
            'mb-5 font-serif text-2xl font-semibold leading-snug lg:mb-6 lg:text-3xl',
            titleColor === 'primary' ? 'text-primary' : 'text-gold-dark',
          )}
        >
          {title}
        </h3>

        <ul className="flex flex-1 flex-col gap-4 lg:gap-5" role="list">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 lg:gap-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold lg:h-6 lg:w-6" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-site-text-muted lg:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function AuthoritySection() {
  const prefersReduced = useReducedMotion();
  const { authority } = SITE;

  const containerProps = prefersReduced
    ? {}
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.15 },
        variants: staggerContainer,
      };

  const itemProps = prefersReduced ? {} : { variants: fadeInUp };

  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-cream/50 py-16 lg:py-24"
      aria-labelledby="authority-heading"
    >
      <div className="container-site">
        <motion.div
          className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-12"
          {...containerProps}
        >
          <motion.div className="flex" {...itemProps}>
            <AuthorityCard
              icon={<GraduationCap className="h-7 w-7 lg:h-10 lg:w-10" aria-hidden="true" />}
              title={authority.academic.title}
              items={authority.academic.items}
              titleColor="primary"
              iconBg="bg-primary"
            />
          </motion.div>

          <motion.div className="flex" {...itemProps}>
            <AuthorityCard
              icon={<Users className="h-7 w-7 lg:h-10 lg:w-10" aria-hidden="true" />}
              title={authority.family.title}
              items={authority.family.items}
              titleColor="gold"
              iconBg="bg-gold"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
