
'use client';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-heart-line',
      title: 'Authenticity',
      description: 'We preserve the traditional techniques and spiritual essence of Kathak while making it accessible to modern learners.'
    },
    {
      icon: 'ri-star-line',
      title: 'Excellence',
      description: 'We maintain the highest standards in teaching and performance, ensuring each student reaches their full potential.'
    },
    {
      icon: 'ri-team-line',
      title: 'Community',
      description: 'We foster a supportive and inclusive environment where dancers of all backgrounds can learn and grow together.'
    },
    {
      icon: 'ri-global-line',
      title: 'Cultural Bridge',
      description: 'We serve as a bridge between traditional Indian culture and contemporary society, promoting understanding and appreciation.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core
            <span className="text-amber-600 font-pacifico block">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do at our academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${value.icon} text-3xl text-amber-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
