import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Calculus II Final Exam',
      date: 'March 15, 2024',
      time: '9:00 AM',
      type: 'exam',
      color: 'border-red-200 bg-red-50'
    },
    {
      id: 2,
      title: 'Project Presentation',
      date: 'March 18, 2024',
      time: '2:00 PM',
      type: 'presentation',
      color: 'border-blue-200 bg-blue-50'
    },
    {
      id: 3,
      title: 'Fee Payment Deadline',
      date: 'March 20, 2024',
      time: '11:59 PM',
      type: 'deadline',
      color: 'border-orange-200 bg-orange-50'
    },
    {
      id: 4,
      title: 'Course Registration',
      date: 'March 25, 2024',
      time: '8:00 AM',
      type: 'registration',
      color: 'border-green-200 bg-green-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Events</h3>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className={`${event.color} border rounded-lg p-4`}>
            <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;