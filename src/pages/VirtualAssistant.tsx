import React, { useState } from 'react';
import { Bot, Send, User, Sparkles, MessageSquare, Clock } from 'lucide-react';

const VirtualAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m EduBot, your virtual assistant. How can I help you today?',
      timestamp: new Date(Date.now() - 5 * 60000)
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    'How do I check my grades?',
    'When are fees due?',
    'How to register for courses?',
    'Download my transcript',
    'View my timetable',
    'Check library hours'
  ];

  const commonTopics = [
    { icon: '📚', title: 'Academic Records', description: 'Grades, transcripts, course registration' },
    { icon: '💰', title: 'Financial Information', description: 'Fees, payments, scholarships' },
    { icon: '📅', title: 'Schedules & Events', description: 'Timetables, exam dates, deadlines' },
    { icon: '🎓', title: 'Graduation Requirements', description: 'Credits needed, program requirements' },
    { icon: '🏢', title: 'Campus Services', description: 'Library, cafeteria, facilities' },
    { icon: '🔧', title: 'Technical Support', description: 'Portal issues, password reset' }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('grade') || message.includes('result')) {
      return 'You can check your grades by navigating to Academic > Results & Transcript. Your current GPA is 3.7 and recent grades are available there.';
    } else if (message.includes('fee') || message.includes('payment')) {
      return 'Your fee balance is $450. The payment deadline is March 15, 2024. You can make payments through the Financials portal using various payment methods.';
    } else if (message.includes('register') || message.includes('course')) {
      return 'Course registration for next semester opens on March 1, 2024. You can register through Academic > Units/Curriculum. Make sure to check prerequisites for each course.';
    } else if (message.includes('transcript')) {
      return 'You can download your transcript from Academic > Results & Transcript. Both PDF and Excel formats are available. For official certified copies, visit the registrar\'s office.';
    } else if (message.includes('timetable') || message.includes('schedule')) {
      return 'Your class schedule is available in the Timetable section. You have 6 units this semester with classes Monday through Friday. Next class is CS301 at 10:00 AM.';
    } else if (message.includes('library')) {
      return 'Library hours are Monday-Friday: 8 AM - 10 PM, Saturday-Sunday: 10 AM - 6 PM. You can access online resources 24/7 through the library portal.';
    } else if (message.includes('help') || message.includes('support')) {
      return 'I can help you with academic records, financial information, schedules, and general portal navigation. You can also contact human support through the Complaints portal if needed.';
    } else {
      return 'I understand you\'re asking about "' + userMessage + '". Could you please be more specific? I can help with grades, fees, course registration, schedules, and general portal navigation.';
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Virtual Assistant</h1>
        <p className="text-gray-600 mt-2">Get instant help with your questions using our AI-powered assistant.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">EduBot</h3>
                  <p className="text-sm text-white opacity-90">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' ? 'bg-purple-600' : 'bg-gray-200'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4  text-gray-600" />
                      )}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.type === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-purple-200' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your question here..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Questions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions</h3>
            <div className="space-y-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Assistant Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Assistant Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Questions Answered</span>
                <span className="font-semibold text-gray-900">247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average Response Time</span>
                <span className="font-semibold text-gray-900">2.3s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Satisfaction Rate</span>
                <span className="font-semibold text-green-600">94%</span>
              </div>
            </div>
          </div>

          {/* Help Topics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Topics</h3>
            <div className="space-y-3">
              {commonTopics.slice(0, 4).map((topic, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg">{topic.icon}</span>
                    <h4 className="font-medium text-gray-900 text-sm">{topic.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Common Topics Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">What can I help you with?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commonTopics.map((topic, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(`Tell me about ${topic.title.toLowerCase()}`)}
              className="text-left p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-purple-300 transition-all"
            >
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{topic.icon}</span>
                <h3 className="font-semibold text-gray-900">{topic.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;