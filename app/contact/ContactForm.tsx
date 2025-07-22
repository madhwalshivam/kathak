
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    classType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          experience: '',
          classType: '',
          message: ''
        });
      } else {
        setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your First Class
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="5"
                max="80"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm"
                placeholder="Enter your age"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Dance Experience
              </label>
              <div className="relative">
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm appearance-none pr-8"
                >
                  <option value="">Select your experience level</option>
                  <option value="none">No previous experience</option>
                  <option value="beginner">Some dance experience</option>
                  <option value="intermediate">Intermediate level</option>
                  <option value="advanced">Advanced level</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="classType" className="block text-sm font-medium text-gray-700 mb-2">
                Interested Class Type
              </label>
              <div className="relative">
                <select
                  id="classType"
                  name="classType"
                  value={formData.classType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm appearance-none pr-8"
                >
                  <option value="">Select class type</option>
                  <option value="beginner">Beginner Classes</option>
                  <option value="intermediate">Intermediate Classes</option>
                  <option value="advanced">Advanced Classes</option>
                  <option value="kids">Kids Classes</option>
                  <option value="private">Private Lessons</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              maxLength={500}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm resize-none"
              placeholder="Tell us about your goals, questions, or any specific needs..."
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.message.length}/500 characters
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus && (
            <div className={`text-center p-4 rounded-lg ${
              submitStatus.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {submitStatus}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
