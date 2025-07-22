
'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Advanced Student',
      content: 'Learning Kathak here has been a transformative experience. The instructors are incredibly knowledgeable and passionate about preserving this beautiful art form.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20Indian%20woman%20with%20a%20warm%20smile%20wearing%20traditional%20Indian%20dance%20costume%20and%20jewelry%2C%20professional%20headshot%20style%20with%20soft%20lighting%20and%20elegant%20background&width=80&height=80&seq=testimonial1&orientation=squarish'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      content: 'My daughter has been attending classes for two years now. The improvement in her confidence and cultural awareness has been remarkable.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20middle-aged%20Indian%20man%20with%20a%20friendly%20expression%20wearing%20formal%20attire%2C%20professional%20headshot%20style%20with%20neutral%20background%20and%20natural%20lighting&width=80&height=80&seq=testimonial2&orientation=squarish'
    },
    {
      name: 'Sarah Johnson',
      role: 'Beginner Student',
      content: 'As someone with no dance background, I was nervous to start. But the teachers made me feel welcome and comfortable from day one.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20woman%20with%20blonde%20hair%20and%20a%20bright%20smile%20wearing%20casual%20clothing%2C%20professional%20headshot%20style%20with%20soft%20natural%20lighting%20and%20clean%20background&width=80&height=80&seq=testimonial3&orientation=squarish'
    },
    {
      name: 'Amit Patel',
      role: 'Intermediate Student',
      content: 'The attention to detail in teaching traditional techniques while making it accessible to modern learners is exceptional.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20Indian%20man%20with%20a%20confident%20expression%20wearing%20traditional%20kurta%2C%20professional%20headshot%20style%20with%20warm%20lighting%20and%20cultural%20background%20elements&width=80&height=80&seq=testimonial4&orientation=squarish'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students
            <span className="text-amber-600 font-pacifico block">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community of passionate Kathak dancers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover object-top"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400 text-xl"></i>
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-amber-600"></i>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentTestimonial ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-amber-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
