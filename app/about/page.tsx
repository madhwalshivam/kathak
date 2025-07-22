
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import StorySection from './StorySection';
import InstructorSection from './InstructorSection';
import ValuesSection from './ValuesSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <StorySection />
      <InstructorSection />
      <ValuesSection />
      <Footer />
    </div>
  );
}
