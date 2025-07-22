
'use client';

export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Founded in 2010, our Kathak Dance Academy has been dedicated to preserving and sharing the rich tradition of this classical Indian dance form. What started as a small studio with just a few students has grown into a thriving community of dancers from all backgrounds.
              </p>
              <p>
                Our journey began with a simple mission: to make the beautiful art of Kathak accessible to everyone, regardless of their cultural background or previous dance experience. We believe that dance is a universal language that brings people together.
              </p>
              <p>
                Over the years, we have trained hundreds of students, many of whom have gone on to become professional dancers, teachers, and cultural ambassadors. Our commitment to excellence and authentic teaching methods has earned us recognition in the dance community.
              </p>
              <p>
                Today, we continue to honor the traditional techniques while embracing modern teaching methods, ensuring that this ancient art form remains relevant and vibrant for future generations.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Traditional%20Indian%20kathak%20dance%20academy%20founder%20or%20master%20teacher%20in%20elegant%20traditional%20costume%20demonstrating%20classical%20dance%20poses%20in%20a%20beautiful%20studio%20with%20traditional%20decor%20and%20warm%20lighting&width=600&height=600&seq=story1&orientation=squarish"
              alt="Our Story"
              className="rounded-2xl shadow-lg object-cover object-top w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
