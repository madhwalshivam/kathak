
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Begin Your
          <span className="block font-pacifico">Kathak Journey?</span>
        </h2>
        <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
          Join our community of passionate dancers and discover the beauty of this ancient art form. 
          Your first class is just a click away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap">
            Book Your First Class
          </Link>
          <Link href="/classes" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors cursor-pointer whitespace-nowrap">
            View Class Schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
