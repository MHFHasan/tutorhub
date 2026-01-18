import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { GraduationCap, UserCircle, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') || 'student';
  
  const [role, setRole] = useState<'student' | 'tutor'>(initialRole as 'student' | 'tutor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // Tutor specific fields
    subjects: '',
    experience: '',
    qualification: '',
    area: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (role === 'tutor' && (!formData.subjects || !formData.experience || !formData.qualification || !formData.area)) {
      toast.error('Please fill in all tutor fields');
      return;
    }

    // Mock registration
    const user = {
      id: Date.now(),
      ...formData,
      role
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    toast.success('Registration successful!');
    
    // Redirect based on role
    if (role === 'student') {
      navigate('/student/dashboard');
    } else {
      navigate('/tutor/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <GraduationCap className="size-10 text-blue-600" />
          <span className="text-3xl font-semibold">TutorHub</span>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Join TutorHub to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label>I am a</Label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      role === 'student' 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <UserCircle className={`size-8 ${role === 'student' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span className={role === 'student' ? 'font-semibold' : ''}>Student</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('tutor')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                      role === 'tutor' 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <BookOpen className={`size-8 ${role === 'tutor' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span className={role === 'tutor' ? 'font-semibold' : ''}>Tutor</span>
                  </button>
                </div>
              </div>

              {/* Basic Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
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
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Tutor Extended Fields */}
              {role === 'tutor' && (
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-blue-600">Tutor Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subjects">Subjects *</Label>
                    <Input
                      id="subjects"
                      placeholder="e.g., Mathematics, Physics, Chemistry"
                      value={formData.subjects}
                      onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience *</Label>
                    <Input
                      id="experience"
                      placeholder="e.g., 5 Years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualification">Qualification *</Label>
                    <Input
                      id="qualification"
                      placeholder="e.g., B.Sc in Mathematics"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area *</Label>
                    <Input
                      id="area"
                      placeholder="e.g., Colombo"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      required
                    />
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Create Account
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="text-blue-600 hover:underline"
                >
                  Login here
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
