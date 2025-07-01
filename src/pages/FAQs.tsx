import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, Book, CreditCard, Calendar, Settings } from 'lucide-react';

const FAQs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories', icon: HelpCircle },
    { id: 'academic', name: 'Academic', icon: Book },
    { id: 'financial', name: 'Financial', icon: CreditCard },
    { id: 'enrollment', name: 'Enrollment', icon: Calendar },
    { id: 'technical', name: 'Technical', icon: Settings }
  ];

  const faqs = [
    {
      id: 1,
      category: 'academic',
      question: 'How do I register for courses?',
      answer: 'You can register for courses through the Academic portal during the designated registration period. Navigate to Academic > Units/Curriculum and select "Register for Units". Make sure you meet all prerequisites before registering.'
    },
    {
      id: 2,
      category: 'academic',
      question: 'When are exam results published?',
      answer: 'Exam results are typically published within 2-3 weeks after the examination date. You will receive an email notification when results are available, and you can view them in the Academic > Results & Transcript section.'
    },
    {
      id: 3,
      category: 'financial',
      question: 'How can I pay my fees?',
      answer: 'You can pay fees online through the Financials portal using credit/debit cards, bank transfers, or mobile money. You can also pay in person at the finance office during business hours.'
    },
    {
      id: 4,
      category: 'financial',
      question: 'What scholarships are available?',
      answer: 'We offer merit-based scholarships, need-based grants, and special scholarships for various categories. Check the Financials section for available scholarships and application procedures.'
    },
    {
      id: 5,
      category: 'enrollment',
      question: 'When does the next semester registration open?',
      answer: 'Registration for the next semester typically opens 4-6 weeks before the semester begins. You will receive email notifications and see announcements on your dashboard.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'I forgot my password. How can I reset it?',
      answer: 'Click on "Forgot Password" on the login page and enter your email address. You will receive a password reset link via email. If you don\'t receive the email, contact IT support.'
    },
    {
      id: 7,
      category: 'academic',
      question: 'How do I download my transcript?',
      answer: 'Go to Academic > Results & Transcript and click on "Download PDF" or "Download Excel" to get your official transcript. For certified copies, visit the registrar\'s office.'
    },
    {
      id: 8,
      category: 'technical',
      question: 'The portal is loading slowly. What should I do?',
      answer: 'Try clearing your browser cache and cookies. If the problem persists, try using a different browser or check your internet connection. Contact IT support if issues continue.'
    },
    {
      id: 9,
      category: 'financial',
      question: 'Can I get a refund for dropped courses?',
      answer: 'Refund policies vary depending on when you drop the course. Full refunds are available if dropped within the first week, partial refunds up to week 3, and no refunds after week 4.'
    },
    {
      id: 10,
      category: 'enrollment',
      question: 'How do I change my personal information?',
      answer: 'You can update your contact information through your profile settings. For changes to legal name or other official documents, visit the registrar\'s office with required documentation.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqs.slice(0, 6);

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2">Find answers to common questions about using the student portal.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popular FAQs */}
      {selectedCategory === 'all' && !searchQuery && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Popular Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularFAQs.map((faq) => (
              <button
                key={faq.id}
                onClick={() => toggleFAQ(faq.id)}
                className="text-left p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FAQ List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {searchQuery ? `Search Results (${filteredFAQs.length})` : 
           selectedCategory !== 'all' ? `${categories.find(c => c.id === selectedCategory)?.name} Questions` : 
           'All Questions'}
        </h2>
        
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                      <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                        faq.category === 'academic' ? 'bg-purple-100 text-purple-700' :
                        faq.category === 'financial' ? 'bg-green-100 text-green-700' :
                        faq.category === 'enrollment' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {categories.find(c => c.id === faq.category)?.name}
                      </span>
                    </div>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="text-center">
          <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="mb-6 opacity-90">Can't find what you're looking for? Our support team is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-lg hover:bg-opacity-30 transition-all">
              Contact Support
            </button>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all">
              Submit a Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;