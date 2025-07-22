
'use client';

export default function AboutHero() {
  return (
    <section className="relative h-96 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20kathak%20dance%20academy%20interior%20with%20traditional%20Indian%20architecture%2C%20ornate%20pillars%2C%20wooden%20floors%2C%20and%20warm%20golden%20lighting%20creating%20a%20serene%20and%20cultural%20atmosphere%20for%20dance%20learning&width=1920&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Our
            <span className="block text-amber-400 font-pacifico">Academy</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Preserving the timeless tradition of Kathak dance while nurturing the next generation of dancers
          </p>
        </div>
      </div>
    </section>
  );
}
