import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentLayout from './StudentLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Users, Search, FileText, TrendingUp } from 'lucide-react';

export default function StudentDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/login');
    } else {
      const user = JSON.parse(currentUser);
      if (user.role !== 'student') {
        navigate('/login');
      }
    }
  }, [navigate]);

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1>Student Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to your dashboard. Start exploring tutors or post your requirements.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Available Tutors</CardDescription>
              <CardTitle className="text-3xl">500+</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Subjects Offered</CardDescription>
              <CardTitle className="text-3xl">50+</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Active Listings</CardDescription>
              <CardTitle className="text-3xl">120+</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/student/tutors')}>
            <CardHeader>
              <div className="size-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Users className="size-6 text-blue-600" />
              </div>
              <CardTitle>Browse Tutors</CardTitle>
              <CardDescription>
                View all available tutors and their profiles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                View Tutors
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/student/find')}>
            <CardHeader>
              <div className="size-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                <Search className="size-6 text-indigo-600" />
              </div>
              <CardTitle>Find Tutor</CardTitle>
              <CardDescription>
                Search for tutors by subject, area, and experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Search Now
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/student/post')}>
            <CardHeader>
              <div className="size-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <FileText className="size-6 text-purple-600" />
              </div>
              <CardTitle>Post Tuition</CardTitle>
              <CardDescription>
                Post your requirements and let tutors apply
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Post Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="size-5" />
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-blue-600">1</span>
              </div>
              <div>
                <p className="font-medium">Browse Available Tutors</p>
                <p className="text-sm text-muted-foreground">Check out our curated list of qualified tutors</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-blue-600">2</span>
              </div>
              <div>
                <p className="font-medium">Use Filters to Find the Perfect Match</p>
                <p className="text-sm text-muted-foreground">Filter by subject, location, and experience level</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-blue-600">3</span>
              </div>
              <div>
                <p className="font-medium">Post Your Requirements</p>
                <p className="text-sm text-muted-foreground">Let tutors come to you by posting what you need</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}
