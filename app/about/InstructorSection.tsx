
'use client';

export default function InstructorSection() {
  const instructors = [
    {
      name: 'Guru Meera Devi',
      title: 'Founder & Principal Instructor',
      experience: '25+ years',
      description: 'A renowned Kathak master who trained under the legendary Pandit Birju Maharaj. She brings traditional techniques with contemporary teaching methods.',
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20an%20elegant%20Indian%20classical%20dance%20teacher%20in%20traditional%20costume%20with%20graceful%20posture%20and%20warm%20expression%2C%20wearing%20kathak%20dance%20jewelry%20and%20makeup%20in%20a%20cultural%20setting&width=300&height=300&seq=instructor1&orientation=squarish'
    },
    {
      name: 'Ananya Kapoor',
      title: 'Senior Instructor',
      experience: '15+ years',
      description: 'Specialized in teaching beginners and intermediate students. Known for her patience and ability to break down complex movements.',
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20professional%20Indian%20dance%20instructor%20with%20a%20friendly%20smile%20wearing%20traditional%20dance%20attire%2C%20professional%20headshot%20style%20with%20cultural%20elements%20in%20background&width=300&height=300&seq=instructor2&orientation=squarish'
    },
    {
      name: 'Rohit Sharma',
      title: 'Advanced Instructor',
      experience: '18+ years',
      description: 'Expert in advanced techniques and performance coaching. Has performed internationally and specializes in traditional compositions.',
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20skilled%20male%20Indian%20classical%20dance%20instructor%20in%20traditional%20costume%20with%20confident%20expression%2C%20wearing%20kathak%20dance%20attire%20and%20showing%20cultural%20grace&width=300&height=300&seq=instructor3&orientation=squarish'
    },
    {
      name: 'Kavya Srinivasan',
      title: 'Youth Program Coordinator',
      experience: '12+ years',
      description: 'Dedicated to teaching children and teenagers. Creates engaging programs that make learning Kathak fun and accessible for young dancers.',
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20Indian%20woman%20dance%20instructor%20with%20a%20bright%20smile%20wearing%20colorful%20traditional%20dance%20costume%2C%20professional%20headshot%20with%20vibrant%20cultural%20background&width=300&height=300&seq=instructor4&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our
            <span className="text-amber-600 font-pacifico block">Instructors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from master teachers who are passionate about sharing their knowledge and preserving this beautiful art form
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{instructor.title}</p>
                <p className="text-sm text-gray-500 mb-4">{instructor.experience} experience</p>
                <p className="text-gray-600 text-sm">{instructor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
