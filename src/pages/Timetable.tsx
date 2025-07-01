import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Download, Filter } from 'lucide-react';

const Timetable: React.FC = () => {
  const [viewType, setViewType] = useState('week');
  const [selectedWeek, setSelectedWeek] = useState('current');

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const schedule = {
    'Monday': [
      { time: '10:00 AM', code: 'CS301', name: 'Data Structures', instructor: 'Dr. Smith', room: 'Room 101', duration: 1 },
      { time: '2:00 PM', code: 'PHYS201', name: 'Physics for Engineers', instructor: 'Prof. Davis', room: 'Lab 2', duration: 1 }
    ],
    'Tuesday': [
      { time: '2:00 PM', code: 'MATH201', name: 'Calculus II', instructor: 'Prof. Johnson', room: 'Room 205', duration: 1.5 },
      { time: '4:00 PM', code: 'CS302', name: 'Database Systems', instructor: 'Dr. Wilson', room: 'Lab 3', duration: 1.5 }
    ],
    'Wednesday': [
      { time: '10:00 AM', code: 'CS301', name: 'Data Structures', instructor: 'Dr. Smith', room: 'Room 101', duration: 1 },
      { time: '1:00 PM', code: 'ENG102', name: 'Technical Writing', instructor: 'Dr. Brown', room: 'Room 302', duration: 1 },
      { time: '3:00 PM', code: 'CS303', name: 'Software Engineering', instructor: 'Dr. Miller', room: 'Room 150', duration: 1.5 }
    ],
    'Thursday': [
      { time: '2:00 PM', code: 'MATH201', name: 'Calculus II', instructor: 'Prof. Johnson', room: 'Room 205', duration: 1.5 },
      { time: '10:00 AM', code: 'CS302', name: 'Database Systems', instructor: 'Dr. Wilson', room: 'Lab 3', duration: 1.5 }
    ],
    'Friday': [
      { time: '10:00 AM', code: 'CS301', name: 'Data Structures', instructor: 'Dr. Smith', room: 'Room 101', duration: 1 },
      { time: '2:00 PM', code: 'PHYS201', name: 'Physics for Engineers', instructor: 'Prof. Davis', room: 'Lab 2', duration: 1 },
      { time: '3:00 PM', code: 'CS303', name: 'Software Engineering', instructor: 'Dr. Miller', room: 'Room 150', duration: 1.5 }
    ]
  };

  const upcomingClasses = [
    { code: 'CS301', name: 'Data Structures', time: 'Today, 10:00 AM', room: 'Room 101', instructor: 'Dr. Smith' },
    { code: 'MATH201', name: 'Calculus II', time: 'Today, 2:00 PM', room: 'Room 205', instructor: 'Prof. Johnson' },
    { code: 'ENG102', name: 'Technical Writing', time: 'Tomorrow, 1:00 PM', room: 'Room 302', instructor: 'Dr. Brown' }
  ];

  const getTimeSlotIndex = (time: string) => {
    return timeSlots.findIndex(slot => slot === time);
  };

  const getClassColor = (code: string) => {
    const colors = {
      'CS301': 'bg-purple-100 border-purple-300 text-purple-800',
      'CS302': 'bg-blue-100 border-blue-300 text-blue-800',
      'CS303': 'bg-indigo-100 border-indigo-300 text-indigo-800',
      'MATH201': 'bg-green-100 border-green-300 text-green-800',
      'PHYS201': 'bg-orange-100 border-orange-300 text-orange-800',
      'ENG102': 'bg-pink-100 border-pink-300 text-pink-800'
    };
    return colors[code as keyof typeof colors] || 'bg-gray-100 border-gray-300 text-gray-800';
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Class Timetable</h1>
        <p className="text-gray-600 mt-2">View your weekly schedule and manage your class timings.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewType('week')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewType === 'week'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Week View
            </button>
            <button
              onClick={() => setViewType('day')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewType === 'day'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Day View
            </button>
          </div>
          
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="current">Current Week</option>
            <option value="next">Next Week</option>
            <option value="previous">Previous Week</option>
          </select>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Timetable */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Weekly Schedule</h2>
              <p className="text-sm text-gray-600">March 11-15, 2024</p>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Header */}
                <div className="grid grid-cols-6 bg-gray-50">
                  <div className="p-4 border-b border-gray-200">
                    <span className="text-sm font-medium text-gray-600">Time</span>
                  </div>
                  {days.map((day) => (
                    <div key={day} className="p-4 border-b border-gray-200 text-center">
                      <span className="text-sm font-medium text-gray-900">{day}</span>
                    </div>
                  ))}
                </div>

                {/* Time slots */}
                {timeSlots.map((time, timeIndex) => (
                  <div key={time} className="grid grid-cols-6 border-b border-gray-100 min-h-[80px]">
                    <div className="p-4 bg-gray-50 border-r border-gray-200 flex items-center">
                      <span className="text-sm font-medium text-gray-600">{time}</span>
                    </div>
                    {days.map((day) => {
                      const daySchedule = schedule[day as keyof typeof schedule] || [];
                      const classAtTime = daySchedule.find(cls => cls.time === time);
                      
                      return (
                        <div key={`${day}-${time}`} className="p-2 border-r border-gray-100">
                          {classAtTime && (
                            <div className={`${getClassColor(classAtTime.code)} rounded-lg p-3 border h-full`}>
                              <div className="text-xs font-bold">{classAtTime.code}</div>
                              <div className="text-xs mt-1 font-medium">{classAtTime.name}</div>
                              <div className="text-xs mt-1 flex items-center text-gray-600">
                                <MapPin className="h-3 w-3 mr-1" />
                                {classAtTime.room}
                              </div>
                              <div className="text-xs flex items-center text-gray-600">
                                <User className="h-3 w-3 mr-1" />
                                {classAtTime.instructor}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Classes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Classes</h3>
            <div className="space-y-3">
              {upcomingClasses.map((cls, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900">{cls.code}</span>
                    <span className="text-xs text-gray-500">{cls.time}</span>
                  </div>
                  <div className="text-sm text-gray-700 mb-1">{cls.name}</div>
                  <div className="text-xs text-gray-600 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {cls.room}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Classes</span>
                <span className="font-semibold text-gray-900">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Contact Hours</span>
                <span className="font-semibold text-gray-900">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Free Periods</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Legend</h3>
            <div className="space-y-2">
              {Object.entries({
                'CS301': 'Data Structures',
                'CS302': 'Database Systems',
                'CS303': 'Software Engineering',
                'MATH201': 'Calculus II',
                'PHYS201': 'Physics',
                'ENG102': 'Technical Writing'
              }).map(([code, name]) => (
                <div key={code} className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded ${getClassColor(code).split(' ')[0]} ${getClassColor(code).split(' ')[1]}`}></div>
                  <span className="text-sm text-gray-700">{code} - {name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;