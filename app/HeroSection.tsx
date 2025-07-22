
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Desktop images
const desktopBanners = ['/assets/ban1.jpeg', '/assets/ban.jpg', '/assets/2.jpg'];
// Mobile images
const mobileBanners = ['/assets/ban1.jpeg', '/assets/ban.jpg', '/assets/2.jpg'];

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  const banners = isMobile ? mobileBanners : desktopBanners;

  return (
    <div className="w-full  relative">
      <Link href="/contact">
        <Image
          src={banners[currentIndex]}
          alt="Banner"
          width={1920}
          height={1080}
          className={`w-full ${isMobile ? 'h-auto object-contain' : 'h-screen object-cover object-top'} transition-all duration-700`}
          priority
        />
      </Link>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-red-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
