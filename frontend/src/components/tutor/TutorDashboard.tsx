import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TutorLayout from './TutorLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { FileText, User, TrendingUp, CheckCircle } from 'lucide-react';

export default function TutorDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/login');
    } else {
      const user = JSON.parse(currentUser);
      if (user.role !== 'tutor') {
        navigate('/login');
      }
    }
  }, [navigate]);

  return (
    <TutorLayout>
      <div className="space-y-6">
        <div>
          <h1>Tutor Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to your dashboard. Browse tuition opportunities and manage your profile.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Active Listings</CardDescription>
              <CardTitle className="text-3xl">120+</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Applications Sent</CardDescription>
              <CardTitle className="text-3xl">0</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Profile Views</CardDescription>
              <CardTitle className="text-3xl">45</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/tutor/tuition-feed')}>
            <CardHeader>
              <div className="size-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <FileText className="size-6 text-blue-600" />
              </div>
              <CardTitle>Browse Tuition Opportunities</CardTitle>
              <CardDescription>
                View student requirements and apply to teach
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                View Listings
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/tutor/profile')}>
            <CardHeader>
              <div className="size-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                <User className="size-6 text-indigo-600" />
              </div>
              <CardTitle>Manage Profile</CardTitle>
              <CardDescription>
                Update your qualifications and teaching details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="size-5" />
              Getting Started as a Tutor
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="size-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Profile Created</p>
                <p className="text-sm text-muted-foreground">Your profile is complete and visible to students</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-blue-600">2</span>
              </div>
              <div>
                <p className="font-medium">Browse Available Opportunities</p>
                <p className="text-sm text-muted-foreground">Check the tuition feed for student requirements matching your expertise</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-blue-600">3</span>
              </div>
              <div>
                <p className="font-medium">Apply to Teach</p>
                <p className="text-sm text-muted-foreground">Submit applications and wait for students to contact you</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TutorLayout>
  );
}
