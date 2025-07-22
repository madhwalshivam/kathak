
'use client';

import Link from 'next/link';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Drop-in Class',
      price: '$25',
      period: 'per class',
      description: 'Perfect for trying out a class or occasional attendance',
      features: [
        'Single class access',
        'No commitment required',
        'Valid for 1 month',
        'All levels welcome'
      ],
      popular: false
    },
    {
      name: 'Monthly Package',
      price: '$80',
      period: 'per month',
      description: 'Great for regular students who want consistent practice',
      features: [
        '4 classes per month',
        'Flexible scheduling',
        'Save $20 per month',
        'Roll over 1 unused class'
      ],
      popular: true
    },
    {
      name: 'Unlimited Monthly',
      price: '$150',
      period: 'per month',
      description: 'For dedicated students who want to progress quickly',
      features: [
        'Unlimited classes',
        'All levels access',
        'Priority booking',
        'Workshop discounts'
      ],
      popular: false
    },
    {
      name: 'Private Lessons',
      price: '$75',
      period: 'per hour',
      description: 'One-on-one instruction for personalized learning',
      features: [
        'Customized curriculum',
        'Flexible scheduling',
        'Accelerated progress',
        'Performance preparation'
      ],
      popular: false
    }
  ];

  const specialOffers = [
    {
      title: 'Family Package',
      description: 'Enroll multiple family members and save 15% on all packages',
      icon: 'ri-user-star-line'
    },
    {
      title: 'Student Discount',
      description: '20% off for full-time students with valid ID',
      icon: 'ri-graduation-cap-line'
    },
    {
      title: 'Senior Discount',
      description: '15% off for seniors (65+) on all classes',
      icon: 'ri-heart-line'
    },
    {
      title: 'First Class Free',
      description: 'New students get their first class absolutely free',
      icon: 'ri-gift-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing
            <span className="text-amber-600 font-pacifico block">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your dance journey and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative ${plan.popular ? 'border-2 border-amber-600' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-amber-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <i className="ri-check-line text-amber-600 mt-1"></i>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={`w-full py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap text-center block ${
                plan.popular 
                  ? 'bg-amber-600 text-white hover:bg-amber-700' 
                  : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
              }`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Special Offers & Discounts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOffers.map((offer, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${offer.icon} text-2xl text-amber-600`}></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{offer.title}</h4>
                <p className="text-gray-600 text-sm">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about our pricing or need a custom plan?
          </p>
          <Link href="/contact" className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
