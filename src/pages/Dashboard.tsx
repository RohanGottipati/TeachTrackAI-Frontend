
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import TeacherDashboard from '../components/TeacherDashboard';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <TeacherDashboard />;
};

export default Dashboard;
