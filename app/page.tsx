
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ClassesPreview from './ClassesPreview';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ClassesPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
