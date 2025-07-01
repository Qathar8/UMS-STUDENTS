import React, { useState } from 'react';
import { BookOpen, Download, Calendar, Award, FileText, GraduationCap } from 'lucide-react';

const Academic: React.FC = () => {
  const [activeTab, setActiveTab] = useState('curriculum');

  const currentUnits = [
    { code: 'CS301', name: 'Data Structures & Algorithms', credits: 3, instructor: 'Dr. Smith', schedule: 'MWF 10:00-11:00' },
    { code: 'MATH201', name: 'Calculus II', credits: 4, instructor: 'Prof. Johnson', schedule: 'TTh 2:00-3:30' },
    { code: 'ENG102', name: 'Technical Writing', credits: 2, instructor: 'Dr. Brown', schedule: 'MW 1:00-2:00' },
    { code: 'CS302', name: 'Database Systems', credits: 3, instructor: 'Dr. Wilson', schedule: 'TTh 10:00-11:30' },
    { code: 'PHYS201', name: 'Physics for Engineers', credits: 4, instructor: 'Prof. Davis', schedule: 'MWF 2:00-3:00' },
    { code: 'CS303', name: 'Software Engineering', credits: 3, instructor: 'Dr. Miller', schedule: 'MW 3:00-4:30' }
  ];

  const grades = [
    { semester: 'Fall 2023', gpa: 3.6, units: [
      { code: 'CS201', name: 'Programming Fundamentals', grade: 'A-', credits: 3 },
      { code: 'MATH101', name: 'Calculus I', grade: 'B+', credits: 4 },
      { code: 'ENG101', name: 'English Composition', grade: 'A', credits: 3 },
      { code: 'PHYS101', name: 'General Physics', grade: 'B', credits: 4 }
    ]},
    { semester: 'Spring 2023', gpa: 3.8, units: [
      { code: 'CS202', name: 'Object-Oriented Programming', grade: 'A', credits: 3 },
      { code: 'MATH102', name: 'Statistics', grade: 'A-', credits: 3 },
      { code: 'HIST101', name: 'World History', grade: 'B+', credits: 3 },
      { code: 'CS203', name: 'Computer Architecture', grade: 'A-', credits: 4 }
    ]}
  ];

  const examSchedule = [
    { code: 'CS301', name: 'Data Structures & Algorithms', date: '2024-03-15', time: '9:00 AM', venue: 'Hall A', duration: '3 hours' },
    { code: 'MATH201', name: 'Calculus II', date: '2024-03-17', time: '2:00 PM', venue: 'Hall B', duration: '2.5 hours' },
    { code: 'ENG102', name: 'Technical Writing', date: '2024-03-19', time: '10:00 AM', venue: 'Room 101', duration: '2 hours' },
    { code: 'CS302', name: 'Database Systems', date: '2024-03-21', time: '1:00 PM', venue: 'Lab 3', duration: '3 hours' }
  ];

  const tabs = [
    { id: 'curriculum', label: 'Units & Curriculum', icon: BookOpen },
    { id: 'examcard', label: 'Exam Card', icon: FileText },
    { id: 'results', label: 'Results & Transcript', icon: Award }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Academic Portal</h1>
        <p className="text-gray-600 mt-2">Manage your academic records, view grades, and download official documents.</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'curriculum' && (
        <div className="space-y-6">
          {/* Current Semester Units */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Semester Units (Spring 2024)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {currentUnits.map((unit, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{unit.code}</h3>
                    <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {unit.credits} Credits
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{unit.name}</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><span className="font-medium">Instructor:</span> {unit.instructor}</p>
                    <p><span className="font-medium">Schedule:</span> {unit.schedule}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Current GPA</h3>
              <p className="text-2xl font-bold text-purple-600">3.7</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Total Credits</h3>
              <p className="text-2xl font-bold text-blue-600">45</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Academic Standing</h3>
              <p className="text-lg font-bold text-green-600">Good Standing</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'examcard' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Examination Card - Spring 2024</h2>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-600">Student Name:</span>
                  <span className="ml-2 text-gray-900">John Doe</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Student ID:</span>
                  <span className="ml-2 text-gray-900">2024001</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Program:</span>
                  <span className="ml-2 text-gray-900">Bachelor of Computer Science</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Semester:</span>
                  <span className="ml-2 text-gray-900">Spring 2024</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Unit Code</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Unit Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Time</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Venue</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {examSchedule.map((exam, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{exam.code}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.name}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.date}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.time}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.venue}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'results' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Academic Transcript</h2>
              <div className="flex space-x-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Excel</span>
                </button>
              </div>
            </div>

            {grades.map((semester, semIndex) => (
              <div key={semIndex} className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{semester.semester}</h3>
                  <span className="text-lg font-bold text-purple-600">GPA: {semester.gpa}</span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Unit Code</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Unit Name</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Credits</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semester.units.map((unit, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium text-gray-900">{unit.code}</td>
                          <td className="py-3 px-4 text-gray-700">{unit.name}</td>
                          <td className="py-3 px-4 text-gray-700">{unit.credits}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                              unit.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                              unit.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {unit.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Academic;