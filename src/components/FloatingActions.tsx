import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SITE } from '@/constants/site';
import { WhatsAppIcon } from '@/components/icons/BrandIcons';
import { cn } from '@/lib/utils';

interface FloatingButtonProps {
  href: string;
  label: string;
  children: React.ReactNode;
  className: string;
}

function FloatingButton({ href, label, children, className }: FloatingButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'group flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary active:scale-95',
        className,
      )}
    >
      {children}
    </a>
  );
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-5 z-50 flex flex-col gap-3"
          role="complementary"
          aria-label="Quick contact actions"
        >
          <FloatingButton
            href={SITE.contact.whatsappUrl}
            label="Contact via WhatsApp"
            className="bg-[#25D366] text-white hover:bg-[#128C7E] animate-pulse-ring"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </FloatingButton>

          <FloatingButton
            href={SITE.contact.emailUrl}
            label="Send an email inquiry"
            className="bg-gold text-white hover:bg-gold-dark shadow-gold"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </FloatingButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
