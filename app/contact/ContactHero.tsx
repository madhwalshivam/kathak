
'use client';

export default function ContactHero() {
  return (
    <section className="relative h-96 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Welcoming%20kathak%20dance%20studio%20reception%20area%20with%20traditional%20Indian%20decor%2C%20warm%20lighting%2C%20and%20comfortable%20seating%20area%20for%20visitors%20and%20parents%2C%20professional%20and%20inviting%20atmosphere&width=1920&height=600&seq=contact-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in
            <span className="block text-amber-400 font-pacifico">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to begin your Kathak journey? We're here to help you get started
          </p>
        </div>
      </div>
    </section>
  );
}
