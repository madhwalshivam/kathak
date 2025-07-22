
'use client';

export default function ClassesHero() {
  return (
    <section className="relative h-96 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Dynamic%20kathak%20dance%20class%20in%20session%20with%20multiple%20students%20of%20different%20ages%20practicing%20together%20in%20a%20spacious%20studio%20with%20mirrors%2C%20wooden%20floors%2C%20and%20traditional%20Indian%20decor%2C%20energetic%20learning%20atmosphere&width=1920&height=600&seq=classes-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="block text-amber-400 font-pacifico">Classes</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the perfect class for your skill level and dance goals
          </p>
        </div>
      </div>
    </section>
  );
}
