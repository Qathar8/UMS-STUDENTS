import React from 'react';
import StatsCard from '../components/StatsCard';
import RecentActivity from '../components/RecentActivity';
import QuickActions from '../components/QuickActions';
import UpcomingEvents from '../components/UpcomingEvents';
import { BookOpen, CreditCard, Calendar, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Current Units',
      value: '6',
      change: '+2 from last semester',
      icon: BookOpen,
      color: 'purple'
    },
    {
      title: 'Fees Balance',
      value: '$2,450',
      change: 'Due: March 15',
      icon: CreditCard,
      color: 'blue'
    },
    {
      title: 'Attendance',
      value: '92%',
      change: '+5% this month',
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'GPA',
      value: '3.7',
      change: '+0.2 improvement',
      icon: Award,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your academic journey.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <RecentActivity />
          <QuickActions />
        </div>
        <div>
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;