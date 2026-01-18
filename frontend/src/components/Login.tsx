import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { GraduationCap } from 'lucide-react';
import { toast } from 'sonner';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Mock login - for demo purposes, accept any credentials
    // Check email pattern to determine role
    const isStudent = formData.email.toLowerCase().includes('student') || 
                     !formData.email.toLowerCase().includes('tutor');
    
    const mockUser = {
      id: 1,
      name: isStudent ? 'John Student' : 'Jane Tutor',
      email: formData.email,
      role: isStudent ? 'student' : 'tutor',
      ...(isStudent ? {} : {
        subjects: 'Mathematics, Physics',
        experience: '5 Years',
        qualification: 'B.Sc in Mathematics',
        area: 'Colombo'
      })
    };

    localStorage.setItem('currentUser', JSON.stringify(mockUser));
    toast.success('Login successful!');
    
    // Redirect based on role
    if (mockUser.role === 'student') {
      navigate('/student/dashboard');
    } else {
      navigate('/tutor/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 flex items-center">
      <div className="container mx-auto max-w-md">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <GraduationCap className="size-10 text-blue-600" />
          <span className="text-3xl font-semibold">TutorHub</span>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Login to your TutorHub account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Demo Credentials</span>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg space-y-1">
                  <div>Student: Use any email with "student" in it</div>
                  <div>Tutor: Use any email with "tutor" in it</div>
                  <div className="text-xs italic mt-2">Password: Any value</div>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  className="text-blue-600 hover:underline"
                >
                  Register here
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
