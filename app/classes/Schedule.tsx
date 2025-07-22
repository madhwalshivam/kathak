
'use client';

export default function Schedule() {
  const schedule = [
    {
      day: 'Monday',
      classes: [
        { time: '9:00 AM', level: 'Beginner', instructor: 'Ananya Kapoor' },
        { time: '5:00 PM', level: 'Intermediate', instructor: 'Rohit Sharma' },
        { time: '7:00 PM', level: 'Advanced', instructor: 'Guru Meera Devi' }
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '4:00 PM', level: 'Kids', instructor: 'Kavya Srinivasan' },
        { time: '6:00 PM', level: 'Beginner', instructor: 'Ananya Kapoor' }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '9:00 AM', level: 'Intermediate', instructor: 'Rohit Sharma' },
        { time: '5:00 PM', level: 'Advanced', instructor: 'Guru Meera Devi' },
        { time: '7:00 PM', level: 'Beginner', instructor: 'Ananya Kapoor' }
      ]
    },
    {
      day: 'Thursday',
      classes: [
        { time: '4:00 PM', level: 'Kids', instructor: 'Kavya Srinivasan' },
        { time: '6:00 PM', level: 'Intermediate', instructor: 'Rohit Sharma' }
      ]
    },
    {
      day: 'Friday',
      classes: [
        { time: '9:00 AM', level: 'Beginner', instructor: 'Ananya Kapoor' },
        { time: '5:00 PM', level: 'Advanced', instructor: 'Guru Meera Devi' },
        { time: '7:00 PM', level: 'Intermediate', instructor: 'Rohit Sharma' }
      ]
    },
    {
      day: 'Saturday',
      classes: [
        { time: '10:00 AM', level: 'Kids', instructor: 'Kavya Srinivasan' },
        { time: '2:00 PM', level: 'Beginner', instructor: 'Ananya Kapoor' },
        { time: '4:00 PM', level: 'Intermediate', instructor: 'Rohit Sharma' },
        { time: '6:00 PM', level: 'Advanced', instructor: 'Guru Meera Devi' }
      ]
    },
    {
      day: 'Sunday',
      classes: [
        { time: '10:00 AM', level: 'Workshop', instructor: 'Special Guest' },
        { time: '2:00 PM', level: 'Open Practice', instructor: 'Self-guided' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'Kids': return 'bg-purple-100 text-purple-800';
      case 'Workshop': return 'bg-blue-100 text-blue-800';
      case 'Open Practice': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Weekly
            <span className="text-amber-600 font-pacifico block">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect time slot that fits your schedule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {schedule.map((day, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {day.day}
              </h3>
              <div className="space-y-3">
                {day.classes.map((classItem, classIndex) => (
                  <div key={classIndex} className="border border-gray-100 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-gray-900">{classItem.time}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(classItem.level)}`}>
                        {classItem.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{classItem.instructor}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-amber-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Important Notes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Class Duration</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kids Classes: 45 minutes</li>
                <li>• Beginner Classes: 1 hour</li>
                <li>• Intermediate Classes: 1.5 hours</li>
                <li>• Advanced Classes: 2 hours</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Additional Information</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Please arrive 10 minutes early</li>
                <li>• Wear comfortable clothing</li>
                <li>• Bring water bottle</li>
                <li>• No street shoes in studio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
