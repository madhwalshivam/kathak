
'use client';

import Link from 'next/link';

export default function ClassesPreview() {
  const classes = [
    {
      level: 'Beginner',
      title: 'Foundation of Kathak',
      duration: '1 Hour',
      students: '12',
      price: '$50',
      description: 'Perfect for those new to Kathak. Learn basic postures, hand gestures, and simple compositions.',
      features: ['Basic postures', 'Hand gestures (Mudras)', 'Simple rhythmic patterns', 'Cultural introduction'],
      image: 'https://readdy.ai/api/search-image?query=Young%20beginner%20student%20learning%20basic%20kathak%20dance%20positions%20and%20hand%20gestures%20in%20a%20bright%20dance%20studio%20with%20wooden%20floors%20and%20traditional%20Indian%20decor%2C%20focused%20and%20concentrated%20expression%2C%20warm%20natural%20lighting&width=400&height=300&seq=class1&orientation=landscape'
    },
    {
      level: 'Intermediate',
      title: 'Rhythmic Mastery',
      duration: '1.5 Hours',
      students: '8',
      price: '$75',
      description: 'Develop complex rhythmic patterns and fluid movements. Focus on storytelling through dance.',
      features: ['Complex rhythms', 'Storytelling techniques', 'Advanced footwork', 'Musical understanding'],
      image: 'https://readdy.ai/api/search-image?query=Intermediate%20kathak%20dancers%20practicing%20complex%20rhythmic%20patterns%20and%20graceful%20movements%20in%20a%20traditional%20dance%20studio%20with%20mirrors%20and%20elegant%20Indian%20architectural%20elements%2C%20focused%20group%20practice%20session&width=400&height=300&seq=class2&orientation=landscape'
    },
    {
      level: 'Advanced',
      title: 'Master Performance',
      duration: '2 Hours',
      students: '6',
      price: '$100',
      description: 'Master-level training for serious dancers. Focus on performance quality and artistic expression.',
      features: ['Performance techniques', 'Advanced compositions', 'Artistic interpretation', 'Stage presence'],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20kathak%20dancer%20performing%20intricate%20movements%20and%20spins%20with%20flowing%20traditional%20costume%20in%20an%20ornate%20practice%20hall%20with%20traditional%20Indian%20architecture%20and%20warm%20golden%20lighting%2C%20displaying%20mastery%20and%20elegance&width=400&height=300&seq=class3&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Popular
            <span className="text-amber-600 font-pacifico block">Classes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed programs that cater to all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {classItem.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{classItem.title}</h3>
                <p className="text-gray-600 mb-4">{classItem.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <i className="ri-time-line"></i>
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="ri-user-line"></i>
                    <span>{classItem.students} students</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {classItem.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <i className="ri-check-line text-amber-600"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-amber-600">{classItem.price}</div>
                  <Link href="/contact" className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/classes" className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap">
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  );
}
