import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Admission from './pages/Admission';
import Academic from './pages/Academic';
import Financials from './pages/Financials';
import Timetable from './pages/Timetable';
import Evaluations from './pages/Evaluations';
import Complaints from './pages/Complaints';
import FAQs from './pages/FAQs';
import VirtualAssistant from './pages/VirtualAssistant';
import Socials from './pages/Socials';

const AppContent: React.FC = () => {
  const { isAuthenticated, login, isLoading, error } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm onLogin={login} isLoading={isLoading} error={error} />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/evaluations" element={<Evaluations />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/assistant" element={<VirtualAssistant />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;