import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Upload, CreditCard, Calendar, MessageSquare, FileText } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Download Transcript',
      description: 'Get your official transcript',
      icon: Download,
      link: '/academic',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Submit Assignment',
      description: 'Upload your coursework',
      icon: Upload,
      link: '/academic',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Pay Fees',
      description: 'Make a payment',
      icon: CreditCard,
      link: '/financials',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'View Timetable',
      description: 'Check your schedule',
      icon: Calendar,
      link: '/timetable',
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      title: 'File Complaint',
      description: 'Submit a concern',
      icon: MessageSquare,
      link: '/complaints',
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      title: 'Exam Card',
      description: 'Download exam card',
      icon: FileText,
      link: '/academic',
      color: 'bg-indigo-600 hover:bg-indigo-700'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className={`${action.color} text-white p-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1`}
          >
            <action.icon className="h-6 w-6 mb-2" />
            <h4 className="font-semibold text-sm">{action.title}</h4>
            <p className="text-xs opacity-90 mt-1">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;