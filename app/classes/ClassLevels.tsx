
'use client';

export default function ClassLevels() {
  const levels = [
    {
      level: 'Beginner',
      title: 'Foundation of Kathak',
      description: 'Perfect for those new to Kathak dance. Learn basic postures, hand gestures, and simple rhythmic patterns.',
      duration: '1 Hour',
      classSize: '12 students',
      requirements: 'No prior experience required',
      curriculum: [
        'Basic postures and stances',
        'Elementary hand gestures (Mudras)',
        'Simple rhythmic patterns (Teentaal)',
        'Introduction to Kathak history and culture',
        'Basic footwork and movements',
        'Breathing and concentration techniques'
      ],
      image: 'https://readdy.ai/api/search-image?query=Beginner%20kathak%20students%20learning%20basic%20positions%20and%20movements%20in%20a%20bright%20dance%20studio%20with%20supportive%20instructor%20guidance%2C%20focused%20learning%20environment%20with%20traditional%20elements&width=500&height=300&seq=beginner-class&orientation=landscape'
    },
    {
      level: 'Intermediate',
      title: 'Rhythmic Mastery',
      description: 'Develop complex rhythmic patterns and fluid movements. Focus on storytelling through dance.',
      duration: '1.5 Hours',
      classSize: '8 students',
      requirements: 'Completion of beginner level or equivalent experience',
      curriculum: [
        'Complex rhythmic patterns and variations',
        'Advanced hand gestures and expressions',
        'Storytelling through dance (Abhinaya)',
        'Intermediate footwork combinations',
        'Musical understanding and improvisation',
        'Performance techniques and stage presence'
      ],
      image: 'https://readdy.ai/api/search-image?query=Intermediate%20kathak%20students%20practicing%20complex%20rhythmic%20patterns%20with%20graceful%20movements%20in%20a%20traditional%20dance%20studio%2C%20showing%20improved%20technique%20and%20fluid%20motion&width=500&height=300&seq=intermediate-class&orientation=landscape'
    },
    {
      level: 'Advanced',
      title: 'Master Performance',
      description: 'Master-level training for serious dancers. Focus on performance quality and artistic expression.',
      duration: '2 Hours',
      classSize: '6 students',
      requirements: 'Intermediate level completion and instructor approval',
      curriculum: [
        'Advanced classical compositions',
        'Complex spins and technical movements',
        'Artistic interpretation and creativity',
        'Performance choreography',
        'Teaching methodology basics',
        'Preparation for professional performances'
      ],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20kathak%20dancers%20performing%20intricate%20movements%20and%20spins%20with%20exceptional%20technique%20in%20an%20elegant%20studio%20setting%2C%20displaying%20mastery%20and%20artistic%20expression&width=500&height=300&seq=advanced-class&orientation=landscape'
    },
    {
      level: 'Kids',
      title: 'Little Dancers',
      description: 'Fun and engaging Kathak classes specially designed for children aged 5-12.',
      duration: '45 Minutes',
      classSize: '10 students',
      requirements: 'Ages 5-12, no experience needed',
      curriculum: [
        'Fun warm-up games and exercises',
        'Basic movements through play',
        'Simple stories and characters',
        'Coordination and balance development',
        'Cultural appreciation activities',
        'Mini performances and showcases'
      ],
      image: 'https://readdy.ai/api/search-image?query=Happy%20children%20learning%20kathak%20dance%20in%20a%20colorful%20and%20cheerful%20studio%20environment%20with%20age-appropriate%20activities%20and%20a%20caring%20instructor%2C%20joyful%20learning%20atmosphere&width=500&height=300&seq=kids-class&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Class
            <span className="text-amber-600 font-pacifico block">Levels</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect level for your dance journey
          </p>
        </div>

        <div className="space-y-16">
          {levels.map((level, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  {level.level}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{level.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{level.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2">
                      <i className="ri-time-line text-amber-600"></i>
                      <span className="text-sm font-medium text-gray-700">Duration</span>
                    </div>
                    <p className="text-gray-900 font-semibold">{level.duration}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2">
                      <i className="ri-user-line text-amber-600"></i>
                      <span className="text-sm font-medium text-gray-700">Class Size</span>
                    </div>
                    <p className="text-gray-900 font-semibold">{level.classSize}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2">
                      <i className="ri-check-line text-amber-600"></i>
                      <span className="text-sm font-medium text-gray-700">Requirements</span>
                    </div>
                    <p className="text-gray-900 font-semibold text-xs">{level.requirements}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                  <ul className="space-y-2">
                    {level.curriculum.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <i className="ri-check-line text-amber-600 mt-1"></i>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={level.image}
                  alt={level.title}
                  className="rounded-2xl shadow-lg object-cover object-top w-full h-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
