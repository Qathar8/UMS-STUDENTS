import React from 'react';
import { Clock, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'assignment',
      title: 'Data Structures Assignment submitted',
      time: '2 hours ago',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'grade',
      title: 'Grade posted for Calculus II Midterm',
      time: '1 day ago',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Fee payment due in 5 days',
      time: '2 days ago',
      icon: AlertCircle,
      color: 'text-orange-600'
    },
    {
      id: 4,
      type: 'schedule',
      title: 'Timetable updated for next semester',
      time: '3 days ago',
      icon: Clock,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-all">
            <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;