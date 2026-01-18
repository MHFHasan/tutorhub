import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { BookOpen, Search, FileText, GraduationCap, Users, Clock } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="size-8 text-blue-600" />
            <span className="text-2xl font-semibold">TutorHub</span>
          </div>
          <Button onClick={() => navigate('/login')} variant="outline">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            Find the Right Tutor, Fast.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Connect students with qualified tutors. Post tuition requirements or find teaching opportunities all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white min-w-[200px]"
              onClick={() => navigate('/register?role=student')}
            >
              Register as Student
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 min-w-[200px]"
              onClick={() => navigate('/register?role=tutor')}
            >
              Register as Tutor
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="size-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Search className="size-6 text-blue-600" />
                </div>
                <CardTitle>Browse Tutors</CardTitle>
                <CardDescription>
                  Search and filter through qualified tutors by subject, experience, and location.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="size-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <FileText className="size-6 text-indigo-600" />
                </div>
                <CardTitle>Post Tuition Requirements</CardTitle>
                <CardDescription>
                  Students can post their tuition needs and let qualified tutors apply to teach them.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="size-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <BookOpen className="size-6 text-purple-600" />
                </div>
                <CardTitle>Apply for Tuition</CardTitle>
                <CardDescription>
                  Tutors can browse posted requirements and apply to teach students in their area of expertise.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="size-12 mx-auto mb-4 opacity-90" />
              <div className="text-4xl mb-2">500+</div>
              <div className="text-blue-100">Active Tutors</div>
            </div>
            <div>
              <BookOpen className="size-12 mx-auto mb-4 opacity-90" />
              <div className="text-4xl mb-2">50+</div>
              <div className="text-blue-100">Subjects Covered</div>
            </div>
            <div>
              <Clock className="size-12 mx-auto mb-4 opacity-90" />
              <div className="text-4xl mb-2">24/7</div>
              <div className="text-blue-100">Platform Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-gray-50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2026 TutorHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
