import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import TuitionFeedPage from './TuitionFeedPage';
import MyProfilePage from './MyProfilePage';
import { FileText, User } from 'lucide-react';

export default function TutorDashboard() {
  const navItems = [
    {
      label: 'Tuition Feed',
      path: '/tutor/dashboard',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: 'My Profile',
      path: '/tutor/profile',
      icon: <User className="w-5 h-5" />,
    },
  ];

  return (
    <DashboardLayout navItems={navItems} title="Tutor Dashboard">
      <Routes>
        <Route path="dashboard" element={<TuitionFeedPage />} />
        <Route path="profile" element={<MyProfilePage />} />
        <Route path="/" element={<Navigate to="/tutor/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
}
