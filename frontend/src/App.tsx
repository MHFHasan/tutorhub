import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import StudentDashboard from './components/student/StudentDashboard';
import TutorFeed from './components/student/TutorFeed';
import FindTutor from './components/student/FindTutor';
import PostTuition from './components/student/PostTuition';
import TutorDashboard from './components/tutor/TutorDashboard';
import TuitionFeed from './components/tutor/TuitionFeed';
import TutorProfile from './components/tutor/TutorProfile';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/tutors" element={<TutorFeed />} />
          <Route path="/student/find" element={<FindTutor />} />
          <Route path="/student/post" element={<PostTuition />} />

          {/* Tutor Routes */}
          <Route path="/tutor/dashboard" element={<TutorDashboard />} />
          <Route path="/tutor/tuition-feed" element={<TuitionFeed />} />
          <Route path="/tutor/profile" element={<TutorProfile />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
