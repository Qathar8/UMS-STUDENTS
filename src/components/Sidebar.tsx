import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  UserPlus,
  BookOpen,
  CreditCard,
  Calendar,
  ClipboardList,
  MessageSquare,
  HelpCircle,
  Bot,
  Users,
  X,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: UserPlus, label: 'Admission', path: '/admission' },
    { icon: BookOpen, label: 'Academic', path: '/academic' },
    { icon: CreditCard, label: 'Financials', path: '/financials' },
    { icon: Calendar, label: 'Timetable', path: '/timetable' },
    { icon: ClipboardList, label: 'Evaluations', path: '/evaluations' },
    { icon: MessageSquare, label: 'Complaints', path: '/complaints' },
    { icon: HelpCircle, label: 'FAQs', path: '/faqs' },
    { icon: Bot, label: 'Virtual Assistant', path: '/assistant' },
    { icon: Users, label: 'Socials', path: '/socials' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">UMS Portal</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`
                      flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                      ${isActive
                        ? 'bg-purple-100 text-purple-700 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-purple-600' : 'text-gray-400'}`} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 text-white">
            <h4 className="font-semibold text-sm">Need Help?</h4>
            <p className="text-xs opacity-90 mt-1">Contact our support team</p>
            <button className="mt-2 text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full hover:bg-opacity-30 transition-all">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;