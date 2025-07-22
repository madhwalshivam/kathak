
'use client';

export default function LocationMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Our Studio
          </h2>
          <p className="text-lg text-gray-600">
            Located in the heart of the cultural district, easily accessible by public transport
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7729087285143!2d72.83081431744384!3d19.03384048717799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4d9f111%3A0x1000000000000000!2sKala%20Ghoda%2C%20Fort%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-subway-line text-xl text-amber-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Public Transport</h3>
                <p className="text-gray-600 text-sm">
                  Churchgate Station (5 min walk)<br/>
                  Multiple bus routes available
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-car-line text-xl text-amber-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-600 text-sm">
                  Free on-site parking<br/>
                  Secure and well-lit area
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-pin-line text-xl text-amber-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Landmarks</h3>
                <p className="text-gray-600 text-sm">
                  Near Kala Ghoda Art District<br/>
                  Close to cultural centers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
