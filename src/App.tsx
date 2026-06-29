import { MotionConfig } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { FloatingActions } from '@/components/FloatingActions';
import { HeroSection } from '@/sections/HeroSection';
import { GlobalReachStrip } from '@/sections/GlobalReachStrip';
import { AuthoritySection } from '@/sections/AuthoritySection';
import { TeachingModesSection } from '@/sections/TeachingModesSection';
import { FooterSection } from '@/sections/FooterSection';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SEO />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-gold"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <div className="lg:flex lg:min-h-dvh lg:flex-col">
          <HeroSection />
          <GlobalReachStrip />
        </div>
        <AuthoritySection />
        <TeachingModesSection />
      </main>

      <FooterSection />
      <FloatingActions />
    </MotionConfig>
  );
}

export default App;
