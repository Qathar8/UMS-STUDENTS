import React, { useState } from 'react';
import { CreditCard, Download, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Modal from '../components/Modal';

const Financials: React.FC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const feeStructure = [
    { item: 'Tuition Fee', amount: 5000, paid: 5000, due: 0, status: 'paid' },
    { item: 'Library Fee', amount: 200, paid: 200, due: 0, status: 'paid' },
    { item: 'Lab Fee', amount: 500, paid: 300, due: 200, status: 'partial' },
    { item: 'Sports Fee', amount: 150, paid: 0, due: 150, status: 'pending' },
    { item: 'Student Activity Fee', amount: 100, paid: 0, due: 100, status: 'pending' }
  ];

  const paymentHistory = [
    { date: '2024-01-15', description: 'Tuition Fee - Spring 2024', amount: 5000, method: 'Bank Transfer', status: 'completed' },
    { date: '2024-01-20', description: 'Library Fee', amount: 200, method: 'Credit Card', status: 'completed' },
    { date: '2024-02-01', description: 'Lab Fee (Partial)', amount: 300, method: 'Online Banking', status: 'completed' },
    { date: '2024-02-15', description: 'Late Fee', amount: 50, method: 'Cash', status: 'completed' }
  ];

  const scholarships = [
    { name: 'Merit Scholarship', amount: 1000, semester: 'Spring 2024', status: 'active' },
    { name: 'Need-based Grant', amount: 500, semester: 'Spring 2024', status: 'active' }
  ];

  const totalFees = feeStructure.reduce((sum, fee) => sum + fee.amount, 0);
  const totalPaid = feeStructure.reduce((sum, fee) => sum + fee.paid, 0);
  const totalDue = feeStructure.reduce((sum, fee) => sum + fee.due, 0);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'partial':
        return <Clock className="h-5 w-5 text-orange-600" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Financial Portal</h1>
        <p className="text-gray-600 mt-2">Manage your fees, payments, and financial aid information.</p>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Fees</p>
              <p className="text-2xl font-bold text-gray-900">${totalFees.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Amount Paid</p>
              <p className="text-2xl font-bold text-green-600">${totalPaid.toLocaleString()}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Amount Due</p>
              <p className="text-2xl font-bold text-red-600">${totalDue.toLocaleString()}</p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Due Date</p>
              <p className="text-lg font-bold text-orange-600">Mar 15, 2024</p>
            </div>
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Fee Structure - Spring 2024</h2>
          <button
            onClick={() => setShowPaymentModal(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all flex items-center space-x-2"
          >
            <CreditCard className="h-4 w-4" />
            <span>Make Payment</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Fee Item</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Total Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Paid</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Due</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.map((fee, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{fee.item}</td>
                  <td className="py-3 px-4 text-gray-700">${fee.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-green-600">${fee.paid.toLocaleString()}</td>
                  <td className="py-3 px-4 text-red-600">${fee.due.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(fee.status)}
                      <span className={`text-sm capitalize ${
                        fee.status === 'paid' ? 'text-green-600' :
                        fee.status === 'partial' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>
                        {fee.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment History and Scholarships */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Payment History</h2>
            <button className="text-purple-600 hover:text-purple-700 flex items-center space-x-1">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {paymentHistory.map((payment, index) => (
              <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(payment.status)}
                  <div>
                    <h4 className="font-medium text-gray-900">{payment.description}</h4>
                    <p className="text-sm text-gray-500">{payment.date} • {payment.method}</p>
                  </div>
                </div>
                <span className="font-semibold text-gray-900">${payment.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Scholarships & Aid</h2>
          <div className="space-y-4">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-green-900">{scholarship.name}</h4>
                    <p className="text-sm text-green-700">{scholarship.semester}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-green-900">${scholarship.amount.toLocaleString()}</span>
                    <span className="block text-xs text-green-600 capitalize">{scholarship.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Total Financial Aid:</span>
              <span className="text-xl font-bold text-green-600">
                ${scholarships.reduce((sum, s) => sum + s.amount, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <Modal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} title="Make Payment">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Fee Item</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option>Select fee to pay</option>
              {feeStructure.filter(fee => fee.due > 0).map((fee, index) => (
                <option key={index} value={fee.item}>
                  {fee.item} - ${fee.due.toLocaleString()}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option>Credit/Debit Card</option>
              <option>Bank Transfer</option>
              <option>Online Banking</option>
              <option>Mobile Money</option>
            </select>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all">
              Proceed to Payment
            </button>
            <button 
              onClick={() => setShowPaymentModal(false)}
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

export default Financials;