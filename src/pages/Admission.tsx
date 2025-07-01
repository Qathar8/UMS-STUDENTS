import React, { useState } from 'react';
import { Download, Upload, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import Modal from '../components/Modal';

const Admission: React.FC = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const admissionStatus = {
    applicationStatus: 'Approved',
    enrollmentStatus: 'Active',
    studentId: '2024001',
    admissionDate: 'January 15, 2024',
    program: 'Bachelor of Computer Science',
    semester: 'Spring 2024'
  };

  const documents = [
    { name: 'Admission Letter', status: 'available', date: '2024-01-15' },
    { name: 'Enrollment Certificate', status: 'available', date: '2024-01-20' },
    { name: 'Academic Records', status: 'pending', date: 'Processing' },
    { name: 'Medical Certificate', status: 'required', date: 'Not submitted' }
  ];

  const requirements = [
    { item: 'High School Transcript', status: 'completed', required: true },
    { item: 'Application Essay', status: 'completed', required: true },
    { item: 'Letters of Recommendation', status: 'completed', required: true },
    { item: 'Medical Examination', status: 'pending', required: true },
    { item: 'Photo Identification', status: 'completed', required: true }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
      case 'available':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-orange-600" />;
      case 'required':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admission Portal</h1>
        <p className="text-gray-600 mt-2">Manage your admission documents and track your enrollment status.</p>
      </div>

      {/* Admission Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Admission Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-900">Application Status</h3>
            <p className="text-green-700">{admissionStatus.applicationStatus}</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-900">Enrollment Status</h3>
            <p className="text-blue-700">{admissionStatus.enrollmentStatus}</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
            <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-900">Student ID</h3>
            <p className="text-purple-700">{admissionStatus.studentId}</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-600">Admission Date:</span>
            <span className="ml-2 text-gray-900">{admissionStatus.admissionDate}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Program:</span>
            <span className="ml-2 text-gray-900">{admissionStatus.program}</span>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all flex items-center space-x-2"
            >
              <Upload className="h-4 w-4" />
              <span>Upload Document</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(doc.status)}
                  <div>
                    <h4 className="font-medium text-gray-900">{doc.name}</h4>
                    <p className="text-sm text-gray-500">{doc.date}</p>
                  </div>
                </div>
                {doc.status === 'available' && (
                  <button className="text-purple-600 hover:text-purple-700 p-2">
                    <Download className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Requirements Checklist</h2>
          <div className="space-y-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                {getStatusIcon(req.status)}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{req.item}</h4>
                  {req.required && (
                    <span className="text-xs text-red-600">Required</span>
                  )}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  req.status === 'completed' ? 'bg-green-100 text-green-800' :
                  req.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <Modal isOpen={showUploadModal} onClose={() => setShowUploadModal(false)} title="Upload Document">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option>Select document type</option>
              <option>Medical Certificate</option>
              <option>Academic Records</option>
              <option>Photo Identification</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">File Upload</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PDF, DOC, or JPG (max 10MB)</p>
            </div>
          </div>
          <div className="flex space-x-3 pt-4">
            <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all">
              Upload Document
            </button>
            <button 
              onClick={() => setShowUploadModal(false)}
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

export default Admission;