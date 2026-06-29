import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
