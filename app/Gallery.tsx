'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'performances', name: 'Performances' },
    { id: 'classes', name: 'Classes' },
    { id: 'events', name: 'Events' },
    { id: 'costumes', name: 'Costumes' }
  ];

  const images = [
    {
      id: 1,
      category: 'performances',
      title: 'Classical Solo Performance',
      description: 'Traditional Kathak solo performance showcasing intricate footwork',
      url: 'https://readdy.ai/api/search-image?query=Stunning%20kathak%20dancer%20in%20elaborate%20red%20and%20gold%20traditional%20costume%20performing%20solo%20on%20stage%20with%20dramatic%20lighting%2C%20classical%20Indian%20dance%20performance%2C%20expressive%20poses%20and%20mudras%2C%20high%20quality%20photography&width=400&height=600&seq=perf1&orientation=portrait'
    },
    {
      id: 2,
      category: 'classes',
      title: 'Beginner Class Session',
      description: 'Students learning basic hand gestures and postures',
      url: 'https://readdy.ai/api/search-image?query=Group%20of%20students%20in%20white%20practice%20clothes%20learning%20basic%20kathak%20positions%20in%20bright%20dance%20studio%2C%20instructor%20demonstrating%20hand%20gestures%2C%20learning%20environment%2C%20high%20quality%20photography&width=400&height=600&seq=class1&orientation=portrait'
    },
    {
      id: 3,
      category: 'performances',
      title: 'Duet Performance',
      description: 'Synchronized Kathak duet showcasing perfect coordination',
      url: 'https://readdy.ai/api/search-image?query=Two%20kathak%20dancers%20in%20matching%20blue%20and%20silver%20costumes%20performing%20synchronized%20movements%20on%20stage%2C%20perfect%20coordination%20and%20grace%2C%20classical%20Indian%20dance%20duet%2C%20high%20quality%20photography&width=400&height=600&seq=perf2&orientation=portrait'
    },
    {
      id: 4,
      category: 'costumes',
      title: 'Traditional Costume',
      description: 'Authentic Kathak costume with intricate embroidery',
      url: 'https://readdy.ai/api/search-image?query=Close-up%20of%20beautiful%20traditional%20kathak%20dance%20costume%20with%20intricate%20golden%20embroidery%2C%20flowing%20fabric%20and%20ornate%20jewelry%2C%20cultural%20costume%20design%2C%20high%20quality%20photography&width=400&height=600&seq=costume1&orientation=portrait'
    },
    {
      id: 5,
      category: 'events',
      title: 'Cultural Festival',
      description: 'Annual Kathak festival celebration',
      url: 'https://readdy.ai/api/search-image?query=Cultural%20festival%20stage%20with%20kathak%20dancers%20performing%20for%20large%20audience%2C%20colorful%20stage%20decorations%2C%20celebration%20atmosphere%2C%20traditional%20Indian%20cultural%20event%2C%20high%20quality%20photography&width=400&height=600&seq=event1&orientation=portrait'
    },
    {
      id: 6,
      category: 'classes',
      title: 'Advanced Training',
      description: 'Master class focusing on complex spinning techniques',
      url: 'https://readdy.ai/api/search-image?query=Advanced%20kathak%20student%20practicing%20spinning%20techniques%20with%20instructor%20guidance%20in%20traditional%20dance%20studio%2C%20focused%20training%20session%2C%20high%20quality%20photography&width=400&height=600&seq=class2&orientation=portrait'
    },
    {
      id: 7,
      category: 'performances',
      title: 'Storytelling Performance',
      description: 'Narrative dance depicting ancient Indian tales',
      url: 'https://readdy.ai/api/search-image?query=Kathak%20dancer%20in%20white%20and%20gold%20costume%20performing%20expressive%20storytelling%20dance%20with%20dramatic%20facial%20expressions%2C%20narrative%20Indian%20classical%20dance%2C%20high%20quality%20photography&width=400&height=600&seq=perf3&orientation=portrait'
    },
    {
      id: 8,
      category: 'costumes',
      title: 'Modern Fusion Costume',
      description: 'Contemporary adaptation of traditional Kathak attire',
      url: 'https://readdy.ai/api/search-image?query=Modern%20fusion%20kathak%20costume%20design%20with%20contemporary%20elements%20while%20maintaining%20traditional%20aesthetics%2C%20innovative%20dance%20costume%2C%20high%20quality%20photography&width=400&height=600&seq=costume2&orientation=portrait'
    },
    {
      id: 9,
      category: 'events',
      title: 'Student Recital',
      description: 'Annual showcase of student achievements',
      url: 'https://readdy.ai/api/search-image?query=Student%20recital%20stage%20with%20young%20kathak%20dancers%20performing%20for%20proud%20families%2C%20achievement%20celebration%2C%20cultural%20education%20showcase%2C%20high%20quality%20photography&width=400&height=600&seq=event2&orientation=portrait'
    },
    {
      id: 10,
      category: 'classes',
      title: 'Children Workshop',
      description: 'Fun-filled learning session for young dancers',
      url: 'https://readdy.ai/api/search-image?query=Group%20of%20happy%20children%20in%20colorful%20practice%20clothes%20learning%20kathak%20basics%2C%20joyful%20dance%20education%2C%20young%20students%20having%20fun%20while%20learning%2C%20high%20quality%20photography&width=400&height=600&seq=class3&orientation=portrait'
    },
    {
      id: 11,
      category: 'performances',
      title: 'Group Choreography',
      description: 'Ensemble performance with multiple dancers',
      url: 'https://readdy.ai/api/search-image?query=Group%20of%20kathak%20dancers%20in%20coordinated%20orange%20and%20yellow%20costumes%20performing%20ensemble%20choreography%2C%20synchronized%20movements%2C%20classical%20Indian%20dance%20group%2C%20high%20quality%20photography&width=400&height=600&seq=perf4&orientation=portrait'
    },
    {
      id: 12,
      category: 'costumes',
      title: 'Festival Attire',
      description: 'Special occasion costume for cultural celebrations',
      url: 'https://readdy.ai/api/search-image?query=Elaborate%20festival%20kathak%20costume%20with%20rich%20purple%20and%20gold%20fabrics%2C%20ceremonial%20dance%20attire%2C%20traditional%20Indian%20festival%20clothing%2C%20high%20quality%20photography&width=400&height=600&seq=costume3&orientation=portrait'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section 
          className="relative h-96 flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://readdy.ai/api/search-image?query=Beautiful%20collage%20of%20kathak%20dance%20performances%2C%20costumes%2C%20and%20cultural%20moments%2C%20artistic%20composition%20with%20warm%20lighting%2C%20celebrating%20classical%20Indian%20dance%20heritage%2C%20high%20quality%20photography&width=1920&height=600&seq=gallery-hero&orientation=landscape")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-xl md:text-2xl">Capturing the beauty and elegance of Kathak dance</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Visual Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore moments from our classes, performances, and cultural celebrations
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap $\{
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Behind the Scenes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A glimpse into the dedication and practice that goes into mastering Kathak
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=Behind%20the%20scenes%20of%20kathak%20dance%20preparation%2C%20dancers%20getting%20ready%20in%20traditional%20costumes%2C%20makeup%20and%20costume%20preparation%2C%20cultural%20performance%20backstage%2C%20high%20quality%20photography&width=500&height=300&seq=behind1&orientation=landscape"
                  alt="Preparation"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Preparation Process</h3>
                <p className="text-gray-600">
                  From costume fitting to makeup application, see the meticulous preparation that goes into every performance. Our dancers spend hours perfecting every detail to honor this ancient art form.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=Kathak%20dance%20practice%20session%20with%20students%20working%20on%20complex%20choreography%2C%20dedicated%20training%20environment%2C%20mirrors%20and%20wooden%20floors%2C%20high%20quality%20photography&width=500&height=300&seq=behind2&orientation=landscape"
                  alt="Practice"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice Sessions</h3>
                <p className="text-gray-600">
                  Daily practice is the foundation of mastery. Our students dedicate countless hours to perfecting their technique, building strength, and developing the grace that defines Kathak dance.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=Kathak%20costume%20and%20jewelry%20workshop%2C%20artisans%20creating%20traditional%20dance%20attire%2C%20cultural%20craft%20and%20costume%20making%2C%20high%20quality%20photography&width=500&height=300&seq=behind3&orientation=landscape"
                  alt="Costume Making"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Costume Creation</h3>
                <p className="text-gray-600">
                  Each costume is a work of art, handcrafted with traditional techniques. From selecting fabrics to intricate embroidery, every element is chosen to enhance the dancer's expression and movement.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <img 
                  src="https://readdy.ai/api/search-image?query=Musicians%20playing%20traditional%20Indian%20instruments%20for%20kathak%20dance%2C%20tabla%20and%20sitar%20players%2C%20live%20music%20accompaniment%2C%20cultural%20music%20performance%2C%20high%20quality%20photography&width=500&height=300&seq=behind4&orientation=landscape"
                  alt="Musical Accompaniment"
                  className="w-full h-64 object-cover object-top rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Musical Collaboration</h3>
                <p className="text-gray-600">
                  Kathak is inseparable from its musical foundation. Our musicians and dancers work together to create seamless performances where rhythm, melody, and movement unite in perfect harmony.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Student Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrating the success and growth of our dance community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-amber-50 rounded-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Young%20kathak%20dancer%20receiving%20award%20or%20trophy%20at%20dance%20competition%2C%20achievement%20celebration%2C%20proud%20moment%2C%20high%20quality%20photography&width=300&height=300&seq=achievement1&orientation=squarish"
                  alt="Competition Winner"
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Priya Sharma</h3>
                <p className="text-amber-600 font-semibold mb-2">First Place - Regional Competition</p>
                <p className="text-gray-600 text-sm">
                  "Winning this competition was a dream come true. The training here prepared me for every challenge."
                </p>
              </div>
              
              <div className="text-center p-8 bg-amber-50 rounded-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Adult%20kathak%20dancer%20performing%20at%20cultural%20festival%2C%20confident%20performance%2C%20traditional%20costume%2C%20high%20quality%20photography&width=300&height=300&seq=achievement2&orientation=squarish"
                  alt="Cultural Ambassador"
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Rajesh Kumar</h3>
                <p className="text-amber-600 font-semibold mb-2">Cultural Ambassador</p>
                <p className="text-gray-600 text-sm">
                  "Representing our culture internationally has been the highlight of my dance journey."
                </p>
              </div>
              
              <div className="text-center p-8 bg-amber-50 rounded-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Kathak%20dance%20teacher%20instructing%20students%2C%20skilled%20instructor%2C%20professional%20teaching%2C%20high%20quality%20photography&width=300&height=300&seq=achievement3&orientation=squarish"
                  alt="Teaching Achievement"
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Anita Patel</h3>
                <p className="text-amber-600 font-semibold mb-2">Certified Instructor</p>
                <p className="text-gray-600 text-sm">
                  "From student to teacher, this journey has been transformative. Now I'm passing on the tradition."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-amber-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Gallery</h2>
            <p className="text-xl mb-8">
              Become part of our vibrant dance community and create your own memorable moments in the world of Kathak
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors cursor-pointer whitespace-nowrap">
                Visit Studio
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}