
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClassesHero from './ClassesHero';
import ClassLevels from './ClassLevels';
import Schedule from './Schedule';
import Pricing from './Pricing';

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClassesHero />
      <ClassLevels />
      <Schedule />
      <Pricing />
      <Footer />
    </div>
  );
}
