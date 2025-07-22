'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="relative w-32 h-10 sm:w-36 sm:h-12">
                <Image 
                  src="/assets/logo.png"
                  alt="Kathak Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">About</Link>
            <Link href="/classes" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Classes</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Gallery</Link>
            <Link href="/events" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Events</Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Contact</Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Link href="/contact" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap">
              Book Class
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl"></i>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">About</Link>
              <Link href="/classes" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Classes</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Gallery</Link>
              <Link href="/events" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Events</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">Contact</Link>
              <Link href="/contact" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors cursor-pointer text-center">
                Book Class
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
