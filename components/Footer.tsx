
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-pacifico text-amber-400 mb-4">Kathak</h3>
            <p className="text-gray-300 mb-4">
              Discover the beauty and grace of Kathak dance through our comprehensive classes and workshops.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-facebook-fill text-xl text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-instagram-fill text-xl text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-youtube-fill text-xl text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-twitter-fill text-xl text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Classes</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                  Beginner Classes
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                  Intermediate Classes
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                  Advanced Classes
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">
                  Private Lessons
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-amber-400"></i>
                </div>
                <span className="text-gray-300">123 Dance Street, Art District, City</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-amber-400"></i>
                </div>
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-amber-400"></i>
                </div>
                <span className="text-gray-300">info@kathakdance.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Kathak Dance Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
