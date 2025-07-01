import React, { useState } from 'react';
import { Star, MessageSquare, Send, Filter, Download } from 'lucide-react';
import Modal from '../components/Modal';

const Evaluations: React.FC = () => {
  const [showEvaluationModal, setShowEvaluationModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const courses = [
    {
      code: 'CS301',
      name: 'Data Structures & Algorithms',
      instructor: 'Dr. Smith',
      status: 'pending',
      deadline: '2024-03-20'
    },
    {
      code: 'MATH201',
      name: 'Calculus II',
      instructor: 'Prof. Johnson',
      status: 'completed',
      submittedOn: '2024-02-15',
      rating: 4.5
    },
    {
      code: 'ENG102',
      name: 'Technical Writing',
      instructor: 'Dr. Brown',
      status: 'completed',
      submittedOn: '2024-02-10',
      rating: 5.0
    },
    {
      code: 'CS302',
      name: 'Database Systems',
      instructor: 'Dr. Wilson',
      status: 'pending',
      deadline: '2024-03-22'
    }
  ];

  const evaluationQuestions = [
    'How would you rate the overall quality of instruction?',
    'How well did the instructor explain course concepts?',
    'How available was the instructor for help outside of class?',
    'How would you rate the course materials and resources?',
    'How would you rate the difficulty level of the course?',
    'How likely are you to recommend this course to other students?'
  ];

  const completedEvaluations = [
    {
      semester: 'Fall 2023',
      courses: [
        { code: 'CS201', name: 'Programming Fundamentals', instructor: 'Dr. Lee', rating: 4.2 },
        { code: 'MATH101', name: 'Calculus I', instructor: 'Prof. Taylor', rating: 3.8 },
        { code: 'ENG101', name: 'English Composition', instructor: 'Dr. White', rating: 4.5 },
        { code: 'PHYS101', name: 'General Physics', instructor: 'Prof. Green', rating: 4.0 }
      ]
    },
    {
      semester: 'Spring 2023',
      courses: [
        { code: 'CS202', name: 'Object-Oriented Programming', instructor: 'Dr. Black', rating: 4.7 },
        { code: 'MATH102', name: 'Statistics', instructor: 'Prof. Blue', rating: 4.1 },
        { code: 'HIST101', name: 'World History', instructor: 'Dr. Red', rating: 3.9 },
        { code: 'CS203', name: 'Computer Architecture', instructor: 'Prof. Gray', rating: 4.3 }
      ]
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleStartEvaluation = (courseCode: string) => {
    setSelectedCourse(courseCode);
    setShowEvaluationModal(true);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Course Evaluations</h1>
        <p className="text-gray-600 mt-2">Evaluate your courses and instructors to help improve the learning experience.</p>
      </div>

      {/* Current Semester Evaluations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Spring 2024 Evaluations</h2>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Download className="h-4 w-4" />
              <span>Export Results</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{course.code}</h3>
                  <p className="text-gray-700 mt-1">{course.name}</p>
                  <p className="text-sm text-gray-600 mt-1">Instructor: {course.instructor}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {course.status}
                </span>
              </div>

              {course.status === 'completed' ? (
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-600">Your Rating:</span>
                    <div className="flex">{renderStars(course.rating!)}</div>
                    <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">Submitted on {course.submittedOn}</p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-red-600 mb-3">Deadline: {course.deadline}</p>
                  <button
                    onClick={() => handleStartEvaluation(course.code)}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all"
                  >
                    Start Evaluation
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Evaluation History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Evaluation History</h2>
        
        <div className="space-y-8">
          {completedEvaluations.map((semester, semIndex) => (
            <div key={semIndex}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{semester.semester}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {semester.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900">{course.code}</h4>
                    <p className="text-sm text-gray-600 mt-1">{course.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{course.instructor}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex">{renderStars(course.rating)}</div>
                      <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluations Completed</h3>
          <p className="text-3xl font-bold text-purple-600">12</p>
          <p className="text-sm text-gray-600 mt-1">This academic year</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Rating Given</h3>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">{renderStars(4.2)}</div>
            <span className="text-lg font-bold text-yellow-600">4.2</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending Evaluations</h3>
          <p className="text-3xl font-bold text-orange-600">2</p>
          <p className="text-sm text-gray-600 mt-1">Due this week</p>
        </div>
      </div>

      {/* Evaluation Modal */}
      <Modal isOpen={showEvaluationModal} onClose={() => setShowEvaluationModal(false)} title="Course Evaluation">
        <div className="space-y-6">
          <div className="text-center pb-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{selectedCourse}</h3>
            <p className="text-sm text-gray-600">Please rate your experience with this course</p>
          </div>
          
          <div className="space-y-6">
            {evaluationQuestions.map((question, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {index + 1}. {question}
                </label>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      key={i}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments (Optional)
            </label>
            <textarea
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Share any additional feedback about this course..."
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center space-x-2">
              <Send className="h-4 w-4" />
              <span>Submit Evaluation</span>
            </button>
            <button 
              onClick={() => setShowEvaluationModal(false)}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Evaluations;