import React, { useState } from 'react';
import { Users, MessageCircle, Heart, Share2, Calendar, MapPin, Plus, Filter } from 'lucide-react';
import Modal from '../components/Modal';

const Socials: React.FC = () => {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');

  const posts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      program: 'Computer Science',
      time: '2 hours ago',
      content: 'Just finished my Data Structures project! The binary tree implementation was challenging but so rewarding. Anyone else working on similar algorithms?',
      likes: 12,
      comments: 5,
      shares: 2,
      image: null
    },
    {
      id: 2,
      author: 'Mike Chen',
      program: 'Engineering',
      time: '4 hours ago',
      content: 'Study group for Calculus II tomorrow at 3 PM in the library. We\'ll be covering integration techniques. All welcome!',
      likes: 8,
      comments: 3,
      shares: 4,
      image: null
    },
    {
      id: 3,
      author: 'Emma Davis',
      program: 'Business Administration',
      time: '1 day ago',
      content: 'Great presentation by Prof. Williams on entrepreneurship today! Key takeaway: "Innovation happens when preparation meets opportunity." 💡',
      likes: 25,
      comments: 8,
      shares: 6,
      image: null
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Tech Career Fair 2024',
      date: '2024-03-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      attendees: 156,
      description: 'Meet with top tech companies and explore internship and job opportunities.',
      organizer: 'Career Services'
    },
    {
      id: 2,
      title: 'Spring Festival',
      date: '2024-03-25',
      time: '6:00 PM - 10:00 PM',
      location: 'Campus Grounds',
      attendees: 89,
      description: 'Annual spring celebration with food, music, and cultural performances.',
      organizer: 'Student Council'
    },
    {
      id: 3,
      title: 'Research Symposium',
      date: '2024-03-30',
      time: '9:00 AM - 5:00 PM',
      location: 'Science Building',
      attendees: 67,
      description: 'Undergraduate research presentations across all departments.',
      organizer: 'Research Office'
    }
  ];

  const clubs = [
    {
      id: 1,
      name: 'Computer Science Society',
      members: 234,
      description: 'Coding competitions, tech talks, and networking events',
      category: 'Academic'
    },
    {
      id: 2,
      name: 'Drama Club',
      members: 89,
      description: 'Theater productions and acting workshops',
      category: 'Arts'
    },
    {
      id: 3,
      name: 'Environmental Club',
      members: 156,
      description: 'Sustainability projects and environmental awareness',
      category: 'Service'
    },
    {
      id: 4,
      name: 'Basketball Team',
      members: 45,
      description: 'Competitive basketball and training sessions',
      category: 'Sports'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Library Extended Hours During Finals',
      content: 'The library will be open 24/7 starting March 15th through March 22nd.',
      date: '2024-03-10',
      priority: 'high'
    },
    {
      id: 2,
      title: 'New Parking Regulations',
      content: 'Updated parking permits required starting April 1st. Visit the security office for details.',
      date: '2024-03-08',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Guest Lecture: AI in Healthcare',
      content: 'Dr. Patricia Lee will speak about AI applications in healthcare on March 18th.',
      date: '2024-03-05',
      priority: 'low'
    }
  ];

  const tabs = [
    { id: 'feed', label: 'Social Feed', icon: MessageCircle },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'clubs', label: 'Clubs & Organizations', icon: Users },
    { id: 'announcements', label: 'Announcements', icon: Share2 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Social Hub</h1>
        <p className="text-gray-600 mt-2">Connect with fellow students, join events, and stay updated with campus life.</p>
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
      {activeTab === 'feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">JD</span>
                </div>
                <button
                  onClick={() => setShowCreatePostModal(true)}
                  className="flex-1 text-left p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-all"
                >
                  What's on your mind, John?
                </button>
                <button
                  onClick={() => setShowCreatePostModal(true)}
                  className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-all"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{post.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{post.author}</h4>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{post.program}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{post.time}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{post.content}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <button className="flex items-center space-x-2 hover:text-red-600 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-green-600 transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span>{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {['#FinalExams', '#SpringBreak', '#TechCareerFair', '#ResearchSymposium'].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-purple-600 font-medium">{topic}</span>
                    <span className="text-sm text-gray-500">{Math.floor(Math.random() * 50) + 10} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {events.slice(0, 3).map((event) => (
                  <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{event.date} • {event.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filter Events</span>
              </button>
            </div>
            <button
              onClick={() => setShowCreateEventModal(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Create Event</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">by {event.organizer}</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">
                    Join Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'clubs' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubs.map((club) => (
              <div key={club.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{club.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{club.description}</p>
                  </div>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {club.category}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{club.members} members</span>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">
                    Join Club
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'announcements' && (
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      announcement.priority === 'high' ? 'bg-red-100 text-red-700' :
                      announcement.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {announcement.priority} priority
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{announcement.content}</p>
                  <p className="text-sm text-gray-500">{announcement.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Post Modal */}
      <Modal isOpen={showCreatePostModal} onClose={() => setShowCreatePostModal(false)} title="Create Post">
        <div className="space-y-4">
          <textarea
            rows={4}
            placeholder="What's on your mind?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-gray-800">📷</button>
              <button className="text-gray-600 hover:text-gray-800">📎</button>
              <button className="text-gray-600 hover:text-gray-800">😊</button>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowCreatePostModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                Post
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Create Event Modal */}
      <Modal isOpen={showCreateEventModal} onClose={() => setShowCreateEventModal(false)} title="Create Event">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Event title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            rows={3}
            placeholder="Event description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="time"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex space-x-3 pt-4">
            <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all">
              Create Event
            </button>
            <button 
              onClick={() => setShowCreateEventModal(false)}
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

export default Socials;