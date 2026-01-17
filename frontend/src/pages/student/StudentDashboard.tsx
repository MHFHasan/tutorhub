import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import TutorFeedPage from './TutorFeedPage';
import FindTutorPage from './FindTutorPage';
import PostTuitionPage from './PostTuitionPage';
import { Users, Search, FileText } from 'lucide-react';

export default function StudentDashboard() {
  const navItems = [
    {
      label: 'Tutor Feed',
      path: '/student/dashboard',
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: 'Find Tutor',
      path: '/student/find',
      icon: <Search className="w-5 h-5" />,
    },
    {
      label: 'Post Tuition',
      path: '/student/post',
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  return (
    <DashboardLayout navItems={navItems} title="Student Dashboard">
      <Routes>
        <Route path="dashboard" element={<TutorFeedPage />} />
        <Route path="find" element={<FindTutorPage />} />
        <Route path="post" element={<PostTuitionPage />} />
        <Route path="/" element={<Navigate to="/student/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
}
