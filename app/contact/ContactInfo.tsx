
'use client';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Our Studio',
      info: '123 Dance Street, Art District',
      subInfo: 'Mumbai, Maharashtra 400001',
      action: 'Get Directions'
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      info: '+91 98765 43210',
      subInfo: 'Mon-Sat: 9 AM - 9 PM',
      action: 'Call Now'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      info: 'info@kathakdance.com',
      subInfo: 'We respond within 24 hours',
      action: 'Send Email'
    }
  ];

  const socialLinks = [
    { icon: 'ri-facebook-fill', name: 'Facebook', url: '#' },
    { icon: 'ri-instagram-fill', name: 'Instagram', url: '#' },
    { icon: 'ri-youtube-fill', name: 'YouTube', url: '#' },
    { icon: 'ri-twitter-fill', name: 'Twitter', url: '#' }
  ];

  const studioHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '2:00 PM - 6:00 PM' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600">
            Multiple ways to reach us and start your dance journey
          </p>
        </div>

        <div className="space-y-8">
          {contactDetails.map((detail, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${detail.icon} text-xl text-amber-600`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{detail.title}</h3>
                  <p className="text-gray-700 font-medium">{detail.info}</p>
                  <p className="text-gray-600 text-sm">{detail.subInfo}</p>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium mt-2 cursor-pointer">
                    {detail.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-amber-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Studio Hours</h3>
          <div className="space-y-3">
            {studioHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{schedule.day}</span>
                <span className="text-gray-900 font-medium">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors cursor-pointer"
              >
                <i className={`${social.icon} text-xl text-amber-600`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Information</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>• Free parking available on-site</p>
            <p>• Changing rooms and lockers provided</p>
            <p>• Air-conditioned studio spaces</p>
            <p>• Water fountain and seating area for parents</p>
            <p>• Wheelchair accessible entrance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
